"use client";

import { motion } from "framer-motion";

const chapters = [
  { num: "01", title: "Conceive", desc: "Speak or write your vision precisely. Share the structural goal you deeply wish to achieve. The canvas translates it instantly." },
  { num: "02", title: "Flourish", desc: "Your agent tends to the details, nurturing the code, testing edges, and building the terminal logic entirely from scratch." },
  { num: "03", title: "Harvest", desc: "Review the living, breathing result. The engine gracefully deploys your masterpiece smoothly to the target environment." }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#050505] w-full flex justify-center">
      <div className="w-full max-w-[95%]">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c1c1c] border border-white/5 text-xs font-semibold text-gray-300 mb-6 tracking-wide">
            Automated Logic
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            A Journey of <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Creation</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-center gap-6">
          {chapters.map((chapter, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="flex-1 p-10 border border-white/5 rounded-[32px] hover:border-white/10 transition-colors duration-500 bg-[#0a0c0b]"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-transparent backdrop-blur-sm">
                  <span className="font-mono text-sm font-semibold text-gray-400">{chapter.num}</span>
                </div>
                <div className="h-px w-12 bg-white/10 hidden md:block" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{chapter.title}</h3>
              <p className="text-gray-400 text-lg font-medium leading-relaxed">{chapter.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
