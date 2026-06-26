/* ============================================================
   ONECARDSAU Contact Page — Demo booking, sales, partner enquiry
   ============================================================ */
import { useState } from "react";
import { CheckCircle2, Calendar, Users, Handshake, Mail, Phone, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

type FormType = "demo" | "sales" | "partner";

const FORM_TYPES = [
  { id: "demo" as FormType, label: "Book a Demo", icon: Calendar, desc: "30-min product walkthrough" },
  { id: "sales" as FormType, label: "Talk to Sales", icon: Users, desc: "Pricing and custom plans" },
  { id: "partner" as FormType, label: "Partner Enquiry", icon: Handshake, desc: "Reseller and integration partners" },
];

const INDUSTRIES = ["Café / Coffee Shop", "Restaurant / Dining", "Retail / Fashion", "Hotel / Hospitality", "Other"];
const SIZES = ["1 location", "2–5 locations", "6–20 locations", "20+ locations", "Enterprise (franchise/group)"];

export default function Contact() {
  const [formType, setFormType] = useState<FormType>("demo");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    size: "",
    message: "",
    preferredTime: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.company) {
      toast.error("Please fill in all required fields");
      return;
    }
    setSubmitted(true);
    toast.success("Message sent! We'll be in touch within 1 business day.");
  };

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  return (
    <div className="min-h-screen bg-[#0F1117] text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(37,99,235,0.10) 0%, transparent 70%)" }} />
        <div className="container relative z-10 text-center">
          <span className="tag-cobalt mb-5 inline-block">Get in Touch</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-5" style={{ fontFamily: "Syne, sans-serif" }}>
            See it in your store
          </h1>
          <p className="text-slate-400 text-xl max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Book a personalised demo, talk to our sales team, or enquire about partnership opportunities.
          </p>
        </div>
      </section>

      <section className="pb-24 bg-[#0F1117]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left — form */}
            <div className="lg:col-span-2">
              {/* Form type selector */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {FORM_TYPES.map((ft) => (
                  <button
                    key={ft.id}
                    onClick={() => setFormType(ft.id)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      formType === ft.id
                        ? "bg-blue-600/15 border-blue-500/50 shadow-lg shadow-blue-900/20"
                        : "bg-white/3 border-white/8 hover:border-white/15"
                    }`}
                  >
                    <ft.icon size={18} className={`mb-2 ${formType === ft.id ? "text-blue-400" : "text-slate-500"}`} />
                    <div className="text-sm font-semibold text-white" style={{ fontFamily: "Inter, sans-serif" }}>{ft.label}</div>
                    <div className="text-xs text-slate-500 mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>{ft.desc}</div>
                  </button>
                ))}
              </div>

              {submitted ? (
                <div className="glow-card rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={28} className="text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "Syne, sans-serif" }}>
                    We'll be in touch soon
                  </h2>
                  <p className="text-slate-400 mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                    Thanks, {form.name}! Our team will reach out to {form.email} within 1 business day to confirm your {formType === "demo" ? "demo booking" : "enquiry"}.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", phone: "", industry: "", size: "", message: "", preferredTime: "" }); }}
                    className="btn-ghost-cobalt text-sm px-5 py-2.5 rounded-xl"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glow-card rounded-2xl p-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5" style={{ fontFamily: "Inter, sans-serif" }}>
                        Full name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="Emma Chen"
                        className="input-dark w-full rounded-xl px-4 py-3 text-sm"
                        style={{ fontFamily: "Inter, sans-serif" }}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5" style={{ fontFamily: "Inter, sans-serif" }}>
                        Work email <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="emma@yourbusiness.com"
                        className="input-dark w-full rounded-xl px-4 py-3 text-sm"
                        style={{ fontFamily: "Inter, sans-serif" }}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5" style={{ fontFamily: "Inter, sans-serif" }}>
                        Business name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => update("company", e.target.value)}
                        placeholder="Harbour Brew Co."
                        className="input-dark w-full rounded-xl px-4 py-3 text-sm"
                        style={{ fontFamily: "Inter, sans-serif" }}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5" style={{ fontFamily: "Inter, sans-serif" }}>
                        Phone number
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        placeholder="+61 4XX XXX XXX"
                        className="input-dark w-full rounded-xl px-4 py-3 text-sm"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5" style={{ fontFamily: "Inter, sans-serif" }}>
                        Industry
                      </label>
                      <select
                        value={form.industry}
                        onChange={(e) => update("industry", e.target.value)}
                        className="input-dark w-full rounded-xl px-4 py-3 text-sm appearance-none"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        <option value="">Select industry</option>
                        {INDUSTRIES.map((i) => <option key={i} value={i}>{i}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5" style={{ fontFamily: "Inter, sans-serif" }}>
                        Business size
                      </label>
                      <select
                        value={form.size}
                        onChange={(e) => update("size", e.target.value)}
                        className="input-dark w-full rounded-xl px-4 py-3 text-sm appearance-none"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        <option value="">Select size</option>
                        {SIZES.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  {formType === "demo" && (
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5" style={{ fontFamily: "Inter, sans-serif" }}>
                        Preferred demo time
                      </label>
                      <select
                        value={form.preferredTime}
                        onChange={(e) => update("preferredTime", e.target.value)}
                        className="input-dark w-full rounded-xl px-4 py-3 text-sm appearance-none"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        <option value="">Select preferred time (AEST)</option>
                        <option>Morning (9am–12pm)</option>
                        <option>Afternoon (12pm–5pm)</option>
                        <option>Evening (5pm–7pm)</option>
                        <option>Any time</option>
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5" style={{ fontFamily: "Inter, sans-serif" }}>
                      {formType === "partner" ? "Tell us about your business and integration goals" : "Anything specific you'd like to cover?"}
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder={formType === "demo" ? "e.g. We have 3 café locations and currently use paper stamp cards..." : "Tell us about your goals..."}
                      rows={4}
                      className="input-dark w-full rounded-xl px-4 py-3 text-sm resize-none"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    />
                  </div>

                  <button type="submit" className="btn-cobalt w-full py-3.5 rounded-xl text-sm font-semibold">
                    {formType === "demo" ? "Book My Demo" : formType === "sales" ? "Talk to Sales" : "Submit Enquiry"}
                  </button>

                  <p className="text-xs text-slate-600 text-center" style={{ fontFamily: "Inter, sans-serif" }}>
                    By submitting, you agree to our Privacy Policy. We'll respond within 1 business day.
                  </p>
                </form>
              )}
            </div>

            {/* Right — contact info */}
            <div className="space-y-6">
              <div className="glow-card rounded-2xl p-6">
                <h3 className="text-base font-bold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
                  What to expect
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Clock, title: "30-minute demo", desc: "A focused walkthrough of the features most relevant to your business." },
                    { icon: Users, title: "No sales pressure", desc: "We'll show you the product honestly and answer every question." },
                    { icon: CheckCircle2, title: "Custom recommendation", desc: "We'll recommend the right plan and integration path for your setup." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-600/15 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <item.icon size={14} className="text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white" style={{ fontFamily: "Inter, sans-serif" }}>{item.title}</div>
                        <div className="text-xs text-slate-500 mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glow-card rounded-2xl p-6">
                <h3 className="text-base font-bold text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
                  Contact us directly
                </h3>
                <div className="space-y-3">
                  <a href="mailto:hello@onecardsau.com" className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                    <Mail size={15} className="text-blue-400" />
                    hello@onecardsau.com
                  </a>
                  <a href="tel:+61290000000" className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                    <Phone size={15} className="text-blue-400" />
                    +61 2 9000 0000
                  </a>
                  <span className="flex items-center gap-3 text-sm text-slate-400" style={{ fontFamily: "Inter, sans-serif" }}>
                    <MapPin size={15} className="text-blue-400" />
                    Level 12, 1 Market St, Sydney NSW 2000
                  </span>
                  <span className="flex items-center gap-3 text-sm text-slate-400" style={{ fontFamily: "Inter, sans-serif" }}>
                    <Clock size={15} className="text-blue-400" />
                    Mon–Fri, 9am–6pm AEST
                  </span>
                </div>
              </div>

              <div className="glow-card rounded-2xl p-6">
                <h3 className="text-sm font-bold text-white mb-3" style={{ fontFamily: "Syne, sans-serif" }}>
                  Already a customer?
                </h3>
                <p className="text-xs text-slate-400 mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                  For technical support, access the help centre or email our support team directly.
                </p>
                <a href="mailto:support@onecardsau.com" className="text-xs text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1.5" style={{ fontFamily: "Inter, sans-serif" }}>
                  <Mail size={12} />
                  support@onecardsau.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
