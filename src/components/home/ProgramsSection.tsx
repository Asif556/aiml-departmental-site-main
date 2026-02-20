import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users } from "lucide-react";
import { programs } from "@/data/departmentData";

const ProgramsSection = () => (
  <section className="py-16">
    <div className="container">
      <div className="section-header">
        <p className="section-label">What We Offer</p>
        <h2 className="section-title">Programs Offered</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {programs.map((program) => (
          <div
            key={program.name}
            className="bg-card border border-border rounded-lg p-6 card-hover"
          >
            <h3 className="font-display font-bold text-lg text-foreground mb-2">
              {program.name}
            </h3>
            <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground font-body">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {program.duration}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5" />
                Intake: {program.intake}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-5 font-body leading-relaxed">
              {program.description}
            </p>
            <Link
              to={program.link}
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light transition-colors font-body"
            >
              Learn More <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramsSection;
