/* ============================================================
   ONECARDSAU Navbar — "Deep Signal" theme
   Transparent → opaque on scroll, mega-menu for Products/Solutions
   ============================================================ */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Search, Zap, LayoutDashboard, Smartphone, Globe, BookOpen, FileText, Users } from "lucide-react";

const NAV_ITEMS = [
  {
    label: "Product",
    children: [
      { label: "Digital Wallet", href: "/", icon: Smartphone, desc: "Apple & Google Wallet integration" },
      { label: "NFC Loyalty", href: "/", icon: Zap, desc: "Tap-to-earn membership workflows" },
      { label: "Merchant Dashboard", href: "/", icon: LayoutDashboard, desc: "Analytics and campaign management" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Cafés & Coffee", href: "/solutions", icon: Globe, desc: "Loyalty for coffee shops" },
      { label: "Restaurants", href: "/solutions", icon: Globe, desc: "Dining rewards programs" },
      { label: "Retail", href: "/solutions", icon: Globe, desc: "Points and perks for retail" },
      { label: "Hospitality", href: "/solutions", icon: Globe, desc: "Hotels and venues" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Developers", href: "/developers" },
  {
    label: "Resources",
    children: [
      { label: "Case Studies", href: "/case-studies", icon: Users, desc: "Customer success stories" },
      { label: "Blog & Guides", href: "/resources", icon: BookOpen, desc: "Product updates and how-tos" },
      { label: "API Docs", href: "/developers", icon: FileText, desc: "Integration documentation" },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [location] = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled || mobileOpen
            ? "bg-[#0F1117]/95 backdrop-blur-xl border-b border-white/8 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
                <img
                  src="/manus-storage/logo-mark_e79d35d0.png"
                  alt="Onecardsau"
                  className="w-5 h-5 object-contain"
                  onError={(e) => {
                    const t = e.currentTarget;
                    t.style.display = "none";
                    t.parentElement!.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>`;
                  }}
                />
              </div>
              <span className="font-display font-700 text-white text-lg tracking-tight" style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}>
                Onecardsau
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeMenu === item.label
                          ? "text-white bg-white/8"
                          : "text-slate-300 hover:text-white hover:bg-white/5"
                      }`}
                      style={{ fontFamily: "Inter, sans-serif" }}
                      onMouseEnter={() => setActiveMenu(item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${activeMenu === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href!}
                      className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {item.children && activeMenu === item.label && (
                    <div
                      className="absolute top-full left-0 mt-1 w-64 rounded-xl border border-white/8 bg-[#1A1F2E]/95 backdrop-blur-xl shadow-2xl shadow-black/40 p-2"
                      onMouseEnter={() => setActiveMenu(item.label)}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-blue-600/15 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <child.icon size={14} className="text-blue-400" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                              {child.label}
                            </div>
                            <div className="text-xs text-slate-500 mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
                              {child.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                className="w-8 h-8 flex items-center justify-center rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Search"
              >
                <Search size={16} />
              </button>
              <Link
                href="/contact"
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors px-3 py-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Sign in
              </Link>
              <Link
                href="/contact"
                className="btn-cobalt text-sm px-4 py-2 rounded-lg"
              >
                Book a Demo
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-md text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/8 bg-[#0F1117]/98 backdrop-blur-xl">
            <div className="container py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                        style={{ fontFamily: "Inter, sans-serif" }}
                        onClick={() => setActiveMenu(activeMenu === item.label ? null : item.label)}
                      >
                        {item.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${activeMenu === item.label ? "rotate-180" : ""}`}
                        />
                      </button>
                      {activeMenu === item.label && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                              style={{ fontFamily: "Inter, sans-serif" }}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href!}
                      className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-white/8 flex flex-col gap-2">
                <Link href="/contact" className="block text-center btn-ghost-cobalt text-sm px-4 py-2.5 rounded-lg">
                  Sign in
                </Link>
                <Link href="/contact" className="block text-center btn-cobalt text-sm px-4 py-2.5 rounded-lg">
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4"
          onClick={(e) => e.target === e.currentTarget && setSearchOpen(false)}
        >
          <div className="w-full max-w-2xl bg-[#1A1F2E] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center gap-3 p-4 border-b border-white/8">
              <Search size={18} className="text-slate-400 flex-shrink-0" />
              <input
                autoFocus
                type="text"
                placeholder="Search products, docs, resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder-slate-500 text-sm outline-none"
                style={{ fontFamily: "Inter, sans-serif" }}
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-slate-500 hover:text-white transition-colors text-xs border border-white/10 rounded px-2 py-1"
              >
                ESC
              </button>
            </div>
            <div className="p-4">
              {searchQuery === "" ? (
                <div className="space-y-3">
                  <p className="text-xs text-slate-500 uppercase tracking-wider" style={{ fontFamily: "Inter, sans-serif" }}>Quick Links</p>
                  {[
                    { label: "Apple Wallet Integration", href: "/" },
                    { label: "NFC Loyalty Workflow", href: "/" },
                    { label: "Merchant Dashboard", href: "/" },
                    { label: "API Documentation", href: "/developers" },
                    { label: "Pricing Plans", href: "/pricing" },
                  ].map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <Search size={14} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
                      <span className="text-sm text-slate-300 group-hover:text-white transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-slate-400 py-4 text-center" style={{ fontFamily: "Inter, sans-serif" }}>
                  Searching for "<span className="text-white">{searchQuery}</span>"...
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
