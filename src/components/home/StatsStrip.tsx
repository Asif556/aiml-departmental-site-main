import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/departmentData";

const CountUp = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1200;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="stat-number">
      {count}{suffix}
    </div>
  );
};

const StatsStrip = () => (
  <section className="bg-card border-b-2 border-accent/30">
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`text-center ${
              i < stats.length - 1 ? "md:border-r md:border-border" : ""
            }`}
          >
            <CountUp target={stat.value} suffix={stat.suffix} />
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsStrip;
