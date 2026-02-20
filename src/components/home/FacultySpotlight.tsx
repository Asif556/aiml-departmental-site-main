import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { faculty } from "@/data/departmentData";

const FacultySpotlight = () => (
  <section className="py-16">
    <div className="container">
      <div className="section-header">
        <p className="section-label">Our People</p>
        <h2 className="section-title">Faculty Spotlight</h2>
      </div>

      <div className="flex gap-5 overflow-x-auto pb-4 -mx-2 px-2 scrollbar-hide">
        {faculty.map((member) => (
          <Link
            key={member.id}
            to={`/faculty/${member.id}`}
            className="bg-card border border-border rounded-lg p-5 min-w-[200px] shrink-0 card-hover text-center"
          >
            <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
              {member.image ? (
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              ) : (
                <span className="font-display font-bold text-primary text-lg">
                  {member.name.split(" ").slice(-1)[0][0]}
                </span>
              )}
            </div>
            <h3 className="font-display font-bold text-sm text-foreground mb-0.5 leading-snug">
              {member.name}
            </h3>
            <p className="text-xs text-muted-foreground font-body mb-1">
              {member.designation}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link
          to="/faculty"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors font-body"
        >
          View All Faculty <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default FacultySpotlight;
