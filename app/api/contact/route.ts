// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  subject: string;
  message: string;
  type: string;
}

// Create reusable transporter for Hostinger
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      ciphers: 'SSLv3'
    }
  });
};

// Email template for admin notification
const getAdminEmailTemplate = (data: ContactFormData) => {
  const typeLabels = {
    demo: 'Demande de démonstration',
    support: 'Support technique',
    sales: 'Information commerciale',
    partnership: 'Partenariat',
    other: 'Autre'
  };

  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Nouveau message de contact - ScolApp</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
            .container { padding: 20px; }
            .header { 
                background: linear-gradient(135deg, #2563eb, #7c3aed); 
                color: white; 
                padding: 30px; 
                text-align: center; 
                border-radius: 10px 10px 0 0; 
            }
            .content { 
                background: #f8fafc; 
                padding: 30px; 
                border-radius: 0 0 10px 10px;
                border: 1px solid #e2e8f0;
            }
            .info-row { 
                margin-bottom: 15px; 
                border-bottom: 1px solid #e2e8f0; 
                padding-bottom: 10px; 
            }
            .label { 
                font-weight: bold; 
                color: #4a5568; 
                display: inline-block;
                min-width: 150px;
            }
            .value { 
                color: #2d3748;
            }
            .message-box { 
                background: white; 
                padding: 20px; 
                border-radius: 8px; 
                border-left: 4px solid #2563eb; 
                margin-top: 20px; 
            }
            .priority { 
                background: #fef2f2; 
                border: 1px solid #fecaca; 
                color: #991b1b; 
                padding: 10px; 
                border-radius: 6px; 
                margin-top: 20px;
                text-align: center;
            }
            .logo-container { 
                display: flex; 
                align-items: center; 
                justify-content: center; 
                gap: 15px; 
                margin-bottom: 15px; 
            }
            .logo-img { 
                height: 50px; 
                width: auto; 
            }
            .logo-text { 
                font-size: 28px; 
                font-weight: bold; 
                margin: 0; 
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="logo-container">
                    <img src="/tete_logo_1.png" alt="ScolApp Logo" class="logo-img" />
                    <div class="logo-text">ScolApp</div>
                </div>
                <p>Nouveau message de contact reçu</p>
            </div>
            <div class="content">
                <div class="info-row">
                    <span class="label">Type de demande:</span>
                    <span class="value">${typeLabels[data.type as keyof typeof typeLabels] || data.type}</span>
                </div>
                <div class="info-row">
                    <span class="label">Nom:</span>
                    <span class="value">${data.name}</span>
                </div>
                <div class="info-row">
                    <span class="label">Email:</span>
                    <span class="value">${data.email}</span>
                </div>
                <div class="info-row">
                    <span class="label">Téléphone:</span>
                    <span class="value">${data.phone || 'Non fourni'}</span>
                </div>
                <div class="info-row">
                    <span class="label">Établissement:</span>
                    <span class="value">${data.organization || 'Non fourni'}</span>
                </div>
                <div class="info-row">
                    <span class="label">Sujet:</span>
                    <span class="value">${data.subject}</span>
                </div>
                
                <div class="message-box">
                    <h3 style="margin-top: 0; color: #2d3748;">Message:</h3>
                    <p style="margin-bottom: 0;">${data.message.replace(/\n/g, '<br>')}</p>
                </div>

                ${data.type === 'demo' ? '<div class="priority"><strong>⚡ Demande de démonstration</strong><br>Priorité élevée - Réponse rapide requise</div>' : ''}
                
                <div style="margin-top: 20px; padding: 15px; background: #e6fffa; border-radius: 6px; border-left: 4px solid #38b2ac;">
                    <strong>📞 Action requise:</strong> Contacter le client dans les 24h
                </div>
            </div>
        </div>
    </body>
    </html>
  `;
};

// Email template for user confirmation
const getUserConfirmationTemplate = (data: ContactFormData) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Confirmation - ScolApp</title>
        <style>
            body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; 
                line-height: 1.6; 
                color: #333; 
                max-width: 600px; 
                margin: 0 auto; 
                background-color: #f8f9fa;
                padding: 20px;
            }
            .container { 
                background: white; 
                border-radius: 12px; 
                padding: 40px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            }
            .logo-header { 
                display: flex; 
                align-items: center; 
                gap: 15px; 
                margin-bottom: 30px; 
            }
            .logo-img { 
                height: 60px; 
                width: auto; 
            }
            .logo-text { 
                font-size: 32px; 
                font-weight: bold; 
                color: #2563eb; 
                margin: 0; 
            }
            .greeting {
                font-size: 24px;
                font-weight: 600;
                color: #2d3748;
                margin-bottom: 20px;
                line-height: 1.3;
            }
            .message {
                color: #4a5568;
                font-size: 16px;
                margin-bottom: 24px;
                line-height: 1.5;
            }
            .cta-section {
                margin: 32px 0;
            }
            .cta-text {
                color: #4a5568;
                font-size: 16px;
                margin-bottom: 16px;
            }
            .help-text {
                color: #4a5568;
                font-size: 16px;
                margin-bottom: 8px;
            }
            .contact-link {
                color: #3182ce;
                text-decoration: none;
                font-weight: 500;
            }
            .contact-link:hover {
                text-decoration: underline;
            }
            .signature {
                margin-top: 40px;
                color: #2d3748;
                font-weight: 600;
            }
            .footer {
                margin-top: 48px;
                padding-top: 24px;
                border-top: 1px solid #e2e8f0;
                color: #718096;
                font-size: 14px;
            }
            .footer-links {
                display: flex;
                gap: 16px;
                margin-bottom: 16px;
            }
            .footer-link {
                color: #3182ce;
                text-decoration: none;
            }
            .footer-link:hover {
                text-decoration: underline;
            }
            .year {
                color: #718096;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="logo-header">
                <img src="/tete_logo_1.png" alt="ScolApp Logo" class="logo-img" />
                <div class="logo-text">ScolApp</div>
            </div>
            
            <div class="greeting">Bonjour ${data.name},</div>
            
            <div class="message">
                Bienvenue chez ScolApp ! Nous avons bien reçu votre message et nous vous remercions pour votre intérêt.
            </div>
            
            <div class="cta-section">
                <div class="cta-text">
                    Notre équipe va examiner votre demande et vous contactera dans les 24-48 heures pour vous proposer une solution adaptée à vos besoins !
                </div>
            </div>
            
            <div class="help-text">
                Si vous avez des questions urgentes, n'hésitez pas à nous contacter à 
                <a href="mailto:contact@scolapp.com" class="contact-link">contact@scolapp.com</a>.
            </div>
            
            <div class="signature">Équipe ScolApp</div>
            
            <div class="footer">
                <div class="footer-links">
                    <span>Vous avez des questions ou besoin d'aide ? Consultez notre</span>
                    <a href="https://scolapp.com/" class="footer-link">Site</a>, 
                    <span>ou envoyez-nous un email à</span>
                    <a href="mailto:contact@scolapp.com" class="footer-link">contact@scolapp.com</a>
                </div>
                
                <div style="margin-top: 16px;" class="year">
                    ScolApp 2025
                </div>
            </div>
        </div>
    </body>
    </html>
  `;
};

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      );
    }

    const transporter = createTransporter();

    // Test connection
    try {
      await transporter.verify();
    } catch (error) {
      console.error('SMTP connection failed:', error);
      return NextResponse.json(
        { error: 'Erreur de configuration email. Veuillez réessayer plus tard.' },
        { status: 500 }
      );
    }

    // Email to admin (contact@scolapp.com)
    const adminMailOptions = {
      from: process.env.SMTP_FROM || '"ScolApp" <contact@scolapp.com>',
      to: 'contact@scolapp.com',
      subject: `[ScolApp Contact] ${data.subject}`,
      html: getAdminEmailTemplate(data),
      replyTo: data.email,
    };

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.SMTP_FROM || '"ScolApp" <contact@scolapp.com>',
      to: data.email,
      subject: 'Confirmation de réception - ScolApp',
      html: getUserConfirmationTemplate(data),
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json(
      { 
        message: 'Message envoyé avec succès',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}