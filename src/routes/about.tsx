import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Award, Users, CheckCircle, ArrowRight } from "lucide-react";
import PageBanner from "../components/PageBanner";
import SectionHeading from "../components/SectionHeading";
import aboutBanner from "../assets/about-banner.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Ikaisoft" },
      { name: "description", content: "Learn about Ikaisoft's mission to empower careers through AI-driven education and IT solutions." },
      { property: "og:title", content: "About Us — Ikaisoft" },
      { property: "og:description", content: "Empowering careers through AI-driven education and IT solutions." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Innovation", desc: "We leverage cutting-edge AI and technology to deliver world-class learning experiences." },
  { icon: Eye, title: "Excellence", desc: "We maintain the highest standards in education, consulting, and IT services." },
  { icon: Award, title: "Integrity", desc: "We build trust through transparency, honesty, and ethical practices." },
  { icon: Users, title: "Collaboration", desc: "We believe in the power of teamwork and community-driven growth." },
];

function AboutPage() {
  return (
    <>
      <PageBanner title="About Ikaisoft" subtitle="Empowering the next generation of IT professionals" imageSrc={aboutBanner} />

      <section className="section-padding bg-background">
        <div className="container-narrow grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading tag="Our Story" title="Who We Are" center={false} />
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Ikaisoft is a forward-thinking tech education and IT solutions company based in Lucknow, India. We are dedicated to bridging the gap between academic learning and industry requirements through innovative, AI-powered education and professional services.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Founded with the vision of making quality tech education accessible to all, we offer self-paced courses, instructor-led training, internship programs, and comprehensive IT solutions for businesses of all sizes.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Our team of experienced educators, developers, and consultants work together to deliver exceptional value to students and businesses alike.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-card rounded-xl p-6 border shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center"><Target className="w-5 h-5 text-primary-foreground" /></div>
                <h3 className="font-heading font-semibold text-lg">Our Mission</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To empower individuals and organizations with cutting-edge technology education and solutions, fostering innovation, skill development, and professional growth.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 border shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center"><Eye className="w-5 h-5 text-accent-foreground" /></div>
                <h3 className="font-heading font-semibold text-lg">Our Vision</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To become a global leader in tech education and IT services, creating a world where quality learning and innovation are accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="container-narrow">
          <SectionHeading tag="Our Values" title="What Drives Us" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="bg-card rounded-xl p-6 border text-center hover-lift animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-14 h-14 mx-auto rounded-full bg-secondary flex items-center justify-center mb-4">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow max-w-3xl text-center">
          <SectionHeading tag="Why Us" title="What Sets Us Apart" />
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {["Industry-aligned curriculum designed by experts", "AI-powered learning tools and adaptive assessments", "Real-world projects and internship opportunities", "Comprehensive career support and placement assistance", "Expert mentors from top tech companies", "Flexible self-paced and instructor-led options"].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-lg bg-card border">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-accent transition-colors">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
