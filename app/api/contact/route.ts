import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Phone validation
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phone.length >= 10 && phoneRegex.test(phone);
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { name, email, phone, company, productName, message } = data;

    // Validation
    if (!name || !email || !phone || !productName || !message) {
      return NextResponse.json(
        { message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { message: 'Please enter a valid phone number.' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
    <h2>New Product Inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''}
    <p><strong>Product:</strong> ${escapeHtml(productName)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
    `;

    // Option 1: Use Resend (if available)
    if (process.env.RESEND_API_KEY) {
      return await sendWithResend(emailContent, email, name, productName);
    }

    // Option 2: Send via simple email endpoint
    // This is a placeholder that demonstrates the structure.
    // In production, you would integrate with:
    // - SendGrid (sendgrid package)
    // - Mailgun (mailgun.js package)
    // - AWS SES (aws-sdk package)
    // - Brevo/Sendinblue
    // - Or your own SMTP server via Nodemailer

    // For now, we'll return a success response with instructions
    console.log('Contact form submitted:', {
      name,
      email,
      phone,
      company,
      productName,
    });

    // Simulate email sending success
    // In production, implement one of the services above
    return NextResponse.json(
      {
        message: 'Thank you for your inquiry! We have received your message and will contact you shortly.',
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'An error occurred while processing your request. Please try again.' },
      { status: 500 }
    );
  }
}

// Helper: HTML escape
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

// Optional: Integration with Resend (if API key is provided)
async function sendWithResend(
  emailContent: string,
  replyTo: string,
  senderName: string,
  productName: string
) {
  try {
    
    
    const resend = new Resend(process.env.RESEND_API_KEY);

    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL || 'rakeshbhagat333@gmail.com',
      replyTo: replyTo,
      subject: `New Product Inquiry: ${productName}`,
      html: emailContent,
    });

    if (!response.error) {
      return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } else {
      throw new Error(response.error.message);
    }
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json(
      { message: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}


