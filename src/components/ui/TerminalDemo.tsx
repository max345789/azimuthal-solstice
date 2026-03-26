"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PenTool, Notebook, Coffee, Code, CheckCircle2 } from "lucide-react";

const commands = [
  { text: "artisan draft --medium nextjs", delay: 0 },
  { type: "loading", text: "Analyzing your manuscript...", delay: 800 },
  { type: "plan", text: "Selecting the architecture...", delay: 1500 },
  { type: "step", text: "Parchment initialized.", icon: Notebook, delay: 2500 },
  { type: "step", text: "Gathering dependencies...", icon: Code, delay: 3500 },
  { type: "step", text: "Inking the components...", icon: PenTool, delay: 4500 },
  { type: "step", text: "Connecting the logic...", icon: Coffee, delay: 5500 },
  { type: "success", text: "The masterpiece is ready.", icon: CheckCircle2, delay: 6500 },
  { type: "url", text: "Located at: https://localhost:3000/dashboard", delay: 6800 },
];

export function TerminalDemo() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  useEffect(() => {
    const timeouts = commands.map((cmd, index) => {
      return setTimeout(() => {
        setVisibleLines((prev) => [...prev, index]);
      }, cmd.delay);
    });

    return () => timeouts.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto rounded-md overflow-hidden border border-[#3A332C] bg-[#1a1614] shadow-2xl relative shadow-black/50 mb-20 lg:mb-0">
      <div className="absolute inset-0 bg-[#d4af37]/5 pointer-events-none z-10 opacity-30 mix-blend-overlay" />
      {/* Header */}
      <div className="flex items-center space-x-2 px-4 py-3 bg-[#110e0c] border-b border-[#3A332C]">
        <div className="flex space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#52443a]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#52443a]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#52443a]"></div>
        </div>
        <div className="ml-4 flex items-center gap-2 px-2 py-0.5 rounded text-xs font-mono text-[#9a8c7c] tracking-widest uppercase">
          <span>Artisan Draft</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-8 font-mono text-sm min-h-[350px] sm:min-h-[420px] max-h-[420px] overflow-y-auto scrollbar-hide text-left flex flex-col gap-3 relative z-0">
        {visibleLines.map((index) => {
          const cmd = commands[index];

          if (index === 0) {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[#d4af37] flex items-center gap-2 break-all font-medium"
              >
                <span className="text-[#8c7b6a] shrink-0">~ user$</span>
                <span>{cmd.text}</span>
              </motion.div>
            );
          }

          if (cmd.type === "loading" || cmd.type === "plan") {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[#9a8c7c] flex items-center gap-2 italic mt-2"
              >
                <span className="animate-pulse opacity-50">•</span> {cmd.text}
              </motion.div>
            );
          }

          if (cmd.type === "step") {
            const Icon = cmd.icon || PenTool;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 text-[#c4b5a3] pl-2 py-1"
              >
                <Icon className="w-4 h-4 text-[#8c7b6a] opacity-50" />
                <span>{cmd.text}</span>
              </motion.div>
            );
          }

          if (cmd.type === "success") {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 text-[#d4af37] mt-6 py-2 border-t border-[#3A332C]/50"
              >
                <span className="font-medium tracking-wide">{cmd.text}</span>
              </motion.div>
            );
          }

          if (cmd.type === "url") {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-[#7a6b5d] italic"
              >
                {cmd.text}
              </motion.div>
            );
          }

          return null;
        })}
        {visibleLines.length === commands.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#8c7b6a] mt-6 flex items-center gap-2 font-mono"
            transition={{ delay: 1 }}
          >
            <span>~ user$</span>
            <span className="w-2.5 h-4 bg-[#d4af37]/60 animate-pulse"></span>
          </motion.div>
        )}
      </div>
    </div>
  );
}
