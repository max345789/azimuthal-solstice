"use client";

import { Zap, Shield, Database, Layout, RefreshCw, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    name: "Plain English Commands",
    description: "Just tell it what you need. No remembering flags or googling syntax — krud works out the right command and runs it.",
    icon: Database,
  },
  {
    name: "Error Handling",
    description: "When something fails, krud reads the error, tries to fix it, and lets you know what it changed. No silent failures.",
    icon: Shield,
  },
  {
    name: "Fast Iteration",
    description: "Skip the back-and-forth. Describe your goal once and krud keeps going until it's done or asks you the one thing it can't guess.",
    icon: Zap,
  },
  {
    name: "Works With Your Stack",
    description: "Drops into any project — Node, Python, Go, whatever. It reads your directory and works with what's already there.",
    icon: Layout,
  },
  {
    name: "Session Memory",
    description: "Krud remembers what you were working on. Pick up mid-task without re-explaining context every time.",
    icon: RefreshCw,
  },
  {
    name: "Full Visibility",
    description: "See every command before and after it runs. You're always in control — approve, skip, or take over at any point.",
    icon: Cpu,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-[#050505] w-full flex justify-center">
      <div className="w-full max-w-[95%]">
        
        <div className="mb-24 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c1c1c] border border-white/5 text-xs font-semibold text-gray-300 mb-6 tracking-wide">
            What&apos;s inside
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Built for real <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">terminal work.</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl">
            Type what you need done. Krud figures out the commands, runs them, and tells you what happened. That&apos;s it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              key={feature.name}
              className="group p-6 sm:p-8 lg:p-10 border border-white/5 bg-[#0a0c0b] rounded-[24px] sm:rounded-[32px] hover:bg-[#0d1110] transition-colors relative overflow-hidden"
            >
              <div className="absolute top-[-50%] right-[-50%] w-[100%] h-[100%] bg-gradient-to-bl from-[#1a2d2a]/20 to-transparent blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-transparent backdrop-blur-sm mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500">
                <feature.icon className="w-5 h-5 text-gray-200" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4 tracking-tight relative z-10">{feature.name}</h3>
              <p className="text-base text-gray-400 leading-relaxed font-medium relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
