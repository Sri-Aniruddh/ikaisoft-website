import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Compass, UserCheck, Briefcase, ArrowRight, CheckCircle, Target, ChevronDown, ChevronUp } from "lucide-react";import PageBanner from "../components/PageBanner";
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
  { id: "academic", icon: Compass, title: "Academic Guidance", desc: "Expert counseling on course selection, university applications, and career path planning to help you make informed decisions about your future.", points: ["Career path assessment", "Course & university guidance", "Academic planning & strategy", "Scholarship assistance"] },
  { id: "interview", icon: UserCheck, title: "Interview Preparation", desc: "Comprehensive mock interview sessions, communication coaching, and personality development training to ace any job interview.", points: ["Mock interview sessions", "Technical interview prep", "HR round coaching", "Personality development"] },
  { id: "job-ready", icon: Briefcase, title: "Job-Ready Consultation", desc: "From resume building to networking strategies — we prepare you with everything needed to land your dream job in the IT industry.", points: ["Resume & portfolio building", "LinkedIn profile optimization", "Job search strategies", "Networking & soft skills"] },
  { 
    id: "academic-activity", 
    icon: Target, 
    title: "Academic Activity", 
    desc: "Engage in academic activities and projects to enhance your learning and development.", 
    points: ["Research opportunities", "Project collaboration", "Academic competitions", "Internship placements"],
    expandedContent: (
      <div className="mt-6 pt-6 border-t space-y-6 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h4 className="font-bold text-foreground mb-2">IEEE Student Branch: Petition to form an IEEE Student Branch</h4>
          <p>An IEEE Student Branch provides opportunities to meet and learn from fellow IEEE Student and Graduate Student Members and engage with professional IEEE members locally. An active IEEE Student Branch can be one of the most positive elements of your academic career, offering programs, activities, and professional networking opportunities that build critical skills outside of the classroom. IEEE currently has Student Branches at thousands of universities and colleges in hundreds of countries throughout the world.</p>
          <p className="mt-2 font-semibold">Benefits of Forming an IEEE Student Branch:</p>
          <ul className="list-disc ml-5 mt-1 space-y-1">
            <li>Opportunities to network on a local level</li>
            <li>Free website hosting</li>
            <li>Obtain funding for events, projects, and activities</li>
            <li>Develop projects and obtain sponsorship based on your IEEE affiliation</li>
            <li>Receive support for hosting professional awareness programs</li>
            <li>Connect with other like minded student groups to advance the IEEE mission</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-foreground mb-2">IEEE International Conference</h4>
          <p>An IEEE International Conference serves as a premier global platform for researchers, academicians, industry professionals, and students to exchange innovative ideas, present cutting-edge research, and discuss emerging technological advancements. Organized under the banner of the Institute of Electrical and Electronics Engineers, these conferences promote collaboration among experts from diverse fields such as artificial intelligence, communication systems, electronics, computing, robotics, and sustainable technologies.</p>
          <p className="mt-2">IEEE International Conferences provide participants with opportunities to publish high-quality research papers, gain exposure to international research trends, and interact with renowned scientists and keynote speakers. Such events encourage interdisciplinary learning, foster academic excellence, and help build strong professional networks across the globe.</p>
        </div>

        <div>
          <h4 className="font-bold text-foreground mb-2">IEEE Funding Proposal</h4>
          <p>Institute of Electrical and Electronics Engineers offers multiple funding opportunities for students, researchers, faculty members, IEEE Student Branches, Sections, and technical societies. These funding programs support conferences, workshops, research activities, humanitarian projects, innovation, and professional development.</p>
          <p className="mt-2 font-semibold">Major IEEE Funding Opportunities:</p>
          <div className="grid sm:grid-cols-2 gap-x-4 mt-1">
            <ol className="list-decimal ml-5">
              <li>IEEE Conference Sponsorship Funding</li>
              <li>IEEE Student Branch Funding</li>
              <li>IEEE SIGHT</li>
              <li>IEEE HAC Funding</li>
              <li>IEEE Educational Activities Funding</li>
            </ol>
            <ol className="list-decimal ml-5" start={6}>
              <li>IEEE Technical Society Grants</li>
              <li>IEEE Region 10 Funding</li>
              <li>IEEE WIE Funding</li>
              <li>IEEE Young Professionals Funding</li>
              <li>IEEE Research and Scholarship Grants</li>
            </ol>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-foreground mb-2">International Activity Planning</h4>
          <p>IEEE International Activity Planning focuses on organizing impactful technical, professional, and humanitarian activities that promote innovation, collaboration, and global knowledge exchange. Effective planning involves identifying objectives, target participants, budgeting, scheduling, resource management, and coordination with IEEE Sections, Student Branches, and technical societies.</p>
        </div>

        <div>
          <h4 className="font-bold text-foreground mb-2">Faculty Development Program (FDP)</h4>
          <p>A Faculty Development Program (FDP) is a structured academic initiative designed to enhance the teaching, research, technical, and professional skills of faculty members. FDPs provide opportunities for educators to learn emerging technologies, innovative teaching methodologies, research practices, and industry trends through expert lectures, workshops, hands-on sessions, and collaborative activities.</p>
        </div>

        <div>
          <h4 className="font-bold text-foreground mb-2">IEEE Membership Elevation Support</h4>
          <p>Institute of Electrical and Electronics Engineers Membership Elevation Support aims to encourage and assist IEEE members in advancing to higher membership grades such as Senior Member and Fellow based on their professional achievements, technical contributions, leadership, and experience. The support process includes guidance on eligibility criteria, nomination procedures, reference preparation, documentation, and profile enhancement.</p>
        </div>
      </div>
    )
  },
];

function ConsultancyPage() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <>
      {/* sub menu bar */}
      <section className="sticky top-16 z-30 bg-gray-100   backdrop-blur-md border-b">
        <div className="container-narrow py-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "center" })}
                className="px-3 py-3 tracking-wider text-sm font-medium rounded-full bg-green-800 text-gray-200 hover:text-white transition-colors flex items-center gap-2"
              >
                <s.icon className="w-4 h-4" /> {s.title}
              </button>
            ))}
          </div>
        </div>
      </section>
      <PageBanner title="Consultancy Services" subtitle="Expert guidance for academic and career success" imageSrc={consultancyBanner} />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionHeading tag="" title="How We Help You Succeed" />
          <div className="space-y-8">
            {services.map((s, i) => (
              <div key={s.title} id={s.id} className="bg-card rounded-xl p-6 md:p-8 border shadow-sm card-hover animate-fade-up scroll-mt-32" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="grid md:grid-cols-[1fr_1.5fr] gap-6 items-center">
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4">
                      <s.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                    {s.id === "academic-activity" && (
                      <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                      >
                        {isExpanded ? "Show Less" : "Know More"}
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    )}
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm bg-muted/50 rounded-lg px-4 py-3">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                {s.id === "academic-activity" && isExpanded && s.expandedContent}
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
