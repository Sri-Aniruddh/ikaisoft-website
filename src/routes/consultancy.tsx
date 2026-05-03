import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, UserCheck, Briefcase, ArrowRight, CheckCircle, Target } from "lucide-react";
import PageBanner from "../components/PageBanner";
import SectionHeading from "../components/SectionHeading";
import consultancyBanner from "../assets/consultancy-banner.jpg";

export const Route = createFileRoute("/consultancy")({
  head: () => ({
    meta: [
      { title: "Consultancy Services — Ikaisoft" },
      { name: "description", content: "Academic guidance, interview preparation, and job-ready consultation by Ikaisoft." },
      { property: "og:title", content: "Consultancy Services — Ikaisoft" },
    ],
  }),
  component: ConsultancyPage,
});

const services = [
  { icon: Compass, title: "Academic Guidance", desc: "Expert counseling on course selection, university applications, and career path planning to help you make informed decisions about your future.", points: ["Career path assessment", "Course & university guidance", "Academic planning & strategy", "Scholarship assistance"] },
  { icon: UserCheck, title: "Interview Preparation", desc: "Comprehensive mock interview sessions, communication coaching, and personality development training to ace any job interview.", points: ["Mock interview sessions", "Technical interview prep", "HR round coaching", "Personality development"] },
  { icon: Briefcase, title: "Job-Ready Consultation", desc: "From resume building to networking strategies — we prepare you with everything needed to land your dream job in the IT industry.", points: ["Resume & portfolio building", "LinkedIn profile optimization", "Job search strategies", "Networking & soft skills"] },
];

function ConsultancyPage() {
  return (
    <>
      <PageBanner title="Consultancy Services" subtitle="Expert guidance for academic and career success" imageSrc={consultancyBanner} />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionHeading tag="Our Services" title="How We Help You Succeed" description="Personalized consultancy to accelerate your career growth." />
          <div className="space-y-8">
            {services.map((s, i) => (
              <div key={s.title} className="bg-card rounded-xl p-6 md:p-8 border shadow-sm grid md:grid-cols-[1fr_1.5fr] gap-6 items-center card-hover animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div>
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4">
                    <s.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm bg-muted/50 rounded-lg px-4 py-3">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container-narrow max-w-2xl">
          <h2 className="font-heading text-3xl font-bold">Ready to Level Up Your Career?</h2>
          <p className="mt-3 opacity-80">Book a free consultation session with our career experts today.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg bg-primary-foreground text-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
            Book Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
