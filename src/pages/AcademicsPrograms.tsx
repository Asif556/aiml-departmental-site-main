import { useState } from "react";
import { GraduationCap, Clock, Users, CheckCircle, Briefcase } from "lucide-react";
import { programs } from "@/data/departmentData";

const tabs = ["B.Tech", "Ph.D."];

const AcademicsPrograms = () => {
  const [active, setActive] = useState(0);
  const program = programs[active];

  return (
    <div>
      <section className="bg-primary py-16">
        <div className="container">
          <p className="text-accent text-[11px] font-bold uppercase tracking-[2px] mb-2 font-body">Academics</p>
          <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">Programs Offered</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          {/* Tabs */}
          <div className="flex gap-2 mb-10">
            {tabs.map((t, i) => (
              <button
                key={t}
                onClick={() => setActive(i)}
                className={`px-5 py-2.5 rounded-md text-sm font-semibold font-body transition-colors ${
                  active === i
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Program Detail */}
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h2 className="font-display font-bold text-2xl text-foreground">{program.name}</h2>
                <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground font-body">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {program.duration}</span>
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" /> Intake: {program.intake}</span>
                </div>
              </div>
            </div>

            <p className="text-[15px] text-muted-foreground font-body leading-relaxed mb-6">{program.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display font-bold text-base text-foreground mb-3">Eligibility</h3>
                <p className="text-sm text-muted-foreground font-body">{program.eligibility}</p>
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-foreground mb-3">Specializations</h3>
                <div className="flex flex-wrap gap-2">
                  {program.specializations?.map((s) => (
                    <span key={s} className="text-xs bg-primary/5 text-primary px-3 py-1 rounded-full font-body font-medium">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-display font-bold text-base text-foreground mb-3">Career Outcomes</h3>
              <div className="grid grid-cols-2 gap-3">
                {program.careerOutcomes?.map((c) => (
                  <div key={c} className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                    <Briefcase className="w-4 h-4 text-accent shrink-0" />
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicsPrograms;
