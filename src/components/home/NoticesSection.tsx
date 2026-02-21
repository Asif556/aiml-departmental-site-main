import { Link } from "react-router-dom";
import { ArrowRight, AlertTriangle } from "lucide-react";
import { notices } from "@/data/departmentData";

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    month: "short",
    day: "numeric",
  });
};

const NoticesSection = () => {
  const importantNotices = notices.filter((n) => n.isImportant);

  return (
    <section className="py-16 bg-secondary">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Stay Updated</p>
          <h2 className="section-title">Latest Notices</h2>
        </div>

        {/* Marquee ticker */}
        <div className="bg-accent/10 border border-accent/20 rounded-md overflow-hidden mb-6">
          <div className="flex items-center">
            <div className="bg-accent text-accent-foreground px-4 py-2 text-xs font-bold uppercase tracking-wider shrink-0 font-body">
              <AlertTriangle className="w-3.5 h-3.5 inline mr-1" />
              Important
            </div>
            <div className="overflow-hidden relative flex-1">
              <div className="animate-marquee whitespace-nowrap py-2 px-4">
                {importantNotices.map((n, i) => (
                  <span key={n.id} className="text-sm text-foreground/80 font-body">
                    {n.title}
                    {i < importantNotices.length - 1 && (
                      <span className="mx-6 text-accent">•</span>
                    )}
                  </span>
                ))}
                {/* Duplicate for seamless loop */}
                {importantNotices.map((n, i) => (
                  <span key={`dup-${n.id}`} className="text-sm text-foreground/80 font-body">
                    {n.title}
                    {i < importantNotices.length - 1 && (
                      <span className="mx-6 text-accent">•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Notice list */}
        <div className="space-y-3">
          {notices.slice(0, 4).map((notice) => (
            <div
              key={notice.id}
              className={`flex items-start gap-4 p-4 bg-card rounded-lg border transition-colors hover:border-primary/20 ${
                notice.isImportant ? "border-l-4 border-l-accent" : "border-border"
              }`}
            >
              <div className="bg-primary/10 text-primary rounded-md px-3 py-1.5 text-xs font-mono font-bold shrink-0">
                {formatDate(notice.publishedDate || notice.date)}
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] uppercase tracking-wider text-accent font-bold font-body mr-2">
                  {notice.category}
                </span>
                <p className="text-sm font-medium text-foreground font-body">{notice.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/notices"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors font-body"
          >
            View All Notices
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NoticesSection;
