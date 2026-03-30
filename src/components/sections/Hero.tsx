import Link from "next/link";
import { ArrowRight, Bot } from "lucide-react";
import {
  CommandWindow,
  CopyCommand,
  Reveal,
} from "@/components/site/ui";

const installCommand = "curl -fsSL https://install.krud.ai | sh";

const heroLines = [
  { kind: "command", text: "krud chat" },
  { kind: "prompt", text: "audit why the staging daemon stopped processing jobs" },
  { kind: "agent", text: "Checking launchd status, local queue, and recent logs..." },
  { kind: "output", text: 'launchctl print gui/501/in.krud.ai | rg "state|last exit"' },
  { kind: "success", text: "Daemon stalled after a socket timeout. Restart queued safely." },
] as const;

const tapeItems = [
  'krud chat "trace why nginx is returning 502"',
  'krud run "nightly deploy sanity checks"',
  'krud chat "find all containers using more than 1GB"',
  "krud status",
  "krud daemon install",
  'krud chat "summarize the last failed build"',
];

export function Hero() {
  return (
    <section className="hero-shell">
      <div className="shell hero-grid">
        <Reveal className="hero-copy">
          <p className="hero-kicker">
            <Bot size={14} />
            Terminal-native operator loop
          </p>
          <h1>The terminal agent that gets real work done.</h1>
          <p className="hero-lead">
            Krud takes the full loop, not just autocomplete: plan the command,
            ask before risky changes, execute in context, read the output, and
            keep the trail visible.
          </p>

          <div className="hero-actions">
            <CopyCommand command={installCommand} label="Install Krud" />
            <div className="button-row">
              <Link href="/docs" className="button button-primary">
                Read the docs
                <ArrowRight size={15} />
              </Link>
              <Link href="/pricing" className="button button-secondary">
                View pricing
              </Link>
            </div>
          </div>

          <div className="hero-notes">
            <span className="status-pill">Mac-first CLI</span>
            <span className="status-pill">Browser approval only when needed</span>
            <span className="status-pill">
              Rust CLI + daemon + FastAPI control plane
            </span>
          </div>
        </Reveal>

        <Reveal className="hero-stage" delay={0.1}>
          <CommandWindow
            title="krud operator session"
            label="live"
            lines={[...heroLines]}
            footer="Command proposals, usage budgets, and session history stay visible after the answer."
          />
          <Reveal className="hero-stage__note" delay={0.18}>
            <strong>Built for operators, not screenshots.</strong>
            <p>
              Device auth, daemon queueing, billing hooks, and release manifests
              are already part of the product surface.
            </p>
          </Reveal>
        </Reveal>
      </div>

      <div className="command-tape">
        <div className="command-tape__track">
          {[...tapeItems, ...tapeItems].map((item, index) => (
            <span key={`${item}-${index}`} className="command-tape__item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
