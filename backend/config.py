# Configuration de l'application
import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    # Base de données
    DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./portfolio.db")
    
    # Sécurité
    SECRET_KEY = os.getenv("SECRET_KEY", "your-secret-key-here-change-in-production")
    
    # Environnement
    DEBUG = os.getenv("DEBUG", "True").lower() == "true"
    ENVIRONMENT = os.getenv("ENVIRONMENT", "development")
    
    # CORS
    ALLOWED_ORIGINS = [
        "http://localhost:3000",
        "http://127.0.0.1:3000"
    ]
    
    # API
    API_V1_STR = "/api/v1"
    PROJECT_NAME = "Portfolio Stage API"
    
    # Upload
    UPLOAD_DIR = "static/uploads"
    MAX_FILE_SIZE = 5 * 1024 * 1024  # 5MB
    
    # Email Configuration
    SMTP_SERVER = os.getenv("SMTP_SERVER", "smtp.gmail.com")
    SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
    SMTP_USERNAME = os.getenv("SMTP_USERNAME", "votre.email@gmail.com")
    SMTP_PASSWORD = os.getenv("SMTP_PASSWORD", "votre_mot_de_passe")
    CONTACT_EMAIL = os.getenv("CONTACT_EMAIL", "moreau_sacha@yahoo.fr") 