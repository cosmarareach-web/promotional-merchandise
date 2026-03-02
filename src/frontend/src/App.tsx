import { motion } from "motion/react";
import type { ReactNode } from "react";

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/assets/Banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-slate-950/70" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-14">
        <div className="mb-8 inline-flex rounded-full border border-cyan-300/40 bg-cyan-400/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-100">
          Lead Magnet: 50 AI Prompts for Viral Content
        </div>

        <div className="mb-10">
          <img
            src="/assets/uploads/Logo-1.png"
            alt="Lead Magnet Logo"
            className="h-20 w-auto sm:h-24"
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-6xl"
        >
          Build Content 3× Faster With 50 Proven AI Prompts
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 max-w-2xl text-lg text-slate-100 sm:text-xl"
        >
          Free swipe file used by creators, freelancers, and digital operators
          to generate hooks, scripts, and sales content in minutes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          <a
            href="#optin"
            className="inline-flex rounded-xl bg-cyan-400 px-7 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Get Instant Access →
          </a>
          <p className="mt-3 text-sm text-slate-200">
            Free download. No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ContentSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
      <h2 className="text-2xl font-bold text-cyan-200 sm:text-3xl">{title}</h2>
      <div className="mt-5 text-base leading-relaxed text-slate-200">{children}</div>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <HeroSection />

      <ContentSection title="Problem">
        <p>Most creators don’t struggle with ideas.</p>
        <p className="mt-3">They struggle with:</p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>Writing hooks that stop the scroll</li>
          <li>Turning ideas into structured scripts</li>
          <li>Staying consistent</li>
          <li>Converting views into income</li>
        </ul>
        <p className="mt-4">AI helps — but only if you know what to ask.</p>
      </ContentSection>

      <ContentSection title="What You Get">
        <p>Inside this free pack:</p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>10 Viral Hook Prompts</li>
          <li>10 YouTube Script Framework Prompts</li>
          <li>10 Reels / TikTok Short Prompts</li>
          <li>10 Sales &amp; CTA Conversion Prompts</li>
          <li>10 Productivity &amp; Automation Prompts</li>
        </ul>
        <p className="mt-4">All copy-paste ready.</p>
        <p className="mt-2">
          Works with ChatGPT, Claude, Gemini, and most AI tools.
        </p>
      </ContentSection>

      <ContentSection title="Outcome">
        <p>With these prompts, you’ll be able to:</p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>Generate scroll-stopping hooks in seconds</li>
          <li>Write full scripts without creative blocks</li>
          <li>Repurpose long videos into short content</li>
          <li>Improve engagement and watch time</li>
          <li>Create higher-converting offers</li>
        </ul>
        <p className="mt-4">This is not theory. It’s a workflow.</p>
      </ContentSection>

      <ContentSection title="Bonus">
        <p>After download, you’ll also get access to:</p>
        <p className="mt-3 font-semibold text-cyan-100">
          The AI Creator Operating System (optional upgrade)
        </p>
        <p className="mt-2">
          A complete plug-and-play content + income system.
        </p>
      </ContentSection>

      <ContentSection title="Trust">
        <p>Built for:</p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>Freelancers</li>
          <li>Content creators</li>
          <li>Agency owners</li>
          <li>Digital solopreneurs</li>
        </ul>
        <p className="mt-4">No fake scarcity.</p>
        <p>No “secret hacks.”</p>
        <p>Just structured systems.</p>
      </ContentSection>

      <section id="optin" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="rounded-2xl border border-cyan-400/25 bg-slate-900/80 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-cyan-200 sm:text-3xl">
            Enter your email to unlock the 50 AI Prompts.
          </h2>
          <form className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Get Instant Access
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-800 px-4 py-8 text-center text-sm text-slate-400 sm:px-6">
        <p>Privacy respected.</p>
        <p>Educational content only.</p>
        <p>Results vary based on effort and execution.</p>
      </footer>
    </div>
  );
}

export default App;
