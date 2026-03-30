import { Reveal, SectionHeading } from "@/components/site/ui";

const workflow = [
  {
    title: "State the outcome",
    text: "Describe the result you need in plain language. Krud translates that request into shell actions with context.",
  },
  {
    title: "Review the plan",
    text: "Risky operations stop for confirmation. Safe tasks can run now or move into the daemon queue.",
  },
  {
    title: "Read the receipt",
    text: "Krud explains what happened, records usage, and keeps enough history to continue the thread later.",
  },
];

export function ProblemSolution() {
  return (
    <section className="section-block">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="The loop"
            title="One product idea, end to end."
            description="Describe the outcome, review the command, then read a clean receipt. Every section of the product supports that same flow."
            align="center"
          />
        </Reveal>

        <div className="workflow-grid">
          {workflow.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.08}
              className="workflow-step"
            >
              <span className="workflow-step__index">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
