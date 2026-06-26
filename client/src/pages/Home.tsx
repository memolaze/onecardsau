/* ============================================================
   ONECARDSAU Home Page — Simplified Framework
   ============================================================ */
import { ArrowRight, Zap, Users, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F1117] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/6 bg-[#0F1117]/80 backdrop-blur-xl">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-sm">
              O
            </div>
            <span className="font-bold text-lg" style={{ fontFamily: "Syne, sans-serif" }}>
              Onecardsau
            </span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors">
            Book a Demo
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-40 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(37,99,235,0.08) 0%, transparent 70%)" }} />
        
        <div className="container relative z-10 max-w-4xl">
          <div className="mb-8 inline-block px-3 py-1.5 rounded-full bg-blue-600/15 border border-blue-500/30">
            <span className="text-xs font-semibold text-blue-300 tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>
              Digital Wallet & Loyalty Platform
            </span>
          </div>

          <h1 className="text-7xl md:text-8xl font-extrabold text-white mb-8 leading-tight" style={{ fontFamily: "Syne, sans-serif", letterSpacing: "-0.02em" }}>
            One card.<br />
            <span className="text-blue-400">Every customer.</span><br />
            Every visit.
          </h1>

          <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl" style={{ fontFamily: "Inter, sans-serif", lineHeight: "1.7" }}>
            Onecardsau is the loyalty infrastructure for modern commerce — digital wallet passes, NFC tap-to-earn, and merchant analytics in a single platform.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-semibold flex items-center gap-2 transition-colors shadow-lg shadow-blue-900/30">
              Book a Demo
              <ArrowRight size={16} />
            </button>
            <button className="border border-white/20 hover:border-white/40 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-8 text-sm text-slate-400" style={{ fontFamily: "Inter, sans-serif" }}>
            <div className="flex items-center gap-2.5">
              <Zap size={16} className="text-blue-400" />
              <span>SOC 2 Type II Certified</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Users size={16} className="text-blue-400" />
              <span>500+ Merchants Trusted</span>
            </div>
            <div className="flex items-center gap-2.5">
              <TrendingUp size={16} className="text-blue-400" />
              <span>99.99% Uptime SLA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#0A0D14] border-t border-white/6">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "Syne, sans-serif", letterSpacing: "-0.01em" }}>
              What you get
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Wallet Passes",
                desc: "Apple Wallet & Google Wallet integration. One tap, instant access.",
              },
              {
                title: "NFC Tap-to-Earn",
                desc: "Award points instantly at checkout. No app required.",
              },
              {
                title: "Merchant Dashboard",
                desc: "Real-time analytics, customer insights, campaign management.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl p-8 border border-white/8 bg-white/3 hover:border-white/15 hover:bg-white/5 transition-all"
              >
                <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "Syne, sans-serif" }}>
                  {feature.title}
                </h3>
                <p className="text-base text-slate-400 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-[#0F1117]">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "Syne, sans-serif", letterSpacing: "-0.01em" }}>
            Ready to transform loyalty?
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
            Join hundreds of merchants using Onecardsau to build lasting customer relationships.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-semibold flex items-center gap-2 mx-auto transition-colors shadow-lg shadow-blue-900/30">
            Book a Demo
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/6 bg-[#0A0D14] py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="text-sm font-semibold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
                Product
              </h4>
              <ul className="space-y-3 text-sm text-slate-400" style={{ fontFamily: "Inter, sans-serif" }}>
                <li><a href="#" className="hover:text-white transition-colors">Digital Wallet</a></li>
                <li><a href="#" className="hover:text-white transition-colors">NFC Loyalty</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
                Company
              </h4>
              <ul className="space-y-3 text-sm text-slate-400" style={{ fontFamily: "Inter, sans-serif" }}>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
                Support
              </h4>
              <ul className="space-y-3 text-sm text-slate-400" style={{ fontFamily: "Inter, sans-serif" }}>
                <li><a href="tel:+61449928988" className="hover:text-white transition-colors">+61 449928988</a></li>
                <li><a href="mailto:jjdigital.sydney@gmail.com" className="hover:text-white transition-colors">Email</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
                Legal
              </h4>
              <ul className="space-y-3 text-sm text-slate-400" style={{ fontFamily: "Inter, sans-serif" }}>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/6 pt-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center font-bold text-white text-xs">
                  O
                </div>
                <span className="font-semibold text-sm" style={{ fontFamily: "Syne, sans-serif" }}>
                  Onecardsau
                </span>
              </div>
              <div className="text-sm text-slate-500 space-y-2" style={{ fontFamily: "Inter, sans-serif" }}>
                <p>© 2025 Onecardsau Pty Ltd. All rights reserved.</p>
                <p>Email: <a href="mailto:jjdigital.sydney@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">jjdigital.sydney@gmail.com</a></p>
                <p>Phone: <a href="tel:+61449928988" className="text-blue-400 hover:text-blue-300 transition-colors">+61 449928988</a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
