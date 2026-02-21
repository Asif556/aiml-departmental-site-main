import { useState } from "react";
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";
import { events } from "@/data/departmentData";

const eventTypes = ["All", "Workshop", "Competition", "Hackathon", "Conference"] as const;

const Events = () => {
  const [typeFilter, setTypeFilter] = useState("All");
  const [timeFilter, setTimeFilter] = useState<"all" | "upcoming" | "past">("all");

  const now = new Date().toISOString().split("T")[0];
  const filtered = events.filter(e => {
    if (typeFilter !== "All" && e.type !== typeFilter) return false;
    if (timeFilter === "upcoming" && e.date < now) return false;
    if (timeFilter === "past" && e.date >= now) return false;
    return true;
  });

  return (
    <div>
      <section className="bg-primary py-16">
        <div className="container">
          <p className="text-accent text-[11px] font-bold uppercase tracking-[2px] mb-2 font-body">Department Life</p>
          <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">Events & Activities</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="flex flex-wrap gap-2 mb-8">
            {(["all", "upcoming", "past"] as const).map(t => (
              <button key={t} onClick={() => setTimeFilter(t)}
                className={`px-4 py-2 rounded-md text-sm font-semibold font-body capitalize transition-colors ${
                  timeFilter === t ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >{t === "all" ? "All" : t}</button>
            ))}
            <div className="w-px bg-border mx-1" />
            {eventTypes.map(t => (
              <button key={t} onClick={() => setTypeFilter(t)}
                className={`px-3 py-2 rounded-md text-sm font-medium font-body transition-colors ${
                  typeFilter === t ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >{t}</button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((e) => {
              const d = new Date(e.date);
              const endD = e.endDate ? new Date(e.endDate) : null;
              return (
                <div key={e.id} className="bg-card border border-border rounded-lg overflow-hidden card-hover">
                  <div className="flex">
                    <div className="w-24 bg-primary flex flex-col items-center justify-center text-primary-foreground shrink-0 p-4">
                      <span className="font-mono font-bold text-2xl">{d.getDate()}</span>
                      <span className="text-xs uppercase font-body">{d.toLocaleString("default", { month: "short" })}</span>
                      <span className="text-xs font-body opacity-70">{d.getFullYear()}</span>
                      {endD && (
                        <>
                          <div className="w-8 h-px bg-primary-foreground/30 my-1" />
                          <span className="font-mono font-bold text-lg">{endD.getDate()}</span>
                          <span className="text-[10px] uppercase font-body">{endD.toLocaleString("default", { month: "short" })}</span>
                        </>
                      )}
                    </div>
                    <div className="p-5 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full font-body ${
                          e.type === "Workshop" ? "bg-blue-100 text-blue-800"
                          : e.type === "Hackathon" ? "bg-purple-100 text-purple-800"
                          : e.type === "Conference" ? "bg-green-100 text-green-800"
                          : e.type === "Competition" ? "bg-orange-100 text-orange-800"
                          : "bg-amber-100 text-amber-800"
                        }`}>{e.type}</span>
                        {e.semester && (
                          <span className="text-[10px] font-medium text-muted-foreground font-body">
                            {e.semester}
                          </span>
                        )}
                      </div>
                      <h3 className="font-display font-bold text-base text-foreground mb-2">{e.title}</h3>
                      <p className="text-sm text-muted-foreground font-body mb-3 line-clamp-2">{e.description}</p>
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground font-body">
                          {e.venue && <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {e.venue}</span>}
                          {e.speakers && e.speakers.length > 0 && (
                            <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {e.speakers.join(", ")}</span>
                          )}
                        </div>
                        {e.link && (
                          <a 
                            href={e.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-light transition-colors font-body"
                          >
                            Visit Site <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground font-body py-12">No events found for the selected filters.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;
