import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { aboutSnippet } from "@/data/departmentData";

const labImages = [
  { id: 1, src: "/images/lab_01.jpeg", alt: "CSE (AI & ML) DEPT. IEDC LAB" },
  { id: 2, src: "/images/Lab_02.jpeg", alt: "Department Lab & Classroom" },
  { id: 3, src: "/images/lab_03.jpeg", alt: "Department Lab & Classroom" },
];

const AboutSnippet = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % labImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + labImages.length) % labImages.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % labImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
  <section className="py-16">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="section-header">
            <p className="section-label">Who We Are</p>
            <h2 className="section-title">About the Department</h2>
          </div>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-6 font-body">
            {aboutSnippet.substring(0, 300)}...
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors font-body"
          >
            Show More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          {/* Image Container */}
          <div className="relative h-64 lg:h-80">
            <img 
              src={labImages[current].src} 
              alt={labImages[current].alt}
              className="w-full h-full object-cover"
              style={current === 0 ? { objectPosition: 'center 60%' } : {}}
            />
            
            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary-foreground/80 hover:bg-primary-foreground rounded-full flex items-center justify-center transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary-foreground/80 hover:bg-primary-foreground rounded-full flex items-center justify-center transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>

            {/* Bottom Label */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
              <p className="text-sm text-primary-foreground font-body text-center">Department Lab & Classroom</p>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-12 left-0 right-0 flex items-center justify-center gap-1.5">
            {labImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  current === index 
                    ? "bg-primary-foreground w-6" 
                    : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default AboutSnippet;
