import { Reveal, SectionHeading } from "@/components/site/ui";

const proofItems = [
  {
    title: "Local history and token accounting",
    text: "Sessions, command proposals, and token budgets are tracked so the operator can decide with context.",
  },
  {
    title: "FastAPI control plane",
    text: "Account, billing, device auth, release metadata, and chat sessions already exist in the backend.",
  },
  {
    title: "Rust CLI plus daemon",
    text: "The product surface is not a mockup. It already has a CLI, a background process, and an installer path.",
  },
];

export function SocialProof() {
  return (
    <section className="section-block">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="What is real"
            title="This is not a landing page for a concept."
            description="The site now speaks in product truths instead of filler proof. These are already represented in the codebase."
            align="center"
          />
        </Reveal>

        <div className="proof-grid">
          {proofItems.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.08}
              className="proof-grid__item"
            >
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
