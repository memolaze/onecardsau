/* ============================================================
   ONECARDSAU Pricing Page — Feature comparison and plans
   ============================================================ */
import { useState } from "react";
import { Link } from "wouter";
import { CheckCircle2, X, ArrowRight, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For single-location merchants",
    monthlyPrice: 49,
    annualPrice: 39,
    highlight: false,
    cta: "Start free trial",
    features: [
      "Up to 500 active members",
      "Digital wallet passes (Apple & Google)",
      "NFC tap-to-earn",
      "Basic analytics dashboard",
      "Email support",
      "1 loyalty program",
      "Standard pass design templates",
      "—",
      "—",
      "—",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "For growing businesses",
    monthlyPrice: 149,
    annualPrice: 119,
    highlight: true,
    badge: "Most Popular",
    cta: "Start free trial",
    features: [
      "Up to 5,000 active members",
      "Digital wallet passes (Apple & Google)",
      "NFC tap-to-earn",
      "Advanced analytics & reporting",
      "Priority email + chat support",
      "3 loyalty programs",
      "Custom pass branding",
      "Push notification campaigns",
      "POS integration (Square, Lightspeed)",
      "—",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "For multi-location operators",
    monthlyPrice: 349,
    annualPrice: 279,
    highlight: false,
    cta: "Start free trial",
    features: [
      "Up to 25,000 active members",
      "Digital wallet passes (Apple & Google)",
      "NFC tap-to-earn",
      "Full analytics suite + exports",
      "Dedicated account manager",
      "Unlimited loyalty programs",
      "Custom pass branding",
      "Push notification campaigns",
      "All POS integrations",
      "API access + webhooks",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For large groups & franchises",
    monthlyPrice: null,
    annualPrice: null,
    highlight: false,
    cta: "Contact sales",
    features: [
      "Unlimited active members",
      "Digital wallet passes (Apple & Google)",
      "NFC tap-to-earn",
      "Custom analytics & BI integration",
      "24/7 dedicated support + SLA",
      "Unlimited loyalty programs",
      "White-label pass design",
      "Push notification campaigns",
      "All POS integrations",
      "Full API access + custom webhooks",
    ],
  },
];

const FEATURE_ROWS = [
  "Active members",
  "Wallet passes (Apple & Google)",
  "NFC tap-to-earn",
  "Analytics",
  "Support",
  "Loyalty programs",
  "Pass branding",
  "Push notifications",
  "POS integrations",
  "API access",
];

const FAQS = [
  {
    q: "Is there a free trial?",
    a: "Yes — all paid plans include a 14-day free trial with no credit card required. You can cancel at any time during the trial.",
  },
  {
    q: "What happens if I exceed my member limit?",
    a: "We'll notify you when you're approaching your limit. You can upgrade at any time, and we won't cut off your service mid-billing cycle.",
  },
  {
    q: "Can I change plans later?",
    a: "Absolutely. You can upgrade or downgrade at any time. Upgrades take effect immediately; downgrades take effect at the next billing cycle.",
  },
  {
    q: "Do you support multiple locations?",
    a: "Yes. The Pro and Enterprise plans support multiple locations with unified member profiles and location-level reporting.",
  },
  {
    q: "What POS systems do you integrate with?",
    a: "We natively integrate with Square, Lightspeed, Shopify POS, and Vend. Enterprise customers can use our API for custom POS integrations.",
  },
  {
    q: "Is my customer data secure?",
    a: "Onecardsau is SOC 2 Type II certified and PCI DSS compliant. All data is encrypted in transit and at rest. We are GDPR and Australian Privacy Act compliant.",
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0F1117] text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(37,99,235,0.10) 0%, transparent 70%)" }} />
        <div className="container relative z-10 text-center">
          <span className="tag-cobalt mb-5 inline-block">Pricing</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5" style={{ fontFamily: "Syne, sans-serif" }}>
            Simple, transparent pricing
          </h1>
          <p className="text-slate-400 text-xl max-w-xl mx-auto mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
            Start free. Scale as you grow. No hidden fees, no long-term contracts.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/8 rounded-full p-1.5">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${!annual ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"}`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${annual ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"}`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Annual
              <span className={`text-xs px-2 py-0.5 rounded-full ${annual ? "bg-white/20" : "bg-green-500/20 text-green-400"}`}>
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 flex flex-col ${
                  plan.highlight
                    ? "bg-blue-600/10 border-2 border-blue-500/50 shadow-xl shadow-blue-900/20"
                    : "glow-card"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full" style={{ fontFamily: "Inter, sans-serif" }}>
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "Syne, sans-serif" }}>{plan.name}</h3>
                  <p className="text-sm text-slate-400 mb-5" style={{ fontFamily: "Inter, sans-serif" }}>{plan.tagline}</p>
                  {plan.monthlyPrice ? (
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-extrabold text-white" style={{ fontFamily: "Syne, sans-serif" }}>
                        ${annual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-slate-400 text-sm mb-1.5" style={{ fontFamily: "Inter, sans-serif" }}>/mo</span>
                    </div>
                  ) : (
                    <div className="text-3xl font-extrabold text-white" style={{ fontFamily: "Syne, sans-serif" }}>Custom</div>
                  )}
                  {annual && plan.monthlyPrice && (
                    <p className="text-xs text-slate-500 mt-1" style={{ fontFamily: "Inter, sans-serif" }}>
                      Billed annually (${plan.annualPrice! * 12}/yr)
                    </p>
                  )}
                </div>

                <Link
                  href="/contact"
                  className={`text-sm font-semibold px-4 py-3 rounded-xl text-center mb-6 transition-all ${
                    plan.highlight
                      ? "btn-cobalt"
                      : "btn-ghost-cobalt"
                  }`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {plan.cta}
                </Link>

                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      {feature === "—" ? (
                        <X size={14} className="text-slate-600 mt-0.5 flex-shrink-0" />
                      ) : (
                        <CheckCircle2 size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />
                      )}
                      <span
                        className={`text-sm ${feature === "—" ? "text-slate-600" : "text-slate-300"}`}
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {feature === "—" ? "Not included" : feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="py-20 bg-[#0A0D14] border-t border-white/6">
        <div className="container">
          <h2 className="text-3xl font-bold text-white mb-10 text-center" style={{ fontFamily: "Syne, sans-serif" }}>
            Full feature comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/8">
                  <th className="text-left py-4 pr-6 text-slate-400 font-medium w-1/3" style={{ fontFamily: "Inter, sans-serif" }}>Feature</th>
                  {PLANS.map((plan) => (
                    <th key={plan.id} className={`text-center py-4 px-4 font-semibold ${plan.highlight ? "text-blue-300" : "text-white"}`} style={{ fontFamily: "Syne, sans-serif" }}>
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURE_ROWS.map((row, i) => (
                  <tr key={row} className={`border-b border-white/4 ${i % 2 === 0 ? "" : "bg-white/2"}`}>
                    <td className="py-4 pr-6 text-slate-300" style={{ fontFamily: "Inter, sans-serif" }}>{row}</td>
                    {PLANS.map((plan) => {
                      const val = plan.features[i];
                      return (
                        <td key={plan.id} className="text-center py-4 px-4">
                          {val === "—" ? (
                            <X size={14} className="text-slate-600 mx-auto" />
                          ) : (
                            <CheckCircle2 size={14} className="text-blue-400 mx-auto" />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-[#0F1117]">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-10 text-center" style={{ fontFamily: "Syne, sans-serif" }}>
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="glow-card rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-sm font-medium text-white pr-4" style={{ fontFamily: "Inter, sans-serif" }}>{faq.q}</span>
                  <HelpCircle size={16} className={`flex-shrink-0 transition-colors ${openFaq === i ? "text-blue-400" : "text-slate-500"}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <div className="separator-glow mb-4" />
                    <p className="text-sm text-slate-400 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A0D14] border-t border-white/6">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
            Not sure which plan is right for you?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Talk to our team. We'll recommend the right plan based on your number of locations, expected member volume, and integration needs.
          </p>
          <Link href="/contact" className="btn-cobalt text-base px-7 py-3.5 rounded-xl inline-flex items-center gap-2 justify-center">
            Talk to Sales
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
