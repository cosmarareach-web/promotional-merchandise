import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { type ReactNode, useEffect, useRef } from "react";

function StarsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 160 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.4,
      speed: Math.random() * 0.008 + 0.003,
      phase: Math.random() * Math.PI * 2,
    }));

    let frame = 0;
    let rafId = 0;

    const draw = () => {
      frame += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const star of stars) {
        const alpha =
          0.25 + 0.7 * Math.abs(Math.sin(frame * star.speed + star.phase));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 248, 220, ${alpha})`;
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.55 }}
    />
  );
}

function SectionCard({ children }: { children: ReactNode }) {
  return (
    <div
      className="rounded-2xl p-6 sm:p-8"
      style={{
        border: "1px solid oklch(0.72 0.18 65 / 0.24)",
        background:
          "linear-gradient(180deg, oklch(0.12 0.03 270 / 0.92), oklch(0.09 0.02 270 / 0.95))",
        boxShadow: "0 8px 40px rgba(0,0,0,0.35)",
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const promptCategories = [
    "10 Viral Hook Prompts",
    "10 YouTube Script Framework Prompts",
    "10 Reels / TikTok Short Prompts",
    "10 Sales & CTA Conversion Prompts",
    "10 Productivity & Automation Prompts",
  ];

  const outcomes = [
    "Generate scroll-stopping hooks in seconds",
    "Write full scripts without creative blocks",
    "Repurpose long videos into short content",
    "Improve engagement and watch time",
    "Create higher-converting offers",
  ];

  const audiences = [
    "Freelancers",
    "Content creators",
    "Agency owners",
    "Digital solopreneurs",
  ];

  return (
    <div
      className="relative min-h-screen"
      style={{ background: "oklch(0.08 0.025 270)" }}
    >
      <StarsCanvas />

      <main className="relative z-10 px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionCard>
              <div
                className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                style={{
                  background: "oklch(0.72 0.18 65 / 0.2)",
                  color: "oklch(0.9 0.1 75)",
                }}
              >
                <Sparkles className="h-3.5 w-3.5" /> Lead Magnet
              </div>
              <p
                className="text-sm font-medium"
                style={{ color: "oklch(0.72 0.04 270)" }}
              >
                50 AI Prompts for Viral Content
              </p>
              <h1
                className="mt-2 text-4xl font-bold leading-tight sm:text-5xl"
                style={{
                  color: "oklch(0.91 0.12 72)",
                  fontFamily: "Georgia, serif",
                }}
              >
                Build Content 3× Faster With 50 Proven AI Prompts
              </h1>
              <p
                className="mt-4 max-w-3xl text-lg"
                style={{ color: "oklch(0.82 0.03 270)" }}
              >
                Free swipe file used by creators, freelancers, and digital
                operators to generate hooks, scripts, and sales content in
                minutes.
              </p>
              <button
                type="button"
                className="mt-6 rounded-xl px-6 py-3 text-sm font-bold uppercase tracking-wide"
                style={{
                  background: "oklch(0.75 0.19 67)",
                  color: "oklch(0.2 0.03 270)",
                }}
              >
                Get Instant Access →
              </button>
              <p
                className="mt-2 text-xs"
                style={{ color: "oklch(0.64 0.03 270)" }}
              >
                Free download. No spam. Unsubscribe anytime.
              </p>
            </SectionCard>
          </motion.section>

          <SectionCard>
            <h2
              className="text-2xl font-bold"
              style={{ color: "oklch(0.9 0.1 72)" }}
            >
              Most creators don’t struggle with ideas.
            </h2>
            <p
              className="mt-4 text-base"
              style={{ color: "oklch(0.8 0.03 270)" }}
            >
              They struggle with:
            </p>
            <ul
              className="mt-3 list-disc space-y-2 pl-5"
              style={{ color: "oklch(0.78 0.03 270)" }}
            >
              <li>Writing hooks that stop the scroll</li>
              <li>Turning ideas into structured scripts</li>
              <li>Staying consistent</li>
              <li>Converting views into income</li>
            </ul>
            <p className="mt-4" style={{ color: "oklch(0.82 0.03 270)" }}>
              AI helps — but only if you know what to ask.
            </p>
          </SectionCard>

          <SectionCard>
            <h2
              className="text-2xl font-bold"
              style={{ color: "oklch(0.9 0.1 72)" }}
            >
              Inside this free pack:
            </h2>
            <ul className="mt-4 space-y-3">
              {promptCategories.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3"
                  style={{ color: "oklch(0.82 0.03 270)" }}
                >
                  <CheckCircle2
                    className="h-5 w-5"
                    style={{ color: "oklch(0.78 0.18 67)" }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p
              className="mt-4 text-sm"
              style={{ color: "oklch(0.66 0.03 270)" }}
            >
              All copy-paste ready. Works with ChatGPT, Claude, Gemini, and most
              AI tools.
            </p>
          </SectionCard>

          <SectionCard>
            <h2
              className="text-2xl font-bold"
              style={{ color: "oklch(0.9 0.1 72)" }}
            >
              With these prompts, you’ll be able to:
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {outcomes.map((item) => (
                <li
                  key={item}
                  className="rounded-lg p-3 text-sm"
                  style={{
                    background: "oklch(0.14 0.03 270)",
                    color: "oklch(0.8 0.03 270)",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
            <p
              className="mt-4 font-semibold"
              style={{ color: "oklch(0.86 0.05 75)" }}
            >
              This is not theory. It’s a workflow.
            </p>
          </SectionCard>

          <SectionCard>
            <h2
              className="text-2xl font-bold"
              style={{ color: "oklch(0.9 0.1 72)" }}
            >
              After download, you’ll also get access to:
            </h2>
            <p
              className="mt-3 text-lg"
              style={{ color: "oklch(0.82 0.03 270)" }}
            >
              The AI Creator Operating System (optional upgrade) — a complete
              plug-and-play content + income system.
            </p>
          </SectionCard>

          <SectionCard>
            <div className="flex items-center gap-2">
              <ShieldCheck
                className="h-5 w-5"
                style={{ color: "oklch(0.78 0.18 67)" }}
              />
              <h2
                className="text-2xl font-bold"
                style={{ color: "oklch(0.9 0.1 72)" }}
              >
                Built for:
              </h2>
            </div>
            <ul
              className="mt-4 list-disc space-y-2 pl-5"
              style={{ color: "oklch(0.82 0.03 270)" }}
            >
              {audiences.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p
              className="mt-4 text-sm"
              style={{ color: "oklch(0.66 0.03 270)" }}
            >
              No fake scarcity. No “secret hacks.” Just structured systems.
            </p>
          </SectionCard>

          <SectionCard>
            <h2
              className="text-2xl font-bold"
              style={{ color: "oklch(0.9 0.1 72)" }}
            >
              Enter your email to unlock the 50 AI Prompts.
            </h2>
            <form className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border px-4 py-3 text-sm"
                style={{
                  borderColor: "oklch(0.72 0.18 65 / 0.3)",
                  background: "oklch(0.12 0.03 270)",
                  color: "oklch(0.87 0.03 270)",
                }}
              />
              <button
                type="submit"
                className="rounded-xl px-5 py-3 text-sm font-bold uppercase tracking-wide"
                style={{
                  background: "oklch(0.75 0.19 67)",
                  color: "oklch(0.2 0.03 270)",
                }}
              >
                Get Instant Access
              </button>
            </form>
          </SectionCard>
        </div>
      </main>

      <footer
        className="relative z-10 px-4 pb-10 pt-2 text-center text-xs sm:px-6"
        style={{ color: "oklch(0.58 0.03 270)" }}
      >
        <p>Privacy respected.</p>
        <p>Educational content only.</p>
        <p>Results vary based on effort and execution.</p>
      </footer>
    </div>
  );
}
