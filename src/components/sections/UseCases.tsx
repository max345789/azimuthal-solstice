"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const useCases = [
  {
    title: "The Creators",
    description: "Focus purely on logic. Let the agent lay the bricks, configuration, and boilerplate while you sculpt.",
  },
  {
    title: "The Visionaries",
    description: "Build prototypes effortlessly. Speak your idea and watch interfaces and architectures blossom.",
  },
  {
    title: "The Collectives",
    description: "Amplify your team's output. Automate the friction so your people can spend time creating.",
  }
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-24 bg-[#050505] w-full flex justify-center">
      <div className="w-full max-w-[95%] border-t border-white/5 pt-24 mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-12"
        >
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Agents across <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">paradigms.</span>
            </h2>
            <p className="text-gray-400 text-xl font-medium max-w-lg">
              Every workflow has its rhythm. The Krud Agent bends to your style instantly.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-[#0a0c0b] hover:bg-white/10 transition-colors cursor-pointer">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCases.map((useCase, idx) => (
            <motion.div 
              key={useCase.title} 
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group p-10 border border-white/5 rounded-[32px] hover:bg-[#0a0c0b] hover:border-white/10 transition-all flex flex-col justify-between min-h-[300px] bg-transparent"
            >
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center mb-16 relative">
                 <div className="w-2 h-2 rounded-full bg-gray-500 group-hover:bg-white transition-colors" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed font-medium">
                  {useCase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
