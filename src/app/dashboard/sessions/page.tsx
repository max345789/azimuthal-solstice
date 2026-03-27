"use client";

import Link from "next/link";
import { Terminal, Clock, Zap, ChevronRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

function DiamondIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M8 0l3 8-3 8-3-8z" />
    </svg>
  );
}

const sessions = [
  { id: 1, title: "Refactor auth middleware", time: "2h ago", tokens: 3420, status: "completed" },
  { id: 2, title: "Debug payment webhook", time: "1d ago", tokens: 8100, status: "completed" },
  { id: 3, title: "Add rate limiting to API", time: "2d ago", tokens: 1850, status: "completed" },
  { id: 4, title: "Setup CI/CD pipeline", time: "3d ago", tokens: 5200, status: "completed" },
  { id: 5, title: "Fix Supabase SSL connection", time: "4d ago", tokens: 2300, status: "completed" },
  { id: 6, title: "Scaffold FastAPI service", time: "5d ago", tokens: 6700, status: "completed" },
];

export default function SessionsPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-screen overflow-hidden fixed z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#1a2d2a] to-transparent blur-[120px] animate-blob" />
        <div className="absolute top-[10%] -left-[10%] w-[1000px] h-[1000px] rounded-full bg-gradient-to-tr from-[#16211e] via-[#09110d] to-transparent blur-[140px] animate-blob" style={{ animationDelay: "5s" }} />
      </div>

      <header className="w-full border-b border-[#ffffff0a] bg-transparent/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <DiamondIcon className="w-4 h-4 text-gray-200" />
              <span className="font-semibold text-white text-sm tracking-tight">krud AI</span>
            </Link>
            <span className="text-white/10">·</span>
            <span className="text-sm text-gray-400">Sessions</span>
          </div>
          <Link href="/dashboard" className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" /> Dashboard
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10 relative z-10">
        <div className="mb-8">
          <h1 className="text-xl font-semibold text-white mb-1">All Sessions</h1>
          <p className="text-sm text-gray-400">Your recent krud chat sessions</p>
        </div>

        <div className="bg-[#0d1110] border border-[#ffffff0a] rounded-2xl overflow-hidden divide-y divide-white/5">
          {sessions.map((session, i) => (
            <motion.div
              key={session.id}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * i }}
              className="flex items-center justify-between px-5 py-4 hover:bg-white/[0.02] transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Terminal className="w-4 h-4 text-gray-200" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-white truncate font-medium">{session.title}</div>
                  <div className="text-xs text-gray-400 flex items-center gap-2 mt-0.5">
                    <Clock className="w-3 h-3" />
                    <span>{session.time}</span>
                    <span className="text-white/10">·</span>
                    <Zap className="w-3 h-3" />
                    <span className="font-mono">{session.tokens.toLocaleString()} tokens</span>
                  </div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
