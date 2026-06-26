/* ============================================================
   ONECARDSAU Solutions Page — Industry-specific loyalty solutions
   ============================================================ */
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SOLUTIONS = [
  {
    id: "cafe",
    icon: "☕",
    title: "Cafés & Coffee Shops",
    tagline: "Turn every coffee into a return visit",
    desc: "Replace paper stamp cards with a digital loyalty experience that customers actually use. No app download required — customers add your card to Apple Wallet or Google Wallet in seconds.",
    features: [
      "Digital stamp cards via NFC tap",
      "Buy-X-get-one-free automation",
      "Birthday reward campaigns",
      "Morning rush push notifications",
      "Barista-friendly POS integration",
      "Real-time redemption tracking",
    ],
    stats: [
      { value: "3.4×", label: "Higher repeat visit rate" },
      { value: "67%", label: "Wallet adoption rate" },
      { value: "2 sec", label: "Average tap-to-earn time" },
    ],
    caseStudy: "Harbour Brew Co. increased monthly repeat visits by 40% in 30 days.",
  },
  {
    id: "restaurant",
    icon: "🍽️",
    title: "Restaurants & Dining",
    tagline: "Fill tables, reward diners, grow revenue",
    desc: "Drive covers during off-peak hours with targeted wallet offers. Track spend per visit and build rich customer profiles automatically from every transaction.",
    features: [
      "Spend-based points accumulation",
      "Off-peak hour targeted offers",
      "Table booking integration",
      "Group dining rewards",
      "Seasonal campaign builder",
      "Chef's special push alerts",
    ],
    stats: [
      { value: "28%", label: "Increase in average spend" },
      { value: "52%", label: "Off-peak cover uplift" },
      { value: "4.2×", label: "Campaign ROI" },
    ],
    caseStudy: "The Grill House filled 85% of off-peak tables using targeted wallet notifications.",
  },
  {
    id: "retail",
    icon: "🛍️",
    title: "Retail & Fashion",
    tagline: "Points that actually drive purchase decisions",
    desc: "Connect your POS to Onecardsau in minutes. Every transaction earns points, every point drives the next purchase. Multi-tier programs reward your best customers.",
    features: [
      "POS system integration (Square, Lightspeed, Shopify)",
      "Multi-tier loyalty levels (Bronze, Silver, Gold)",
      "Product-specific bonus points",
      "Omnichannel (in-store + online)",
      "Referral reward automation",
      "Inventory-triggered campaigns",
    ],
    stats: [
      { value: "41%", label: "Reduction in customer churn" },
      { value: "2.9×", label: "Lifetime value increase" },
      { value: "18%", label: "Average basket size uplift" },
    ],
    caseStudy: "Coastal Retail Group reduced churn by 41% across 12 stores in 6 months.",
  },
  {
    id: "hospitality",
    icon: "🏨",
    title: "Hotels & Hospitality",
    tagline: "Elevate the guest experience from check-in",
    desc: "From hotel stays to spa visits, Onecardsau creates a seamless loyalty journey across every touchpoint in your property. Corporate account management included.",
    features: [
      "Room upgrade reward milestones",
      "F&B spend tracking across venues",
      "Partner venue network",
      "Corporate account management",
      "Check-in NFC activation",
      "Guest preference profiles",
    ],
    stats: [
      { value: "67%", label: "Guests enrol on first visit" },
      { value: "34%", label: "Increase in F&B spend" },
      { value: "89%", label: "Guest satisfaction score" },
    ],
    caseStudy: "Bayview Hotel Group achieved 89% loyalty enrolment across 8 properties.",
  },
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-[#0F1117] text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(37,99,235,0.12) 0%, transparent 70%)" }} />
        <div className="container relative z-10 text-center">
          <span className="tag-cobalt mb-5 inline-block">Solutions by Industry</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6" style={{ fontFamily: "Syne, sans-serif" }}>
            Built for your industry.<br />
            <span className="gradient-text">Proven in the field.</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10" style={{ fontFamily: "Inter, sans-serif" }}>
            Pre-configured loyalty workflows for cafés, restaurants, retail, and hospitality — with the flexibility to customise for your exact needs.
          </p>
          <Link href="/contact" className="btn-cobalt text-base px-7 py-3.5 rounded-xl inline-flex items-center gap-2">
            Find your solution
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Solutions */}
      {SOLUTIONS.map((sol, i) => (
        <section key={sol.id} className={`py-24 ${i % 2 === 0 ? "bg-[#0F1117]" : "bg-[#0A0D14]"}`}>
          <div className="container">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="text-5xl mb-4">{sol.icon}</div>
                <span className="tag-cobalt mb-4 inline-block">{sol.title}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
                  {sol.tagline}
                </h2>
                <p className="text-slate-400 leading-relaxed mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
                  {sol.desc}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {sol.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-300" style={{ fontFamily: "Inter, sans-serif" }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="glass-card rounded-xl p-4 mb-8 border-l-2 border-blue-500">
                  <p className="text-sm text-slate-300 italic" style={{ fontFamily: "Inter, sans-serif" }}>
                    "{sol.caseStudy}"
                  </p>
                </div>
                <Link href="/contact" className="btn-cobalt text-sm px-6 py-3 rounded-xl inline-flex items-center gap-2">
                  Get started
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <div className="grid grid-cols-3 gap-4">
                  {sol.stats.map((stat) => (
                    <div key={stat.label} className="glow-card rounded-2xl p-5 text-center">
                      <div className="stat-number text-3xl font-extrabold mb-1">{stat.value}</div>
                      <div className="text-xs text-slate-500" style={{ fontFamily: "Inter, sans-serif" }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="glow-card rounded-2xl p-6 mt-4">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp size={18} className="text-blue-400" />
                    <span className="text-sm font-semibold text-white" style={{ fontFamily: "Inter, sans-serif" }}>Performance Overview</span>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: "Customer Retention", value: 94 },
                      { label: "Wallet Adoption", value: 78 },
                      { label: "Campaign Engagement", value: 62 },
                    ].map((metric) => (
                      <div key={metric.label}>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="text-slate-400" style={{ fontFamily: "Inter, sans-serif" }}>{metric.label}</span>
                          <span className="text-blue-400 font-mono">{metric.value}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                          <div className="h-full rounded-full bg-blue-600" style={{ width: `${metric.value}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Enterprise CTA */}
      <section className="py-20 bg-[#0F1117] border-t border-white/6">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
            Enterprise & multi-location?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            We work with franchise groups, shopping centres, and enterprise retailers. Custom SLAs, dedicated support, and white-label options available.
          </p>
          <Link href="/contact" className="btn-cobalt text-base px-7 py-3.5 rounded-xl inline-flex items-center gap-2 justify-center">
            Talk to Enterprise Sales
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
