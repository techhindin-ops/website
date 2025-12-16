import { NextRequest, NextResponse } from "next/server";
import { getEmailCredentials } from "@/app/config/emailCredentials";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Get email credentials
    const credentials = getEmailCredentials();

    // Email content
    const emailContent = {
      from: credentials.fromEmail,
      to: credentials.toEmail,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      text: `
        New Contact Form Submission
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    // Send email based on service type
    if (credentials.service === "sendgrid" && credentials.apiKey) {
      // SendGrid API
      const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${credentials.apiKey}`,
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: credentials.toEmail }],
            },
          ],
          from: { email: credentials.fromEmail },
          subject: emailContent.subject,
          content: [
            {
              type: "text/html",
              value: emailContent.html,
            },
          ],
        }),
      });

      if (response.ok) {
        return NextResponse.json(
          { success: true, message: "Email sent successfully! We'll get back to you soon." },
          { status: 200 }
        );
      }
    }

    // Fallback: Log email (for development or if service not configured)
    console.log("=== Contact Form Submission ===");
    console.log("From:", email);
    console.log("Name:", name);
    console.log("Message:", message);
    console.log("Email would be sent to:", credentials.toEmail);
    console.log("==============================");

    // Return success even if email service is not configured
    // In production, you should configure a proper email service
    return NextResponse.json(
      { 
        success: true, 
        message: "Thank you for your message! We'll get back to you soon.",
        note: credentials.apiKey ? "" : "Note: Email service not fully configured. Please configure EMAIL_API_KEY in .env.local"
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}

