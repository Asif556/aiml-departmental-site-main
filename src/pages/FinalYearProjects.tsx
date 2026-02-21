import { useState } from "react";
import { User, GraduationCap } from "lucide-react";
import { finalYearProjects } from "@/data/departmentData";

const batches = [...new Set(finalYearProjects.map(p => p.batch))];

const FinalYearProjects = () => {
  const [batchFilter, setBatchFilter] = useState<string | "all">("all");

  const filtered = finalYearProjects.filter(p => {
    if (batchFilter !== "all" && p.batch !== batchFilter) return false;
    return true;
  });

  const grouped = batches
    .filter(b => batchFilter === "all" || b === batchFilter)
    .map(b => ({ batch: b, projects: filtered.filter(p => p.batch === b) }))
    .filter(g => g.projects.length > 0);

  return (
    <div>
      <section className="bg-primary py-16">
        <div className="container">
          <p className="text-accent text-[11px] font-bold uppercase tracking-[2px] mb-2 font-body">Research</p>
          <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">Notable Final Year Projects</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="flex flex-wrap gap-2 mb-8">
            <select
              value={String(batchFilter)}
              onChange={(e) => setBatchFilter(e.target.value)}
              className="px-3 py-2 rounded-md border border-border bg-card text-sm font-body text-foreground"
            >
              <option value="all">All Batches</option>
              {batches.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>

          {grouped.map(({ batch, projects }) => (
            <div key={batch} className="mb-10">
              <h3 className="font-display font-bold text-xl text-foreground mb-4 border-b border-border pb-2">{batch} Batch</h3>
              <div className="space-y-4">
                {projects.map((p) => (
                  <div key={p.id} className="bg-card border border-border rounded-lg p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-[15px] font-bold text-foreground font-body flex-1">{p.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <User className="w-4 h-4" />
                        <span className="font-body">
                          <span className="font-semibold">Guide:</span> {p.guide}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <GraduationCap className="w-4 h-4" />
                        <span className="font-body">
                          <span className="font-semibold">Semester:</span> {p.semester}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FinalYearProjects;
