/* ============================================================
   ONECARDSAU Footer — "Deep Signal" theme
   ============================================================ */
import { Link } from "wouter";
import { Mail, MapPin, Phone, Twitter, Linkedin, Github } from "lucide-react";

const FOOTER_LINKS = {
  Product: [
    { label: "Digital Wallet", href: "/" },
    { label: "NFC Loyalty", href: "/" },
    { label: "Merchant Dashboard", href: "/" },
    { label: "Analytics", href: "/" },
    { label: "Integrations", href: "/" },
  ],
  Solutions: [
    { label: "Cafés & Coffee", href: "/solutions" },
    { label: "Restaurants", href: "/solutions" },
    { label: "Retail", href: "/solutions" },
    { label: "Hospitality", href: "/solutions" },
    { label: "Enterprise", href: "/contact" },
  ],
  Developers: [
    { label: "API Reference", href: "/developers" },
    { label: "SDKs & Libraries", href: "/developers" },
    { label: "Webhooks", href: "/developers" },
    { label: "Sandbox", href: "/developers" },
    { label: "Changelog", href: "/resources" },
  ],
  Company: [
    { label: "About", href: "/" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/resources" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#080B10] border-t border-white/6">
      {/* CTA band */}
      <div className="border-b border-white/6">
        <div className="container py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h2
                className="text-3xl font-bold text-white mb-3"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Ready to transform your loyalty program?
              </h2>
              <p className="text-slate-400 text-base max-w-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                Join hundreds of merchants already using Onecardsau to build lasting customer relationships.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link href="/contact" className="btn-cobalt text-sm px-6 py-3 rounded-lg text-center">
                Book a Demo
              </Link>
              <Link href="/contact" className="btn-ghost-cobalt text-sm px-6 py-3 rounded-lg text-center">
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </div>
              <span className="font-bold text-white text-lg" style={{ fontFamily: "Syne, sans-serif" }}>
                Onecardsau
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
              The digital wallet and loyalty platform for modern commerce. Apple Wallet, Google Wallet, and NFC — all in one.
            </p>
            <div className="space-y-2.5">
              <a href="mailto:hello@onecardsau.com" className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-400 transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                <Mail size={14} />
                hello@onecardsau.com
              </a>
              <a href="tel:+61290000000" className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-400 transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                <Phone size={14} />
                +61 2 9000 0000
              </a>
              <span className="flex items-center gap-2 text-sm text-slate-500" style={{ fontFamily: "Inter, sans-serif" }}>
                <MapPin size={14} />
                Sydney, NSW, Australia
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-white transition-colors"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600" style={{ fontFamily: "Inter, sans-serif" }}>
            © 2025 Onecardsau Pty Ltd. All rights reserved. ABN 00 000 000 000
          </p>
          <div className="flex items-center gap-5">
            <Link href="/" className="text-xs text-slate-600 hover:text-slate-400 transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
              Privacy Policy
            </Link>
            <Link href="/" className="text-xs text-slate-600 hover:text-slate-400 transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
              Terms of Service
            </Link>
            <div className="flex items-center gap-3 ml-2">
              <a href="#" className="text-slate-600 hover:text-blue-400 transition-colors" aria-label="Twitter">
                <Twitter size={15} />
              </a>
              <a href="#" className="text-slate-600 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={15} />
              </a>
              <a href="#" className="text-slate-600 hover:text-blue-400 transition-colors" aria-label="GitHub">
                <Github size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
