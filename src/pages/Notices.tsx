import { useState } from "react";
import { notices } from "@/data/departmentData";
import { Search, Paperclip } from "lucide-react";

const categories = ["all", "exam", "result", "circular", "placement", "general"];

const Notices = () => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = notices.filter((n) => {
    if (filter !== "all" && n.category !== filter) return false;
    if (search && !n.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div>
      <section className="bg-primary py-16">
        <div className="container">
          <p className="text-accent text-[11px] font-bold uppercase tracking-[2px] mb-2 font-body">Announcements</p>
          <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">Notices & Announcements</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          {/* Important */}
          <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-accent mb-3 font-body">📌 Important Notices</p>
            {notices.filter(n => n.isImportant).map((n) => (
              <div key={n.id} className="flex items-start gap-3 py-2 border-b border-accent/10 last:border-0">
                <span className="font-mono text-xs text-muted-foreground shrink-0">
                  {new Date(n.publishedDate || n.date).toLocaleDateString("en-IN", { month: "short", day: "numeric" })}
                </span>
                <p className="text-sm font-medium text-foreground font-body">{n.title}</p>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search notices..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-md text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full border transition-colors font-body ${
                    filter === cat
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-muted-foreground border-border hover:border-primary/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* List */}
          <div className="space-y-3">
            {filtered.map((n) => (
              <div
                key={n.id}
                className={`flex items-start gap-4 p-4 bg-card rounded-lg border transition-colors hover:border-primary/20 ${
                  n.isImportant ? "border-l-4 border-l-accent" : "border-border"
                }`}
              >
                <div className="font-mono text-xs text-muted-foreground shrink-0 pt-0.5">
                  {new Date(n.publishedDate || n.date).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}
                </div>
                <div className="flex-1">
                  <span className="text-[10px] uppercase tracking-wider text-accent font-bold font-body mr-2">{n.category}</span>
                  <p className="text-sm font-medium text-foreground font-body">{n.title}</p>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-12 font-body">No notices found. Try a different filter.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notices;
