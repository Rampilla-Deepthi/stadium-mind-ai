from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

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

    message = request.message.lower()

    if "gate" in message:
        response = "Gate B is 120 meters east of your current location."

    elif "food" in message:
        response = "Food Plaza A is near Section 102."

    elif "crowd" in message:
        response = "Crowd density is moderate. Gate C is less crowded."

    elif "match" in message:
        response = "Argentina vs Brazil starts at 7:00 PM."

    else:
        response = "I can help with navigation, food, crowd status, and match information."

    return {
        "response": response
    }