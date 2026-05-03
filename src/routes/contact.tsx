import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, Send } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Ikaisoft" },
      { name: "description", content: "Get in touch with Ikaisoft. Located in Lucknow, India. Email: info@ikaisoft.com, Phone: +91 6393212152." },
      { property: "og:title", content: "Contact Us — Ikaisoft" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <>
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold animate-fade-up">Get in Touch</h1>
          <p className="mt-3 opacity-80 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Have a question or want to work with us? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow grid lg:grid-cols-[1fr_1.2fr] gap-10">
          {/* Info */}
          <div>
            <SectionHeading title="Contact Information" center={false} />
            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email", value: "info@ikaisoft.com", href: "mailto:info@ikaisoft.com" },
                { icon: Phone, label: "Phone", value: "+91 6393212152", href: "tel:6393212152" },
                { icon: MapPin, label: "Address", value: "Shan City, Sarosa Bharosa, Block Kakori, Patura Mod, Mohan Road, Lucknow", href: undefined },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="text-sm font-medium hover:text-primary transition-colors">{c.value}</a>
                    ) : (
                      <p className="text-sm font-medium">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-heading font-semibold mb-3">Follow Us</h3>
              <div className="flex gap-3">
                {[
                  { href: "https://www.instagram.com/ikaisoft/", label: "Instagram", icon: "M7.8 2h8.4C19 2 22 5 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C5 22 2 19 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" },
                  { href: "https://www.linkedin.com/in/ikaisoft-consultancy-services-5a995a407/", label: "LinkedIn", icon: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" },
                  { href: "https://x.com/IkaiSoft", label: "X", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                ].map(({ href, label, icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={label}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={icon} /></svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-card rounded-xl p-8 border text-center animate-scale-in">
                <div className="w-16 h-16 mx-auto rounded-full bg-success flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-success-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground text-sm">We will respond soon. Thank you for reaching out!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 md:p-8 border shadow-sm space-y-4">
                <h3 className="font-heading font-semibold text-lg mb-2">Send us a Message</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Name *</label>
                    <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Email *</label>
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="you@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Phone</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Message *</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" placeholder="How can we help you?" />
                </div>
                <button type="submit" disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-accent transition-colors disabled:opacity-60">
                  {loading ? "Sending..." : (<>Send Message <Send className="w-4 h-4" /></>)}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-80 md:h-96 w-full">
        <iframe
          title="Ikaisoft Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.0!2d80.85!3d26.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUxJzAwLjAiTiA4MMKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
