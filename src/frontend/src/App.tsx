import {
  BarChart2,
  CheckCircle,
  ClipboardList,
  Clock,
  CreditCard,
  Gift,
  MessageSquare,
  Monitor,
  ShoppingBag,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef } from "react";
import { SiAndroid, SiApple } from "react-icons/si";

// ─── Types ────────────────────────────────────────────────────────────────────

interface OfferCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  badge?: string;
}

// ─── Stars Background ─────────────────────────────────────────────────────────

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

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random(),
      speed: Math.random() * 0.008 + 0.003,
      phase: Math.random() * Math.PI * 2,
    }));

    let animId: number;
    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 1;
      for (const s of stars) {
        const a = 0.3 + 0.7 * Math.abs(Math.sin(t * s.speed + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 248, 220, ${a})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background:
          "linear-gradient(180deg, rgba(5,5,20,0.95) 0%, rgba(5,5,20,0.85) 100%)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid oklch(0.72 0.18 65 / 0.2)",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/assets/uploads/Logo-1.png"
            alt="Promotional Merchandise Logo"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </div>

        {/* Badge */}
        <div
          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide"
          style={{
            background: "oklch(0.72 0.18 65 / 0.15)",
            border: "1px solid oklch(0.72 0.18 65 / 0.4)",
            color: "oklch(0.85 0.18 70)",
            boxShadow: "0 0 16px oklch(0.72 0.18 65 / 0.2)",
          }}
        >
          <Star className="w-3.5 h-3.5 fill-current" />
          <span className="hidden sm:inline">For U.S. Residents Only</span>
          <span className="sm:hidden">U.S. Only</span>
        </div>
      </nav>
    </header>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      className="relative min-h-[75vh] flex items-center justify-center overflow-hidden"
      style={{ paddingTop: "5rem" }}
    >
      {/* Banner background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/assets/uploads/Banner-2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,5,20,0.55) 0%, rgba(5,5,20,0.65) 50%, rgba(5,5,20,0.90) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-[2] text-center px-4 sm:px-6 max-w-4xl mx-auto py-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span
            className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{
              background: "oklch(0.72 0.18 65 / 0.15)",
              border: "1px solid oklch(0.72 0.18 65 / 0.5)",
              color: "oklch(0.85 0.18 70)",
            }}
          >
            🇺🇸 Exclusive U.S. Residents Program
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="shimmer-text text-5xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight"
          style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.02em" }}
        >
          Promotional
          <br />
          Merchandise
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-xl sm:text-2xl font-semibold mb-4"
          style={{ color: "oklch(0.85 0.08 80)" }}
        >
          Exclusive Offers for U.S. Residents Only
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: "oklch(0.80 0.03 270)" }}
        >
          Unlock free gift cards, cash prizes, and paid survey rewards —
          available exclusively to U.S. residents. Choose your device and start
          claiming today.
        </motion.p>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 z-[2]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, oklch(0.08 0.025 270))",
        }}
      />
    </section>
  );
}

// ─── Apply Buttons Section ────────────────────────────────────────────────────

function ApplyButtonsSection() {
  const buttons = [
    {
      label: "Apply as Android User",
      sublabel: "For Android Devices",
      url: "https://singingfiles.com/show.php?l=0&u=2492531&id=73805",
      icon: <SiAndroid className="w-6 h-6" />,
      className: "btn-android",
      textColor: "oklch(0.92 0.05 145)",
    },
    {
      label: "Apply as iOS User",
      sublabel: "For iPhone & iPad",
      url: "https://singingfiles.com/show.php?l=0&u=2492531&id=73210",
      icon: <SiApple className="w-6 h-6" />,
      className: "btn-ios",
      textColor: "oklch(0.92 0.04 250)",
    },
    {
      label: "Apply as Desktop User",
      sublabel: "For PC & Mac",
      url: "https://singingfiles.com/show.php?l=0&u=2492531&id=73209",
      icon: <Monitor className="w-6 h-6" />,
      className: "btn-desktop",
      textColor: "oklch(0.92 0.04 300)",
    },
  ];

  return (
    <section className="relative z-10 py-14 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2
            className="text-2xl sm:text-3xl font-bold mb-2"
            style={{
              color: "oklch(0.80 0.20 68)",
              textShadow:
                "0 0 24px oklch(0.72 0.18 65 / 0.5), 0 0 48px oklch(0.72 0.18 65 / 0.25)",
            }}
          >
            Choose Your Device to Get Started
          </h2>
          <p style={{ color: "oklch(0.65 0.03 270)" }}>
            Select the option that matches your device and claim your reward
            now.
          </p>
        </motion.div>

        {/* Buttons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {buttons.map((btn, i) => (
            <motion.a
              key={btn.label}
              href={btn.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${btn.className} flex flex-col items-center justify-center gap-3 py-6 px-6 rounded-xl cursor-pointer no-underline`}
            >
              <div
                className="flex items-center justify-center w-14 h-14 rounded-full"
                style={{ background: "rgba(255,255,255,0.12)" }}
              >
                <span style={{ color: btn.textColor }}>{btn.icon}</span>
              </div>
              <div className="text-center">
                <div
                  className="font-bold text-lg leading-tight"
                  style={{ color: btn.textColor }}
                >
                  {btn.label}
                </div>
                <div
                  className="text-sm mt-0.5"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {btn.sublabel}
                </div>
              </div>
              <div
                className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                <Zap className="w-3 h-3" />
                Apply Now
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section Divider ─────────────────────────────────────────────────────────

function SectionDivider() {
  return <div className="section-divider mx-auto max-w-4xl my-2" />;
}

// ─── Offer Card ──────────────────────────────────────────────────────────────

function OfferCard({
  title,
  description,
  icon,
  badge,
  delay = 0,
}: OfferCard & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="card-cosmic rounded-xl p-6 flex flex-col gap-4"
    >
      {/* Icon + badge row */}
      <div className="flex items-start justify-between">
        <div
          className="flex items-center justify-center w-12 h-12 rounded-lg"
          style={{
            background: "oklch(0.72 0.18 65 / 0.12)",
            border: "1px solid oklch(0.72 0.18 65 / 0.3)",
          }}
        >
          <span style={{ color: "oklch(0.80 0.20 68)" }}>{icon}</span>
        </div>
        {badge && (
          <span
            className="text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide"
            style={{
              background: "oklch(0.72 0.18 65 / 0.15)",
              border: "1px solid oklch(0.72 0.18 65 / 0.3)",
              color: "oklch(0.85 0.18 70)",
            }}
          >
            {badge}
          </span>
        )}
      </div>

      {/* Title */}
      <h3
        className="text-lg font-bold leading-snug"
        style={{ color: "oklch(0.90 0.15 70)" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: "oklch(0.72 0.03 270)" }}
      >
        {description}
      </p>

      {/* CTA line */}
      <div
        className="flex items-center gap-2 text-xs font-semibold"
        style={{ color: "oklch(0.72 0.18 65)" }}
      >
        <CheckCircle className="w-3.5 h-3.5" />
        <span>Available for U.S. Residents</span>
      </div>
    </motion.div>
  );
}

