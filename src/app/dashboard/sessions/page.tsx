"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, Clock, Zap, ChevronRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { API_BASE_URL } from "@/lib/config";

function DiamondIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M8 0l3 8-3 8-3-8z" />
    </svg>
  );
}

interface Session {
  session_id: string;
  title: string;
  created_at: string;
  message_count: number;
  tokens_used: number;
}

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

export default function SessionsPage() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("krud_token") : null;
    if (!token) { setLoading(false); return; }

    fetch(`${API_BASE_URL}/v1/chat/sessions`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(r => r.ok ? r.json() : null)
      .then(data => { if (data?.sessions) setSessions(data.sessions); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

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
          <p className="text-sm text-gray-400">
            {loading ? "Loading…" : `${sessions.length} session${sessions.length !== 1 ? "s" : ""}`}
          </p>
        </div>

        <div className="bg-[#0d1110] border border-[#ffffff0a] rounded-2xl overflow-hidden divide-y divide-white/5">
          {loading ? (
            <div className="px-5 py-10 text-center text-sm text-gray-500">Loading sessions…</div>
          ) : sessions.length === 0 ? (
            <div className="px-5 py-10 text-center text-sm text-gray-500">
              No sessions yet. Run <code className="font-mono text-gray-300">krud chat</code> in your terminal to start.
            </div>
          ) : sessions.map((session, i) => (
            <motion.div
              key={session.session_id}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.04 * i }}
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
                    <span>{timeAgo(session.created_at)}</span>
                    <span className="text-white/10">·</span>
                    <Zap className="w-3 h-3" />
                    <span className="font-mono">{session.tokens_used.toLocaleString()} tokens</span>
                    {session.message_count > 0 && (
                      <>
                        <span className="text-white/10">·</span>
                        <span>{session.message_count} msgs</span>
                      </>
                    )}
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
