/* ============================================================
   ONECARDSAU Developers Page — API docs, SDKs, integration guide
   ============================================================ */
import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Copy, CheckCircle2, Terminal, Code2, Webhook, Key, BookOpen, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const CODE_SAMPLES = {
  "Issue a Pass": `// Issue a digital wallet pass to a customer
const response = await fetch('https://api.onecardsau.com/v1/passes', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    program_id: 'prog_abc123',
    customer: {
      email: 'customer@example.com',
      name: 'Sarah Chen',
      phone: '+61412345678',
    },
    initial_points: 0,
  }),
});

const pass = await response.json();
// pass.apple_wallet_url — Add to Apple Wallet link
// pass.google_wallet_url — Add to Google Wallet link
console.log(pass.pass_id); // "pass_xyz789"`,

  "Add Points": `// Add points to a customer's loyalty pass
const response = await fetch(
  \`https://api.onecardsau.com/v1/passes/\${passId}/transactions\`,
  {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      type: 'earn',
      points: 50,
      description: 'Purchase at Harbour Brew Co.',
      transaction_ref: 'txn_pos_001',
    }),
  }
);

const transaction = await response.json();
console.log(transaction.new_balance); // 150`,

  "Webhook": `// Receive real-time events via webhook
// POST https://your-server.com/onecardsau-webhook

app.post('/onecardsau-webhook', (req, res) => {
  const signature = req.headers['x-onecardsau-signature'];
  const payload = req.body;

  // Verify signature
  const valid = verifyWebhookSignature(
    payload,
    signature,
    process.env.WEBHOOK_SECRET
  );

  if (!valid) return res.status(401).send('Unauthorized');

  switch (payload.event) {
    case 'pass.points_earned':
      console.log('Points earned:', payload.data.points);
      break;
    case 'pass.reward_redeemed':
      console.log('Reward redeemed:', payload.data.reward_id);
      break;
    case 'pass.added_to_wallet':
      console.log('Pass added to wallet:', payload.data.wallet_type);
      break;
  }

  res.status(200).send('OK');
});`,

  "NFC Terminal": `// Configure NFC terminal for tap-to-earn
import { OnecardNFC } from '@onecardsau/nfc-sdk';

const nfc = new OnecardNFC({
  terminal_id: 'term_abc123',
  api_key: process.env.ONECARD_API_KEY,
});

// Listen for NFC taps
nfc.on('tap', async (event) => {
  const { pass_id, customer } = event;

  // Award points for the transaction
  const result = await nfc.awardPoints({
    pass_id,
    points: 10,
    transaction_amount: 850, // $8.50 in cents
  });

  console.log(\`Awarded \${result.points_earned} points to \${customer.name}\`);
  console.log(\`New balance: \${result.new_balance} points\`);
});

nfc.start();`,
};

const ENDPOINTS = [
  { method: "POST", path: "/v1/passes", desc: "Issue a new loyalty pass" },
  { method: "GET", path: "/v1/passes/:id", desc: "Retrieve pass details" },
  { method: "POST", path: "/v1/passes/:id/transactions", desc: "Add or redeem points" },
  { method: "GET", path: "/v1/passes/:id/transactions", desc: "List pass transactions" },
  { method: "GET", path: "/v1/programs", desc: "List loyalty programs" },
  { method: "POST", path: "/v1/campaigns", desc: "Create a push campaign" },
  { method: "GET", path: "/v1/analytics/overview", desc: "Get analytics summary" },
  { method: "POST", path: "/v1/webhooks", desc: "Register a webhook endpoint" },
];

const METHOD_COLORS: Record<string, string> = {
  GET: "text-green-400 bg-green-400/10 border-green-400/20",
  POST: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  PUT: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  DELETE: "text-red-400 bg-red-400/10 border-red-400/20",
};

