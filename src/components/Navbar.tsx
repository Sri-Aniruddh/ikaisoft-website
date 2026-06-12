import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import logo from "../assets/ikaisoft-logo-copy.png";
import { Menu, X, Phone, Mail, Compass, UserCheck, Briefcase, Target, ChevronDown } from "lucide-react";

const navLinks = [
  { to: "/" as const, label: "Home" },
  { to: "/about" as const, label: "About" },
  { to: "/self-paced-learning" as const, label: "Learning" },
  { to: "/it-solutions" as const, label: "IT Solutions" },
  { to: "/consultancy" as const, label: "Consultancy", hasDropdown: true },
  { to: "/research-support" as const, label: "Research" },
  { to: "/contact" as const, label: "Contact" },
];

const consultancyServices = [
  { id: "academic", icon: Compass, title: "Academic Guidance" },
  { id: "interview", icon: UserCheck, title: "Interview Preparation" },
  { id: "job-ready", icon: Briefcase, title: "Job-Ready Consultation" },
  { id: "academic-activity", icon: Target, title: "Academic Activity" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [consultancyHover, setConsultancyHover] = useState(false);
  const [mobileConsultancyOpen, setMobileConsultancyOpen] = useState(false);
  const location = useLocation();

useEffect(() => {
  const id = window.location.hash.replace("#", "");

  if (id) {
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  }
}, []);
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-xs py-1.5 hidden md:block">
        <div className="container-narrow flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <a href="tel:6393212152" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Phone className="w-3 h-3" /> +91 6393212152
            </a>
            <a href="mailto:info@ikaisoft.com" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Mail className="w-3 h-3" /> info@ikaisoft.com
            </a>
          </div>
          <span>www.ikaisoft.com</span>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-background"
          }`}
      >
        <div className="container-narrow flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Ikaisoft" className="h-9" />
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <div
                key={l.to}
                className="relative"
                onMouseEnter={() => l.hasDropdown && setConsultancyHover(true)}
                onMouseLeave={() => l.hasDropdown && setConsultancyHover(false)}
              >
                <Link
                  to={l.to}
                  className="px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-secondary hover:text-secondary-foreground flex items-center gap-1"
                  activeProps={{ className: "px-3 py-2 text-sm font-medium rounded-md bg-secondary text-secondary-foreground font-semibold" }}
                >
                  {l.label}
                  {l.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Consultancy Dropdown */}
                {l.hasDropdown && consultancyHover && (
                  <div className="absolute left-0 mt-0 w-64 bg-background border rounded-lg shadow-lg py-2 z-40">
                    {consultancyServices.map((service) => (
                      <Link
                        key={service.id}
                        to="/consultancy"
                        hash={service.id}
                        className="block px-4 py-3 hover:bg-secondary rounded-md transition-colors group"
                        onClick={() => setConsultancyHover(false)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                            <service.icon className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium">{service.title}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center px-5 py-2 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-accent transition-colors"
          >
            Get in Touch
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-background border-t animate-fade-in">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((l) => (
                <div key={l.to}>
                  {l.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setMobileConsultancyOpen(!mobileConsultancyOpen)}
                        className="w-full text-left block px-3 py-2.5 text-sm font-medium rounded-md hover:bg-secondary transition-colors flex items-center justify-between"
                      >
                        {l.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileConsultancyOpen ? "rotate-180" : ""}`} />
                      </button>
                      {mobileConsultancyOpen && (
                        <div className="pl-4 space-y-1 py-2">
                          {consultancyServices.map((service) => (
                            <Link
                              key={service.id}
                              to="/consultancy"
                              hash={service.id}
                              className="block px-3 py-2 text-sm rounded-md hover:bg-secondary transition-colors flex items-center gap-2"
                              onClick={() => {
                                setOpen(false);
                                setMobileConsultancyOpen(false);
                              }}
                            >
                              <service.icon className="w-4 h-4 text-primary" />
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={l.to}
                      className="block px-3 py-2.5 text-sm font-medium rounded-md hover:bg-secondary transition-colors"
                      activeProps={{ className: "px-3 py-2 text-sm font-medium rounded-md bg-secondary text-secondary-foreground font-semibold" }}
                    >
                      {l.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="block mt-3 text-center px-5 py-2.5 text-sm font-semibold rounded-lg bg-primary text-primary-foreground"
                onClick={() => setOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
