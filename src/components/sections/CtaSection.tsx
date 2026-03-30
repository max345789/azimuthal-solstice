import Link from "next/link";
import { Reveal, SectionHeading } from "@/components/site/ui";

export function CtaSection() {
  return (
    <section className="section-block">
      <div className="shell">
        <Reveal className="cta-band">
          <SectionHeading
            eyebrow="Start here"
            title="Install it, log in from the terminal, and test the loop yourself."
            description="The fastest path is still the clearest one: install, run krud login, approve the device, and ask for something that would normally cost you ten minutes of shell recall."
          />
          <div className="cta-band__actions">
            <Link href="/docs" className="button button-primary">
              Open installation guide
            </Link>
            <Link href="/features" className="button button-secondary">
              See the full capability map
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
