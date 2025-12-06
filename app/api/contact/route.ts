import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message, service } = await req.json();

    // Build transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // Only true for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Try connecting first (important!)
    await transporter.verify();

    const mailOptions = {
      from: `"Wish Wash Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `Neue Anfrage (${service})`,
      text: `
Name: ${name}
E-Mail: ${email}
Dienstleistung: ${service}
Nachricht:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("### MAIL ERROR ###");
    console.error(err);  // <-- WICHTIG: Jetzt bekommt Netlify die volle Fehlermeldung

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
