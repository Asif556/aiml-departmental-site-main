import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Calendar, FileText } from "lucide-react";
import { programs } from "@/data/departmentData";

const AcademicsOverview = () => (
  <div>
    <section className="bg-primary py-16">
      <div className="container">
        <p className="text-accent text-[11px] font-bold uppercase tracking-[2px] mb-2 font-body">Education</p>
        <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">Academics</h1>
      </div>
    </section>

    <section className="py-16">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Our Programs</p>
          <h2 className="section-title">Programs Offered</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {programs.map((p) => (
            <div key={p.name} className="bg-card border border-border rounded-lg p-6 card-hover">
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{p.name}</h3>
              <p className="text-sm text-muted-foreground font-body mb-3">{p.duration} · Intake: {p.intake}</p>
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">{p.description}</p>
              <Link to="/academics/programs" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light transition-colors font-body">
                Details <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

        <div className="section-header">
          <p className="section-label">Quick Links</p>
          <h2 className="section-title">Academic Resources</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: BookOpen, label: "Programs Offered", href: "/academics/programs", desc: "B.Tech and Ph.D. programs" },
            { icon: FileText, label: "Curriculum & Syllabus", href: "/academics/curriculum", desc: "Semester-wise course structure" },
            { icon: Calendar, label: "Academic Calendar", href: "/academics/calendar", desc: "Key dates & exam schedule" },
          ].map((link) => (
            <Link key={link.href} to={link.href} className="flex items-center gap-4 p-5 bg-card border border-border rounded-lg card-hover group">
              <link.icon className="w-8 h-8 text-accent" />
              <div className="flex-1">
                <span className="font-display font-bold text-base text-foreground">{link.label}</span>
                <p className="text-xs text-muted-foreground font-body">{link.desc}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default AcademicsOverview;
