"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { API_BASE_URL } from "@/lib/config";
import {
  Rabbit,
  LayoutDashboard,
  MessageSquare,
  CreditCard,
  Settings,
  FileText,
  GitBranch,
  LogOut,
  ArrowUpRight,
  Copy,
  Check,
  ChevronRight,
  Clock,
  Zap,
  Terminal,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function DiamondIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M8 0l3 8-3 8-3-8z" />
    </svg>
  );
}

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: MessageSquare, label: "Sessions", href: "/dashboard/sessions" },
  { icon: CreditCard, label: "Billing", href: "/billing" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

const externalLinks = [
  { icon: FileText, label: "Docs", href: "/blog/how-to-install-krud-ai" },
  { icon: GitBranch, label: "GitHub", href: "https://github.com/max345789/krud-ai" },
];

interface AccountData {
  email: string;
  name: string | null;
  usage_events: number;
}

interface BillingData {
  subscription: { status: string; trial_ends_at: string; };
  usage_events: number;
}

interface TokenUsage {
  used: number;
  limit: number;
  resets_at: string | null;
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

export default function DashboardPage() {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [account, setAccount] = useState<AccountData | null>(null);
  const [billing, setBilling] = useState<BillingData | null>(null);
  const [tokenUsage, setTokenUsage] = useState<TokenUsage | null>(null);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);

  const tokensUsed = tokenUsage?.used ?? 0;
  const tokensTotal = tokenUsage?.limit ?? 40000;
  const tokenPercentage = tokensTotal > 0 ? Math.min(100, (tokensUsed / tokensTotal) * 100) : 0;

  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("krud_token") : null;
    if (!token) { setLoading(false); return; }

    const headers = { Authorization: `Bearer ${token}` };
    Promise.all([
      fetch(`${API_BASE_URL}/v1/account/me`, { headers }).then(r => r.ok ? r.json() : null),
      fetch(`${API_BASE_URL}/v1/billing`, { headers }).then(r => r.ok ? r.json() : null),
      fetch(`${API_BASE_URL}/v1/account/token-usage`, { headers }).then(r => r.ok ? r.json() : null),
      fetch(`${API_BASE_URL}/v1/chat/sessions`, { headers }).then(r => r.ok ? r.json() : null),
    ]).then(([acc, bill, tokens, sess]) => {
      if (acc) setAccount(acc);
      if (bill) setBilling(bill);
      if (tokens) setTokenUsage(tokens);
      if (sess?.sessions) setSessions(sess.sessions.slice(0, 4));
    }).catch(() => {}).finally(() => setLoading(false));
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("curl -fsSL https://install.krud.ai | sh");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("krud_token");
      window.location.href = "/";
    }
  };

  const displayEmail = account?.email || "—";
  const displayInitial = displayEmail !== "—" ? displayEmail[0].toUpperCase() : "?";
  const planStatus = billing?.subscription?.status || "trialing";
  const planLabel = planStatus.charAt(0).toUpperCase() + planStatus.slice(1);
  const trialEndsAt = billing?.subscription?.trial_ends_at;
  const trialDaysLeft = trialEndsAt
    ? Math.max(0, Math.ceil((new Date(trialEndsAt).getTime() - Date.now()) / 86400000))
    : null;

  return (
    <div className="min-h-screen bg-transparent flex">
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none fixed z-10" style={{ backgroundImage: "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')" }} />
      <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-screen overflow-hidden fixed z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#1a2d2a] to-transparent bg-blend-screen blur-[120px] animate-blob" />
        <div className="absolute top-[10%] -left-[10%] w-[1000px] h-[1000px] rounded-full bg-gradient-to-tr from-[#16211e] via-[#09110d] to-transparent blur-[140px] animate-blob" style={{ animationDelay: "5s" }} />
        <div className="absolute bottom-[0%] right-[20%] w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[#192b31] to-transparent blur-[100px] animate-blob" style={{ animationDelay: "2s" }} />
      </div>

      <button onClick={() => setSidebarOpen(!sidebarOpen)} className="fixed top-4 left-4 z-50 lg:hidden bg-[#0d1110] border border-[#ffffff0a] rounded-lg p-2 text-gray-400 hover:text-white transition-colors cursor-pointer">
        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      <AnimatePresence>
        {sidebarOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-black/60 z-30 lg:hidden" />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={`fixed lg:sticky top-0 left-0 h-screen w-[260px] bg-[#090b0a] border-r border-[#ffffff0a] flex flex-col z-40 transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="px-5 h-16 flex items-center gap-2.5 border-b border-[#ffffff0a]">
          <DiamondIcon className="w-4 h-4 text-gray-200" />
          <span className="font-semibold text-white text-sm tracking-tight">krud AI</span>
        </div>

        <div className="px-5 py-4 border-b border-[#ffffff0a]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 border border-[#ffffff14] flex items-center justify-center">
              <span className="text-xs font-semibold text-gray-200">{loading ? "…" : displayInitial}</span>
            </div>
            <div className="min-w-0">
              <div className="text-sm font-medium text-white truncate">
                {loading ? "Loading…" : (account?.name || displayEmail)}
              </div>
              <div className="text-xs text-gray-400">{planLabel}</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-150 group ${active ? "bg-white/10 text-white" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
              >
                {active && <div className="absolute left-0 w-[3px] h-5 bg-gray-300 rounded-r-full" />}
                <item.icon className="w-4 h-4 shrink-0" />
                {item.label}
              </Link>
            );
          })}

          <div className="h-px bg-white/5 my-3 mx-3" />

          {externalLinks.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-150 group">
              <item.icon className="w-4 h-4 shrink-0" />
              {item.label}
              <ArrowUpRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </nav>

        <div className="px-3 pb-4">
          <button onClick={handleLogout} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:text-red-400 hover:bg-red-500/5 transition-all duration-150 w-full cursor-pointer">
            <LogOut className="w-4 h-4 shrink-0" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        <div className="h-16 border-b border-[#ffffff0a] flex items-center px-4 sm:px-6 lg:px-8">
          <div className="lg:hidden w-10" />
          <div>
            <h1 className="text-xl font-semibold text-[#fff1e0] tracking-tight">
              Welcome back{account?.name ? `, ${account.name}` : ""} 👋
            </h1>
            <p className="text-xs text-gray-400 mt-0.5 font-medium hidden sm:block">Let&apos;s craft something incredible today.</p>
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Token Usage Card */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="bg-[#0d1110] border-l-4 border-l-gray-300 border border-[#ffffff0a] rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Zap className="w-4 h-4 text-gray-200" />
                  Token Usage
                </div>
                <span className="text-xs text-gray-400 font-mono">5h window</span>
              </div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-white font-mono">{tokensUsed.toLocaleString()}</span>
                <span className="text-sm text-gray-400 font-mono">/ {tokensTotal.toLocaleString()}</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden mb-3">
                <motion.div initial={{ width: 0 }} animate={{ width: `${tokenPercentage}%` }} transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} className="h-full bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 rounded-full" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">{Math.round(tokenPercentage)}% used</span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {tokenUsage?.resets_at
                    ? `Resets ${timeAgo(tokenUsage.resets_at).replace(" ago", "")}`
                    : "5h window"}
                </span>
              </div>
            </motion.div>

            {/* Plan Card */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-[#0d1110] border-l-4 border-l-gray-300 border border-[#ffffff0a] rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <CreditCard className="w-4 h-4 text-gray-200" />
                  Current Plan
                </div>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-white">{planLabel}</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                {trialDaysLeft !== null ? `${trialDaysLeft} days remaining` : "Active"}
              </p>
              <Link href="/billing" className="inline-flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-400 transition-colors font-medium group">
                Upgrade to Pro
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Recent Sessions */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-white uppercase tracking-wider">Recent Sessions</h2>
              <Link href="/dashboard/sessions" className="text-xs text-gray-400 hover:text-gray-200 transition-colors">View all →</Link>
            </div>
            <div className="bg-[#0d1110] border border-[#ffffff0a] rounded-2xl overflow-hidden divide-y divide-white/5">
              {loading ? (
                <div className="px-5 py-8 text-center text-sm text-gray-500">Loading sessions…</div>
              ) : sessions.length === 0 ? (
                <div className="px-5 py-8 text-center text-sm text-gray-500">No sessions yet. Start chatting in the CLI.</div>
              ) : sessions.map((session, i) => (
                <motion.div key={session.session_id} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * (i + 1) + 0.2 }} className="flex items-center justify-between px-5 py-4 hover:bg-white/[0.02] transition-colors group cursor-pointer">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                      <Terminal className="w-4 h-4 text-gray-200" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm text-white truncate font-medium">{session.title}</div>
                      <div className="text-xs text-gray-400 flex items-center gap-2 mt-0.5">
                        <span>{timeAgo(session.created_at)}</span>
                        <span className="text-white/10">·</span>
                        <span className="font-mono">{session.tokens_used.toLocaleString()} tokens</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Start */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Start</h2>
            <div className="bg-[#0d1110] border border-[#ffffff0a] rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Install krud CLI</span>
                <button onClick={handleCopy} className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-200 transition-colors cursor-pointer">
                  {copied ? (<><Check className="w-3.5 h-3.5 text-krud-green" /><span className="text-krud-green">Copied</span></>) : (<><Copy className="w-3.5 h-3.5" />Copy</>)}
                </button>
              </div>
              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-gray-400 overflow-x-auto">
                <span className="text-gray-200 select-none">$ </span>
                <span className="text-white">curl -fsSL https://install.krud.ai | sh</span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
