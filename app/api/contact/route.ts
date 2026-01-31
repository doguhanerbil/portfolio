import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 3; // Max 3 requests per minute per IP

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record) {
        rateLimitMap.set(ip, { count: 1, timestamp: now });
        return false;
    }

    // Reset if window has passed
    if (now - record.timestamp > RATE_LIMIT_WINDOW) {
        rateLimitMap.set(ip, { count: 1, timestamp: now });
        return false;
    }

    // Increment and check limit
    record.count++;
    if (record.count > RATE_LIMIT_MAX) {
        return true;
    }

    return false;
}

// Clean up old entries periodically
setInterval(() => {
    const now = Date.now();
    rateLimitMap.forEach((value, key) => {
        if (now - value.timestamp > RATE_LIMIT_WINDOW * 2) {
            rateLimitMap.delete(key);
        }
    });
}, RATE_LIMIT_WINDOW);

// Input sanitization
function sanitize(input: string): string {
    return input
        .trim()
        .replace(/[<>]/g, "") // Remove < and > to prevent HTML injection
        .slice(0, 5000); // Limit length
}

// Validation
function validateInput(body: {
    name?: string;
    email?: string;
    message?: string;
    honeypot?: string;
}): { valid: boolean; error?: string } {
    // Honeypot check - if filled, it's a bot
    if (body.honeypot && body.honeypot.trim().length > 0) {
        return { valid: false, error: "Invalid submission" };
    }

    if (!body.name || body.name.trim().length === 0) {
        return { valid: false, error: "Name is required" };
    }

    if (!body.email || body.email.trim().length === 0) {
        return { valid: false, error: "Email is required" };
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
        return { valid: false, error: "Invalid email format" };
    }

    if (!body.message || body.message.trim().length === 0) {
        return { valid: false, error: "Message is required" };
    }

    if (body.message.trim().length < 10) {
        return { valid: false, error: "Message must be at least 10 characters" };
    }

    return { valid: true };
}

export async function POST(request: NextRequest) {
    try {
        // Get IP for rate limiting
        const ip =
            request.headers.get("x-forwarded-for")?.split(",")[0] ||
            request.headers.get("x-real-ip") ||
            "unknown";

        // Check rate limit
        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: "Too many requests. Please try again later." },
                { status: 429 }
            );
        }

        const body = await request.json();

        // Validate input
        const validation = validateInput(body);
        if (!validation.valid) {
            return NextResponse.json({ error: validation.error }, { status: 400 });
        }

        // Sanitize inputs
        const name = sanitize(body.name);
        const email = sanitize(body.email);
        const message = sanitize(body.message);

        // Check for required environment variables
        const smtpHost = process.env.SMTP_HOST;
        const smtpPort = parseInt(process.env.SMTP_PORT || "587");
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;
        const toEmail = process.env.CONTACT_TO_EMAIL || "doguhanerbil@gmail.com";
        const fromEmail = process.env.CONTACT_FROM_EMAIL || smtpUser;

        if (!smtpHost || !smtpUser || !smtpPass) {
            console.error("SMTP configuration missing");
            return NextResponse.json(
                { error: "Email service not configured. Please try again later." },
                { status: 500 }
            );
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        });

        // Email content
        const mailOptions = {
            from: `"Portfolio Contact Form" <${fromEmail}>`,
            to: toEmail,
            replyTo: email,
            subject: `New Contact Form Message from ${name}`,
            text: `
Name: ${name}
Email: ${email}

Message:
${message}

---
Sent from your portfolio contact form
      `.trim(),
            html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #D97706 0%, #B45309 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 16px; }
    .label { font-weight: 600; color: #666; font-size: 12px; text-transform: uppercase; }
    .value { margin-top: 4px; }
    .message { background: white; padding: 16px; border-radius: 4px; border-left: 4px solid #D97706; }
    .footer { margin-top: 20px; font-size: 12px; color: #999; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">New Contact Form Message</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">From</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="message">${message.replace(/\n/g, "<br>")}</div>
      </div>
      <div class="footer">
        Sent from your portfolio contact form
      </div>
    </div>
  </div>
</body>
</html>
      `.trim(),
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Failed to send message. Please try again later." },
            { status: 500 }
        );
    }
}
