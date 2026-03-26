"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";

function DiamondIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M8 0l3 8-3 8-3-8z" />
    </svg>
  );
}

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
  rotation: number;
}

function Confetti() {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = ["#a855f7", "#d8b4fe", "#22c55e", "#818cf8", "#f472b6", "#fbbf24"];
    const newPieces: ConfettiPiece[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 1,
      duration: 2 + Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 4 + Math.random() * 6,
      rotation: Math.random() * 360,
    }));
    setPieces(newPieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{ y: -20, x: 0, opacity: 1, rotate: 0 }}
          animate={{
            y: typeof window !== "undefined" ? window.innerHeight + 20 : 1000,
            x: [0, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 60],
            opacity: [1, 1, 0],
            rotate: piece.rotation + 720,
          }}
          transition={{ duration: piece.duration, delay: piece.delay, ease: "easeIn" }}
          style={{
            position: "absolute",
            left: `${piece.left}%`,
            top: -10,
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
          }}
        />
      ))}
    </div>
  );
}

function SuccessCheckmark() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
      className="relative"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute inset-0 bg-white/5 blur-2xl rounded-full scale-150"
      />
      <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 flex items-center justify-center shadow-[0_0_60px_rgba(255,255,255,0.3)]">
        <motion.svg
          viewBox="0 0 24 24"
          className="w-12 h-12 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path
            d="M5 12l5 5L19 7"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          />
        </motion.svg>
      </div>
    </motion.div>
  );
}

export default function PaymentSuccessPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("krud chat");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-transparent flex flex-col">
      {/* Subtle warm noise texture for that organic, human feel */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none fixed z-10" style={{ backgroundImage: "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')" }} />
      {/* Organic Flowing Gradients (Blob meshes) from Landing Page */}
      <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-screen overflow-hidden fixed z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#1a2d2a] to-transparent bg-blend-screen blur-[120px] animate-blob" />
        <div className="absolute top-[10%] -left-[10%] w-[1000px] h-[1000px] rounded-full bg-gradient-to-tr from-[#16211e] via-[#09110d] to-transparent blur-[140px] animate-blob" style={{ animationDelay: "5s" }} />
        <div className="absolute bottom-[0%] right-[20%] w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[#192b31] to-transparent blur-[100px] animate-blob" style={{ animationDelay: "2s" }} />
      </div>
      <Confetti />

      <header className="w-full border-b border-[#ffffff0a] bg-transparent/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <DiamondIcon className="w-4 h-4 text-gray-200" />
            <span className="font-semibold text-white text-sm tracking-tight">krud AI</span>
          </Link>
          <span className="text-xs text-gray-400 font-mono">dabcloud.in</span>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md"
        >
          <div className="bg-[#0d1110] border border-[#ffffff0a] rounded-2xl p-8 text-center">
            <div className="flex justify-center mb-8">
              <SuccessCheckmark />
            </div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <h1 className="text-2xl font-bold text-white mb-2">You&apos;re on Pro</h1>
              <p className="text-sm text-gray-400 mb-1">Welcome to the family. Your account is fully charged and ready to build the future.</p>
              <p className="text-sm text-gray-400">
                <span className="text-gray-400 font-mono font-medium">200,000</span> tokens per 5-hour window.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-8 mb-8">
              <div className="bg-black/50 border border-[#ffffff0a] rounded-xl p-5">
                <p className="text-xs text-gray-400 mb-3 text-left">Return to terminal and run:</p>
                <div className="flex items-center justify-between">
                  <div className="font-mono text-sm">
                    <span className="text-gray-200 select-none">$ </span>
                    <span className="text-white">krud chat</span>
                    <span className="inline-block w-1.5 h-4 bg-gray-300 ml-1 animate-cursor-blink align-text-bottom" />
                  </div>
                  <button onClick={handleCopy} className="text-gray-400 hover:text-gray-200 transition-colors cursor-pointer p-1">
                    {copied ? <Check className="w-4 h-4 text-[#10b981]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
              <Link
                href="/dashboard"
                id="go-to-dashboard-btn"
                className="inline-flex items-center gap-2 text-sm text-gray-200 hover:text-gray-400 transition-colors font-medium group"
              >
                Go to Dashboard
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
