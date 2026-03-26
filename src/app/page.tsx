import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Features } from "@/components/sections/Features";
import { UseCases } from "@/components/sections/UseCases";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SocialProof } from "@/components/sections/SocialProof";
import { CtaSection } from "@/components/sections/CtaSection";

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Krud AI",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "macOS, Linux",
  description:
    "Krud AI is an autonomous AI CLI agent. Run commands, fix bugs, and ship code faster — right from your terminal.",
  url: "https://dabcloud.in",
  downloadUrl: "https://install.krud.ai",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free trial included",
  },
  featureList: [
    "Autonomous CLI agent",
    "Run terminal commands with AI",
    "Fix bugs automatically",
    "Works in any terminal",
    "macOS and Linux support",
    "No browser required",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a CLI agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A CLI agent is an AI-powered tool that runs autonomously inside your command-line interface (terminal). It understands natural language instructions, executes shell commands, fixes errors, and completes developer tasks without manual input.",
      },
    },
    {
      "@type": "Question",
      name: "What is Krud AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Krud AI is an autonomous CLI agent for developers. It lives in your terminal and can run commands, fix bugs, scaffold projects, and ship code — all from a single natural language instruction.",
      },
    },
    {
      "@type": "Question",
      name: "How do I install the Krud AI CLI agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Install Krud AI with one command: curl -fsSL https://install.krud.ai | sh. It supports macOS (Apple Silicon and Intel) and Linux (x86_64).",
      },
    },
    {
      "@type": "Question",
      name: "How is Krud AI different from other CLI agents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Krud AI is built for full autonomy — it proposes commands, explains its reasoning, and executes multi-step workflows in your terminal without switching to a browser. It uses a rolling token budget system and works with your existing shell environment.",
      },
    },
    {
      "@type": "Question",
      name: "Is Krud AI CLI agent free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Krud AI includes a free trial. You can install it for free and start using the CLI agent immediately with krud login and krud chat.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="flex flex-col min-h-screen selection:bg-[#4a3f35] selection:text-[#fff1e0]">
        <Header />
        <main className="flex-1 w-full relative z-0">
          <Hero />
          <ProblemSolution />
          <Features />
          <UseCases />
          <HowItWorks />
          <SocialProof />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
