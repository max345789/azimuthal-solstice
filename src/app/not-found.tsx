"use client";

import Link from "next/link";
import { Rabbit, ArrowLeft, TerminalSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center relative overflow-hidden text-center px-4 w-full">
      {/* Organic Flowing Gradients (Blob meshes) mimicking Hero */}
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen overflow-hidden flex items-center justify-center">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#1a2d2a] via-[#09110d] to-transparent blur-[120px] animate-blob" />
        <div className="absolute opacity-[0.05]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')" }} />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center max-w-2xl w-full"
      >
        {/* Massive Animated Rabbit */}
        <div className="relative mb-12 flex items-center justify-center">
          <div className="absolute inset-0 bg-white/5 blur-2xl rounded-full" />
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <Rabbit className="w-48 h-48 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]" strokeWidth={1} fill="rgba(255,255,255,0.05)" />
          </motion.div>
        </div>

        {/* 404 Text */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c1c1c] border border-white/5 text-xs font-semibold text-gray-300 mb-6 tracking-widest uppercase">
          <TerminalSquare className="w-3.5 h-3.5 text-gray-400" />
          System Error 404
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6">
          Lost in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-600 to-transparent">Void.</span>
        </h1>
        
        <p className="text-xl text-gray-400 mb-12 font-medium leading-relaxed max-w-lg mx-auto">
          The agent couldn't autonomously locate the trajectory you requested. The page has either shifted or evaporated entirely.
        </p>

        {/* Action Button */}
        <Link
          href="/"
          className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 group"
        >
          <ArrowLeft className="w-4 h-4 text-black group-hover:-translate-x-1 transition-transform" /> 
          Return to Terminal
        </Link>
      </motion.div>

      {/* Background abstract nodes */}
      <div className="absolute top-[20%] left-[10%] hidden md:flex flex-col items-start gap-2 opacity-50">
        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-black/40 backdrop-blur-sm" />
        <span className="text-gray-500 text-xs font-mono ml-1">ERR_NUL</span>
      </div>
      <div className="absolute bottom-[20%] right-[10%] hidden md:flex flex-col items-end gap-2 opacity-50">
        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-black/40 backdrop-blur-sm" />
        <span className="text-gray-500 text-xs font-mono mr-1">404</span>
      </div>
    </div>
  );
}
