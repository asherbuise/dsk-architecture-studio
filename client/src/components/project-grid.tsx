import { useQuery } from "@tanstack/react-query";
import type { Project } from "@shared/schema";
import { useState } from "react";
import { ProjectModal } from "./project-modal";
import { Skeleton } from "@/components/ui/skeleton";

const categories = ["All", "Residential", "Commercial", "Interior", "Cultural"];

export function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const filtered = projects?.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-32 bg-white" data-testid="section-projects">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-[#F4D03F]" />
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#2F2F2F]/50">
                Portfolio
              </span>
            </div>
            <h2
              className="font-serif text-4xl md:text-5xl font-bold text-[#2F2F2F] tracking-[-0.02em]"
              data-testid="text-projects-heading"
            >
              Selected Works
            </h2>
          </div>

          <div className="flex flex-wrap gap-2" data-testid="filter-categories">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 font-sans text-xs tracking-[0.15em] uppercase transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-[#2F2F2F] text-white border-[#2F2F2F]"
                    : "bg-transparent text-[#2F2F2F]/60 border-[#2F2F2F]/15 hover:border-[#F4D03F] hover:text-[#2F2F2F]"
                }`}
                data-testid={`button-filter-${cat.toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`${
                  i % 3 === 0
                    ? "md:col-span-7"
                    : i % 3 === 1
                    ? "md:col-span-5"
                    : "md:col-span-6"
                }`}
              >
                <Skeleton className="w-full aspect-[4/3] bg-[#2F2F2F]/5" />
                <Skeleton className="w-32 h-4 mt-4 bg-[#2F2F2F]/5" />
                <Skeleton className="w-48 h-3 mt-2 bg-[#2F2F2F]/5" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6" data-testid="grid-projects">
            {filtered?.map((project, index) => {
              const spanPatterns = [
                "md:col-span-7",
                "md:col-span-5",
                "md:col-span-5",
                "md:col-span-7",
                "md:col-span-6",
                "md:col-span-6",
              ];
              const marginPatterns = [
                "",
                "md:mt-12",
                "",
                "md:-mt-8",
                "md:mt-6",
                "",
              ];

              return (
                <div
                  key={project.id}
                  className={`group cursor-pointer ${spanPatterns[index % 6]} ${marginPatterns[index % 6]}`}
                  onClick={() => setSelectedProject(project)}
                  data-testid={`card-project-${project.id}`}
                >
                  <div className="relative overflow-hidden bg-[#2F2F2F]">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full aspect-[4/3] object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
                      data-testid={`img-project-${project.id}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2F2F2F]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="font-sans text-xs tracking-[0.2em] uppercase text-[#F4D03F]">
                        View Project
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-sans text-lg font-medium text-[#2F2F2F] group-hover:text-[#2F2F2F] transition-colors duration-300 relative">
                        {project.title}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#F4D03F] transition-all duration-500 group-hover:w-full" />
                      </h3>
                      <p className="font-sans text-xs tracking-[0.1em] text-[#2F2F2F]/40 mt-1">
                        {project.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-[#2F2F2F]/30">
                        {project.year}
                      </span>
                      <div className="w-1 h-1 rounded-full bg-[#F4D03F]" />
                      <span className="font-sans text-xs tracking-[0.1em] uppercase text-[#2F2F2F]/40">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
