import { TrendingUp, Quote, GraduationCap, Users } from "lucide-react";
import { placementStats, higherEducation, placementTestimonials, recruiters, industryMous } from "@/data/departmentData";

const Placements = () => (
  <div>
    <section className="bg-primary py-16">
      <div className="container">
        <p className="text-accent text-[11px] font-bold uppercase tracking-[2px] mb-2 font-body">Careers</p>
        <h1 className="font-display text-3xl md:text-[38px] font-bold text-primary-foreground">Placements & Industry</h1>
      </div>
    </section>

    {/* Hero Stats */}
    <section className="py-12 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-lg px-6 py-5 text-center">
            <Users className="w-8 h-8 text-accent mx-auto mb-2" />
            <p className="font-mono font-bold text-3xl text-primary mb-1">{placementStats[0].totalStudents}</p>
            <p className="text-xs text-muted-foreground font-body">Total Students</p>
          </div>
          <div className="bg-card border border-border rounded-lg px-6 py-5 text-center">
            <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
            <p className="font-mono font-bold text-3xl text-primary mb-1">{placementStats[0].studentsPlaced}</p>
            <p className="text-xs text-muted-foreground font-body">Students Placed</p>
          </div>
          {/* <div className="bg-card border border-border rounded-lg px-6 py-5 text-center">
            <GraduationCap className="w-8 h-8 text-accent mx-auto mb-2" />
            <p className="font-mono font-bold text-3xl text-primary mb-1">{placementStats[0].placementPercentage}%</p>
            <p className="text-xs text-muted-foreground font-body">Placement Rate</p>
          </div> */}
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container">
        {/* Placement Statistics */}
        <div className="section-header">
          <p className="section-label">Track Record</p>
          <h2 className="section-title">Placement Statistics</h2>
        </div>
        <div className="overflow-x-auto mb-16">
          <table className="w-full text-sm font-body">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-3 pr-4 font-semibold text-foreground">Batch</th>
                <th className="py-3 pr-4 font-semibold text-foreground">Total Students</th>
                <th className="py-3 pr-4 font-semibold text-foreground">Eligible Students</th>
                <th className="py-3 font-semibold text-foreground">Students Placed</th>
                {/* <th className="py-3 font-semibold text-foreground">Percentage</th> */}
              </tr>
            </thead>
            <tbody>
              {placementStats.map(s => (
                <tr key={s.batch} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                  <td className="py-3 pr-4 font-medium text-foreground">{s.batch} (till June)</td>
                  <td className="py-3 pr-4 text-muted-foreground">{s.totalStudents}</td>
                  <td className="py-3 pr-4 text-muted-foreground">
                    {s.eligibleStudents}
                    <span className="text-xs block text-muted-foreground/70">({s.eligibilityCriteria})</span>
                  </td>
                  <td className="py-3 font-mono text-foreground">{s.studentsPlaced}</td>
                  {/* <td className="py-3 font-mono text-foreground">{s.placementPercentage}%</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pursuing Higher Education */}
        <div className="section-header">
          <p className="section-label">Academic Excellence</p>
          <h2 className="section-title">Pursuing Higher Education</h2>
        </div>
        <div className="overflow-x-auto mb-16">
          <table className="w-full text-sm font-body">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-3 pr-4 font-semibold text-foreground">Name</th>
                <th className="py-3 pr-4 font-semibold text-foreground">Batch</th>
                <th className="py-3 font-semibold text-foreground">Higher Study</th>
              </tr>
            </thead>
            <tbody>
              {higherEducation.map(student => (
                <tr key={student.name} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                  <td className="py-3 pr-4 font-medium text-foreground">{student.name}</td>
                  <td className="py-3 pr-4 text-muted-foreground">{student.batch}</td>
                  <td className="py-3 text-muted-foreground">
                    {student.program}{student.institution && ` - ${student.institution}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Top Recruiters */}
        <div className="section-header">
          <p className="section-label">Our Partners</p>
          <h2 className="section-title">Top Recruiters</h2>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-16">
          {recruiters.map(r => (
            <div key={r} className="bg-card border border-border rounded-lg p-4 text-center card-hover">
              <span className="font-body font-semibold text-sm text-foreground">{r}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        {/* <div className="section-header">
          <p className="section-label">Student Stories</p>
          <h2 className="section-title">Testimonials</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {placementTestimonials.map(t => (
            <div key={t.name} className="bg-card border border-border rounded-lg p-6">
              <Quote className="w-6 h-6 text-accent/40 mb-3" />
              <p className="text-sm text-muted-foreground font-body italic leading-relaxed mb-4">"{t.quote}"</p>
              <div>
                <p className="font-display font-bold text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground font-body">{t.role}, {t.company} · Batch {t.batch}</p>
              </div>
            </div>
          ))}
        </div> */}

        {/* Industry MoUs */}
        {/* <div className="section-header">
          <p className="section-label">Collaborations</p>
          <h2 className="section-title">Industry MoUs</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm font-body">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-3 pr-4 font-semibold text-foreground">Company</th>
                <th className="py-3 pr-4 font-semibold text-foreground">Year</th>
                <th className="py-3 font-semibold text-foreground">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {industryMous.map(m => (
                <tr key={m.company} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                  <td className="py-3 pr-4 font-medium text-foreground">{m.company}</td>
                  <td className="py-3 pr-4 text-muted-foreground">{m.date}</td>
                  <td className="py-3 text-muted-foreground">{m.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </div>
    </section>
  </div>
);

export default Placements;
