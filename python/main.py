# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pymongo import MongoClient
import base64
import datetime
import os

app = FastAPI()

# CORS Middleware to allow cross-origin requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

ATLAS_URL="mongodb+srv://{login}:{pw}@clusterdan.lpuyh34.mongodb.net/test".format(login= base64.b64decode(os.getenv("MONGODB_LOG")).decode("utf-8") , pw = base64.b64decode(os.getenv("MONGODB_PW")).decode("utf-8"))

# MongoDB connection
@app.on_event("startup")
def startup_db_client():
    app.mongodb_client = MongoClient(ATLAS_URL)
    app.database = app.mongodb_client["wedding_db"] 
    print("Connected to the MongoDB database!")
    
collection = "attendees"


# Data model for the registration form
class RegistrationForm(BaseModel):
    name: str
    prenom : str
    adultsEvening: int
    childrenEvening : int
    adultsCivil : int
    civilService : bool
    religiousService : bool
    eveningParty : bool
    message : str


# Route to handle registration form submission
@app.post("/register")
def register_attendance(form: RegistrationForm):
    # Store the form data in MongoDB
    attendee_data = {
        "nom": form.name,
        "prenom" : form.prenom, 
        "adultes_soiré": form.adultsEvening,
        "enfants_soiré": form.childrenEvening,
        "mairie": form.civilService,
        "personnes_mairie" : form.adultsCivil,
        "synagogue": form.religiousService,
        "reception": form.eveningParty,
        "message": form.message
    }
    app.database[collection].insert_one(attendee_data)
    
    return {"message": "Votre réponse a été enregistrée"}


# Run the FastAPI server
if __name__ == "__main__":
    import uvicorn
    
    uvicorn.run("main:app", host="0.0.0.0", port=3000)



