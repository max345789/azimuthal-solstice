import { MarketingShell } from "@/components/layout/MarketingShell";
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
    "Krud AI is a terminal-native AI agent that plans commands, asks before risky actions, executes in context, and explains what happened.",
  url: "https://dabcloud.in",
  downloadUrl: "https://install.krud.ai",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free plan and trial available",
  },
  featureList: [
    "Plain-English command planning",
    "Readable execution receipts",
    "Device-code authentication",
    "Command approval before risky work",
    "Background daemon queue",
    "Release manifest discovery",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Krud AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Krud AI is a terminal-native assistant that turns natural-language requests into command-line work, asks before risky actions, executes in context, and explains the results.",
      },
    },
    {
      "@type": "Question",
      name: "How do I install Krud AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Install Krud AI with one command: curl -fsSL https://install.krud.ai | sh.",
      },
    },
    {
      "@type": "Question",
      name: "Does Krud AI require browser access?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only for device-code approval during login. The product remains terminal-first after authentication.",
      },
    },
    {
      "@type": "Question",
      name: "How does Krud AI handle risky commands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Krud AI keeps risky work reviewable by surfacing command proposals and pausing for approval before destructive actions run.",
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
      <MarketingShell>
        <Hero />
        <ProblemSolution />
        <Features />
        <UseCases />
        <HowItWorks />
        <SocialProof />
        <CtaSection />
      </MarketingShell>
    </>
  );
}
