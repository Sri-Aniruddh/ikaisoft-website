import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Monitor, Users, FlaskConical, CheckCircle, ArrowRight, GraduationCap, Code, Lightbulb, TrendingUp } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import heroAiBg from "../assets/hero-ai-bg.jpg";
import mainLogo from "../assets/ikaisoft-mainlogo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ikaisoft — Empowering Careers with AI + IT + Education" },
      { name: "description", content: "Ikaisoft offers self-paced learning, IT solutions, consultancy services, and research support. Transform knowledge into confidence." },
    ],
     links: [
      {
        rel: "icon",
        href: mainLogo,
        type: "image/png",
      },
    ],
  }),
  component: HomePage,
});

const verticals = [
  { icon: BookOpen,logo: mainLogo, title: "Self-Paced Learning", desc: "Job-oriented courses, internships, AI-powered quizzes & instructor-led training.", to: "/self-paced-learning" as const, color: "from-green-500 to-emerald-600" },
  { icon: Monitor,logo: mainLogo, title: "IT Solutions", desc: "Custom software, ERP solutions, web & mobile app development.", to: "/it-solutions" as const, color: "from-blue-500 to-cyan-600" },
  { icon: Users,logo: mainLogo, title: "Consultancy Services", desc: "Academic guidance, interview prep & job-ready consultation.", to: "/consultancy" as const, color: "from-orange-500 to-amber-600" },
  { icon: FlaskConical,logo: mainLogo, title: "Research Support", desc: "Research paper writing, publication support & academic assistance.", to: "/research-support" as const, color: "from-purple-500 to-violet-600" },
];

const whyUs = [
  { icon: GraduationCap, title: "Expert Instructors", desc: "Learn from industry professionals with years of real-world experience." },
  { icon: Code, title: "Hands-On Projects", desc: "Build real projects that strengthen your portfolio and skills." },
  { icon: Lightbulb, title: "AI-Powered Learning", desc: "Adaptive quizzes and personalized learning paths powered by AI." },
  { icon: TrendingUp, title: "Career Support", desc: "Interview preparation, resume building, and placement assistance." },
];

const stats = [
  { value: "50+", label: "Online Courses" },
  { value: "20+", label: "Expert Instructors" },
  { value: "2000+", label: "Enrolled Students" },
  { value: "95%", label: "Satisfaction Rate" },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 animate-[hero-zoom_20s_ease-in-out_infinite_alternate]">
          <img src={heroAiBg} alt="AI technology background" className="w-full h-full object-cover" width={1920} height={1080} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="relative z-10 container-narrow section-padding w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-green-500/20 backdrop-blur-sm text-green-300 text-xs font-semibold rounded-full mb-5 animate-fade-up border border-green-400/30">
                AI + IT + EDUCATION
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Transform Knowledge into <span className="text-green-400">Confidence</span>
              </h1>
              <p className="mt-5 text-base md:text-lg text-gray-300 leading-relaxed max-w-xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
                Upskill with industry-ready courses, mock interviews, quizzes, and real project experience — everything you need to launch your IT career.
              </p>
              <div className="flex flex-wrap gap-3 mt-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <Link to="/self-paced-learning" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-600 text-white font-semibold text-sm hover:bg-green-700 transition-colors shadow-lg shadow-green-600/30">
                  Explore Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact"  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white font-semibold text-sm border border-white/20 hover:bg-white/20 transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-green-500/20 rounded-full blur-3xl" />
                <div className="relative grid grid-cols-2 gap-4">
                  {[
                    { icon: BookOpen, label: "50+ Courses" },
                    { icon: Monitor, label: "Live Projects" },
                    { icon: Users, label: "Expert Mentors" },
                    { icon: FlaskConical, label: "Research Aid" },
                  ].map((item, i) => (
                    <div key={item.label} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 text-center animate-fade-up hover:bg-white/10 transition-colors" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                      <item.icon className="w-7 h-7 text-green-400 mx-auto mb-2" />
                      <span className="text-white text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-primary-foreground py-10">
        <div className="container-narrow px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-bold font-heading">{s.value}</div>
              <div className="text-sm opacity-80 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container-narrow grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading tag="About Us" title="Empowering the Next Generation of IT Professionals" center={false} />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ikaisoft is a premier tech education and IT solutions company dedicated to bridging the gap between academic learning and industry requirements. We provide comprehensive, AI-driven learning experiences paired with professional IT services.
            </p>
            <ul className="mt-5 space-y-2">
              {["Industry-aligned curriculum", "Real-world project experience", "AI-powered adaptive learning", "Expert mentorship & guidance"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Link to="/about" className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-accent transition-colors">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card rounded-xl p-6 text-center shadow-sm border hover-lift">
                <div className="text-2xl font-bold font-heading text-gradient">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow">
          <SectionHeading tag="Our Verticals" title="What We Offer" description="Four key verticals to empower your career and business growth." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {verticals.map((v, i) => (
              <Link
                key={v.to}
                to={v.to}
                className="group bg-card rounded-xl p-6 border shadow-sm card-hover animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${v.color} flex items-center justify-center mb-4`}>
                  <v.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-xs font-medium text-primary group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionHeading tag="Why Ikaisoft" title="Why Choose Us" description="We go beyond traditional learning to prepare you for real-world success." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w, i) => (
              <div key={w.title} className="text-center p-6 rounded-xl hover-lift animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-14 h-14 mx-auto rounded-full bg-secondary flex items-center justify-center mb-4">
                  <w.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{w.title}</h3>
                <p className="text-muted-foreground text-sm">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container-narrow max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">Ready to Start Your Journey?</h2>
          <p className="mt-4 opacity-80 text-base max-w-xl mx-auto">
            Join thousands of students who have transformed their careers with Ikaisoft's comprehensive programs.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link to="/self-paced-learning" className="px-6 py-3 rounded-lg bg-primary-foreground text-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
              Browse Courses
            </Link>
            <Link to="/contact" className="px-6 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground font-semibold text-sm border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
