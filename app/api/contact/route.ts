import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const data = await req.json();

        const { name, email, service, message } = data;

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Bad request" }, { status: 400 });
        }

        // SMTP Transporter für Hostpoint
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false, // <-- für Port 587 immer false
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });




        // Inhalt der Email
        const mailOptions = {
            from: `"Wish Wash Kontaktformular" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_USER, // sendet an dein Unternehmen
            subject: `Neue Anfrage von ${name} (${service || "Kein Service ausgewählt"})`,
            text: `
Name: ${name}
E-Mail: ${email}
Dienstleistung: ${service || "-"}
Nachricht:
${message}
      `,
            html: `
        <h2>Neue Anfrage über das Kontaktformular</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>E-Mail:</b> ${email}</p>
        <p><b>Dienstleistung:</b> ${service || "-"}</p>
        <p><b>Nachricht:</b><br>${message.replace(/\n/g, "<br>")}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Email error:", error);
        return NextResponse.json(
            { error: "Email sending failed" },
            { status: 500 }
        );
    }
}
