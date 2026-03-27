import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Krud AI Blog — CLI Agent Guides & Updates",
  description:
    "Guides, comparisons, and tutorials on CLI agents, AI terminal tools, and developer productivity. Learn how to use Krud AI — the autonomous CLI agent.",
  alternates: {
    canonical: "https://dabcloud.in/blog",
  },
  openGraph: {
    type: "website",
    url: "https://dabcloud.in/blog",
    title: "Krud AI Blog — CLI Agent Guides & Updates",
    description:
      "Guides, comparisons, and tutorials on CLI agents, AI terminal tools, and developer productivity.",
  },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Krud AI Blog",
  url: "https://dabcloud.in/blog",
  description:
    "Guides, comparisons, and tutorials on CLI agents, AI terminal tools, and developer productivity.",
  publisher: {
    "@type": "Organization",
    name: "Krud AI",
    url: "https://dabcloud.in",
  },
  blogPost: [
    {
      "@type": "BlogPosting",
      headline: "What is a CLI Agent? Complete Guide for Developers",
      url: "https://dabcloud.in/blog/what-is-a-cli-agent",
      datePublished: "2026-03-26",
      author: { "@type": "Organization", name: "Krud AI" },
    },
    {
      "@type": "BlogPosting",
      headline: "Best AI CLI Agents for Developers in 2026",
      url: "https://dabcloud.in/blog/best-ai-cli-agents-2026",
      datePublished: "2026-03-26",
      author: { "@type": "Organization", name: "Krud AI" },
    },
    {
      "@type": "BlogPosting",
      headline: "How to Install Krud AI CLI Agent — Step by Step Guide",
      url: "https://dabcloud.in/blog/how-to-install-krud-ai",
      datePublished: "2026-03-26",
      author: { "@type": "Organization", name: "Krud AI" },
    },
  ],
};

const articles = [
  {
    href: "/blog/what-is-a-cli-agent",
    title: "What is a CLI Agent? Complete Guide for Developers",
    description:
      "Learn what a CLI agent is, how it works, and why Krud AI is the most powerful autonomous CLI agent for developers in 2026.",
    date: "March 26, 2026",
    tag: "Guide",
  },
  {
    href: "/blog/best-ai-cli-agents-2026",
    title: "Best AI CLI Agents for Developers in 2026",
    description:
      "An honest comparison of the top AI CLI agents — Krud AI, GitHub Copilot CLI, and Warp AI — so you can choose the best tool for your workflow.",
    date: "March 26, 2026",
    tag: "Comparison",
  },
  {
    href: "/blog/how-to-install-krud-ai",
    title: "How to Install Krud AI CLI Agent — Step by Step Guide",
    description:
      "Get the Krud AI CLI agent running on your machine in under 60 seconds with our step-by-step install guide.",
    date: "March 26, 2026",
    tag: "Tutorial",
  },
];

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="mb-12">
          <p className="text-sm font-mono text-[#a07850] uppercase tracking-widest mb-3">
            Blog
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Krud AI Blog
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            CLI agent guides, developer tutorials, and updates from the Krud AI
            team.
          </p>
        </div>

        <div className="space-y-6">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="block group"
            >
              <article className="border border-white/5 bg-[#0d0d0d] rounded-xl p-6 hover:border-white/10 hover:bg-[#111111] transition-all duration-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#a07850] bg-[#a07850]/10 px-2.5 py-1 rounded-full">
                    {article.tag}
                  </span>
                  <span className="text-xs text-gray-600">{article.date}</span>
                </div>
                <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-100 transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {article.description}
                </p>
                <span className="inline-block mt-4 text-sm text-[#a07850] font-medium group-hover:underline">
                  Read article →
                </span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
