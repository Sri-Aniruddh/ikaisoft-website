import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/ikaisoft-logo-2.png";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-narrow section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="Ikaisoft" className="h-9 brightness-0 invert mb-4" />
            <p className="text-sm opacity-70 leading-relaxed">
              Empowering careers through AI-driven education, IT solutions, and expert consultancy services.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { href: "https://www.instagram.com/ikaisoft/", label: "Instagram", icon: "M7.8 2h8.4C19 2 22 5 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C5 22 2 19 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" },
                { href: "https://www.linkedin.com/in/ikaisoft-consultancy-services-5a995a407/", label: "LinkedIn", icon: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" },
                { href: "https://x.com/IkaiSoft", label: "X", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
              ].map(({ href, label, icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={label}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={icon} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {[
                { to: "/about" as const, label: "About Us" },
                { to: "/self-paced-learning" as const, label: "Self-Paced Learning" },
                { to: "/it-solutions" as const, label: "IT Solutions" },
                { to: "/consultancy" as const, label: "Consultancy" },
                { to: "/research-support" as const, label: "Research Support" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:opacity-100 transition-opacity">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                Shan City, Sarosa Bharosa, Block Kakori, Patura Mod, Mohan Road, Lucknow
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:6393212152" className="hover:opacity-100">+91 6393212152</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:info@ikaisoft.com" className="hover:opacity-100">info@ikaisoft.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Stay Connected</h4>
            <p className="text-sm opacity-70 mb-4">Subscribe for updates on courses and services.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-lg bg-background/10 border border-background/20 text-sm text-background placeholder:text-background/50 focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button type="submit" className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-accent transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center text-xs opacity-50">
          © {new Date().getFullYear()} Ikaisoft. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
