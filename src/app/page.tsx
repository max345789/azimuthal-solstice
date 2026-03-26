import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Features } from "@/components/sections/Features";
import { UseCases } from "@/components/sections/UseCases";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SocialProof } from "@/components/sections/SocialProof";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
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
  );
}
