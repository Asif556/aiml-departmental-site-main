import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const VisionMission = () => (
  <div>
    {/* Hero */}
    <section className="bg-primary py-16">
      <div className="container">
        <Link to="/about" className="inline-flex items-center gap-1 text-primary-foreground/70 text-sm font-body mb-3 hover:text-primary-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to About
        </Link>
        <p className="text-accent text-[11px] font-bold uppercase tracking-[2px] mb-2 font-body">Our Vision</p>
        <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">Vision & Mission</h1>
      </div>
    </section>

    <section className="py-16">
      <div className="container max-w-3xl">
        <div className="section-header">
          <p className="section-label">Our Vision</p>
          <h2 className="section-title">Vision</h2>
        </div>
        <blockquote className="border-l-4 border-accent pl-6 py-2 text-lg font-display text-foreground/80 italic mb-12">
          "Our vision is to be the forerunner in AI and ML and to generate globally employable graduates with ethical principles who are dedicated to creating a thriving country."
        </blockquote>

        <div className="section-header">
          <p className="section-label">Our Mission</p>
          <h2 className="section-title">Mission</h2>
        </div>
        <ul className="space-y-3 mb-8">
          {[
            "To make a consistent effort to establish and maintain an academic atmosphere that prioritizes research and publishing.",
            "To inculcate individuals with a solid understanding of artificial intelligence, machine learning, and computer science and engineering, both theoretically and practically.",
            "To impart knowledge of artificial intelligence and data analysis to each student individually.",
          ].map((m, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground font-body">
              <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
              {m}
            </li>
          ))}
        </ul>

        <div className="flex gap-4 mt-12">
          <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors font-body">
            <ArrowLeft className="w-4 h-4" /> Back to About
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default VisionMission;
