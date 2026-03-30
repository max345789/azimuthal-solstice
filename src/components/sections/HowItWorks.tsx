import { Reveal, SectionHeading } from "@/components/site/ui";

const productFacts = [
  {
    title: "Device-code auth",
    text: "Sign in from the terminal with browser approval. No pasted tokens or extension handshakes.",
  },
  {
    title: "Approval before damage",
    text: "Destructive commands stay gated. The product is designed around review, not blind execution.",
  },
  {
    title: "Daemon queue",
    text: "Long-running work can leave the foreground and continue through the local background daemon.",
  },
  {
    title: "Release manifests",
    text: "The CLI can discover signed release artifacts and pull the right binary for the current machine.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-block">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Product depth"
            title="The details already exist."
            description="The backend and CLI already support the product claims, so the UX can be crisp without pretending to do more than it does."
          />
        </Reveal>

        <div className="feature-ledger">
          {productFacts.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.07}
              className="feature-ledger__item"
            >
              <span className="feature-ledger__index">0{index + 1}</span>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
