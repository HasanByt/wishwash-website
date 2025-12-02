export default function ContactForm() {
    return (
        <form
            action="https://formspree.io/f/xzzqeodp"
            method="POST"
            className="bg-white shadow-xl p-8 rounded-xl max-w-xl mx-auto space-y-6 border border-gray-200"
        >

            {/* Name */}
            <div>
                <label className="block text-[#0A1228] mb-1 font-semibold">Name</label>
                <input
                    type="text"
                    name="name"
                    required
                    className="w-full p-3 rounded-lg bg-gray-100 text-[#0A1228] placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3AA9FF]"
                    placeholder="Ihr Name"
                />
            </div>

            {/* Email */}
            <div>
                <label className="block text-[#0A1228] mb-1 font-semibold">E-Mail</label>
                <input
                    type="email"
                    name="email"
                    required
                    className="w-full p-3 rounded-lg bg-gray-100 text-[#0A1228] placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3AA9FF]"
                    placeholder="Ihre E-Mail-Adresse"
                />
            </div>

            {/* Nachricht */}
            <div>
                <label className="block text-[#0A1228] mb-1 font-semibold">Nachricht</label>
                <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full p-3 rounded-lg bg-gray-100 text-[#0A1228] placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3AA9FF]"
                    placeholder="Wie können wir Ihnen helfen?"
                ></textarea>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-[#3AA9FF] hover:bg-[#1E90FF] text-white font-semibold py-3 rounded-lg transition"
            >
                Nachricht senden
            </button>
        </form>
    );
}
