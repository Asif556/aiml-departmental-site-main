import { useState } from "react";
import { GraduationCap } from "lucide-react";
import { phdScholars } from "@/data/departmentData";

const PhdScholars = () => {
  const [filter, setFilter] = useState<"all" | "ongoing" | "awarded">("all");
  const filtered = filter === "all" ? phdScholars : phdScholars.filter(s => s.status === filter);

  return (
    <div>
      <section className="bg-primary py-16">
        <div className="container">
          <p className="text-accent text-[11px] font-bold uppercase tracking-[2px] mb-2 font-body">Research</p>
          <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">Ph.D. Scholars</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="flex gap-2 mb-8">
            {(["all", "ongoing", "awarded"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`px-4 py-2 rounded-md text-sm font-semibold font-body capitalize transition-colors ${
                  filter === s ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {s === "all" ? "All" : s}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((s) => (
              <div key={s.id} className="bg-card border border-border rounded-lg p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display font-bold text-base text-foreground">{s.name}</h3>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        s.status === "ongoing" ? "bg-green-100 text-green-800" : "bg-accent/10 text-accent"
                      }`}>
                        {s.status}
                      </span>
                    </div>
                    {(s as any).enrolmentNumber && (
                      <p className="text-xs text-muted-foreground font-body mb-1">
                        Enrolment No: {(s as any).enrolmentNumber}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground font-body mb-2">
                      Supervisor: {s.supervisor}{s.coSupervisor && ` · Co-supervisor: ${s.coSupervisor}`}
                    </p>
                    {s.topic && (
                      <p className="text-sm text-foreground/80 font-body italic mb-2">"{s.topic}"</p>
                    )}
                    <p className="text-xs text-muted-foreground font-body mt-2">Joined: {s.yearOfJoining}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhdScholars;
