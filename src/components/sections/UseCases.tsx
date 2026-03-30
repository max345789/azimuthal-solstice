import { CommandWindow, Reveal, SectionHeading } from "@/components/site/ui";

const daemonLines = [
  { kind: "command", text: 'krud run "nightly content plan for all active clients"' },
  { kind: "agent", text: "Queued for krudd. You can close the terminal." },
  { kind: "output", text: 'sqlite3 ~/.krud/local.db "select id,status from local_tasks limit 3"' },
  { kind: "success", text: "Background daemon picked it up and streamed logs back into the session." },
] as const;

export function UseCases() {
  return (
    <section className="section-block">
      <div className="shell split-section is-reverse">
        <Reveal>
          <SectionHeading
            eyebrow="Background work"
            title="Foreground focus, background execution."
            description="The CLI can queue long-running tasks into the daemon so the workflow still feels fast even when the work is not."
          />
          <ul className="detail-list">
            <li>The daemon continues jobs while the terminal is free for the next decision.</li>
            <li>Local SQLite state keeps task history, session continuity, and status checks simple.</li>
            <li>The same product language works for ad-hoc fixes and repeatable operational jobs.</li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <CommandWindow
            title="krudd queue"
            label="background"
            lines={[...daemonLines]}
            footer="Queue now, inspect later, and keep the command trail attached to the session."
          />
        </Reveal>
      </div>
    </section>
  );
}
