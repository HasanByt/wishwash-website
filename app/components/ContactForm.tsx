export default function ContactForm() {
    return (
        <form
            action="https://formspree.io/f/xzzqeodp"
            method="POST"
            className="bg-white/10 backdrop-blur-md p-8 rounded-xl max-w-xl mx-auto space-y-6 border border-white/10"
        >

            <div>
                <label className="block text-[#E5D5A4] mb-1 font-semibold">Name</label>
                <input
                    type="text"
                    name="name"
                    required
                    className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none"
                    placeholder="Ihr Name"
                />
            </div>

            <div>
                <label className="block text-[#E5D5A4] mb-1 font-semibold">E-Mail</label>
                <input
                    type="email"
                    name="email"
                    required
                    className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none"
                    placeholder="Ihre E-Mail-Adresse"
                />
            </div>

            <div>
                <label className="block text-[#E5D5A4] mb-1 font-semibold">Nachricht</label>
                <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none"
                    placeholder="Wie können wir Ihnen helfen?"
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full bg-[#3AA9FF] hover:bg-[#1E90FF] text-white font-semibold py-3 rounded-lg transition"
            >
                Nachricht senden
            </button>
        </form>
    );
}
