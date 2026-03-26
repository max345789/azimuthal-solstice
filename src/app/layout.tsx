import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://dabcloud.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Krud AI — Autonomous AI Terminal Agent",
    template: "%s | Krud AI",
  },
  description:
    "Krud AI is an autonomous AI terminal agent. One-click execution — run commands, fix bugs, and ship code faster right from your terminal. No browser required.",
  keywords: [
    "AI terminal agent",
    "autonomous terminal",
    "CLI AI assistant",
    "AI command line tool",
    "developer AI tool",
    "krud AI",
    "AI coding assistant",
    "terminal automation",
    "one-click AI execution",
    "AI developer workflow",
  ],
  authors: [{ name: "Krud AI", url: BASE_URL }],
  creator: "Krud AI",
  publisher: "Krud AI",
  category: "technology",

  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Krud AI",
    title: "Krud AI — Autonomous AI Terminal Agent",
    description:
      "One-click autonomous workflows. Run commands, fix bugs, and ship code faster — right from your terminal.",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Krud AI — Autonomous AI Terminal Agent",
    description:
      "One-click autonomous workflows. Run commands, fix bugs, and ship code faster — right from your terminal.",
    creator: "@krudai",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // ── Google Search Console verification ─────────────────────────────────────
  // Replace value with the code from:
  // https://search.google.com/search-console → Add Property → HTML tag
  verification: {
    google: "AtUrm0DLVzGU_5iT_PtKiFXjHwIuOAsH4s_FeGuT1CA",
  },

  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-full flex flex-col bg-[#050505] text-white selection:bg-white/20`}>
        <div className="relative z-10 flex flex-col flex-1 pb-10">
          {children}
        </div>
      </body>
    </html>
  );
}
