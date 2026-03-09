import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Type definition for the request body
interface HireRequestBody {
  name: string;
  email: string;
  message: string;
}

// Type definition for validation errors
interface ValidationError {
  field: string;
  message: string;
}

// Create transporter at module level for reuse across warm function executions
let transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter {
  if (transporter) {
    return transporter;
  }

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!emailUser || !emailPass) {
    throw new Error('Email configuration is missing. Please set EMAIL_USER and EMAIL_PASS environment variables.');
  }

  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
    pool: true,
    maxConnections: 1,
    rateLimit: 5,
  });

  return transporter;
}

/**
 * Validates the incoming request body
 */
function validateRequestBody(body: unknown): ValidationError[] {
  const errors: ValidationError[] = [];
  
  if (!body || typeof body !== 'object') {
    errors.push({ field: 'body', message: 'Request body is required' });
    return errors;
  }

  const { name, email, message } = body as Record<string, unknown>;

  // Validate name
  if (!name || typeof name !== 'string') {
    errors.push({ field: 'name', message: 'Name is required' });
  } else if (name.trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  } else if (name.trim().length > 100) {
    errors.push({ field: 'name', message: 'Name must be less than 100 characters' });
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== 'string') {
    errors.push({ field: 'email', message: 'Email is required' });
  } else if (!emailRegex.test(email)) {
    errors.push({ field: 'email', message: 'Invalid email format' });
  }

  // Validate message
  if (!message || typeof message !== 'string') {
    errors.push({ field: 'message', message: 'Message is required' });
  } else if (message.trim().length < 10) {
    errors.push({ field: 'message', message: 'Message must be at least 10 characters' });
  } else if (message.trim().length > 2000) {
    errors.push({ field: 'message', message: 'Message must be less than 2000 characters' });
  }

  return errors;
}

/**
 * Sanitize input to prevent injection attacks
 */
function sanitizeInput(input: string): string {
  return input
    .replace(/[\x00-\x1F\x7F]/g, '')
    .trim();
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Only allow POST method
    if (request.method !== 'POST') {
      return NextResponse.json(
        { error: 'Method not allowed. Use POST request.' },
        { status: 405 }
      );
    }

    // Parse and validate request body
    let body: HireRequestBody;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON body' },
        { status: 400 }
      );
    }

    // Validate inputs
    const validationErrors = validateRequestBody(body);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', details: validationErrors },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(body.name);
    const sanitizedEmail = sanitizeInput(body.email);
    const sanitizedMessage = sanitizeInput(body.message);

    // Get reusable transporter and send email
    const mailTransporter = getTransporter();
    
    await mailTransporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: sanitizedEmail,
      subject: `Portfolio Message: ${sanitizedName}`,
      text: `From: ${sanitizedName} (${sanitizedEmail})\n\n${sanitizedMessage}`,
      html: `
        <h2>New Portfolio Message</h2>
        <p><strong>From:</strong> ${sanitizedName} (${sanitizedEmail})</p>
        <hr />
        <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    // Log error for debugging
    console.error('Email sending error:', error);

    // Return generic error message to avoid leaking implementation details
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET(): Promise<NextResponse> {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST request.' },
    { status: 405 }
  );
}
