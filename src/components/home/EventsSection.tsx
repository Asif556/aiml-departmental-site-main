import { Link } from "react-router-dom";
import { ArrowRight, Calendar, ExternalLink } from "lucide-react";
import { events } from "@/data/departmentData";

const formatDate = (dateStr: string) => {
  const d = new Date(dateStr);
  return {
    month: d.toLocaleDateString("en-IN", { month: "short" }).toUpperCase(),
    day: d.getDate().toString(),
  };
};

const EventsSection = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set to start of day for accurate comparison
  
  const upcomingEvents = events.filter(event => new Date(event.date) >= today);

  return (
    <section className="py-16 bg-secondary">
      <div className="container">
        <div className="section-header">
          <p className="section-label">What's Happening</p>
          <h2 className="section-title">Upcoming Events</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => {
          const date = formatDate(event.date);
          return (
            <div
              key={event.id}
              className="bg-card border border-border rounded-lg p-6 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-lg px-3 py-2 text-center shrink-0">
                  <div className="text-[10px] font-bold uppercase tracking-wider font-body opacity-80">
                    {date.month}
                  </div>
                  <div className="font-mono font-bold text-2xl leading-none">
                    {date.day}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="inline-block bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-2 font-body">
                    {event.type}
                  </span>
                  <h3 className="font-display font-bold text-sm text-foreground mb-1 leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-body line-clamp-2 mb-2">
                    {event.description}
                  </p>
                  {event.link && (
                    <a 
                      href={event.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] font-semibold text-primary hover:text-primary-light transition-colors font-body"
                    >
                      Visit Website <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/events"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors font-body"
        >
          View All Events <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
  );
};

export default EventsSection;
