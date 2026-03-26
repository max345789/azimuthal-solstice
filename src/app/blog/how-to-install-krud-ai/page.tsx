import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Install Krud AI CLI Agent — Step by Step Guide",
  description:
    "Install the Krud AI CLI agent in under 60 seconds with this step-by-step guide. One curl command, then krud login and krud chat — that's it.",
  keywords: [
    "how to install krud ai",
    "krud ai cli agent install",
    "install krud ai",
    "krud ai setup",
    "CLI agent install",
  ],
  alternates: {
    canonical: "https://dabcloud.in/blog/how-to-install-krud-ai",
  },
  openGraph: {
    type: "article",
    url: "https://dabcloud.in/blog/how-to-install-krud-ai",
    title: "How to Install Krud AI CLI Agent — Step by Step Guide",
    description:
      "Install the Krud AI CLI agent in under 60 seconds. One curl command, then krud login and krud chat.",
    publishedTime: "2026-03-26",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Install Krud AI CLI Agent — Step by Step Guide",
  description:
    "Install the Krud AI CLI agent in under 60 seconds with this step-by-step guide.",
  url: "https://dabcloud.in/blog/how-to-install-krud-ai",
  datePublished: "2026-03-26",
  dateModified: "2026-03-26",
  author: {
    "@type": "Organization",
    name: "Krud AI",
    url: "https://dabcloud.in",
  },
  publisher: {
    "@type": "Organization",
    name: "Krud AI",
    url: "https://dabcloud.in",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://dabcloud.in/blog/how-to-install-krud-ai",
  },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Install Krud AI CLI Agent",
  description:
    "Install the Krud AI autonomous CLI agent on macOS or Linux in under 60 seconds.",
  step: [
    {
      "@type": "HowToStep",
      name: "Run the install script",
      text: "Run: curl -fsSL https://install.krud.ai | sh in your terminal.",
      position: 1,
    },
    {
      "@type": "HowToStep",
      name: "Authenticate with krud login",
      text: "Run krud login to authenticate your account.",
      position: 2,
    },
    {
      "@type": "HowToStep",
      name: "Start using Krud AI",
      text: "Run krud chat to start an autonomous CLI session.",
      position: 3,
    },
  ],
};

function CodeBlock({ children }: { children: string }) {
  return (
    <div className="my-4 bg-[#0d0d0d] border border-white/10 rounded-xl p-5 overflow-x-auto">
      <code className="text-[#a07850] font-mono text-sm md:text-base whitespace-pre">
        {children}
      </code>
    </div>
  );
}

