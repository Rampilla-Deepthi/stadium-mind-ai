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
client = genai.Client(api_key="AQ.Ab8RN6JjOvF6og4lDq_dptvbq1P2Eek6_dC2QmfqqiEyF7TZ4A")

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