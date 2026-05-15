"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-4 text-[#0A1228] outline-none transition placeholder:text-slate-400 focus:border-[#3AA9FF] focus:ring-4 focus:ring-[#3AA9FF]/15";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = new FormData(e.currentTarget);

    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      service: form.get("service"),
      message: form.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-bold text-[#0A1228] mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Ihr Name"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-[#0A1228] mb-2">
            E-Mail
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="name@beispiel.ch"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-[#0A1228] mb-2">
          Dienstleistung
        </label>
        <select name="service" className={inputClass} defaultValue="">
          <option value="" disabled>
            Bitte auswählen
          </option>
          <option>Unterhaltsreinigung</option>
          <option>Fensterreinigung</option>
          <option>Büroreinigung</option>
          <option>Umzugsreinigung</option>
          <option>Bauendreinigung</option>
          <option>Spezialreinigung</option>
          <option>Sonstige</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-bold text-[#0A1228] mb-2">
          Nachricht
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Beschreiben Sie kurz, was gereinigt werden soll..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "success" && (
        <div className="rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-green-700 font-semibold">
          Nachricht wurde erfolgreich gesendet. Wir melden uns bald.
        </div>
      )}

      {status === "error" && (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-red-700 font-semibold">
          Fehler beim Senden. Bitte versuchen Sie es erneut.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-[#3AA9FF] px-7 py-4 font-black text-white shadow-[0_20px_50px_rgba(58,169,255,0.30)] transition hover:bg-[#0A1228] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Wird gesendet..." : "Nachricht senden"}
      </button>
    </form>
  );
}