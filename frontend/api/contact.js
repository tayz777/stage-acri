// API route Vercel pour l'envoi d'email avec Resend
const { Resend } = require('resend');

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

    // Configuration Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Configuration de l'email
    const emailData = {
      from: 'onboarding@resend.dev',
      to: 'moreau_sacha@yahoo.fr',
      subject: `Nouveau message de contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Nouveau message de contact
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Informations du contact</h3>
            <p><strong>Nom:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Entreprise:</strong> ${company || 'Non spécifiée'}</p>
            <p><strong>Sujet:</strong> ${subject}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #666; font-size: 14px;">
            <p>Ce message a été envoyé depuis votre portfolio de stage.</p>
            <p>Vous pouvez répondre directement à: ${email}</p>
          </div>
        </div>
      `,
      replyTo: email
    };

    // Envoi de l'email avec Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const info = await resend.emails.send(emailData);
        console.log('✅ Email envoyé avec succès:', info.data?.id);
        return res.status(200).json({
          message: 'Email envoyé avec succès',
          status: 'success',
          messageId: info.data?.id
        });
      } catch (emailError) {
        console.error('❌ Erreur lors de l\'envoi de l\'email:', emailError);
        return res.status(500).json({
          error: 'Erreur lors de l\'envoi de l\'email',
          details: emailError.message
        });
      }
    } else {
      console.log('⚠️ Variable d\'environnement RESEND_API_KEY non configurée');
      return res.status(500).json({
        error: 'Configuration email manquante',
        details: 'RESEND_API_KEY non configuré'
      });
    }

  } catch (error) {
    console.error('Erreur lors du traitement:', error);
    return res.status(500).json({ 
      error: 'Erreur lors de l\'envoi de l\'email' 
    });
  }
}
