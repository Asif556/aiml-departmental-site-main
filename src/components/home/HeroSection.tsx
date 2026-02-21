import { Link } from "react-router-dom";
import { Users, GraduationCap } from "lucide-react";
import { departmentInfo, stats } from "@/data/departmentData";
import heroBg from "@/assets/UEM_COLLEGE_01.png";

const HeroSection = () => (
  <section
    className="relative h-[520px] flex items-center overflow-hidden bg-primary"
  >
    {/* Faded background image */}
    <div
      className="absolute inset-0 opacity-40"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "right 15%",
      }}
    />

    {/* Navy gradient overlay */}
    <div
      className="absolute inset-0"
      style={{
        background: "linear-gradient(to right, hsla(215, 62%, 27%, 0.45) 0%, hsla(215, 62%, 27%, 0.25) 70%, hsla(215, 62%, 27%, 0.1) 100%)",
      }}
    />

    <div className="container relative z-10 flex items-center justify-between">
      {/* Text */}
      <div className="max-w-[600px] text-primary-foreground">
        <p className="text-sm font-medium tracking-wide opacity-80 mb-3 font-body">
          Department of {departmentInfo.shortName} | {departmentInfo.institutionShort}
        </p>
        <h1 className="font-display text-2xl md:text-3xl font-bold leading-[1.1] mb-4">
          {departmentInfo.name}
        </h1>
        <p className="text-base md:text-lg opacity-85 mb-8 font-body leading-relaxed">
          {departmentInfo.tagline}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/academics/programs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold text-sm rounded-md hover:bg-accent-light transition-colors font-body"
          >
            <GraduationCap className="w-4 h-4" />
            Explore Programs
          </Link>
          <Link
            to="/research"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-foreground/60 text-primary-foreground font-semibold text-sm rounded-md hover:bg-primary-foreground/10 transition-colors font-body"
          >
            <Users className="w-4 h-4" />
            View Research
          </Link>
        </div>
      </div>

      {/* Floating stat card */}
      <div className="hidden lg:block bg-card/95 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-border min-w-[220px]">
        <div className="text-center">
          <div className="stat-number text-3xl">{stats[0].value}</div>
          <div className="stat-label text-xs">{stats[0].label}</div>
          <div className="w-12 h-px bg-accent mx-auto my-3" />
          <div className="stat-number text-3xl">{stats[1].value}+</div>
          <div className="stat-label text-xs">{stats[1].label}</div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
