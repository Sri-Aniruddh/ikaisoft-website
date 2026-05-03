import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BookOpen, Users, Brain, FileText, Award, GraduationCap, ArrowRight, CheckCircle } from "lucide-react";
import PageBanner from "../components/PageBanner";
import SectionHeading from "../components/SectionHeading";
import learningBanner from "../assets/learning-banner.jpg";

export const Route = createFileRoute("/self-paced-learning")({
  head: () => ({
    meta: [
      { title: "Self-Paced Learning — Ikaisoft" },
      { name: "description", content: "Job-oriented courses, internships, instructor-led training, AI-powered quizzes and practice tests at Ikaisoft." },
      { property: "og:title", content: "Self-Paced Learning — Ikaisoft" },
    ],
  }),
  component: LearningPage,
});

const offerings = [
  { icon: GraduationCap, title: "Job-Oriented Courses", desc: "Industry-aligned courses in web development, data science, machine learning, cloud computing, and more — designed to make you job-ready." },
  { icon: Users, title: "Internships", desc: "Gain real-world experience with structured internship programs that connect you with live projects and industry mentors." },
  { icon: BookOpen, title: "Instructor-Led Training", desc: "Expert mentors visit colleges and institutions to deliver hands-on training sessions and workshops." },
  { icon: FileText, title: "Practice Tests & Study Material", desc: "Comprehensive study materials, mock exams, and practice papers to reinforce your learning." },
  { icon: Brain, title: "AI-Powered Quizzes", desc: "Adaptive quizzes that adjust difficulty based on your performance, ensuring optimal learning pace." },
  { icon: Award, title: "Certifications", desc: "Earn industry-recognized certifications upon completing courses to boost your career prospects." },
];

function LearningPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", course: "", message: "" });
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
      <PageBanner title="Self-Paced Learning" subtitle="Job-oriented courses, internships & AI-powered learning" imageSrc={learningBanner} />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionHeading tag="Our Programs" title="What We Offer" description="Comprehensive learning solutions tailored to launch your IT career." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((o, i) => (
              <div key={o.title} className="bg-card rounded-xl p-6 border shadow-sm card-hover animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <o.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{o.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow max-w-2xl">
          <SectionHeading tag="Enroll Now" title="Get Started Today" description="Fill in the form and our team will get back to you shortly." />

          {submitted ? (
            <div className="bg-card rounded-xl p-8 border text-center animate-scale-in">
              <div className="w-16 h-16 mx-auto rounded-full bg-success flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-success-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">Thank You!</h3>
              <p className="text-muted-foreground text-sm">We will respond soon. Our team will contact you at the provided email.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 md:p-8 border shadow-sm space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Name *</label>
                  <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email *</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="you@example.com" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Phone *</label>
                  <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Course / Interest</label>
                  <select value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
                    <option value="">Select a course</option>
                    <option>Web Development</option>
                    <option>Data Science</option>
                    <option>Machine Learning</option>
                    <option>Cloud Computing</option>
                    <option>Mobile App Development</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Message</label>
                <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" placeholder="Tell us about your goals..." />
              </div>
              <button type="submit" disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-accent transition-colors disabled:opacity-60">
                {loading ? "Submitting..." : (<>Submit Inquiry <ArrowRight className="w-4 h-4" /></>)}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
