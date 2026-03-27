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
    default: "Krud AI — CLI tool that runs commands from plain English",
    template: "%s | Krud AI",
  },
  description:
    "Krud is a CLI tool that lives in your terminal. Describe what you need and it figures out the right commands, runs them, and shows you exactly what happened.",
  keywords: [
    "CLI tool",
    "terminal tool",
    "developer CLI",
    "command line tool",
    "krud AI",
    "terminal productivity",
    "CLI helper",
    "developer tools",
    "shell commands",
    "terminal assistant",
  ],
  authors: [{ name: "Krud AI", url: BASE_URL }],
  creator: "Krud AI",
  publisher: "Krud AI",
  category: "technology",

  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Krud AI",
    title: "Krud AI — Type what you want. Krud runs it.",
    description:
      "Describe what you need in plain English. Krud figures out the terminal commands, runs them, and tells you what happened.",
    locale: "en_US",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Krud AI — Type what you want. Krud runs it.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Krud AI — Type what you want. Krud runs it.",
    description:
      "Describe what you need in plain English. Krud figures out the terminal commands, runs them, and tells you what happened.",
    creator: "@krudai",
    images: [`${BASE_URL}/og-image.png`],
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Krud AI",
  url: "https://dabcloud.in",
  description: "Krud AI builds CLI tools for developers who live in the terminal",
  sameAs: ["https://github.com/max345789/krud-ai"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-full flex flex-col bg-[#050505] text-white selection:bg-white/20`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <div className="relative z-10 flex flex-col flex-1 pb-10">
          {children}
        </div>
      </body>
    </html>
  );
}
