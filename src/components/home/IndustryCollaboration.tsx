import { Handshake, MapPin, Calendar, Users, CheckCircle2, Sparkles } from "lucide-react";
import { industryCollaborations } from "@/data/departmentData";

const IndustryCollaboration = () => (
  <section className="py-16 bg-background">
    <div className="container">
      <div className="section-header">
        <p className="section-label">Partnerships & Innovation</p>
        <h2 className="section-title">Industry Collaboration & Training</h2>
        <p className="section-description max-w-3xl mx-auto">
          Building bridges between academia and industry through strategic partnerships that foster innovation, 
          research excellence, and real-world learning experiences for our students.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {industryCollaborations.map((collab) => (
          <div
            key={collab.id}
            className="bg-card border border-border rounded-lg p-6 card-hover"
          >
            {/* Header */}
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                <Handshake className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-lg text-foreground mb-2 leading-tight">
                  {collab.organization}
                </h3>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {collab.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {collab.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {collab.participants.engaged}/{collab.participants.total} Participants
                  </div>
                </div>
              </div>
            </div>

            {/* Activities */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent" />
                Key Activities
              </h4>
              <div className="flex flex-wrap gap-2">
                {collab.activities.map((activity, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-secondary px-3 py-1 rounded-full text-muted-foreground font-body"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Tangible Outcomes
              </h4>
              <ul className="space-y-2">
                {collab.outcomes.map((outcome, idx) => (
                  <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="text-accent mt-0.5">•</span>
                    <span>
                      <span className="font-semibold text-foreground">{outcome.activity}:</span>{" "}
                      {outcome.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        <div className="bg-secondary border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-accent font-display mb-1">
            {industryCollaborations.length}
          </div>
          <div className="text-xs text-muted-foreground font-body">Active MoUs</div>
        </div>
        <div className="bg-secondary border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-accent font-display mb-1">
            {industryCollaborations.reduce((sum, c) => sum + c.participants.engaged, 0)}+
          </div>
          <div className="text-xs text-muted-foreground font-body">Students Engaged</div>
        </div>
        <div className="bg-secondary border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-accent font-display mb-1">
            {industryCollaborations.reduce((sum, c) => sum + c.activities.length, 0)}+
          </div>
          <div className="text-xs text-muted-foreground font-body">Activities</div>
        </div>
        <div className="bg-secondary border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-accent font-display mb-1">
            {industryCollaborations.reduce((sum, c) => sum + c.outcomes.length, 0)}+
          </div>
          <div className="text-xs text-muted-foreground font-body">Outcomes</div>
        </div>
      </div>
    </div>
  </section>
);

export default IndustryCollaboration;
