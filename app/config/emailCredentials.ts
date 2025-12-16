// Email credentials configuration
// For production, use environment variables
// Create a .env.local file with these variables

export interface EmailCredentials {
  fromEmail: string;
  toEmail: string;
  apiKey: string;
  service: "sendgrid" | "nodemailer" | "mailgun";
}

export function getEmailCredentials(): EmailCredentials {
  // Read from environment variables
  const fromEmail = process.env.EMAIL_FROM || "noreply@techhind.com";
  const toEmail = process.env.EMAIL_TO || "contact@techhind.com";
  const apiKey = process.env.EMAIL_API_KEY || "";
  const service = (process.env.EMAIL_SERVICE as EmailCredentials["service"]) || "sendgrid";

  return {
    fromEmail,
    toEmail,
    apiKey,
    service,
  };
}

// Alternative: If you prefer a credentials file (not recommended for production)
// Uncomment and use this approach for development only
/*
import fs from "fs";
import path from "path";

export function getEmailCredentialsFromFile(): EmailCredentials {
  try {
    const credentialsPath = path.join(process.cwd(), "credentials.json");
    const credentials = JSON.parse(fs.readFileSync(credentialsPath, "utf8"));
    return credentials.email;
  } catch (error) {
    console.error("Error reading credentials file:", error);
    return {
      fromEmail: "noreply@techhind.com",
      toEmail: "contact@techhind.com",
      apiKey: "",
      service: "sendgrid",
    };
  }
}
*/

