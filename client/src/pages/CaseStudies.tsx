/* ============================================================
   ONECARDSAU Case Studies Page
   ============================================================ */
import { Link } from "wouter";
import { ArrowRight, TrendingUp, Users, Star, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CASE_STUDIES = [
  {
    company: "Harbour Brew Co.",
    industry: "Café",
    location: "Sydney, NSW",
    logo: "☕",
    tagline: "40% more repeat visits in 30 days",
    challenge: "Harbour Brew Co. had a paper stamp card program with low adoption — cards were lost, forgotten, or never redeemed. They needed a modern loyalty solution that wouldn't require customers to download another app.",
    solution: "Onecardsau replaced the paper cards with digital wallet passes. Staff tap the NFC terminal at checkout; customers' passes update instantly. Birthday campaigns and morning rush notifications are fully automated.",
    results: [
      { metric: "Repeat Visit Rate", before: "22%", after: "62%", change: "+40%" },
      { metric: "Loyalty Enrolment", before: "18%", after: "74%", change: "+56%" },
      { metric: "Monthly Revenue", before: "$42K", after: "$58K", change: "+38%" },
    ],
    quote: "We replaced our paper stamp cards with Onecardsau and saw a 40% increase in repeat visits within the first month. The NFC tap is so fast our baristas love it.",
    person: "Emma Chen, Owner",
    timeToLaunch: "3 days",
    stars: 5,
  },
  {
    company: "The Grill House",
    industry: "Restaurant",
    location: "Melbourne, VIC",
    logo: "🍽️",
    tagline: "85% of off-peak tables filled with wallet campaigns",
    challenge: "The Grill House had excellent food but struggled to fill tables on Tuesday and Wednesday evenings. Their email marketing had a 12% open rate and wasn't driving bookings.",
    solution: "Onecardsau's geo-triggered wallet notifications alert loyalty members when they're near the restaurant on slow nights. A 'Double Points Tuesday' campaign was set up in under an hour.",
    results: [
      { metric: "Off-Peak Covers", before: "34%", after: "85%", change: "+51%" },
      { metric: "Campaign Open Rate", before: "12%", after: "68%", change: "+56%" },
      { metric: "Average Spend", before: "$48", after: "$62", change: "+28%" },
    ],
    quote: "The merchant dashboard gives us insights we never had before. We can see exactly which customers are at risk of churning and send them a targeted offer automatically.",
    person: "James Patel, Marketing Director",
    timeToLaunch: "1 day",
    stars: 5,
  },
  {
    company: "Coastal Retail Group",
    industry: "Retail",
    location: "Brisbane, QLD",
    logo: "🛍️",
    tagline: "41% churn reduction across 12 stores",
    challenge: "Coastal Retail Group had a points program running on a legacy system that couldn't integrate with their new Lightspeed POS. Customer data was siloed and campaigns were manual.",
    solution: "Onecardsau's API connected to Lightspeed in under a day. Customer profiles are now unified across all 12 stores. Automated win-back campaigns trigger when a customer hasn't visited in 45 days.",
    results: [
      { metric: "Customer Churn", before: "31%", after: "18%", change: "-41%" },
      { metric: "Avg Basket Size", before: "$67", after: "$79", change: "+18%" },
      { metric: "Customer LTV", before: "$420", after: "$1,220", change: "+2.9×" },
    ],
    quote: "Integration with our POS took less than a day. The API documentation is excellent and the support team was responsive throughout. Highly recommend for any retailer.",
    person: "Sarah Williams, Head of Digital",
    timeToLaunch: "1 day",
    stars: 5,
  },
  {
    company: "Bayview Hotel Group",
    industry: "Hospitality",
    location: "Gold Coast, QLD",
    logo: "🏨",
    tagline: "89% loyalty enrolment across 8 properties",
    challenge: "Bayview's loyalty program required guests to download a proprietary app — adoption was under 15%. The program was expensive to maintain and guests rarely engaged with it.",
    solution: "Onecardsau replaced the app with native wallet passes. Guests are enrolled at check-in via NFC tap. Points accumulate across all 8 properties including F&B, spa, and parking.",
    results: [
      { metric: "Loyalty Enrolment", before: "15%", after: "89%", change: "+74%" },
      { metric: "F&B Spend per Stay", before: "$84", after: "$113", change: "+34%" },
      { metric: "Return Booking Rate", before: "28%", after: "$52%", change: "+24%" },
    ],
    quote: "We went from 15% app adoption to 89% wallet enrolment in three months. Guests love that there's nothing to download — they just tap at check-in.",
    person: "Michael Torres, GM",
    timeToLaunch: "5 days",
    stars: 5,
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-[#0F1117] text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(37,99,235,0.10) 0%, transparent 70%)" }} />
        <div className="container relative z-10 text-center">
          <span className="tag-cobalt mb-5 inline-block">Customer Success Stories</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6" style={{ fontFamily: "Syne, sans-serif" }}>
            Real merchants.<br />
            <span className="gradient-text">Real results.</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            See how businesses across Australia are using Onecardsau to build lasting customer relationships and drive measurable revenue growth.
          </p>
        </div>
      </section>

      {/* Summary stats */}
      <section className="border-y border-white/6 bg-[#0A0D14]">
        <div className="container py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Users, value: "500+", label: "Merchant Partners" },
            { icon: TrendingUp, value: "2M+", label: "Wallet Passes Issued" },
            { icon: Star, value: "4.9/5", label: "Average Merchant Rating" },
            { icon: Clock, value: "<1 day", label: "Average Time to Launch" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon size={20} className="text-blue-400 mx-auto mb-3" />
              <div className="stat-number text-3xl font-extrabold mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500" style={{ fontFamily: "Inter, sans-serif" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      {CASE_STUDIES.map((cs, i) => (
        <section key={cs.company} className={`py-24 ${i % 2 === 0 ? "bg-[#0F1117]" : "bg-[#0A0D14]"}`}>
          <div className="container">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-6 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{cs.logo}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "Syne, sans-serif" }}>{cs.company}</h2>
                    <div className="flex items-center gap-2 text-sm text-slate-400" style={{ fontFamily: "Inter, sans-serif" }}>
                      <span className="tag-cobalt text-xs">{cs.industry}</span>
                      <span>·</span>
                      <span>{cs.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-xl font-semibold text-blue-300" style={{ fontFamily: "Syne, sans-serif" }}>{cs.tagline}</p>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-400" style={{ fontFamily: "Inter, sans-serif" }}>
                <div className="flex items-center gap-1.5">
                  <Clock size={14} className="text-blue-400" />
                  Live in {cs.timeToLaunch}
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: cs.stars }).map((_, j) => (
                    <Star key={j} size={13} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Challenge + Solution */}
              <div className="lg:col-span-2 space-y-6">
                <div className="glow-card rounded-2xl p-6">
                  <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3" style={{ fontFamily: "Inter, sans-serif" }}>The Challenge</h3>
                  <p className="text-slate-300 leading-relaxed text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{cs.challenge}</p>
                </div>
                <div className="glow-card rounded-2xl p-6">
                  <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3" style={{ fontFamily: "Inter, sans-serif" }}>The Solution</h3>
                  <p className="text-slate-300 leading-relaxed text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{cs.solution}</p>
                </div>
                {/* Quote */}
                <div className="glass-card rounded-2xl p-6 border-l-2 border-blue-500">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: cs.stars }).map((_, j) => (
                      <Star key={j} size={13} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-200 text-sm leading-relaxed mb-4 italic" style={{ fontFamily: "Inter, sans-serif" }}>
                    "{cs.quote}"
                  </p>
                  <p className="text-xs text-slate-500" style={{ fontFamily: "Inter, sans-serif" }}>— {cs.person}, {cs.company}</p>
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4" style={{ fontFamily: "Inter, sans-serif" }}>Results</h3>
                <div className="space-y-4">
                  {cs.results.map((result) => (
                    <div key={result.metric} className="glow-card rounded-xl p-4">
                      <div className="text-xs text-slate-500 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>{result.metric}</div>
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-xs text-slate-600 mb-0.5" style={{ fontFamily: "JetBrains Mono, monospace" }}>Before: {result.before}</div>
                          <div className="text-base font-bold text-white" style={{ fontFamily: "Syne, sans-serif" }}>After: {result.after}</div>
                        </div>
                        <div className="stat-number text-2xl font-extrabold">{result.change}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-[#0F1117] border-t border-white/6">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
            Your success story starts here
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Join 500+ merchants already using Onecardsau. Book a demo and we'll show you exactly what results to expect for your business.
          </p>
          <Link href="/contact" className="btn-cobalt text-base px-7 py-3.5 rounded-xl inline-flex items-center gap-2 justify-center">
            Book a Demo
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
