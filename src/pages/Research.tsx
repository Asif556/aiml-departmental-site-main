import { Link } from "react-router-dom";
import { ArrowRight, FlaskConical, BookOpen, FileText, GraduationCap, Brain, Eye, Network, Database, Shield, Bot, Lightbulb } from "lucide-react";
import { researchHighlights } from "@/data/departmentData";

const researchAreas = [
  { icon: Brain, name: "Machine Learning", desc: "Deep learning, neural architectures, optimization" },
  { icon: Eye, name: "Computer Vision", desc: "Object detection, image segmentation, 3D vision" },
  { icon: Bot, name: "Natural Language Processing", desc: "Transformers, text generation, multilingual NLP" },
  { icon: Network, name: "Distributed AI", desc: "Federated learning, edge computing, multi-agent systems" },
  { icon: Database, name: "Data Science", desc: "Big data analytics, statistical modeling, data engineering" },
  { icon: Shield, name: "AI Ethics & Safety", desc: "Explainability, fairness, responsible AI deployment" },
];

const Research = () => (
  <div>
    <section className="bg-primary py-16">
      <div className="container">
        <p className="text-accent text-[11px] font-bold uppercase tracking-[2px] mb-2 font-body">Innovation & Discovery</p>
        <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">Research</h1>
      </div>
    </section>

    <section className="py-16">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Focus Areas</p>
          <h2 className="section-title">Research Thrust Areas</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {researchAreas.map((area) => (
            <div key={area.name} className="bg-card border border-border rounded-lg p-6 card-hover">
              <area.icon className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-display font-bold text-base text-foreground mb-1">{area.name}</h3>
              <p className="text-sm text-muted-foreground font-body">{area.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-primary rounded-lg p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              { val: "18", label: "Funded Projects" },
              { val: "210+", label: "Publications" },
              { val: "9", label: "Patents" },
              { val: "37", label: "Notable Final Year Projects" },
              { val: "8", label: "PhD Scholars" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-mono font-bold text-3xl text-primary-foreground">{s.val}</div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/60 mt-1 font-body">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-page links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: FlaskConical, label: "Funded Projects", href: "/research/projects" },
            { icon: BookOpen, label: "Publications", href: "/research/publications" },
            { icon: FileText, label: "Patents", href: "/research/patents" },
            { icon: Lightbulb, label: "Notable Final Year Projects", href: "/research/final-year-projects" },
            { icon: GraduationCap, label: "Ph.D. Scholars", href: "/research/phd-scholars" },
          ].map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="flex items-center gap-4 p-5 bg-card border border-border rounded-lg card-hover group"
            >
              <link.icon className="w-6 h-6 text-primary" />
              <span className="font-display font-bold text-base text-foreground flex-1">{link.label}</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Research;
