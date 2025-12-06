import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, message, service } = await req.json();

        // Hostpoint-konformer Transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,       // MUSS asmtp.mail.hostpoint.ch sein
            port: 587,                         // STARTTLS → perfekt für Netlify
            secure: false,                     // niemals true bei 587
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            tls: {
                rejectUnauthorized: false,
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
