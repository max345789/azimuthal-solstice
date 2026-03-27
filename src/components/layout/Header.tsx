"use client";

import Link from "next/link";
import { User, Shield, ArrowUpRight, Rabbit, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full flex justify-center pt-4 sm:pt-6 px-4 sm:px-6 lg:px-12 fixed z-50 pointer-events-none">
        <div className="w-full max-w-[95%] flex items-center justify-between pointer-events-auto">

          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
              <Rabbit className="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="currentColor" />
            </div>
            <span className="text-lg sm:text-xl font-medium tracking-tight text-white">Krud AI</span>
          </div>

          {/* Center Nav Pill — desktop only */}
          <nav className="hidden lg:flex items-center bg-[#151515]/90 backdrop-blur-md border border-white/5 rounded-full px-2 py-2">
            <div className="flex items-center px-4 space-x-8 text-sm font-medium text-gray-300">
              <Link href="/" className="text-white hover:text-white transition-colors">Home</Link>
              <Link href="/dashboard" className="hover:text-white transition-colors">Terminal App</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link href="/#features" className="hover:text-white transition-colors">Features</Link>
              <Link href="/billing" className="hover:text-white transition-colors">Pricing</Link>
              <Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link>
            </div>
            <div className="flex items-center ml-4 pl-4 border-l border-white/10 gap-2">
              <Link href="/cli-auth" className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-medium transition-colors">
                CLI Login <ArrowUpRight className="w-3 h-3 text-gray-400" />
              </Link>
              <Link href="/dashboard" className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
                <Shield className="w-4 h-4 text-black" />
              </Link>
            </div>
          </nav>

          {/* Right — Dashboard + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/dashboard" className="hidden sm:flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300 transition-colors">
              <User className="w-4 h-4" />
              Dashboard
            </Link>
            {/* Mobile hamburger */}
            <button
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setMenuOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <nav
            className="absolute top-0 right-0 w-72 h-full bg-[#0d0d0d] border-l border-white/5 flex flex-col pt-20 pb-8 px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-1 text-sm font-medium text-gray-300">
              {[
                { href: "/", label: "Home" },
                { href: "/dashboard", label: "Terminal App" },
                { href: "/blog", label: "Blog" },
                { href: "/#features", label: "Features" },
                { href: "/billing", label: "Pricing" },
                { href: "/#faq", label: "FAQ" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 px-4 rounded-xl hover:bg-white/5 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/5 flex flex-col gap-3">
              <Link
                href="/cli-auth"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-sm font-medium transition-colors"
              >
                CLI Login <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/dashboard"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-black text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <Shield className="w-4 h-4" /> Dashboard
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
