import { createFileRoute, Link } from "@tanstack/react-router";
import { Code, Layers, Database, Smartphone, ArrowRight, CheckCircle, Settings, Globe } from "lucide-react";
import PageBanner from "../components/PageBanner";
import SectionHeading from "../components/SectionHeading";
import itBanner from "../assets/it-solutions-banner.jpg";

export const Route = createFileRoute("/it-solutions")({
  head: () => ({
    meta: [
      { title: "IT Solutions — Ikaisoft" },
      { name: "description", content: "Custom software development, ERP solutions, web & app development by Ikaisoft." },
      { property: "og:title", content: "IT Solutions — Ikaisoft" },
    ],
  }),
  component: ITSolutionsPage,
});

const services = [
  { icon: Code, title: "Software Development", desc: "End-to-end custom software solutions tailored to your business needs, built with modern technologies and best practices.", features: ["Custom application development", "API development & integration", "Legacy system modernization", "Quality assurance & testing"] },
  { icon: Layers, title: "Custom Projects", desc: "From concept to deployment — we bring your unique project ideas to life with precision engineering and innovative design.", features: ["Requirement analysis & planning", "Agile development methodology", "Iterative prototyping", "Post-launch support"] },
  { icon: Database, title: "ERP Solutions", desc: "Comprehensive enterprise resource planning solutions to streamline your operations, improve efficiency, and drive growth.", features: ["Business process automation", "Inventory & supply chain", "HR & payroll management", "Financial reporting"] },
  { icon: Smartphone, title: "Web & App Development", desc: "Responsive websites and mobile applications that deliver exceptional user experiences across all devices and platforms.", features: ["Progressive web apps", "iOS & Android apps", "E-commerce solutions", "UI/UX design"] },
];

const techStack = [
  "React.js", "Node.js", "Python", "MongoDB", "AWS", "Docker", "TypeScript", "PostgreSQL",
];

function ITSolutionsPage() {
  return (
    <>
      <PageBanner title="IT Solutions" subtitle="End-to-end technology solutions for modern businesses" imageSrc={itBanner} />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionHeading tag="Our Services" title="Technology Solutions" description="We deliver cutting-edge IT solutions to help businesses thrive in the digital age." />
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div key={s.title} className="bg-card rounded-xl p-6 md:p-8 border shadow-sm card-hover animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="container-narrow text-center">
          <SectionHeading tag="Tech Stack" title="Technologies We Use" />
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t) => (
              <span key={t} className="px-4 py-2 rounded-full bg-card border text-sm font-medium hover-lift">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container-narrow max-w-2xl">
          <h2 className="font-heading text-3xl font-bold">Have a Project in Mind?</h2>
          <p className="mt-3 opacity-80">Let's discuss how we can bring your ideas to life with cutting-edge technology.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg bg-primary-foreground text-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
