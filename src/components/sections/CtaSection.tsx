"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <section className="py-24 bg-[#050505] overflow-hidden w-full flex justify-center">
      <div className="w-full max-w-[95%] px-8 py-32 rounded-[48px] bg-[#0d1110] border border-white/5 relative flex flex-col items-center text-center shadow-2xl">
        
        {/* Organic Flowing Gradients (Blob meshes) */}
        <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-[#16211e] via-[#09110d] to-transparent blur-[120px] animate-blob" />
          
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')" }} />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl flex flex-col items-center"
        >
          
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-500 to-transparent">Defend?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl font-medium leading-relaxed">
            Step into a workflow that feels entirely autonomous. Stop typing out mechanical instructions, and start directing with pure intuition.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/cli-auth"
              className="px-10 py-5 rounded-full bg-white text-black font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Awaken Krud AI <ArrowUpRight className="w-5 h-5 text-black" />
            </Link>
          </div>
          <p className="mt-8 text-sm text-gray-500 font-medium tracking-wide uppercase">
            Start completely friction free.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
