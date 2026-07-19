from dotenv import load_dotenv
from google import genai
import os
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
# Gemini integration active
app = FastAPI()
load_dotenv(dotenv_path=".env")
print("KEY LENGTH:", len(os.getenv("GEMINI_API_KEY", "")))
print("KEY PREFIX:", os.getenv("GEMINI_API_KEY", "")[:5])
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

@app.get("/")
def home():
    return {"message": "StadiumMind AI Backend Running:enter /docs"}

@app.post("/chat")
def chat(request: ChatRequest):

    try:
        response = client.models.generate_content(
            model="gemini-3.5-flash",
            contents=f"""
            You are StadiumMind AI.

            User Question:
            {request.message}
            """
        )

        return {
            "response": response.text
        }

    except Exception as e:
        error = str(e)

        if "429" in error:
            return {
                "response": "Gemini is temporarily rate-limited. Please wait a minute and try again."
            }

        return {
            "response": f"Error: {error}"
        }
@app.get("/crowd-status")
def crowd_status():
    return {
        "north_stand": "94%",
        "south_stand": "82%",
        "east_vip": "65%",
        "west_press": "88%"
    }


@app.get("/alerts")
def alerts():
    return {
        "alert": "High congestion detected at Gate B",
        "severity": "High"
    }


@app.get("/navigation")
def navigation():
    return {
        "route": "Gate B → Gate D → Section 105",
        "time": "3 mins",
        "recommendation": "Use Gate D to avoid crowd congestion."
    }