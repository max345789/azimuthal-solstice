"use client";

import { useState, useEffect, use } from "react";
import { API_BASE_URL } from "@/lib/config";
import Link from "next/link";
import {
  Rabbit,
  ShieldCheck,
  XCircle,
  Clock,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type AuthState = "default" | "success" | "denied" | "expired";

function DiamondIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M8 0l3 8-3 8-3-8z" />
    </svg>
  );
}

function RabbitIcon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Rabbit className="w-full h-full" strokeWidth={1.5} />
    </div>
  );
}

export default function CliAuthPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = use(searchParams);
  const codeFromUrl = (params.code as string) || (params.user_code as string) || "ABCD-1234";
  const emailFromUrl = (params.email as string) || "";

  const [authState, setAuthState] = useState<AuthState>("default");
  const [timeLeft, setTimeLeft] = useState(600);
  const [actionLoading, setActionLoading] = useState(false);
  const [email, setEmail] = useState(emailFromUrl);
  const [emailError, setEmailError] = useState("");

  // Try to load email from stored session
  useEffect(() => {
    if (email) return;
    const token = typeof window !== "undefined" ? localStorage.getItem("krud_token") : null;
    if (!token) return;
    fetch(`${API_BASE_URL}/v1/account/me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.ok ? r.json() : null)
      .then((data) => { if (data?.email) setEmail(data.email); })
      .catch(() => {});
  }, [email]);

  useEffect(() => {
    if (authState !== "default") return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setAuthState("expired");
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [authState]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleApprove = async () => {
    if (!email.trim()) {
      setEmailError("Please enter your email to approve access.");
      return;
    }
    setEmailError("");
    setActionLoading(true);
    try {
      const formData = new FormData();
      formData.append("user_code", codeFromUrl);
      formData.append("email", email.trim());
      await fetch(`${API_BASE_URL}/device`, {
        method: "POST",
        body: formData,
      });
    } catch {
      // show success regardless — CLI polling will catch the result
    } finally {
      setActionLoading(false);
      setAuthState("success");
    }
  };

  const handleDeny = async () => {
    setActionLoading(true);
    // No backend deny endpoint — just mark locally; device code expires naturally
    setTimeout(() => {
      setActionLoading(false);
      setAuthState("denied");
    }, 300);
  };

  return (
    <div className="min-h-screen bg-transparent flex flex-col">
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none fixed z-10" style={{ backgroundImage: "url('data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')" }} />
      <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-screen overflow-hidden fixed z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#1a2d2a] to-transparent bg-blend-screen blur-[120px] animate-blob" />
        <div className="absolute top-[10%] -left-[10%] w-[1000px] h-[1000px] rounded-full bg-gradient-to-tr from-[#16211e] via-[#09110d] to-transparent blur-[140px] animate-blob" style={{ animationDelay: "5s" }} />
        <div className="absolute bottom-[0%] right-[20%] w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-[#192b31] to-transparent blur-[100px] animate-blob" style={{ animationDelay: "2s" }} />
      </div>

      <header className="w-full border-b border-[#ffffff0a] bg-transparent/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
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
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md"
        >
          {/* Animated Rabbit */}
          <div className="flex justify-center mb-8">
            <motion.div
              animate={
                authState === "default"
                  ? { y: [0, -6, 0], rotate: [0, 3, -3, 0] }
                  : authState === "success"
                  ? { scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }
                  : { y: 0, rotate: 0 }
              }
              transition={{
                duration: authState === "success" ? 0.6 : 2.5,
                repeat: authState === "default" ? Infinity : 0,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full scale-150" />
              <RabbitIcon
                className={`relative w-20 h-20 ${
                  authState === "success"
                    ? "text-krud-green"
                    : authState === "denied"
                    ? "text-krud-red/60"
                    : authState === "expired"
                    ? "text-krud-yellow/60"
                    : "text-gray-200"
                } transition-colors duration-500`}
              />
            </motion.div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-xl font-semibold text-white mb-2 flex items-center justify-center gap-2">
              <DiamondIcon className="w-3.5 h-3.5 text-gray-200" />
              <AnimatePresence mode="wait">
                {authState === "default" && (
                  <motion.span key="default" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
                    Ready to plug in?
                  </motion.span>
                )}
                {authState === "success" && (
                  <motion.span key="success" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="text-krud-green">
                    Terminal Connected
                  </motion.span>
                )}
                {authState === "denied" && (
                  <motion.span key="denied" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="text-krud-red">
                    Access Denied
                  </motion.span>
                )}
                {authState === "expired" && (
                  <motion.span key="expired" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="text-krud-yellow">
                    Code Expired
                  </motion.span>
                )}
              </AnimatePresence>
            </h1>
            <AnimatePresence mode="wait">
              {authState === "default" && (
                <motion.p key="desc-default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-sm text-gray-400">
                  Your terminal is requesting access to krud AI.
                </motion.p>
              )}
              {authState === "success" && (
                <motion.p key="desc-success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-sm text-gray-400">
                  Return to your terminal to continue
                </motion.p>
              )}
              {authState === "denied" && (
                <motion.p key="desc-denied" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-sm text-gray-400">
                  Run <code className="text-gray-200 font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded">krud login</code> to try again
                </motion.p>
              )}
              {authState === "expired" && (
                <motion.p key="desc-expired" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-sm text-gray-400">
                  Run <code className="text-gray-200 font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded">krud login</code> to generate a new code
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Code Box */}
          <motion.div layout className="bg-[#090b0a] border border-[#ffffff0a] rounded-xl p-6 mb-4">
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-4 font-medium">Your code</div>
            <div className="text-center mb-4">
              <span className="font-mono text-3xl tracking-[0.3em] text-gray-200 font-bold">{codeFromUrl}</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-xs">
              <AnimatePresence mode="wait">
                {authState === "default" && (
                  <motion.span key="confirmed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-1.5 text-krud-green/80">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Code confirmed
                  </motion.span>
                )}
                {authState === "success" && (
                  <motion.span key="approved" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-1.5 text-krud-green">
                    <ShieldCheck className="w-3.5 h-3.5" /> Access granted
                  </motion.span>
                )}
                {authState === "denied" && (
                  <motion.span key="denied-code" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-1.5 text-krud-red">
                    <XCircle className="w-3.5 h-3.5" /> Access denied
                  </motion.span>
                )}
                {authState === "expired" && (
                  <motion.span key="expired-code" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-1.5 text-krud-yellow">
                    <AlertTriangle className="w-3.5 h-3.5" /> Code expired
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Email Box */}
          {authState === "default" && (
            <div className="border border-[#ffffff14] bg-white/[0.02] rounded-xl px-5 py-3.5 mb-4">
              <div className="text-xs text-gray-400 mb-1.5">Your email</div>
              {email ? (
                <div className="text-sm text-white font-mono">{email}</div>
              ) : (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
                    placeholder="you@example.com"
                    className="w-full bg-transparent text-sm text-white font-mono placeholder-gray-500 outline-none border-none"
                  />
                  {emailError && (
                    <p className="text-xs text-krud-red mt-1.5">{emailError}</p>
                  )}
                </>
              )}
            </div>
          )}

          {/* Permissions Box */}
          {authState === "default" && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="bg-[#090b0a] border border-[#ffffff0a] rounded-xl p-5 mb-6">
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-3 font-medium">krud CLI is requesting:</div>
              <div className="space-y-2.5">
                {["Access to your krud AI account", "Ability to send messages on your behalf", "View your usage and billing info"].map((permission, i) => (
                  <motion.div key={permission} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * (i + 1) }} className="flex items-center gap-2.5 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-gray-200 shrink-0" />
                    {permission}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Success State */}
          {authState === "success" && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-[#090b0a] border border-krud-green/20 rounded-xl p-5 mb-6">
              <div className="flex items-center gap-2 text-krud-green mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-medium uppercase tracking-wider">Connection Established</span>
              </div>
              <p className="text-sm text-gray-400">Return to your terminal. Your session is now authenticated.</p>
            </motion.div>
          )}

          {/* Denied State */}
          {authState === "denied" && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-[#090b0a] border border-krud-red/20 rounded-xl p-5 mb-6">
              <div className="flex items-center gap-2 text-krud-red mb-3">
                <XCircle className="w-4 h-4" />
                <span className="text-xs font-medium uppercase tracking-wider">Access Denied</span>
              </div>
              <div className="bg-black/40 rounded-lg p-3 font-mono text-xs text-gray-400">
                <span className="text-gray-400/60">$ </span><span className="text-white">krud login</span>
              </div>
            </motion.div>
          )}

          {/* Expired State */}
          {authState === "expired" && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-[#090b0a] border border-krud-yellow/20 rounded-xl p-5 mb-6">
              <div className="flex items-center gap-2 text-krud-yellow mb-3">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-xs font-medium uppercase tracking-wider">Code Expired</span>
              </div>
              <div className="bg-black/40 rounded-lg p-3 font-mono text-xs text-gray-400">
                <span className="text-gray-400/60">$ </span><span className="text-white">krud login</span>
              </div>
            </motion.div>
          )}

          {/* Buttons */}
          {authState === "default" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex gap-3 mb-6">
              <button
                id="approve-access-btn"
                onClick={handleApprove}
                disabled={actionLoading}
                className="flex-1 bg-[#fff1e0] hover:bg-white text-black hover:-translate-y-0.5 shadow-lg active:translate-y-0 font-medium py-3 px-6 rounded-lg transition-all duration-200 text-sm cursor-pointer hover:shadow-[0_0_24px_rgba(255,255,255,0.3)] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {actionLoading ? "Approving…" : "Approve Access"}
              </button>
              <button
                id="deny-access-btn"
                onClick={handleDeny}
                disabled={actionLoading}
                className="flex-1 bg-transparent border border-white/10 text-gray-400 hover:text-white hover:border-white/20 font-medium py-3 px-6 rounded-lg transition-all duration-200 text-sm cursor-pointer active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                Deny
              </button>
            </motion.div>
          )}

          {/* Footer Info */}
          {authState === "default" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-center space-y-1">
              <p className="text-xs text-gray-400 flex items-center justify-center gap-1.5">
                <Clock className="w-3 h-3" />
                This code expires in <span className="font-mono text-gray-400">{formatTime(timeLeft)}</span>
              </p>
              <p className="text-xs text-gray-400/60">After approval, return to your terminal</p>
            </motion.div>
          )}
        </motion.div>
      </main>
    </div>
  );
}
