"use client";

import Link from "next/link";
import { Rabbit, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

function DiamondIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M8 0l3 8-3 8-3-8z" />
    </svg>
  );
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center justify-center relative overflow-hidden px-4 w-full">
      {/* Subtle warm noise texture for that organic, human feel */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none fixed z-10" style={{ backgroundImage: "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')" }} />
      {/* Organic Flowing Gradients (Blob meshes) from Landing Page */}
      <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-screen overflow-hidden fixed z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#1a2d2a] to-transparent bg-blend-screen blur-[120px] animate-blob" />
        <div className="absolute top-[10%] -left-[10%] w-[1000px] h-[1000px] rounded-full bg-gradient-to-tr from-[#16211e] via-[#09110d] to-transparent blur-[140px] animate-blob" style={{ animationDelay: "5s" }} />
        <div className="absolute bottom-[0%] right-[20%] w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[#192b31] to-transparent blur-[100px] animate-blob" style={{ animationDelay: "2s" }} />
      </div>
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gray-300/[0.03] blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center max-w-md w-full"
      >
        {/* Confused Rabbit */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-white/[0.02] blur-3xl rounded-full scale-150" />
          <motion.div
            animate={{
              rotate: [0, -8, 8, -5, 5, 0],
              y: [0, -4, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Rabbit
              className="w-20 h-20 text-gray-200/70"
              strokeWidth={1.5}
            />
          </motion.div>
        </div>

        {/* 404 Number */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="font-mono text-6xl sm:text-8xl md:text-9xl font-bold text-gray-200 mb-4 tracking-tighter"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-white font-medium mb-8"
        >
          Page not found
        </motion.p>

        {/* Terminal Chat Bubble */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full bg-[#090b0a] border border-[#ffffff0a] rounded-xl overflow-hidden mb-8"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#ffffff0a] bg-white/[0.02]">
            <div className="w-2.5 h-2.5 rounded-full bg-krud-red/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-krud-yellow/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-krud-green/60" />
            <span className="text-xs text-gray-400/50 font-mono ml-2">
              krud — zsh
            </span>
          </div>

          <div className="p-4 space-y-3 font-mono text-sm">
            {/* User input */}
            <div className="flex items-start gap-2">
              <span className="text-gray-200 select-none shrink-0">$</span>
              <span className="text-white">krud chat</span>
            </div>

            {/* User message */}
            <div className="flex items-start gap-2">
              <span className="text-krud-green select-none shrink-0">›</span>
              <span className="text-gray-400">where am I?</span>
            </div>

            {/* AI response */}
            <div className="flex items-start gap-2">
              <DiamondIcon className="w-3 h-3 text-gray-200 mt-1 shrink-0" />
              <div className="text-white/80">
                <p>This page doesn&apos;t exist.</p>
                <p className="text-gray-400 mt-1">Try going home.</p>
              </div>
            </div>

            {/* Blinking cursor */}
            <div className="flex items-center gap-2">
              <span className="text-gray-200 select-none">$</span>
              <span className="inline-block w-2 h-4 bg-gray-300/80 animate-cursor-blink" />
            </div>
          </div>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white hover:opacity-90 text-black font-medium text-sm transition-all duration-200 hover:shadow-[0_0_24px_rgba(255,255,255,0.3)] active:scale-[0.98] group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
