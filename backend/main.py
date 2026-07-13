from dotenv import load_dotenv
import google.generativeai as genai
import os
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
load_dotenv(dotenv_path=".env")
print("API KEY:", os.getenv("GEMINI_API_KEY"))
genai.configure(api_key="AQ.Ab8RN6JjOvF6og4lDq_dptvbq1P2Eek6_dC2QmfqqiEyF7TZ4A")
model = genai.GenerativeModel("gemini-3.5-flash")

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
        response = model.generate_content(
            f"""
            You are StadiumMind AI.

            User Question:
            {request.message}
            """
        )

        print("GEMINI RESPONSE:", response.text)

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