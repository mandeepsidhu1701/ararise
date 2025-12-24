const nodemailer = require("nodemailer");

const allowedOrigin = process.env.ALLOWED_ORIGIN || "https://ararise.com";

function response(statusCode, bodyObj) {
  return {
    statusCode,
    headers: {
      "Access-Control-Allow-Origin": allowedOrigin,
      "Access-Control-Allow-Headers": "content-type",
      "Access-Control-Allow-Methods": "OPTIONS,POST",
      "Vary": "Origin",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyObj),
  };
}

exports.handler = async (event) => {
  const method = event?.requestContext?.http?.method || event?.httpMethod;

  // Preflight
  if (method === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin": allowedOrigin,
        "Access-Control-Allow-Headers": "content-type",
        "Access-Control-Allow-Methods": "OPTIONS,POST",
        "Vary": "Origin",
      },
      body: "",
    };
  }

  try {
    const body = event?.body ? JSON.parse(event.body) : {};

    // Honeypot anti-spam
    if (body.website && String(body.website).trim() !== "") {
      return response(200, { ok: true });
    }

    const firstName = String(body.firstName || "").trim();
    const lastName = String(body.lastName || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const country = String(body.country || "").trim();
    const destination = String(body.destination || "").trim();
    const level = String(body.level || "").trim();
    const message = String(body.message || "").trim();

    if (!firstName || !lastName || !email || !phone || !country || !destination || !level) {
      return response(400, { ok: false, error: "Missing required fields" });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || "587"),
      secure: false, // STARTTLS on 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // use Zoho App Password
      },
    });

    const subject = `AraRise: New consultation request — ${firstName} ${lastName}`;

    const text = `
New consultation request

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Country: ${country}
Preferred destination: ${destination}
Study level: ${level}

Goals / Notes:
${message || "(no message)"}
`.trim();

    await transporter.sendMail({
      from: `AraRise Website <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject,
      text,
    });

    return response(200, { ok: true });
  } catch (err) {
    console.error("Lambda error:", err);
    return response(500, { ok: false, error: "Server error" });
  }
};
