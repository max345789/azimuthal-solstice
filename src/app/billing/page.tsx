"use client";

import { useState } from "react";
import { API_BASE_URL } from "@/lib/config";
import Link from "next/link";
import {
  Zap,
  Clock,
  Check,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Shield,
  Infinity,
  MessagesSquare,
  CreditCard,
  Receipt,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

function DiamondIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M8 0l3 8-3 8-3-8z" />
    </svg>
  );
}

const freePlanFeatures = [
  { icon: Zap, text: "40,000 tokens per 5h window" },
  { icon: MessagesSquare, text: "1 concurrent session" },
  { icon: Shield, text: "Community support" },
  { icon: Clock, text: "Standard response time" },
];

const proPlanFeatures = [
  { icon: Zap, text: "200,000 tokens per 5h window" },
  { icon: Infinity, text: "Unlimited concurrent sessions" },
  { icon: Shield, text: "Priority support" },
  { icon: Sparkles, text: "Early access to new models" },
  { icon: Clock, text: "Faster response time" },
];

export default function BillingPage() {
  const [selectedPlan, setSelectedPlan] = useState<"free" | "pro">("free");
  const [portalLoading, setPortalLoading] = useState(false);

  const handleBillingPortal = async () => {
    setPortalLoading(true);
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("krud_token") : null;
      const res = await fetch(`${API_BASE_URL}/v1/billing/portal`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });
      if (res.ok) {
        const data = await res.json();
        if (data.url) window.open(data.url, "_blank");
      }
    } catch {
      // silently ignore — user isn't logged in yet
    } finally {
      setPortalLoading(false);
    }
  };
  const tokensUsed = 12400;
  const tokensTotal = 40000;
  const tokenPercentage = (tokensUsed / tokensTotal) * 100;

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
      {/* Header */}
      <header className="w-full border-b border-[#ffffff0a] bg-transparent/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 group">
              <DiamondIcon className="w-4 h-4 text-gray-200" />
              <span className="font-semibold text-white text-sm tracking-tight">
                krud AI
              </span>
            </Link>
            <span className="text-white/10">·</span>
            <span className="text-sm text-gray-400">Billing</span>
          </div>
          <Link
            href="/dashboard"
            className="text-xs text-gray-400 hover:text-white transition-colors"
          >
            ← Dashboard
          </Link>
        </div>
      </header>

      <main className="flex-1 px-4 sm:px-6 py-10 max-w-4xl mx-auto w-full">
        {/* Current Plan */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Current Plan
          </h2>
          <div className="bg-[#0d1110] border border-[#ffffff0a] rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <DiamondIcon className="w-4 h-4 text-gray-200" />
                </div>
                <div>
                  <div className="font-semibold text-white flex items-center gap-2">
                    Trialing
                    <span className="text-[10px] bg-white/10 text-white px-2 py-0.5 rounded-full font-medium uppercase tracking-wider">
                      Active
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">
                    40,000 tokens per 5-hour window
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-krud-yellow">
                <Clock className="w-4 h-4" />
                <span className="font-medium">Expires in 7 days</span>
              </div>
            </div>

            {/* Token Bar */}
            <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
              <span>Token usage</span>
              <span className="font-mono">
                {tokensUsed.toLocaleString()} / {tokensTotal.toLocaleString()}
              </span>
            </div>
            <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${tokenPercentage}%` }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="h-full bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 rounded-full"
              />
            </div>
            <div className="text-right mt-1.5">
              <span className="text-xs text-gray-400">
                {Math.round(tokenPercentage)}% used
              </span>
            </div>
          </div>
        </motion.div>

        {/* Upgrade Plans */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-10"
        >
          <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Upgrade Plan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Free Plan */}
            <div
              className={`bg-[#0d1110] border rounded-2xl p-6 transition-all duration-200 cursor-pointer ${
                selectedPlan === "free"
                  ? "border-white/20"
                  : "border-[#ffffff0a] hover:border-[#ffffff14]"
              }`}
              onClick={() => setSelectedPlan("free")}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">Free</h3>
              </div>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-white">$0</span>
                <span className="text-sm text-gray-400">/month</span>
              </div>

              <div className="space-y-3 mb-6">
                {freePlanFeatures.map((feature) => (
                  <div
                    key={feature.text}
                    className="flex items-center gap-2.5 text-sm text-gray-400"
                  >
                    <feature.icon className="w-4 h-4 text-gray-400/60 shrink-0" />
                    {feature.text}
                  </div>
                ))}
              </div>

              <div className="bg-white/5 text-center py-2.5 rounded-lg text-sm text-gray-400 font-medium">
                Current Plan
              </div>
            </div>

            {/* Pro Plan */}
            <div
              className={`relative bg-[#0d1110] border rounded-2xl p-6 transition-all duration-200 cursor-pointer ${
                selectedPlan === "pro"
                  ? "border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.12)]"
                  : "border-[#ffffff0a] hover:border-white/20/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]"
              }`}
              onClick={() => setSelectedPlan("pro")}
            >
              {/* Popular Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-white text-black text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                  Popular
                </span>
              </div>

              <div className="flex items-center justify-between mb-2 mt-1">
                <h3 className="text-lg font-semibold text-white">Pro</h3>
                <Sparkles className="w-4 h-4 text-gray-200" />
              </div>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-white">$19</span>
                <span className="text-sm text-gray-400">/month</span>
              </div>

              <div className="space-y-3 mb-6">
                {proPlanFeatures.map((feature) => (
                  <div
                    key={feature.text}
                    className="flex items-center gap-2.5 text-sm text-white/80"
                  >
                    <Check className="w-4 h-4 text-gray-200 shrink-0" />
                    {feature.text}
                  </div>
                ))}
              </div>

              <Link
                href="/payment-success"
                id="upgrade-now-btn"
                className="block bg-white hover:opacity-90 text-black text-center py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-[0_0_24px_rgba(255,255,255,0.3)] active:scale-[0.98] group"
              >
                <span className="flex items-center justify-center gap-1.5">
                  Upgrade Now
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-10" />

        {/* Billing History */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
            Billing History
          </h2>

          <div className="bg-[#0d1110] border border-[#ffffff0a] rounded-2xl p-8">
            <div className="flex flex-col items-center justify-center text-center py-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-3">
                <Receipt className="w-5 h-5 text-gray-400/50" />
              </div>
              <p className="text-sm text-gray-400 mb-1">No invoices yet</p>
              <p className="text-xs text-gray-400/60">
                Invoices will appear here after your first payment
              </p>
            </div>
          </div>
        </motion.div>

        {/* Manage Billing Portal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <button
            onClick={handleBillingPortal}
            disabled={portalLoading}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 text-sm text-gray-400 hover:text-white hover:border-white/20 transition-all duration-200 cursor-pointer group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <CreditCard className="w-4 h-4" />
            {portalLoading ? "Opening…" : "Manage Billing Portal"}
            <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
          </button>
        </motion.div>
      </main>
    </div>
  );
}
