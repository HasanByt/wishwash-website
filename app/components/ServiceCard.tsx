interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
    return (
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/10 text-center hover:scale-[1.03] transition">
            <div className="text-4xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-[#E5D5A4] mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </div>
    );
}
