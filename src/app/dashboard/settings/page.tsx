"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, User, Shield, Terminal, Copy, Check, Pencil, X } from "lucide-react";
import { motion } from "framer-motion";
import { API_BASE_URL } from "@/lib/config";

function DiamondIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M8 0l3 8-3 8-3-8z" />
    </svg>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handle = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={handle} className="p-1.5 rounded-md hover:bg-white/10 transition-colors cursor-pointer">
      {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5 text-gray-400" />}
    </button>
  );
}

export default function SettingsPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [usageEvents, setUsageEvents] = useState(0);
  const [subStatus, setSubStatus] = useState("trialing");
  const [cliVersion, setCliVersion] = useState("—");
  const [loading, setLoading] = useState(true);

  // name edit state
  const [editing, setEditing] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");

  const installCmd = `curl -fsSL https://install.krud.ai | sh`;

  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("krud_token") : null;
    if (!token) { setLoading(false); return; }
    const h = { Authorization: `Bearer ${token}` };

    Promise.all([
      fetch(`${API_BASE_URL}/v1/account/me`, { headers: h }).then(r => r.ok ? r.json() : null),
      fetch(`${API_BASE_URL}/v1/account/subscription`, { headers: h }).then(r => r.ok ? r.json() : null),
      fetch(`${API_BASE_URL}/v1/releases/latest`).then(r => r.ok ? r.json() : null),
    ]).then(([me, sub, rel]) => {
      if (me) {
        setEmail(me.email ?? "");
        const displayName = me.name || me.email?.split("@")[0] || "";
        setName(displayName);
        setNameInput(displayName);
        setUsageEvents(me.usage_events ?? 0);
      }
      if (sub) setSubStatus(sub.status ?? "trialing");
      if (rel) setCliVersion(rel.version ?? "—");
    }).catch(() => {}).finally(() => setLoading(false));
  }, []);

  const saveName = async () => {
    const trimmed = nameInput.trim();
    if (!trimmed || trimmed === name) { setEditing(false); return; }
    setSaving(true);
    setSaveError("");
    try {
      const token = localStorage.getItem("krud_token");
      const res = await fetch(`${API_BASE_URL}/v1/account/me`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ name: trimmed }),
      });
      if (!res.ok) throw new Error();
      setName(trimmed);
      setEditing(false);
    } catch {
      setSaveError("Failed to save. Try again.");
    } finally {
      setSaving(false);
    }
  };

  const signOutAll = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("krud_token");
      window.location.href = "/";
    }
  };

  const initials = name ? name.slice(0, 2).toUpperCase() : "??";

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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10 relative z-10 space-y-5">

        {/* Account */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="bg-[#0d1110] border border-[#ffffff0a] rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
              <User className="w-4 h-4 text-gray-300" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Account</div>
              <div className="text-xs text-gray-400">Your profile and plan details</div>
            </div>
          </div>

          {/* Avatar + name */}
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white font-semibold text-sm shrink-0">
              {loading ? "…" : initials}
            </div>
            <div className="min-w-0 flex-1">
              {editing ? (
                <div className="flex items-center gap-2">
                  <input
                    autoFocus
                    value={nameInput}
                    onChange={e => setNameInput(e.target.value)}
                    onKeyDown={e => { if (e.key === "Enter") saveName(); if (e.key === "Escape") setEditing(false); }}
                    className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-white/30 w-48"
                    maxLength={120}
                  />
                  <button onClick={saveName} disabled={saving} className="text-xs text-white bg-white/10 px-3 py-1.5 rounded-lg hover:bg-white/20 transition-colors cursor-pointer disabled:opacity-50">
                    {saving ? "Saving…" : "Save"}
                  </button>
                  <button onClick={() => { setEditing(false); setNameInput(name); setSaveError(""); }} className="p-1.5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer">
                    <X className="w-3.5 h-3.5 text-gray-400" />
                  </button>
                  {saveError && <span className="text-xs text-red-400">{saveError}</span>}
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-white">{loading ? "—" : name}</span>
                  <button onClick={() => setEditing(true)} className="p-1 hover:bg-white/10 rounded-md transition-colors cursor-pointer">
                    <Pencil className="w-3 h-3 text-gray-500" />
                  </button>
                </div>
              )}
              <div className="text-xs text-gray-400 mt-0.5">{loading ? "—" : email}</div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-white/[0.03] rounded-xl p-4">
              <div className="text-xs text-gray-400 mb-1">Plan</div>
              <div className="text-sm font-semibold text-white capitalize">{loading ? "—" : subStatus}</div>
            </div>
            <div className="bg-white/[0.03] rounded-xl p-4">
              <div className="text-xs text-gray-400 mb-1">Total messages</div>
              <div className="text-sm font-semibold text-white font-mono">{loading ? "—" : usageEvents.toLocaleString()}</div>
            </div>
            <div className="bg-white/[0.03] rounded-xl p-4 col-span-2 sm:col-span-1">
              <div className="text-xs text-gray-400 mb-1">Email</div>
              <div className="text-sm font-semibold text-white truncate">{loading ? "—" : email}</div>
            </div>
          </div>
        </motion.div>

        {/* CLI */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="bg-[#0d1110] border border-[#ffffff0a] rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-gray-300" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">CLI</div>
              <div className="text-xs text-gray-400">Install and manage krud in your terminal</div>
            </div>
          </div>

          <div className="space-y-4 divide-y divide-white/5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Latest version</span>
              <span className="text-sm text-white font-mono">v{cliVersion}</span>
            </div>
            <div className="pt-4">
              <div className="text-sm text-gray-400 mb-2">Install command</div>
              <div className="flex items-center gap-2 bg-black/40 border border-white/5 rounded-xl px-4 py-3 font-mono text-xs text-gray-300">
                <span className="flex-1 truncate">{installCmd}</span>
                <CopyButton text={installCmd} />
              </div>
            </div>
            <div className="pt-4 flex items-center justify-between">
              <span className="text-sm text-gray-400">Update CLI</span>
              <div className="flex items-center gap-2 bg-black/40 border border-white/5 rounded-xl px-3 py-2 font-mono text-xs text-gray-300">
                <span>krud update</span>
                <CopyButton text="krud update" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Security */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="bg-[#0d1110] border border-[#ffffff0a] rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
              <Shield className="w-4 h-4 text-gray-300" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Security</div>
              <div className="text-xs text-gray-400">Session and access management</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-white">Sign out all devices</div>
              <div className="text-xs text-gray-400 mt-0.5">Removes your session token from this browser and CLI</div>
            </div>
            <button
              onClick={signOutAll}
              className="text-xs text-gray-200 border border-white/10 px-3 py-1.5 rounded-lg hover:border-red-500/40 hover:text-red-400 transition-colors cursor-pointer shrink-0"
            >
              Sign out
            </button>
          </div>
        </motion.div>

      </main>
    </div>
  );
}
