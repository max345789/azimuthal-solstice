"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, User, Bell, Shield, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { API_BASE_URL } from "@/lib/config";

function DiamondIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M8 0l3 8-3 8-3-8z" />
    </svg>
  );
}

export default function SettingsPage() {
  const [email, setEmail] = useState("—");
  const [name, setName] = useState("—");

  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("krud_token") : null;
    if (!token) return;
    fetch(`${API_BASE_URL}/v1/account/me`, { headers: { Authorization: `Bearer ${token}` } })
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data?.email) setEmail(data.email);
        if (data?.name) setName(data.name);
        else if (data?.email) setName(data.email.split("@")[0]);
      })
      .catch(() => {});
  }, []);

  const handleRotateTokens = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("krud_token");
      window.location.href = "/";
    }
  };

  const sections = [
    {
      icon: User,
      title: "Account",
      description: "Your email address and account details",
      items: [
        { label: "Email", value: email, type: "text" as const },
        { label: "Display name", value: name, type: "text" as const },
      ],
    },
    {
      icon: Terminal,
      title: "CLI",
      description: "Manage your active CLI sessions",
      items: [
        { label: "Active sessions", value: "1 device connected", type: "info" as const },
      ],
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Control when krud AI sends you emails",
      items: [
        { label: "Usage alerts", value: "Enabled", type: "toggle" as const },
        { label: "Billing updates", value: "Enabled", type: "toggle" as const },
      ],
    },
    {
      icon: Shield,
      title: "Security",
      description: "Manage your account security",
      items: [
        { label: "Session tokens", value: "Rotate all tokens", type: "action" as const },
      ],
    },
  ];

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
            <span className="text-sm text-gray-400">Settings</span>
          </div>
          <Link href="/dashboard" className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" /> Dashboard
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10 relative z-10 space-y-6">
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * i }}
            className="bg-[#0d1110] border border-[#ffffff0a] rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                <section.icon className="w-4 h-4 text-gray-300" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{section.title}</div>
                <div className="text-xs text-gray-400">{section.description}</div>
              </div>
            </div>

            <div className="space-y-4 divide-y divide-white/5">
              {section.items.map((item) => (
                <div key={item.label} className="flex items-center justify-between pt-4 first:pt-0">
                  <span className="text-sm text-gray-400">{item.label}</span>
                  {item.type === "action" ? (
                    <button
                      onClick={handleRotateTokens}
                      className="text-xs text-gray-200 border border-white/10 px-3 py-1.5 rounded-lg hover:border-red-500/40 hover:text-red-400 transition-colors cursor-pointer"
                    >
                      {item.value}
                    </button>
                  ) : item.type === "toggle" ? (
                    <span className="text-xs text-gray-200 bg-white/5 px-2.5 py-1 rounded-full">{item.value}</span>
                  ) : (
                    <span className="text-sm text-white font-mono">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </main>
    </div>
  );
}
