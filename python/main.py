# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pymongo import MongoClient

app = FastAPI()

# CORS Middleware to allow cross-origin requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection
client = MongoClient("mongodb://localhost:27017")
db = client["wedding_db"]
collection = db["attendees"]


# Data model for the registration form
class RegistrationForm(BaseModel):
    name: str
    adults: int
    children: int
    civil_service: bool
    religious_service: bool
    evening_party: bool


# Route to handle registration form submission
@app.post("/register")
def register_attendance(form: RegistrationForm):
    # Store the form data in MongoDB
    attendee_data = {
        "name": form.name,
        "adults": form.adults,
        "children": form.children,
        "civil_service": form.civil_service,
        "religious_service": form.religious_service,
        "evening_party": form.evening_party,
    }
    collection.insert_one(attendee_data)
    
    return {"message": "Attendance registered successfully"}


# Run the FastAPI server
if __name__ == "__main__":
    import uvicorn
    
    uvicorn.run("main:app", host="0.0.0.0", port=3000)