// ─── Gift Cards Section ───────────────────────────────────────────────────────

function GiftCardsSection() {
  const cards: OfferCard[] = [
    {
      title: "$250 Visa Gift Card",
      description:
        "Earn a prepaid Visa card by participating in exclusive U.S. offers. Accepted anywhere Visa is used.",
      icon: <CreditCard className="w-5 h-5" />,
      badge: "Fast Claim",
    },
    {
      title: "$200 Walmart Gift Card",
      description:
        "Claim your Walmart gift card through quick and easy steps. Use it in-store or online nationwide.",
      icon: <ShoppingBag className="w-5 h-5" />,
      badge: "Limited",
    },
  ];

  return (
    <section className="relative z-10 py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10"
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background: "oklch(0.72 0.18 65 / 0.15)",
              border: "1px solid oklch(0.72 0.18 65 / 0.35)",
            }}
          >
            <Gift
              className="w-6 h-6"
              style={{ color: "oklch(0.80 0.20 68)" }}
            />
          </div>
          <div>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{
                color: "oklch(0.80 0.20 68)",
                textShadow:
                  "0 0 24px oklch(0.72 0.18 65 / 0.4), 0 0 48px oklch(0.72 0.18 65 / 0.2)",
                fontFamily: "Georgia, serif",
              }}
            >
              Free Gift Cards
            </h2>
            <p
              className="text-sm mt-1"
              style={{ color: "oklch(0.60 0.03 270)" }}
            >
              Earn top brand gift cards with simple tasks
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <OfferCard key={card.title} {...card} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Surveys Section ──────────────────────────────────────────────────────────

