// Email credentials configuration
// For production, use environment variables
// Create a .env.local file with these variables

export interface EmailCredentials {
  fromEmail: string;
  toEmail: string;
  apiKey?: string;
  brevoUser: string;
  brevoMasterKey: string;
  service: "brevo" | "sendgrid" | "nodemailer" | "mailgun";
}

export function getEmailCredentials(): EmailCredentials {
  // Read from environment variables
  const fromEmail = process.env.BREVO_FROM || process.env.EMAIL_FROM || "noreply@techhind.com";
  const toEmail = process.env.BREVO_TO || process.env.EMAIL_TO || "contact@techhind.com";
  const service = (process.env.EMAIL_SERVICE as EmailCredentials["service"]) || "brevo";
  const apiKey = process.env.BREVO_API_KEY || process.env.EMAIL_API_KEY || "";
  const brevoUser = process.env.BREVO_USER || "";
  const brevoMasterKey = process.env.BREVO_MASTER_KEY || "";

  return {
    fromEmail,
    toEmail,
    apiKey,
    brevoUser,
    brevoMasterKey,
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
      brevoUser: "",
      brevoMasterKey: "",
      service: "brevo",
    };
  }
}
*/

