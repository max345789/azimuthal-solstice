"use client";

import Link from "next/link";
import { Play, ArrowRight, ArrowUpRight, Zap, Target, Box, ArrowDown, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={containerRef} className="pt-20 sm:pt-24 pb-10 px-4 w-full flex flex-col items-center">

      {/* Massive Glowing Card */}
      <div className="w-full max-w-[95%] mx-auto bg-[#0d1110] rounded-[32px] sm:rounded-[48px] border border-white/5 relative overflow-hidden min-h-[70vh] sm:min-h-[85vh] flex flex-col items-center justify-center text-center shadow-2xl">
        
        {/* Organic Flowing Gradients (Blob meshes) */}
        <div className="absolute inset-0 pointer-events-none opacity-50 mix-blend-screen overflow-hidden">
          <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#1a2d2a] to-transparent bg-blend-screen blur-[120px] animate-blob" />
          <div className="absolute top-[10%] -left-[10%] w-[1000px] h-[1000px] rounded-full bg-gradient-to-tr from-[#16211e] via-[#09110d] to-transparent blur-[140px] animate-blob" style={{ animationDelay: "5s" }} />
          <div className="absolute bottom-[0%] right-[20%] w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[#192b31] to-transparent blur-[100px] animate-blob" style={{ animationDelay: "2s" }} />
          
          {/* subtle white grain */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')" }} />
        </div>

        {/* Content */}
        <motion.div style={{ y: contentY }} className="relative z-10 w-full px-4 sm:px-6 flex flex-col items-center">
          
          {/* Play Button Icon */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center mb-10 sm:mb-16 shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-pointer hover:bg-white/10 transition-colors">
            <Play className="w-5 h-5 text-gray-300 ml-1" fill="currentColor" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c1c1c] border border-white/5 text-xs font-semibold text-gray-300 mb-8 w-fit tracking-wide shadow-md">
            <Zap className="w-3.5 h-3.5 text-gray-400" />
            Unlock Your Terminal Spark! <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-[1.15] max-w-6xl mx-auto drop-shadow-sm px-2">
            The AI CLI Agent for Autonomous <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-500 to-transparent">Execution</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto font-medium tracking-wide px-2">
            Krud AI is an autonomous CLI agent that lives in your terminal. Run commands, fix bugs, and ship code faster — no browser, no context switching.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Link
              href="/dashboard"
              className="px-8 py-4 rounded-full bg-[#181818] border border-white/5 text-white text-sm font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              Open App <ArrowUpRight className="w-4 h-4 text-gray-400" />
            </Link>
            <Link
              href="/#features"
              className="px-8 py-4 rounded-full bg-white text-black text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Discover More
            </Link>
          </div>
        </motion.div>

        {/* Floating Connected Nodes */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Vertical light slashes mimicking meteor streams */}
          <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-white/40 to-transparent opacity-40 blur-[1px]" />
          <div className="absolute bottom-[10%] left-[45%] w-px h-40 bg-gradient-to-b from-transparent via-white/20 to-transparent opacity-30" />
          <div className="absolute bottom-[15%] left-[55%] w-px h-24 bg-gradient-to-b from-transparent via-white/30 to-transparent opacity-50" />

          {/* Connected Nodes */}
          {/* Node 1 */}
          <div className="absolute top-[25%] left-[15%] hidden lg:flex flex-col items-start gap-2">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-black/40 backdrop-blur-sm relative">
              <Target className="w-5 h-5 text-gray-300" />
              {/* SVG connection line */}
              <svg className="absolute top-1/2 left-[100%] w-[100px] h-[50px] overflow-visible" style={{ strokeWidth: 0.5, stroke: "rgba(255,255,255,0.2)", fill: "none" }}>
                <path d="M0,0 Q50,0 80,40" />
              </svg>
            </div>
            <div className="relative z-10">
              <span className="flex items-center gap-1.5 text-gray-200 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-gray-300" /> Cortex</span>
              <span className="text-gray-500 text-xs ml-3 font-mono">20.945</span>
            </div>
          </div>

          {/* Node 2 */}
          <div className="absolute top-[30%] right-[15%] hidden lg:flex flex-col items-end gap-2 text-right">
            <div className="text-right">
              <span className="flex items-center justify-end gap-1.5 text-gray-200 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-gray-300" /> Quant</span>
              <span className="text-gray-500 text-xs mr-3 font-mono">2.945</span>
            </div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center relative">
              <Sparkles className="w-6 h-6 text-gray-400" />
              <svg className="absolute top-1/2 right-[100%] w-[100px] h-[20px] overflow-visible" style={{ strokeWidth: 0.5, stroke: "rgba(255,255,255,0.2)", fill: "none" }}>
                <path d="M0,0 L-100,0" />
              </svg>
            </div>
          </div>

          {/* Node 3 */}
          <div className="absolute bottom-[40%] left-[10%] hidden lg:flex flex-col items-start gap-2">
            <div className="relative z-10">
              <span className="flex items-center gap-1.5 text-gray-200 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-gray-300" /> Krud</span>
              <span className="text-gray-500 text-xs ml-3 font-mono">19.346</span>
            </div>
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-transparent backdrop-blur-sm relative left-8">
              <Box className="w-5 h-5 text-gray-300" />
              <svg className="absolute top-1/2 right-[100%] w-[150px] h-[50px] overflow-visible" style={{ strokeWidth: 0.5, stroke: "rgba(255,255,255,0.2)", fill: "none" }}>
                <path d="M0,0 Q-40,0 -80,-40" />
              </svg>
            </div>
          </div>

          {/* Node 4 */}
          <div className="absolute bottom-[40%] right-[10%] hidden lg:flex flex-col items-end gap-2">
            <div className="text-right">
              <span className="flex items-center justify-end gap-1.5 text-gray-200 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-gray-300" /> Meeton</span>
              <span className="text-gray-500 text-xs mr-3 font-mono">440</span>
            </div>
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-black/40 backdrop-blur-sm relative right-12">
              <Zap className="w-5 h-5 text-gray-300" />
              <svg className="absolute top-1/2 left-[100%] w-[150px] h-[40px] overflow-visible" style={{ strokeWidth: 0.5, stroke: "rgba(255,255,255,0.2)", fill: "none" }}>
                <path d="M0,0 Q40,0 120,20" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Bar Indicators */}
        <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-10 flex items-center gap-3 sm:gap-4 z-10 bg-white/5 backdrop-blur-md rounded-full pl-2 pr-3 sm:pr-4 py-2 border border-white/5">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
            <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4 text-black" />
          </div>
          <span className="text-xs text-gray-400 font-medium tracking-wide">Scroll down</span>
        </div>

        <div className="absolute bottom-6 sm:bottom-10 right-4 sm:right-10 hidden sm:flex flex-col items-end z-10">
          <span className="text-sm font-medium text-[#c4cbb8] mb-3">AI horizons</span>
          <div className="flex gap-2">
            <div className="w-8 h-1 bg-white" />
            <div className="w-8 h-1 bg-white/10" />
            <div className="w-8 h-1 bg-white/10" />
            <div className="w-8 h-1 bg-white/10" />
          </div>
        </div>
      </div>

      {/* Integrated Logos Bar Section Right Below */}
      <div className="w-full max-w-[95%] lg:max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-4 sm:gap-0 opacity-50 py-8 sm:py-10 mt-2 filter brightness-100 grayscale-[0.8]">
        <div className="flex items-center gap-2"><span className="font-bold text-base sm:text-xl tracking-tighter">▲ Vercel</span></div>
        <div className="flex items-center gap-2"><span className="font-bold text-base sm:text-xl tracking-tighter">loom</span></div>
        <div className="flex items-center gap-2"><span className="font-bold text-base sm:text-xl tracking-tighter">$ Cash App</span></div>
        <div className="flex items-center gap-2"><span className="font-bold text-base sm:text-xl tracking-tighter">◎ Loops</span></div>
        <div className="flex items-center gap-2"><span className="font-bold text-base sm:text-xl tracking-tighter">_zapier</span></div>
        <div className="flex items-center gap-2"><span className="font-bold text-base sm:text-xl tracking-tighter">ramp ⊿</span></div>
      </div>
      
    </section>
  );
}
