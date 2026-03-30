"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, GitBranch, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandMark } from "@/components/site/BrandMark";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
  { href: "/blog", label: "Journal" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const MotionDiv = motion.div;

  return (
    <>
      <div className="site-ambient" aria-hidden="true">
        <span className="site-ambient__glow site-ambient__glow-primary" />
        <span className="site-ambient__glow site-ambient__glow-secondary" />
        <span className="site-ambient__grid" />
      </div>

      <header className="site-header">
        <div className="shell site-header__inner">
          <Link href="/" className="brand-link" aria-label="Krud AI home">
            <BrandMark />
          </Link>

          <nav className="site-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`site-nav__link ${
                  pathname === item.href ? "is-active" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="site-header__actions">
            <a
              className="button button-secondary header-link-desktop"
              href="https://github.com/max345789/krud-ai"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <ArrowUpRight size={14} />
            </a>
            <Link href="/docs" className="button button-primary header-primary">
              Get started
            </Link>
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <MotionDiv
              className="mobile-menu"
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mobile-menu__links">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="mobile-menu__link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="mobile-menu__actions">
                <Link
                  href="/docs"
                  className="button button-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  Open docs
                </Link>
                <a
                  className="button button-secondary"
                  href="https://github.com/max345789/krud-ai"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository
                </a>
                <a
                  className="button button-secondary"
                  href="https://github.com/max345789/azimuthal-solstice"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitBranch size={14} />
                  Site repo
                </a>
              </div>
            </MotionDiv>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}
