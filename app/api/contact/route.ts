import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const entry = rateLimitMap.get(ip);
    if (!entry || now > entry.resetAt) {
        rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 });
        return false;
    }
    if (entry.count >= 5) return true;
    entry.count++;
    return false;
}

export async function POST(req: Request) {
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    if (isRateLimited(ip)) {
        return NextResponse.json({ success: false, error: "Too many requests" }, { status: 429 });
    }

    try {
        const { name, email, message, service } = await req.json();

        if (
            typeof name !== "string" || name.trim().length === 0 || name.length > 100 ||
            typeof email !== "string" || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
            typeof message !== "string" || message.trim().length === 0 || message.length > 2000 ||
            typeof service !== "string" || service.length > 100
        ) {
            return NextResponse.json({ success: false, error: "Invalid input" }, { status: 400 });
        }

        await transporter.sendMail({
            from: `"Wish Wash Website" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_USER,
            subject: `Neue Anfrage (${service})`,
            text: `Name: ${name}\nE-Mail: ${email}\nDienstleistung: ${service}\nNachricht:\n${message}`,
        });

        return NextResponse.json({ success: true });

    } catch (err: unknown) {
        console.error("### MAIL ERROR ###", err);
        return NextResponse.json({ success: false, error: "Failed to send message" }, { status: 500 });
    }
}
