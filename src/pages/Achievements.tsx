import { useState } from "react";
import { Trophy, Award, Star, TrendingUp } from "lucide-react";
import { achievements, fundedProjects } from "@/data/departmentData";

const Achievements = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
  <div>
    <section className="bg-primary py-16">
      <div className="container">
        <p className="text-accent text-[11px] font-bold uppercase tracking-[2px] mb-2 font-body">Excellence</p>
        <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">Achievements & Awards</h1>
      </div>
    </section>

    <section className="py-16">
      <div className="container">
        {/* Rankings */}
        {/* <div className="section-header">
          <p className="section-label">Recognition</p>
          <h2 className="section-title">Rankings & Accreditations</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {achievements.rankings.map(r => (
            <div key={r.body} className="bg-primary rounded-lg p-6 text-center">
              <p className="font-mono font-bold text-3xl text-primary-foreground mb-1">{r.rank}</p>
              <p className="text-sm text-primary-foreground/80 font-body">{r.metric}</p>
              <p className="text-xs text-primary-foreground/60 font-body mt-1">{r.body}</p>
            </div>
          ))}
        </div> */}

        {/* Student Achievements */}
        <div className="section-header">
          <p className="section-label">Students</p>
          <h2 className="section-title">Student Achievements</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.studentAchievements.map((a, i) => {
            const isExpanded = expandedItems.includes(i);
            const description = a.description || "";
            const truncatedDesc = description.length > 100 ? description.substring(0, 100) + "..." : description;
            
            return (
              <div key={i} className="bg-card border border-border rounded-lg p-5 card-hover">
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-sm text-foreground mb-1">{a.student}</h3>
                    <p className="text-sm text-muted-foreground font-body mb-2">{a.achievement}</p>
                    {description && (
                      <p className="text-xs text-muted-foreground font-body mb-2">
                        {isExpanded ? description : truncatedDesc}
                      </p>
                    )}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded-full font-body font-medium">{a.rank}</span>
                      <span className="text-xs text-muted-foreground font-body">{a.event} · {a.year}</span>
                    </div>
                    {description && description.length > 100 && (
                      <button
                        onClick={() => toggleExpand(i)}
                        className="text-xs text-primary hover:text-primary/80 font-body font-medium transition-colors"
                      >
                        {isExpanded ? "Show Less" : "Show More"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Top Funded Projects */}
        <div className="section-header">
          <p className="section-label">Research Impact</p>
          <h2 className="section-title">Top Funded Projects</h2>
        </div>
        <div className="space-y-4">
          {fundedProjects.slice(0, 5).map((p, i) => (
            <div key={p.id} className="flex items-center gap-4 bg-card border border-border rounded-lg p-5">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="font-mono font-bold text-primary">{i + 1}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-display font-bold text-sm text-foreground">{p.title}</h4>
                <p className="text-xs text-muted-foreground font-body">{p.pi} · {p.agency}</p>
              </div>
              <span className="font-mono font-bold text-sm text-primary shrink-0">{p.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
  );
};

export default Achievements;