export default function HowToInstallKrudAiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-10 font-mono">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-white transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-gray-400">How to Install Krud AI</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#a07850] bg-[#a07850]/10 px-2.5 py-1 rounded-full">
              Tutorial
            </span>
            <time className="text-xs text-gray-600" dateTime="2026-03-26">
              March 26, 2026
            </time>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-5 leading-tight">
            How to Install Krud AI CLI Agent
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Get the Krud AI autonomous CLI agent running on your machine in
            under 60 seconds. Three commands. No configuration files.
          </p>
        </header>

        {/* Prerequisites */}
        <div className="border border-white/5 bg-[#0d0d0d] rounded-xl p-5 mb-10">
          <p className="text-sm font-semibold text-white mb-2">
            Prerequisites
          </p>
          <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside pl-1">
            <li>macOS (Apple Silicon or Intel) or Linux (x86_64)</li>
            <li>
              <code className="text-[#a07850] font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded">
                curl
              </code>{" "}
              available in your shell (standard on all systems)
            </li>
            <li>An internet connection</li>
          </ul>
        </div>

        <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed space-y-10">
          {/* Step 1 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Step 1: Run the Install Script
            </h2>
            <p>
              Open your terminal and run the following command. The installer
              detects your OS and architecture automatically — no manual setup
              required.
            </p>
            <CodeBlock>curl -fsSL https://install.krud.ai | sh</CodeBlock>
            <p>
              The installer will:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                Detect your platform (macOS arm64 / amd64, Linux x86_64)
              </li>
              <li>
                Download the correct Krud AI binary from the official release
                endpoint
              </li>
              <li>
                Place it in{" "}
                <code className="text-[#a07850] font-mono text-sm bg-white/5 px-1.5 py-0.5 rounded">
                  /usr/local/bin/krud
                </code>{" "}
                (or{" "}
                <code className="text-[#a07850] font-mono text-sm bg-white/5 px-1.5 py-0.5 rounded">
                  ~/.local/bin/krud
                </code>{" "}
                if you don&apos;t have root)
              </li>
              <li>Verify the installation and print the version</li>
            </ul>
            <p>
              Installation typically completes in under 10 seconds on a normal
              connection.
            </p>
          </section>

          {/* Step 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Step 2: Authenticate with{" "}
              <code className="text-[#a07850] font-mono">krud login</code>
            </h2>
            <p>
              After installation, authenticate your Krud AI account:
            </p>
            <CodeBlock>krud login</CodeBlock>
            <p>
              This opens a short authentication flow. If you don&apos;t have an
              account yet, you can create one for free at{" "}
              <Link href="/" className="text-[#a07850] hover:underline">
                dabcloud.in
              </Link>
              . A free trial is included — no credit card required.
            </p>
            <p>
              Your credentials are stored securely in your OS keychain. You
              only need to log in once per machine.
            </p>
          </section>

          {/* Step 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Step 3: Start Your First Session with{" "}
              <code className="text-[#a07850] font-mono">krud chat</code>
            </h2>
            <p>
              You&apos;re ready. Start an autonomous CLI session:
            </p>
            <CodeBlock>krud chat</CodeBlock>
            <p>
              The Krud AI CLI agent will greet you with an interactive prompt.
              Describe what you want to accomplish in plain English. For
              example:
            </p>
            <CodeBlock>{`krud chat
> Find all Python files in this project with TODO comments and list them`}</CodeBlock>
            <p>
              Krud will plan the task, propose the commands it intends to run,
              and execute them — asking for confirmation on any irreversible
              actions.
            </p>
          </section>

          {/* Additional commands */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Other Useful Commands
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 font-mono mb-1">
                  # Check installed version
                </p>
                <CodeBlock>krud --version</CodeBlock>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-mono mb-1">
                  # View help and available commands
                </p>
                <CodeBlock>krud --help</CodeBlock>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-mono mb-1">
                  # Update Krud AI to the latest version
                </p>
                <CodeBlock>krud update</CodeBlock>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              Troubleshooting
            </h2>
            <div className="space-y-5">
              <div>
                <h3 className="text-base font-semibold text-white mb-1">
                  &ldquo;command not found: krud&rdquo;
                </h3>
                <p className="text-sm">
                  The binary may not be in your{" "}
                  <code className="text-[#a07850] font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded">
                    PATH
                  </code>
                  . Run{" "}
                  <code className="text-[#a07850] font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded">
                    export PATH=&quot;$HOME/.local/bin:$PATH&quot;
                  </code>{" "}
                  and add it to your shell profile (
                  <code className="text-[#a07850] font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded">
                    ~/.zshrc
                  </code>{" "}
                  or{" "}
                  <code className="text-[#a07850] font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded">
                    ~/.bashrc
                  </code>
                  ).
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-1">
                  Permission denied during install
                </h3>
                <p className="text-sm">
                  If{" "}
                  <code className="text-[#a07850] font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded">
                    /usr/local/bin
                  </code>{" "}
                  is not writable, the installer falls back to{" "}
                  <code className="text-[#a07850] font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded">
                    ~/.local/bin
                  </code>
                  . Alternatively, prefix the command with{" "}
                  <code className="text-[#a07850] font-mono text-xs bg-white/5 px-1.5 py-0.5 rounded">
                    sudo
                  </code>
                  .
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-16 border border-white/5 bg-[#0d0d0d] rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Start using Krud AI now
          </h3>
          <p className="text-gray-400 mb-5 text-sm">
            Free trial. macOS &amp; Linux. No credit card.
          </p>
          <div className="bg-[#151515] border border-white/10 rounded-xl px-6 py-3 inline-block mb-5 font-mono text-[#a07850] text-sm break-all">
            curl -fsSL https://install.krud.ai | sh
          </div>
          <br />
          <Link
            href="/"
            className="inline-block bg-white text-black font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-gray-200 transition-colors mt-2"
          >
            Learn More →
          </Link>
        </div>
      </article>
    </>
  );
}
