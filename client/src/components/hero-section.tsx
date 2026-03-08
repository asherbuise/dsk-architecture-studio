import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden bg-white"
      data-testid="section-hero"
    >
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full h-full flex items-center">
        <div className="relative w-full flex items-center justify-center">
          <div
            className={`relative w-full max-w-4xl aspect-[16/10] bg-[#2F2F2F] transition-all duration-1000 ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <img
              src="/images/hero-bg.png"
              alt="Architectural landscape"
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
              data-testid="img-hero"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#2F2F2F] via-[#2F2F2F]/40 to-transparent" />

            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
              <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-white/50 mb-2">
                Architecture Studio
              </p>
              <p className="font-sans text-xs md:text-sm tracking-[0.2em] text-white/40">
                Cape Town, South Africa
              </p>
            </div>
          </div>

          <h1
            className={`absolute -left-2 md:left-4 lg:left-0 top-1/2 -translate-y-1/2 font-serif text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] font-bold text-[#2F2F2F] leading-none tracking-[-0.02em] select-none transition-all duration-1200 ease-out ${
              loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
            style={{ transitionDelay: "300ms" }}
            data-testid="text-hero-title"
          >
            DSK
          </h1>

          <div
            className={`absolute left-1/2 -translate-x-1/2 bottom-[-60px] md:bottom-[-80px] flex flex-col items-center gap-0 transition-all duration-1000 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="w-[1px] h-16 md:h-24 bg-[#F4D03F]" data-testid="decoration-yellow-line" />
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          const el = document.querySelector("#projects");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#2F2F2F]/30 animate-bounce"
        aria-label="Scroll to projects"
        data-testid="button-scroll-down"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
}
