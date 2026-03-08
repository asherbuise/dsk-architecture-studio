import type { Project } from "@shared/schema";
import { X, MapPin, Calendar, Tag } from "lucide-react";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      data-testid="modal-project"
    >
      <div
        className="absolute inset-0 bg-white/95 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-5xl mx-4 md:mx-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-[#2F2F2F]/50 hover:text-[#2F2F2F] transition-colors duration-300"
          aria-label="Close project details"
          data-testid="button-close-modal"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-[#2F2F2F]">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full aspect-[4/3] object-cover opacity-90"
              data-testid="img-modal-project"
            />
          </div>

          <div className="flex flex-col justify-center py-4 md:py-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-[#F4D03F]" />
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#2F2F2F]/50">
                {project.category}
              </span>
            </div>

            <h2
              className="font-serif text-3xl md:text-4xl font-bold text-[#2F2F2F] tracking-[-0.02em] mb-6"
              data-testid="text-modal-title"
            >
              {project.title}
            </h2>

            <p className="font-sans text-base text-[#2F2F2F]/60 leading-relaxed mb-8" data-testid="text-modal-description">
              {project.description}
            </p>

            <div className="flex flex-col gap-4 pt-6 border-t border-[#2F2F2F]/10">
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-[#F4D03F]" />
                <span className="font-sans text-sm text-[#2F2F2F]/50" data-testid="text-modal-location">
                  {project.location}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar size={14} className="text-[#F4D03F]" />
                <span className="font-sans text-sm text-[#2F2F2F]/50" data-testid="text-modal-year">
                  {project.year}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Tag size={14} className="text-[#F4D03F]" />
                <span className="font-sans text-sm text-[#2F2F2F]/50" data-testid="text-modal-category">
                  {project.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
