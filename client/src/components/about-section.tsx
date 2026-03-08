import { Award, Users, Building2, Clock } from "lucide-react";

const stats = [
  { icon: Building2, value: "47", label: "Projects Completed" },
  { icon: Award, value: "12", label: "Design Awards" },
  { icon: Users, value: "8", label: "Team Members" },
  { icon: Clock, value: "15", label: "Years Experience" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-white" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#F4D03F]" />
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#2F2F2F]/50">
                About
              </span>
            </div>

            <h2
              className="font-serif text-4xl md:text-5xl font-bold text-[#2F2F2F] tracking-[-0.02em] mb-8"
              data-testid="text-about-heading"
            >
              Structure
              <br />
              Meets Soul
            </h2>

            <div className="space-y-6">
              <p className="font-sans text-base text-[#2F2F2F]/60 leading-relaxed" data-testid="text-about-description">
                DSK is a Cape Town-based architecture studio dedicated to creating spaces
                that honour the relationship between structure and landscape. Founded on the
                principle that architecture should emerge from its context, our work
                draws from the raw materials and light of the Western Cape.
              </p>
              <p className="font-sans text-base text-[#2F2F2F]/60 leading-relaxed">
                Every project begins with a conversation between site and vision. We work
                in concrete, steel, glass and timber to create buildings that are both
                monuments to craft and invitations to inhabit. Our designs are stripped to
                their essence — where every line, every surface, every shadow serves a purpose.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#F4D03F]" />
              <p className="font-serif text-lg italic text-[#2F2F2F]/40">
                "Less, but better."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 content-center">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 md:p-8 border border-[#2F2F2F]/8 group hover:border-[#F4D03F]/30 transition-all duration-500"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <stat.icon
                  size={20}
                  className="text-[#F4D03F] mb-4"
                />
                <p className="font-serif text-3xl md:text-4xl font-bold text-[#2F2F2F] mb-1">
                  {stat.value}
                </p>
                <p className="font-sans text-xs tracking-[0.1em] uppercase text-[#2F2F2F]/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
