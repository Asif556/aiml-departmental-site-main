import { useState } from "react";
import { X } from "lucide-react";
import { galleryImages } from "@/data/departmentData";

const categories = ["all", "labs", "events", "students", "campus"] as const;

const Gallery = () => {
  const [filter, setFilter] = useState<string>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "all" ? galleryImages : galleryImages.filter(img => img.category === filter);

  return (
    <div>
      <section className="bg-primary py-16">
        <div className="container">
          <p className="text-accent text-[11px] font-bold uppercase tracking-[2px] mb-2 font-body">Memories</p>
          <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">Gallery</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-md text-sm font-semibold font-body capitalize transition-colors ${
                  filter === c ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Masonry-like grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => {
              const heights = ["h-48", "h-64", "h-56", "h-72", "h-52", "h-60"];
              return (
                <div
                  key={img.id}
                  className="break-inside-avoid bg-secondary rounded-lg overflow-hidden cursor-pointer group relative"
                  onClick={() => setLightbox(img.id)}
                >
                  <div className={`${heights[i % heights.length]} flex items-center justify-center`}>
                    <span className="font-display font-bold text-lg text-muted-foreground/20">{img.title}</span>
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-colors flex items-end">
                    <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-sm font-body font-semibold text-primary-foreground">{img.title}</p>
                      <p className="text-xs text-primary-foreground/70 font-body">{img.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 bg-foreground/80 z-50 flex items-center justify-center p-8" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-primary-foreground" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
          <div className="bg-card rounded-lg p-8 max-w-lg w-full text-center" onClick={e => e.stopPropagation()}>
            <div className="h-64 bg-secondary rounded-lg flex items-center justify-center mb-4">
              <span className="font-display font-bold text-xl text-muted-foreground/30">
                {galleryImages.find(g => g.id === lightbox)?.title}
              </span>
            </div>
            <p className="font-display font-bold text-lg text-foreground">{galleryImages.find(g => g.id === lightbox)?.title}</p>
            <p className="text-sm text-muted-foreground font-body">{galleryImages.find(g => g.id === lightbox)?.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