export default function Developers() {
  const [activeTab, setActiveTab] = useState("Issue a Pass");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CODE_SAMPLES[activeTab as keyof typeof CODE_SAMPLES]);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0F1117] text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(37,99,235,0.10) 0%, transparent 70%)" }} />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="tag-cobalt mb-5 inline-block">Developer Platform</span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6" style={{ fontFamily: "Syne, sans-serif" }}>
              Build loyalty into<br />
              <span className="gradient-text">anything.</span>
            </h1>
            <p className="text-slate-400 text-xl mb-10" style={{ fontFamily: "Inter, sans-serif" }}>
              RESTful API, webhooks, and native SDKs for iOS, Android, and web. Integrate Onecardsau into your POS, app, or platform in hours, not weeks.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-cobalt text-base px-7 py-3.5 rounded-xl inline-flex items-center gap-2">
                Get API Key
                <Key size={15} />
              </Link>
              <a href="#docs" className="btn-ghost-cobalt text-base px-7 py-3.5 rounded-xl inline-flex items-center gap-2">
                <BookOpen size={15} />
                View Docs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="border-y border-white/6 bg-[#0A0D14]">
        <div className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Zap, value: "<50ms", label: "API response time (p99)" },
            { icon: CheckCircle2, value: "99.99%", label: "API uptime SLA" },
            { icon: Code2, value: "4", label: "Official SDKs" },
            { icon: Webhook, value: "12+", label: "Webhook event types" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon size={18} className="text-blue-400 mx-auto mb-2" />
              <div className="stat-number text-2xl font-extrabold mb-1">{stat.value}</div>
              <div className="text-xs text-slate-500" style={{ fontFamily: "Inter, sans-serif" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Code examples */}
      <section id="docs" className="py-24 bg-[#0F1117]">
        <div className="container">
          <div className="text-center mb-12">
            <span className="tag-cobalt mb-4 inline-block">API Reference</span>
            <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
              Clean API. Clear docs.
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
              Everything you need to integrate loyalty into your product. Explore the most common use cases below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Tabs */}
            <div className="lg:col-span-1 flex lg:flex-col gap-2">
              {Object.keys(CODE_SAMPLES).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium text-left transition-all ${
                    activeTab === tab
                      ? "bg-blue-600/20 border border-blue-500/40 text-blue-300"
                      : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Code block */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden border border-white/8">
                <div className="flex items-center justify-between px-5 py-3 bg-[#1A1F2E] border-b border-white/8">
                  <div className="flex items-center gap-2">
                    <Terminal size={14} className="text-blue-400" />
                    <span className="text-xs text-slate-400 font-mono">{activeTab.toLowerCase().replace(/ /g, "_")}.js</span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors px-2 py-1 rounded border border-white/8 hover:border-white/20"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {copied ? <CheckCircle2 size={12} className="text-green-400" /> : <Copy size={12} />}
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
                <pre className="p-6 text-sm overflow-x-auto bg-[#0D1117]" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                  <code className="text-slate-300 leading-relaxed">
                    {CODE_SAMPLES[activeTab as keyof typeof CODE_SAMPLES]}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Endpoints */}
      <section className="py-20 bg-[#0A0D14] border-t border-white/6">
        <div className="container">
          <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: "Syne, sans-serif" }}>
            Core endpoints
          </h2>
          <div className="space-y-3">
            {ENDPOINTS.map((ep) => (
              <div key={ep.path} className="glow-card rounded-xl p-4 flex items-center gap-4">
                <span className={`text-xs font-bold px-2.5 py-1 rounded border font-mono flex-shrink-0 ${METHOD_COLORS[ep.method]}`}>
                  {ep.method}
                </span>
                <code className="text-sm text-blue-300 font-mono flex-1" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                  {ep.path}
                </code>
                <span className="text-sm text-slate-400 hidden md:block" style={{ fontFamily: "Inter, sans-serif" }}>{ep.desc}</span>
                <ArrowRight size={14} className="text-slate-600 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-20 bg-[#0F1117]">
        <div className="container">
          <h2 className="text-3xl font-bold text-white mb-4 text-center" style={{ fontFamily: "Syne, sans-serif" }}>
            Official SDKs
          </h2>
          <p className="text-slate-400 text-center mb-10" style={{ fontFamily: "Inter, sans-serif" }}>
            Native libraries for every platform
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { lang: "Node.js", icon: "⬢", install: "npm install @onecardsau/node" },
              { lang: "Python", icon: "🐍", install: "pip install onecardsau" },
              { lang: "iOS (Swift)", icon: "🍎", install: "pod 'OnecardSDK'" },
              { lang: "Android (Kotlin)", icon: "🤖", install: "implementation 'au.onecard:sdk:1.0'" },
            ].map((sdk) => (
              <div key={sdk.lang} className="glow-card rounded-2xl p-5">
                <div className="text-3xl mb-3">{sdk.icon}</div>
                <h3 className="text-sm font-semibold text-white mb-2" style={{ fontFamily: "Syne, sans-serif" }}>{sdk.lang}</h3>
                <code className="text-xs text-blue-300 block" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                  {sdk.install}
                </code>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webhooks */}
      <section className="py-20 bg-[#0A0D14] border-t border-white/6">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="tag-cobalt mb-4 inline-block">Webhooks</span>
              <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
                Real-time event notifications
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                Subscribe to events and receive instant HTTP POST notifications to your server. No polling required.
              </p>
              <div className="space-y-3">
                {[
                  "pass.created — New loyalty pass issued",
                  "pass.added_to_wallet — Customer added pass to wallet",
                  "pass.points_earned — Points awarded",
                  "pass.reward_redeemed — Reward redemption",
                  "campaign.sent — Push notification delivered",
                  "customer.churned — Inactivity threshold reached",
                ].map((event) => (
                  <div key={event} className="flex items-start gap-2.5">
                    <Webhook size={13} className="text-blue-400 mt-0.5 flex-shrink-0" />
                    <code className="text-xs text-slate-300" style={{ fontFamily: "JetBrains Mono, monospace" }}>{event}</code>
                  </div>
                ))}
              </div>
            </div>
            <div className="glow-card rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-slate-400" style={{ fontFamily: "JetBrains Mono, monospace" }}>Live webhook events</span>
              </div>
              {[
                { time: "11:42:01", event: "pass.points_earned", data: '{"points": 50, "balance": 200}' },
                { time: "11:41:58", event: "pass.added_to_wallet", data: '{"wallet": "apple", "pass_id": "pass_xyz"}' },
                { time: "11:41:45", event: "pass.created", data: '{"customer": "Sarah Chen"}' },
              ].map((log, i) => (
                <div key={i} className="mb-3 last:mb-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-slate-600 font-mono">{log.time}</span>
                    <span className="text-xs text-blue-400 font-mono">{log.event}</span>
                  </div>
                  <code className="text-xs text-slate-500 block" style={{ fontFamily: "JetBrains Mono, monospace" }}>{log.data}</code>
                  {i < 2 && <div className="separator-glow mt-3" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0F1117] border-t border-white/6">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
            Ready to integrate?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Get your API key and start building in minutes. Our sandbox environment lets you test without affecting live data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-cobalt text-base px-7 py-3.5 rounded-xl inline-flex items-center gap-2 justify-center">
              Get API Key
              <ArrowRight size={16} />
            </Link>
            <a href="#docs" className="btn-ghost-cobalt text-base px-7 py-3.5 rounded-xl inline-flex items-center gap-2 justify-center">
              <BookOpen size={15} />
              Explore Docs
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
