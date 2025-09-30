from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
# from pydantic_core import ValidationError  # Pas nécessaire pour ce cas
from typing import Optional
import uvicorn
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from config import Config

app = FastAPI(
    title=Config.PROJECT_NAME,
    description="API pour le portfolio et rapport de stage",
    version="1.0.0"
)

# Configuration CORS pour permettre les requêtes depuis le frontend React
app.add_middleware(
    CORSMiddleware,
    allow_origins=Config.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Montage des fichiers statiques
app.mount("/static", StaticFiles(directory="static"), name="static")

# Modèle pour le formulaire de contact
class ContactForm(BaseModel):
    firstName: str
    lastName: str
    email: str
    company: Optional[str] = ""
    subject: str
    message: str

@app.get("/")
async def root():
    return {"message": "Bienvenue sur l'API Portfolio Stage"}

@app.get("/health")
async def health_check():
    return {"status": "healthy", "environment": Config.ENVIRONMENT}

@app.get("/api/articles")
async def get_articles():
    # Simulation de données d'articles
    articles = [
        {
            "id": "integration",
            "title": "Intégration en entreprise",
            "excerpt": "Retour sur mon immersion chez ACRI-ST et sur la façon dont j’ai pris mes marques au sein de l’équipe.",
            "date": "2024-01-15",
            "category": "Expérience"
        },
        {
            "id": "difficultes",
            "title": "Difficultés rencontrées et solutions",
            "excerpt": "Un aperçu des problèmes techniques et organisationnels...",
            "date": "2024-02-20",
            "category": "Technique"
        }
    ]
    return {"articles": articles}

@app.post("/api/contact")
async def send_contact_email(contact_form: ContactForm):
    try:
        # Pour l'instant, on simule l'envoi d'email et on log les données
        print(f"📧 Nouveau message de contact reçu:")
        print(f"   Nom: {contact_form.firstName} {contact_form.lastName}")
        print(f"   Email: {contact_form.email}")
        print(f"   Entreprise: {contact_form.company}")
        print(f"   Sujet: {contact_form.subject}")
        print(f"   Message: {contact_form.message}")
        
        # Simulation d'envoi réussi
        return {"message": "Email envoyé avec succès", "status": "success"}
        
    except Exception as e:
        print(f"Erreur lors du traitement: {e}")
        raise HTTPException(status_code=500, detail="Erreur lors de l'envoi de l'email")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000) 