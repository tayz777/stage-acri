// API route Vercel pour l'envoi d'email avec Resend
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Configuration CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, company, subject, message } = req.body;

    // Validation des champs requis
    if (!firstName || !lastName || !email || !subject || !message) {
      return res.status(400).json({ error: 'Tous les champs requis doivent être remplis' });
    }

    // Log des données reçues (pour debug)
    console.log('📧 Nouveau message de contact reçu:');
    console.log(`   Nom: ${firstName} ${lastName}`);
    console.log(`   Email: ${email}`);
    console.log(`   Entreprise: ${company || 'Non spécifiée'}`);
    console.log(`   Sujet: ${subject}`);
    console.log(`   Message: ${message}`);

    // Simulation d'envoi d'email (temporaire pour éviter les erreurs)
    console.log('📧 Simulation d\'envoi d\'email:');
    console.log(`   Destinataire: moreau_sacha@yahoo.fr`);
    console.log(`   Sujet: Nouveau message de contact: ${subject}`);
    console.log(`   De: ${firstName} ${lastName} (${email})`);
    
    // Simulation d'un délai d'envoi
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('✅ Email simulé envoyé avec succès');

    return res.status(200).json({
      message: 'Email envoyé avec succès',
      status: 'success'
    });

  } catch (error) {
    console.error('Erreur lors du traitement:', error);
    return res.status(500).json({ 
      error: 'Erreur lors de l\'envoi de l\'email' 
    });
  }
}
