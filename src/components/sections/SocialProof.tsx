"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Krud AI completely fundamentally shifted our architecture velocity. I simply described the flow, and it executed it immediately.",
    name: "Alex Dev",
    role: "Lead Engineer",
  },
  {
    quote: "We stepped away from rigid automation into an intuitive terminal rhythm. Our infrastructure evolves naturally now.",
    name: "Sam Startup",
    role: "Founder",
  },
  {
    quote: "The depth of understanding is profound. It didn't just build the foundation, it sensed the underlying objective.",
    name: "Taylor Tech",
    role: "Architect",
  }
];

export function SocialProof() {
  return (
    <section className="py-24 bg-[#050505] w-full flex justify-center">
      <div className="w-full max-w-[95%]">
        <h2 className="text-gray-500 tracking-widest uppercase text-sm font-semibold mb-12 text-center">
          In Their Words
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="flex flex-col gap-6 p-10 border border-white/5 bg-[#0a0c0b] rounded-[24px] sm:rounded-[32px] hover:border-white/10 transition-colors">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-white fill-white" />
                ))}
              </div>
              <p className="text-white text-xl font-medium leading-relaxed my-4 flex-1">
                "{t.quote}"
              </p>
              <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                <p className="text-gray-300 font-semibold tracking-wide text-sm">{t.name}</p>
                <div className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 font-medium">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
