import Link from "next/link";
import { GitBranch } from "lucide-react";
import { BrandMark } from "@/components/site/BrandMark";

const footerGroups = [
  {
    title: "Product",
    links: [
      { href: "/", label: "Overview" },
      { href: "/features", label: "Capabilities" },
      { href: "/pricing", label: "Pricing" },
      { href: "/login", label: "Access" },
    ],
  },
  {
    title: "Build",
    links: [
      { href: "/docs", label: "Documentation" },
      { href: "/blog", label: "Release journal" },
      {
        href: "https://github.com/max345789/krud-ai",
        label: "GitHub",
        external: true,
      },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/terms", label: "Terms" },
      { href: "/privacy", label: "Privacy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <div className="site-footer__lead">
          <BrandMark />
          <p>
            Terminal-native AI for people who want receipts, approvals, and a
            command trail instead of a glossy demo.
          </p>
          <div className="site-footer__status">
            <span className="status-dot" />
            <span>Mac-first CLI. Device auth. Background daemon.</span>
          </div>
        </div>

        <div className="site-footer__links">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="footer-heading">{group.title}</p>
              {group.links.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link key={item.label} href={item.href} className="footer-link">
                    {item.label}
                  </Link>
                ),
              )}
            </div>
          ))}

          <div>
            <p className="footer-heading">Open source</p>
            <a
              href="https://github.com/max345789/azimuthal-solstice"
              target="_blank"
              rel="noreferrer"
              className="footer-link footer-link-inline"
            >
              <GitBranch size={14} />
              Explore this repo
            </a>
          </div>
        </div>
      </div>

      <div className="shell site-footer__bottom">
        <p>© {new Date().getFullYear()} Krud AI. MIT licensed.</p>
        <p>Type the outcome. Review the plan. Run with confidence.</p>
      </div>
    </footer>
  );
}
