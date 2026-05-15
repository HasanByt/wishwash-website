"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="group rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(15,45,80,0.10)] border border-slate-100 hover:border-[#3AA9FF]/40 transition"
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F0F8FF] text-[#3AA9FF] group-hover:scale-110 transition">
        <Icon size={34} strokeWidth={2.2} />
      </div>

      <h3 className="text-xl font-bold text-[#0A1228] mb-3">
        {title}
      </h3>

      <p className="text-slate-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}