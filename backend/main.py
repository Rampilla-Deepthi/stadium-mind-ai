from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
# Gemini integration active
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

    msg = request.message.lower()

    if "food" in msg:
        response = "Nearest food court is near Gate B."

    elif "gate" in msg or "navigation" in msg:
        response = "Use the West Corridor for the fastest route."

    elif "crowd" in msg:
        response = "Current crowd density is moderate."

    elif "match" in msg:
        response = "Next match starts at 7:00 PM."

    else:
        response = "Welcome to StadiumMind AI. Ask about navigation, food, crowd status, or matches."

    return {"response": response}
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