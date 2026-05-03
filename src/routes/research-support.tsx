import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, BookOpen, Award, ArrowRight, CheckCircle } from "lucide-react";
import PageBanner from "../components/PageBanner";
import SectionHeading from "../components/SectionHeading";
import researchBanner from "../assets/research-banner.jpg";

export const Route = createFileRoute("/research-support")({
  head: () => ({
    meta: [
      { title: "Research Support — Ikaisoft" },
      { name: "description", content: "Research paper writing, publication support and academic research assistance by Ikaisoft." },
      { property: "og:title", content: "Research Support — Ikaisoft" },
    ],
  }),
  component: ResearchPage,
});

const services = [
  { icon: FileText, title: "Research Paper Writing", desc: "Professional assistance in writing high-quality research papers with proper methodology, analysis, and formatting.", features: ["Topic identification & refinement", "Literature review & analysis", "Methodology design", "Data analysis & interpretation", "Paper drafting & editing"] },
  { icon: BookOpen, title: "Publication Support", desc: "End-to-end support for publishing in reputed journals and conferences, including peer review preparation.", features: ["Journal selection & matching", "Manuscript formatting", "Peer review preparation", "Revision & resubmission", "Conference paper submission"] },
  { icon: Award, title: "Academic Research Assistance", desc: "Comprehensive research support for undergraduate, postgraduate, and doctoral students across various domains.", features: ["Thesis & dissertation guidance", "Research proposal development", "Statistical analysis support", "Plagiarism checking & reduction", "Reference management"] },
];

function ResearchPage() {
  return (
    <>
      <PageBanner title="Research Support" subtitle="Expert assistance for academic research & publications" imageSrc={researchBanner} />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionHeading tag="Our Services" title="Research & Publication Support" description="Comprehensive research assistance for students and academics." />
          <div className="grid lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={s.title} className="bg-card rounded-xl p-6 border shadow-sm card-hover animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-3">{s.title}</h3>
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
        <div className="container-narrow max-w-3xl text-center">
          <SectionHeading tag="Process" title="How It Works" />
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Discuss", desc: "Share your research requirements and goals with our experts." },
              { step: "02", title: "Execute", desc: "Our team works on your research with meticulous attention to detail." },
              { step: "03", title: "Deliver", desc: "Receive polished, publication-ready research output." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg mb-3">{s.step}</div>
                <h3 className="font-heading font-semibold mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container-narrow max-w-2xl">
          <h2 className="font-heading text-3xl font-bold">Need Research Assistance?</h2>
          <p className="mt-3 opacity-80">Connect with our research experts to get started on your academic journey.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg bg-primary-foreground text-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
