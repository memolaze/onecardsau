/* ============================================================
   ONECARDSAU Resources Page — Blog, guides, product updates
   ============================================================ */
import { Link } from "wouter";
import { ArrowRight, Clock, Tag, BookOpen, FileText, Video } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FEATURED = {
  title: "The Complete Guide to Digital Wallet Loyalty Programs in 2025",
  excerpt: "Everything merchants need to know about replacing paper stamp cards with Apple Wallet and Google Wallet passes — from setup to advanced campaign automation.",
  category: "Guide",
  readTime: "12 min read",
  date: "15 Jan 2025",
  tag: "Featured",
};

const POSTS = [
  {
    title: "How NFC Tap-to-Earn Works: A Technical Deep Dive",
    excerpt: "A step-by-step breakdown of the NFC loyalty workflow — from terminal configuration to real-time pass updates.",
    category: "Technical",
    readTime: "8 min read",
    date: "10 Jan 2025",
  },
  {
    title: "5 Loyalty Program Mistakes Cafés Make (And How to Fix Them)",
    excerpt: "Low adoption, forgotten cards, and zero data — the most common loyalty pitfalls and how digital wallet passes solve them.",
    category: "Strategy",
    readTime: "6 min read",
    date: "5 Jan 2025",
  },
  {
    title: "Onecardsau API v2.0 — What's New",
    excerpt: "Introducing batch pass issuance, enhanced webhook payloads, and the new Analytics API endpoints.",
    category: "Product Update",
    readTime: "4 min read",
    date: "2 Jan 2025",
  },
  {
    title: "Integrating Onecardsau with Lightspeed POS: Step-by-Step",
    excerpt: "A practical walkthrough of connecting your Lightspeed POS to Onecardsau for automatic point-of-sale loyalty tracking.",
    category: "Integration Guide",
    readTime: "10 min read",
    date: "28 Dec 2024",
  },
  {
    title: "Push Notification Best Practices for Loyalty Programs",
    excerpt: "Timing, frequency, and copy — what the data says about wallet push notifications that actually drive visits.",
    category: "Strategy",
    readTime: "7 min read",
    date: "20 Dec 2024",
  },
  {
    title: "Building a Multi-Tier Loyalty Program with Onecardsau",
    excerpt: "How to configure Bronze, Silver, and Gold tiers with automatic upgrades and tier-specific benefits.",
    category: "Guide",
    readTime: "9 min read",
    date: "15 Dec 2024",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  "Guide": "bg-blue-500/15 text-blue-300 border-blue-500/20",
  "Technical": "bg-purple-500/15 text-purple-300 border-purple-500/20",
  "Strategy": "bg-green-500/15 text-green-300 border-green-500/20",
  "Product Update": "bg-yellow-500/15 text-yellow-300 border-yellow-500/20",
  "Integration Guide": "bg-orange-500/15 text-orange-300 border-orange-500/20",
};

const RESOURCES = [
  {
    icon: BookOpen,
    title: "Getting Started Guide",
    desc: "Set up your first loyalty program in under 30 minutes.",
    type: "PDF Guide",
  },
  {
    icon: FileText,
    title: "API Reference",
    desc: "Complete REST API documentation with examples.",
    type: "Documentation",
    href: "/developers",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    desc: "Step-by-step video walkthroughs for every feature.",
    type: "Video Series",
  },
  {
    icon: FileText,
    title: "POS Integration Checklist",
    desc: "Everything you need before connecting your POS system.",
    type: "Checklist",
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-[#0F1117] text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(37,99,235,0.10) 0%, transparent 70%)" }} />
        <div className="container relative z-10 text-center">
          <span className="tag-cobalt mb-5 inline-block">Resource Centre</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6" style={{ fontFamily: "Syne, sans-serif" }}>
            Learn. Build. Grow.
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Guides, product updates, integration tutorials, and strategy articles to help you get the most from Onecardsau.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="pb-16 bg-[#0F1117]">
        <div className="container">
          <div className="glow-card rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="tag-cobalt">Featured</span>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${CATEGORY_COLORS[FEATURED.category]}`} style={{ fontFamily: "Inter, sans-serif" }}>
                  {FEATURED.category}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl" style={{ fontFamily: "Syne, sans-serif" }}>
                {FEATURED.title}
              </h2>
              <p className="text-slate-400 text-lg mb-6 max-w-2xl" style={{ fontFamily: "Inter, sans-serif" }}>
                {FEATURED.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <div className="flex items-center gap-1.5 text-sm text-slate-500" style={{ fontFamily: "Inter, sans-serif" }}>
                  <Clock size={13} />
                  {FEATURED.readTime}
                </div>
                <div className="flex items-center gap-1.5 text-sm text-slate-500" style={{ fontFamily: "Inter, sans-serif" }}>
                  <Tag size={13} />
                  {FEATURED.date}
                </div>
                <button className="btn-cobalt text-sm px-5 py-2.5 rounded-xl inline-flex items-center gap-2 ml-auto">
                  Read article
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-16 bg-[#0F1117]">
        <div className="container">
          <h2 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "Syne, sans-serif" }}>
            Latest articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((post) => (
              <article key={post.title} className="glow-card rounded-2xl p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${CATEGORY_COLORS[post.category] || "bg-slate-500/15 text-slate-300 border-slate-500/20"}`} style={{ fontFamily: "Inter, sans-serif" }}>
                    {post.category}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2 flex-1" style={{ fontFamily: "Syne, sans-serif" }}>
                  {post.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3 text-xs text-slate-500" style={{ fontFamily: "Inter, sans-serif" }}>
                    <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors">
                    <ArrowRight size={15} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Resource downloads */}
      <section className="py-20 bg-[#0A0D14] border-t border-white/6">
        <div className="container">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
            Guides & resources
          </h2>
          <p className="text-slate-400 mb-10" style={{ fontFamily: "Inter, sans-serif" }}>
            Downloadable resources to help you plan, launch, and optimise your loyalty program.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {RESOURCES.map((res) => (
              <div key={res.title} className="glow-card rounded-2xl p-6">
                <div className="feature-icon mb-4">
                  <res.icon size={18} />
                </div>
                <span className="text-xs text-slate-500 mb-2 block" style={{ fontFamily: "JetBrains Mono, monospace" }}>{res.type}</span>
                <h3 className="text-sm font-bold text-white mb-2" style={{ fontFamily: "Syne, sans-serif" }}>{res.title}</h3>
                <p className="text-xs text-slate-400 mb-4" style={{ fontFamily: "Inter, sans-serif" }}>{res.desc}</p>
                {res.href ? (
                  <Link href={res.href} className="text-xs text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1" style={{ fontFamily: "Inter, sans-serif" }}>
                    View docs <ArrowRight size={11} />
                  </Link>
                ) : (
                  <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1" style={{ fontFamily: "Inter, sans-serif" }}>
                    Download <ArrowRight size={11} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#0F1117] border-t border-white/6">
        <div className="container max-w-2xl text-center">
          <span className="tag-cobalt mb-4 inline-block">Newsletter</span>
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
            Stay ahead of the curve
          </h2>
          <p className="text-slate-400 mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
            Product updates, loyalty strategy insights, and integration guides — delivered monthly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="input-dark flex-1 rounded-xl px-4 py-3 text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            />
            <button className="btn-cobalt text-sm px-6 py-3 rounded-xl flex-shrink-0">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-slate-600 mt-3" style={{ fontFamily: "Inter, sans-serif" }}>
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
