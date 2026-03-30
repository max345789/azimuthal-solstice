import { CommandWindow, Reveal, SectionHeading } from "@/components/site/ui";

const reviewLines = [
  { kind: "prompt", text: "prune docker images older than 30 days" },
  { kind: "agent", text: "Proposed destructive command detected. Approval required." },
  { kind: "output", text: 'docker image prune -a --filter "until=720h"' },
  { kind: "success", text: "User confirmed. 13.2 GB reclaimed. Summary written to history." },
] as const;

export function Features() {
  return (
    <section className="section-block">
      <div className="shell split-section">
        <Reveal>
          <SectionHeading
            eyebrow="Risk handling"
            title="Risky work stays reviewable."
            description="Krud is designed around approvals and readable proposals. That makes the UI sharper, because the product never asks the operator to trust a black box."
          />
          <ul className="detail-list">
            <li>Destructive commands can stop for Y/N confirmation before execution.</li>
            <li>Command proposals carry rationale and risk level alongside the shell text.</li>
            <li>Results return as a readable summary, not just raw terminal noise.</li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <CommandWindow
            title="approval boundary"
            label="review"
            lines={[...reviewLines]}
            footer="The product respects the moment where a human should stay in control."
          />
        </Reveal>
      </div>
    </section>
  );
}
