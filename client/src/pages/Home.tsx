/* ============================================================
   ONECARDSAU Home Page — "Deep Signal" theme
   Hero → Stats → Features → Wallet Integration → NFC Workflow
   → Industries → Social Proof → CTA
   ============================================================ */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight, CheckCircle2, Zap, Shield, BarChart3, Smartphone,
  Wifi, Globe, ChevronRight, Star, Play, TrendingUp, Users, CreditCard
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── Intersection observer hook for scroll reveal ── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ── Counter animation ── */
function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useReveal(0.3);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 1800;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [visible, target]);
  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

/* ── Feature Card ── */
function FeatureCard({ icon: Icon, title, desc, delay = 0 }: { icon: React.ElementType; title: string; desc: string; delay?: number }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className="glow-card rounded-2xl p-6"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.5s cubic-bezier(0.23,1,0.32,1) ${delay}ms`,
      }}
    >
      <div className="feature-icon mb-4">
        <Icon size={20} />
      </div>
      <h3 className="text-base font-semibold text-white mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
        {title}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
        {desc}
      </p>
    </div>
  );
}

/* ── Industry Tab ── */
const INDUSTRIES = [
  {
    id: "cafe",
    label: "Cafés",
    icon: "☕",
    headline: "Turn every coffee into a return visit",
    desc: "Stamp cards are dead. Onecardsau replaces paper loyalty with a digital wallet pass that customers actually use — no app download required.",
    benefits: ["Instant NFC tap-to-earn stamps", "Push notifications for offers", "Birthday reward automation", "Real-time redemption tracking"],
    stat: { value: "3.4×", label: "higher repeat visit rate" },
  },
  {
    id: "restaurant",
    label: "Restaurants",
    icon: "🍽️",
    headline: "Reward diners, fill tables on slow nights",
    desc: "Drive covers during off-peak hours with targeted wallet offers. Track spend per visit and build customer profiles automatically.",
    benefits: ["Spend-based points accumulation", "Table booking integration", "Seasonal campaign builder", "Group dining rewards"],
    stat: { value: "28%", label: "increase in average spend" },
  },
  {
    id: "retail",
    label: "Retail",
    icon: "🛍️",
    headline: "Points that actually drive purchase decisions",
    desc: "Connect your POS to Onecardsau in minutes. Every transaction earns points, every point drives the next purchase.",
    benefits: ["POS system integration", "Multi-tier loyalty tiers", "Product-specific bonus points", "Omnichannel (in-store + online)"],
    stat: { value: "41%", label: "reduction in churn" },
  },
  {
    id: "hospitality",
    label: "Hospitality",
    icon: "🏨",
    headline: "Elevate the guest experience from check-in",
    desc: "From hotel stays to spa visits, Onecardsau creates a seamless loyalty journey across every touchpoint in your property.",
    benefits: ["Room upgrade rewards", "F&B spend tracking", "Partner venue network", "Corporate account management"],
    stat: { value: "67%", label: "of guests enrol on first visit" },
  },
];

export default function Home() {
  const [activeIndustry, setActiveIndustry] = useState("cafe");
  const industry = INDUSTRIES.find((i) => i.id === activeIndustry)!;
  const heroReveal = useReveal(0.05);
  const statsReveal = useReveal(0.2);
  const walletReveal = useReveal(0.15);

  return (
    <div className="min-h-screen bg-[#0F1117] text-white">
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 60% 40%, rgba(37,99,235,0.18) 0%, transparent 70%), #0F1117`,
        }}
      >
        {/* Hero background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/manus-storage/hero-bg_92d55a3e.png"
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1117] via-[#0F1117]/70 to-transparent" />
        </div>

        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-40 z-0" />

        <div className="container relative z-10 pt-24 pb-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div
              ref={heroReveal.ref}
              style={{
                opacity: heroReveal.visible ? 1 : 0,
                transform: heroReveal.visible ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              <span className="tag-cobalt mb-6 inline-block">
                Apple Wallet · Google Wallet · NFC
              </span>
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-6"
              style={{
                fontFamily: "Syne, sans-serif",
                opacity: heroReveal.visible ? 1 : 0,
                transform: heroReveal.visible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.6s ease 80ms, transform 0.6s ease 80ms",
              }}
            >
              One card.{" "}
              <span className="gradient-text">Every customer.</span>
              <br />
              Every visit.
            </h1>

            <p
              className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl"
              style={{
                fontFamily: "Inter, sans-serif",
                opacity: heroReveal.visible ? 1 : 0,
                transform: heroReveal.visible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.6s ease 160ms, transform 0.6s ease 160ms",
              }}
            >
              Onecardsau is the loyalty infrastructure for modern commerce — digital wallet passes, NFC tap-to-earn, and merchant analytics in a single platform.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{
                opacity: heroReveal.visible ? 1 : 0,
                transform: heroReveal.visible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.6s ease 240ms, transform 0.6s ease 240ms",
              }}
            >
              <Link href="/contact" className="btn-cobalt text-base px-7 py-3.5 rounded-xl inline-flex items-center gap-2 justify-center">
                Book a Demo
                <ArrowRight size={16} />
              </Link>
              <Link href="/" className="btn-ghost-cobalt text-base px-7 py-3.5 rounded-xl inline-flex items-center gap-2 justify-center">
                <Play size={15} />
                Watch 2-min overview
              </Link>
            </div>

            {/* Trust signals */}
            <div
              className="flex flex-wrap items-center gap-5 mt-10"
              style={{
                opacity: heroReveal.visible ? 1 : 0,
                transition: "opacity 0.6s ease 360ms",
              }}
            >
              {["SOC 2 Type II", "PCI DSS Compliant", "GDPR Ready", "99.9% Uptime SLA"].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5 text-xs text-slate-400" style={{ fontFamily: "Inter, sans-serif" }}>
                  <CheckCircle2 size={13} className="text-blue-400" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero product image — right side */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 hidden xl:block z-10 pr-8">
          <div
            style={{
              opacity: heroReveal.visible ? 1 : 0,
              transform: heroReveal.visible ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.8s ease 300ms, transform 0.8s ease 300ms",
            }}
          >
            <img
              src="/manus-storage/wallet-cards_0df85180.png"
              alt="Digital wallet cards"
              className="w-full max-w-lg ml-auto rounded-2xl shadow-2xl shadow-blue-900/20"
            />
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section className="border-y border-white/6 bg-[#0F1117]">
        <div
          ref={statsReveal.ref}
          className="container py-14 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: 500, suffix: "+", label: "Merchant Partners" },
            { value: 2, suffix: "M+", label: "Wallet Passes Issued" },
            { value: 94, suffix: "%", label: "Customer Retention" },
            { value: 48, prefix: "$", suffix: "", label: "Avg Spend Uplift" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="text-center"
              style={{
                opacity: statsReveal.visible ? 1 : 0,
                transform: statsReveal.visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
              }}
            >
              <div className="stat-number text-4xl md:text-5xl mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix || ""} />
              </div>
              <div className="text-sm text-slate-500" style={{ fontFamily: "Inter, sans-serif" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="py-24 bg-[#0F1117]">
        <div className="container">
          <div className="text-center mb-16">
            <span className="tag-cobalt mb-4 inline-block">Platform Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: "Syne, sans-serif" }}>
              Everything loyalty needs.<br />
              <span className="gradient-text">Nothing it doesn't.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
              From NFC tap-to-earn to real-time analytics, Onecardsau gives merchants a complete loyalty stack without the enterprise complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard delay={0} icon={Smartphone} title="Digital Wallet Passes" desc="Issue Apple Wallet and Google Wallet passes instantly. No app download required — customers add your loyalty card in seconds." />
            <FeatureCard delay={60} icon={Wifi} title="NFC Tap-to-Earn" desc="Customers tap their phone at your NFC terminal to earn stamps, points, or rewards. Frictionless, fast, and delightful." />
            <FeatureCard delay={120} icon={BarChart3} title="Merchant Analytics" desc="Real-time dashboard showing visit frequency, spend per customer, redemption rates, and campaign performance." />
            <FeatureCard delay={180} icon={Zap} title="Campaign Automation" desc="Schedule push notifications, birthday rewards, and win-back campaigns. Set it once, let it run." />
            <FeatureCard delay={240} icon={Shield} title="Enterprise Security" desc="SOC 2 Type II certified. End-to-end encryption. GDPR and Australian Privacy Act compliant." />
            <FeatureCard delay={300} icon={Globe} title="API-First Platform" desc="RESTful API and webhooks for deep POS integration. SDKs for iOS, Android, and web. Full developer docs." />
          </div>
        </div>
      </section>

      {/* ── WALLET INTEGRATION SHOWCASE ── */}
      <section className="py-24 bg-[#0A0D14]" ref={walletReveal.ref}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              style={{
                opacity: walletReveal.visible ? 1 : 0,
                transform: walletReveal.visible ? "translateX(0)" : "translateX(-32px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              <span className="tag-cobalt mb-5 inline-block">Wallet Integration</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "Syne, sans-serif" }}>
                Native Apple Wallet &<br />
                <span className="gradient-text">Google Wallet</span> support
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
                Customers add your loyalty card directly to their native wallet app. No third-party app, no friction. Passes update in real-time when points change — customers see their balance without opening anything.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "One-tap add to Apple Wallet or Google Wallet",
                  "Real-time pass updates via push notification",
                  "Barcode, QR code, and NFC support",
                  "Custom branding — your logo, colours, and design",
                  "Geo-triggered notifications near your store",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-300" style={{ fontFamily: "Inter, sans-serif" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-cobalt text-sm px-6 py-3 rounded-xl inline-flex items-center gap-2">
                See wallet demo
                <ChevronRight size={15} />
              </Link>
            </div>

            <div
              className="relative"
              style={{
                opacity: walletReveal.visible ? 1 : 0,
                transform: walletReveal.visible ? "translateX(0)" : "translateX(32px)",
                transition: "opacity 0.6s ease 150ms, transform 0.6s ease 150ms",
              }}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/manus-storage/wallet-cards_0df85180.png"
                  alt="Apple Wallet and Google Wallet integration"
                  className="w-full rounded-2xl shadow-2xl shadow-blue-900/20"
                />
                <div className="absolute inset-0 rounded-2xl border border-white/8" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 glass-card rounded-xl px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 size={14} className="text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white" style={{ fontFamily: "Inter, sans-serif" }}>Pass Added</div>
                    <div className="text-xs text-slate-400" style={{ fontFamily: "Inter, sans-serif" }}>Sarah's Coffee Card</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NFC WORKFLOW ── */}
      <section className="py-24 bg-[#0F1117]">
        <div className="container">
          <div className="text-center mb-16">
            <span className="tag-cobalt mb-4 inline-block">NFC Workflow</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: "Syne, sans-serif" }}>
              Tap. Earn. Redeem.<br />
              <span className="gradient-text">In under 2 seconds.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/manus-storage/nfc-tap_2db40cd0.png"
                  alt="NFC tap loyalty"
                  className="w-full rounded-2xl shadow-2xl shadow-blue-900/30"
                />
                <div className="absolute inset-0 rounded-2xl border border-white/8" />
              </div>
              {/* NFC rings animation */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="absolute rounded-full border-2 border-blue-500/30 nfc-pulse"
                    style={{
                      width: `${i * 60}px`,
                      height: `${i * 60}px`,
                      top: `${-i * 30}px`,
                      left: `${-i * 30}px`,
                      animationDelay: `${i * 300}ms`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Steps */}
            <div className="order-1 lg:order-2 space-y-8">
              {[
                { step: "01", title: "Customer taps phone", desc: "Customer holds their phone near your NFC-enabled terminal. Their digital loyalty card is detected instantly." },
                { step: "02", title: "Points credited instantly", desc: "The system records the transaction, adds points or stamps, and updates the wallet pass in real-time." },
                { step: "03", title: "Notification sent", desc: "Customer receives a push notification confirming their reward. They see their updated balance without opening any app." },
                { step: "04", title: "Redemption at threshold", desc: "When the customer reaches their reward threshold, they tap to redeem. The merchant dashboard logs the redemption automatically." },
              ].map((item, i) => {
                const { ref, visible } = useReveal();
                return (
                  <div
                    key={item.step}
                    ref={ref}
                    className="flex gap-5"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateX(0)" : "translateX(24px)",
                      transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
                    }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-blue-400" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                        {item.step}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1" style={{ fontFamily: "Syne, sans-serif" }}>
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-400 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRY SOLUTIONS ── */}
      <section className="py-24 bg-[#0A0D14]">
        <div className="container">
          <div className="text-center mb-12">
            <span className="tag-cobalt mb-4 inline-block">Solutions by Industry</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: "Syne, sans-serif" }}>
              Built for your industry
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
              Pre-configured loyalty workflows for the industries that matter most.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {INDUSTRIES.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setActiveIndustry(ind.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeIndustry === ind.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/8 border border-white/8"
                }`}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {ind.icon} {ind.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="stat-number text-6xl font-extrabold mb-2">{industry.stat.value}</div>
              <div className="text-sm text-slate-400 mb-6" style={{ fontFamily: "Inter, sans-serif" }}>{industry.stat.label}</div>
              <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
                {industry.headline}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
                {industry.desc}
              </p>
              <ul className="space-y-3 mb-8">
                {industry.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <CheckCircle2 size={15} className="text-blue-400 flex-shrink-0" />
                    <span className="text-sm text-slate-300" style={{ fontFamily: "Inter, sans-serif" }}>{b}</span>
                  </li>
                ))}
              </ul>
              <Link href="/solutions" className="btn-ghost-cobalt text-sm px-5 py-2.5 rounded-xl inline-flex items-center gap-2">
                Learn more about {industry.label}
                <ArrowRight size={14} />
              </Link>
            </div>
            <div className="glow-card rounded-2xl p-8">
              <div className="text-4xl mb-4">{industry.icon}</div>
              <div className="space-y-4">
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full rounded-full bg-blue-600 shimmer" style={{ width: "78%" }} />
                </div>
                <div className="flex justify-between text-xs text-slate-500" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                  <span>Loyalty Adoption</span>
                  <span className="text-blue-400">78%</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full rounded-full bg-blue-500 shimmer" style={{ width: "94%" }} />
                </div>
                <div className="flex justify-between text-xs text-slate-500" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                  <span>Retention Rate</span>
                  <span className="text-blue-400">94%</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full rounded-full bg-blue-400 shimmer" style={{ width: "62%" }} />
                </div>
                <div className="flex justify-between text-xs text-slate-500" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                  <span>Campaign Open Rate</span>
                  <span className="text-blue-400">62%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DASHBOARD PREVIEW ── */}
      <section className="py-24 bg-[#0F1117]">
        <div className="container">
          <div className="text-center mb-12">
            <span className="tag-cobalt mb-4 inline-block">Merchant Dashboard</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: "Syne, sans-serif" }}>
              Your loyalty data,<br />
              <span className="gradient-text">crystal clear</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
              Track every customer interaction, measure campaign ROI, and make data-driven decisions from a single dashboard.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/8 shadow-2xl shadow-blue-900/10">
            <img
              src="/manus-storage/dashboard-preview_93ee7371.png"
              alt="Merchant analytics dashboard"
              className="w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1117] via-transparent to-transparent opacity-30" />
          </div>

          {/* Dashboard stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { icon: Users, label: "Active Members", value: "12,847", change: "+18%" },
              { icon: TrendingUp, label: "Monthly Visits", value: "48,291", change: "+24%" },
              { icon: CreditCard, label: "Points Redeemed", value: "94,120", change: "+31%" },
              { icon: BarChart3, label: "Campaign ROI", value: "4.8×", change: "+0.6×" },
            ].map((stat) => (
              <div key={stat.label} className="glow-card rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <stat.icon size={16} className="text-blue-400" />
                  <span className="text-xs text-green-400 font-medium" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                    {stat.change}
                  </span>
                </div>
                <div className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "Syne, sans-serif" }}>
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500" style={{ fontFamily: "Inter, sans-serif" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-[#0A0D14]">
        <div className="container">
          <div className="text-center mb-14">
            <span className="tag-cobalt mb-4 inline-block">Customer Stories</span>
            <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
              Merchants love Onecardsau
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "We replaced our paper stamp cards with Onecardsau and saw a 40% increase in repeat visits within the first month. The NFC tap is so fast our baristas love it.",
                name: "Emma Chen",
                role: "Owner, Harbour Brew Co.",
                location: "Sydney, NSW",
                stars: 5,
              },
              {
                quote: "The merchant dashboard gives us insights we never had before. We can see exactly which customers are at risk of churning and send them a targeted offer automatically.",
                name: "James Patel",
                role: "Marketing Director, The Grill House",
                location: "Melbourne, VIC",
                stars: 5,
              },
              {
                quote: "Integration with our POS took less than a day. The API documentation is excellent and the support team was responsive throughout. Highly recommend for any retailer.",
                name: "Sarah Williams",
                role: "Head of Digital, Coastal Retail Group",
                location: "Brisbane, QLD",
                stars: 5,
              },
            ].map((t, i) => {
              const { ref, visible } = useReveal();
              return (
                <div
                  key={t.name}
                  ref={ref}
                  className="glow-card rounded-2xl p-6"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(24px)",
                    transition: `opacity 0.5s ease ${i * 100}ms, transform 0.5s ease ${i * 100}ms`,
                  }}
                >
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-5" style={{ fontFamily: "Inter, sans-serif" }}>
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-600/20 border border-blue-500/20 flex items-center justify-center text-sm font-bold text-blue-400" style={{ fontFamily: "Syne, sans-serif" }}>
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white" style={{ fontFamily: "Inter, sans-serif" }}>{t.name}</div>
                      <div className="text-xs text-slate-500" style={{ fontFamily: "Inter, sans-serif" }}>{t.role} · {t.location}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="/case-studies" className="btn-ghost-cobalt text-sm px-6 py-3 rounded-xl inline-flex items-center gap-2">
              Read all case studies
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 bg-[#0F1117] relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(37,99,235,0.12) 0%, transparent 70%)" }}
        />
        <div className="container relative z-10 text-center">
          <span className="tag-cobalt mb-5 inline-block">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: "Syne, sans-serif" }}>
            Ready to see it in your store?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Book a 30-minute demo with our team. We'll show you exactly how Onecardsau works for your industry and answer every question.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-cobalt text-base px-8 py-4 rounded-xl inline-flex items-center gap-2 justify-center">
              Book a Demo
              <ArrowRight size={16} />
            </Link>
            <Link href="/pricing" className="btn-ghost-cobalt text-base px-8 py-4 rounded-xl inline-flex items-center gap-2 justify-center">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