function SurveysSection() {
  const cards: OfferCard[] = [
    {
      title: "Earn $5–$50 Per Survey",
      description:
        "Share your opinions and get paid for every survey you complete. Top earners make $200+ per month.",
      icon: <MessageSquare className="w-5 h-5" />,
      badge: "Top Earner",
    },
    {
      title: "Product Testing Surveys",
      description:
        "Test new products and earn rewards for your honest feedback. Keep products and earn cash.",
      icon: <ClipboardList className="w-5 h-5" />,
      badge: "Keep Products",
    },
    {
      title: "Market Research Panels",
      description:
        "Join U.S. research panels and earn consistent survey income. Flexible hours, work from home.",
      icon: <BarChart2 className="w-5 h-5" />,
    },
    {
      title: "Quick 5-Minute Polls",
      description:
        "Complete short polls and accumulate reward points fast. Redeem points for cash or gift cards.",
      icon: <Clock className="w-5 h-5" />,
      badge: "Quick & Easy",
    },
  ];

  return (
    <section className="relative z-10 py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10"
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background: "oklch(0.72 0.18 65 / 0.15)",
              border: "1px solid oklch(0.72 0.18 65 / 0.35)",
            }}
          >
            <ClipboardList
              className="w-6 h-6"
              style={{ color: "oklch(0.80 0.20 68)" }}
            />
          </div>
          <div>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{
                color: "oklch(0.80 0.20 68)",
                textShadow:
                  "0 0 24px oklch(0.72 0.18 65 / 0.4), 0 0 48px oklch(0.72 0.18 65 / 0.2)",
                fontFamily: "Georgia, serif",
              }}
            >
              Taking Surveys to Get Rewarded
            </h2>
            <p
              className="text-sm mt-1"
              style={{ color: "oklch(0.60 0.03 270)" }}
            >
              Your opinion is worth real money
            </p>
          </div>
        </motion.div>

        {/* Offer Image Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 rounded-2xl overflow-hidden"
          style={{
            border: "1px solid oklch(0.72 0.18 65 / 0.25)",
            boxShadow:
              "0 0 40px oklch(0.72 0.18 65 / 0.12), 0 8px 32px rgba(0,0,0,0.4)",
          }}
        >
          <img
            src="/assets/uploads/7eb326aa7501bcc8a9f77727d1baf604-1.png"
            alt="Get Paid for Your Opinions – Sign Up to Start Earning Today"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <OfferCard key={card.title} {...card} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="relative z-10 py-10 px-4 sm:px-6 mt-8"
      style={{
        borderTop: "1px solid oklch(0.72 0.18 65 / 0.15)",
        background:
          "linear-gradient(180deg, transparent 0%, oklch(0.05 0.02 270 / 0.8) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          {/* Logo */}
          <img
            src="/assets/uploads/Logo-1.png"
            alt="Promotional Merchandise"
            className="h-8 w-auto object-contain opacity-70"
          />

          {/* Copyright */}
          <div
            className="text-xs leading-relaxed"
            style={{ color: "oklch(0.50 0.03 270)" }}
          >
            <p>© {year} Promotional Merchandise. For U.S. Residents Only.</p>
            <p className="mt-1">All offers subject to terms and conditions.</p>
          </div>

          {/* Caffeine attribution */}
          <p className="text-xs" style={{ color: "oklch(0.45 0.03 270)" }}>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                window.location.hostname,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: "oklch(0.65 0.10 70)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App Root ─────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div
      className="relative min-h-screen"
      style={{ background: "oklch(0.08 0.025 270)" }}
    >
      {/* Animated stars */}
      <StarsCanvas />

      {/* Fixed navbar */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        <AnimatePresence>
          {/* Hero */}
          <HeroSection />

          {/* Apply Buttons */}
          <ApplyButtonsSection />

          <SectionDivider />

          {/* Gift Cards */}
          <GiftCardsSection />

          <SectionDivider />

          {/* Surveys */}
          <SurveysSection />
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
