// API route Vercel pour l'envoi d'email
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

    // Pour l'instant, on simule l'envoi d'email
    // En production, vous pourriez utiliser un service comme SendGrid, Resend, ou Nodemailer
    
    // Simulation d'un délai d'envoi
    await new Promise(resolve => setTimeout(resolve, 1000));

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
