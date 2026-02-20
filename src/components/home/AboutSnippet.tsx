import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { aboutSnippet } from "@/data/departmentData";

const AboutSnippet = () => (
  <section className="py-16">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="section-header">
            <p className="section-label">Who We Are</p>
            <h2 className="section-title">About the Department</h2>
          </div>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-6 font-body">
            {aboutSnippet}
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors font-body"
          >
            Read More About Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="bg-secondary rounded-lg h-64 lg:h-80 flex items-center justify-center overflow-hidden">
          <div className="text-center text-muted-foreground p-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="font-mono font-bold text-primary text-lg">AI</span>
            </div>
            <p className="text-sm">Department Lab & Classroom</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSnippet;
