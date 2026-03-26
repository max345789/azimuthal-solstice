"use client";

import { AlertCircle, Target, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function ProblemSolution() {
  return (
    <section className="py-24 bg-[#050505] overflow-hidden w-full flex justify-center">
      <div className="w-full max-w-[95%]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-stretch">
          
          {/* The Old Way */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 p-12 lg:p-16 border border-white/5 bg-[#0a0c0b] rounded-[40px] shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-red-500/10 transition-colors duration-700" />
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-transparent backdrop-blur-sm relative z-10 mb-12">
              <AlertCircle className="w-5 h-5 text-gray-400" />
            </div>
            
            <h3 className="text-3xl font-semibold text-white mb-8 relative z-10">
              The friction <span className="text-gray-500">of construction.</span>
            </h3>
            
            <ul className="space-y-6 text-gray-400 text-lg font-medium relative z-10">
              <li className="flex items-start gap-4">
                <span className="text-gray-600 font-bold tracking-widest">—</span> Wasting hours configuring boilerplate
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gray-600 font-bold tracking-widest">—</span> Debugging arcane syntax in isolation
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gray-600 font-bold tracking-widest">—</span> Losing the creative spark to tooling limits
              </li>
            </ul>
          </motion.div>

          <div className="hidden lg:flex items-center justify-center -mx-8 relative z-20">
            <div className="w-16 h-16 rounded-full bg-[#151515] border border-white/10 flex items-center justify-center shadow-xl">
              <ArrowRight className="w-6 h-6 text-gray-400" />
            </div>
          </div>

          {/* The Krud AI Way */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex-1 p-12 lg:p-16 border border-white/10 bg-[#0d1110] rounded-[40px] shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#1a2d2a]/60 blur-[100px] rounded-full pointer-events-none group-hover:bg-[#1a2d2a]/80 transition-colors duration-700" />
            
            {/* abstract node line */}
            <svg className="absolute top-1/3 -right-[10%] w-[300px] h-[100px] overflow-visible opacity-30" style={{ strokeWidth: 1, stroke: "rgba(255,255,255,0.2)", fill: "none" }}>
              <path d="M0,0 Q100,-50 200,50" />
            </svg>

            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-black/40 backdrop-blur-sm relative z-10 mb-12">
              <Target className="w-5 h-5 text-gray-100" />
            </div>

            <h3 className="text-3xl font-semibold text-white mb-8 relative z-10 w-full">
              The Krud AI CLI agent <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-500 to-transparent">approach.</span>
            </h3>

            <ul className="space-y-6 text-white text-lg font-medium relative z-10">
              <li className="flex items-start gap-4">
                <span className="text-white font-bold tracking-widest mt-1">/</span> Tell the CLI agent your goal in plain language
              </li>
              <li className="flex items-start gap-4">
                <span className="text-white font-bold tracking-widest mt-1">/</span> The agent runs commands and builds autonomously
              </li>
              <li className="flex items-start gap-4">
                <span className="text-white font-bold tracking-widest mt-1">/</span> Iterate and deploy — all from the terminal
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
