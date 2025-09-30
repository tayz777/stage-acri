from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv

# Charger les variables d'environnement
load_dotenv()

app = Flask(__name__)

# Configuration CORS pour permettre les requêtes depuis le frontend React
CORS(app, origins=[
    "http://localhost:3000",
    "https://stage-acri-2025.vercel.app"
])

@app.route("/", methods=["GET"])
def root():
    return jsonify({"message": "Bienvenue sur l'API Portfolio Stage"})

@app.route("/health", methods=["GET"])
def health_check():
    return jsonify({"status": "healthy", "environment": "development"})

@app.route("/api/contact", methods=["POST", "OPTIONS"])
def send_contact_email():
    # Gestion des requêtes OPTIONS pour CORS
    if request.method == "OPTIONS":
        return jsonify({"message": "OK"}), 200
    try:
        # Récupération des données du formulaire
        data = request.get_json()
        
        if not data:
            return jsonify({"error": "Aucune donnée reçue"}), 400
        
        # Validation des champs requis
        required_fields = ['firstName', 'lastName', 'email', 'subject', 'message']
        for field in required_fields:
            if field not in data or not data[field]:
                return jsonify({"error": f"Le champ {field} est requis"}), 400
        
        # Log des données reçues
        print(f"📧 Nouveau message de contact reçu:")
        print(f"   Nom: {data['firstName']} {data['lastName']}")
        print(f"   Email: {data['email']}")
        print(f"   Entreprise: {data.get('company', 'Non spécifiée')}")
        print(f"   Sujet: {data['subject']}")
        print(f"   Message: {data['message']}")
        
        # Configuration SMTP
        smtp_server = os.getenv("SMTP_SERVER", "smtp.mail.yahoo.com")
        smtp_port = int(os.getenv("SMTP_PORT", "587"))
        smtp_username = os.getenv("SMTP_USERNAME")
        smtp_password = os.getenv("SMTP_PASSWORD")
        contact_email = os.getenv("CONTACT_EMAIL", "moreau_sacha@yahoo.fr")
        
        print(f"🔧 DEBUG - Configuration SMTP:")
        print(f"   Server: {smtp_server}")
        print(f"   Port: {smtp_port}")
        print(f"   Username: {smtp_username}")
        print(f"   Password: {'***' if smtp_password else 'MANQUANT'}")
        print(f"   Contact Email: {contact_email}")
        
        if not smtp_username or not smtp_password:
            print("⚠️ Configuration SMTP manquante - envoi simulé")
            return jsonify({"message": "Email envoyé avec succès (simulé)", "status": "success"}), 200
        
        # Création du message email
        msg = MIMEMultipart()
        msg['From'] = smtp_username
        msg['To'] = contact_email
        msg['Subject'] = f"Nouveau message de contact: {data['subject']}"
        
        # Corps du message
        body = f"""
Nouveau message de contact depuis le portfolio:

Nom: {data['firstName']} {data['lastName']}
Email: {data['email']}
Entreprise: {data.get('company', 'Non spécifiée')}
Sujet: {data['subject']}

Message:
{data['message']}

---
Envoyé depuis le portfolio de Sacha MOREAU
        """
        
        msg.attach(MIMEText(body, 'plain'))
        
        # Envoi de l'email
        print("🚀 Tentative de connexion SMTP...")
        server = smtplib.SMTP(smtp_server, smtp_port)
        print("📡 Connexion établie, activation TLS...")
        server.starttls()
        print("🔐 TLS activé, tentative de login...")
        server.login(smtp_username, smtp_password)
        print("✅ Login réussi, envoi du message...")
        text = msg.as_string()
        server.sendmail(smtp_username, contact_email, text)
        server.quit()
        
        print("✅ Email envoyé avec succès !")
        return jsonify({"message": "Email envoyé avec succès", "status": "success"}), 200
        
    except Exception as e:
        print(f"❌ Erreur lors de l'envoi: {e}")
        return jsonify({"error": "Erreur lors de l'envoi de l'email"}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
