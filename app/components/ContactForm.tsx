"use client";

import { useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState("");

    async function handleSubmit(e: any) {
        e.preventDefault();
        setStatus("loading");

        const form = new FormData(e.target);

        const payload = {
            name: form.get("name"),
            email: form.get("email"),
            service: form.get("service"),
            message: form.get("message"),
        };

        const res = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(payload),
        });

        if (res.ok) {
            setStatus("success");
            e.target.reset();
        } else {
            setStatus("error");
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl p-8 rounded-xl max-w-xl mx-auto space-y-6 border border-gray-200"
        >
            {/* Name */}
            <div>
                <label className="block text-[#0A1228] mb-1 font-semibold">Name</label>
                <input
                    type="text"
                    name="name"
                    required
                    className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300"
                />
            </div>

            {/* Email */}
            <div>
                <label className="block text-[#0A1228] mb-1 font-semibold">E-Mail</label>
                <input
                    type="email"
                    name="email"
                    required
                    className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300"
                />
            </div>

            {/* Dienstleistung */}
            <div>
                <label className="block text-[#0A1228] mb-1 font-semibold">Dienstleistung</label>
                <select
                    name="service"
                    className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300"
                >
                    <option value="">Bitte auswählen</option>
                    <option>Unterhaltsreinigung</option>
                    <option>Fensterreinigung</option>
                    <option>Büroreinigung</option>
                    <option>Umzugsreinigung</option>
                    <option>Bauendreinigung</option>
                    <option>Spezialreinigung</option>
                    <option>Sonstige</option>
                </select>
            </div>

            {/* Nachricht */}
            <div>
                <label className="block text-[#0A1228] mb-1 font-semibold">Nachricht</label>
                <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300"
                ></textarea>
            </div>

            {/* Status */}
            {status === "success" && (
                <p className="text-green-600 text-center font-semibold">
                    ✔ Nachricht wurde erfolgreich gesendet!
                </p>
            )}
            {status === "error" && (
                <p className="text-red-600 text-center font-semibold">
                    ❌ Fehler beim Senden. Bitte erneut versuchen.
                </p>
            )}

            {/* Button */}
            <button
                type="submit"
                className="w-full bg-[#3AA9FF] hover:bg-[#1E90FF] text-white font-semibold py-3 rounded-lg transition"
            >
                Nachricht senden
            </button>
        </form>
    );
}
