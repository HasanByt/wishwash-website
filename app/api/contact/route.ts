import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message, service } = await req.json();

    // Hostpoint-konformer Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,              // WICHTIG: Hostpoint + Netlify = 587
      secure: false,          // NIEMALS true setzen bei 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Hostpoint benötigt dies
      },
    });

    // Optional: prüft, ob SMTP Verbindung möglich ist
    await transporter.verify();

    const mailOptions = {
      from: `"Wish Wash Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // an die eigene Adresse senden
      subject: `Neue Anfrage (${service})`,
      text: `
Name: ${name}
E-Mail: ${email}
Dienstleistung: ${service}
Nachricht:
${message}
      `,
    };

    // E-Mail senden
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });

  } catch (err: any) {
    console.error("### MAIL ERROR ###");
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        error: err.message ?? "Unknown error",
        stack: err.stack ?? null,
      },
      { status: 500 }
    );
  }
}
