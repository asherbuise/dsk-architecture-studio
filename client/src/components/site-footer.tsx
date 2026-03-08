import { SiInstagram, SiLinkedin, SiPinterest } from "react-icons/si";

export function SiteFooter() {
  return (
    <footer className="bg-[#2F2F2F] text-white" data-testid="section-footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="py-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <h3 className="font-serif text-3xl font-bold tracking-[-0.02em] mb-4">
              DSK
            </h3>
            <p className="font-sans text-sm text-white/40 leading-relaxed max-w-xs">
              Architecture rooted in context, crafted with precision, built for permanence.
            </p>
            <div className="w-12 h-[1px] bg-[#F4D03F] mt-6" />
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-[0.3em] uppercase text-white/30 mb-6">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {["Projects", "About", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const el = document.querySelector(`#${link.toLowerCase()}`);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="font-sans text-sm text-white/50 text-left transition-colors duration-300 hover:text-[#F4D03F] w-fit"
                  data-testid={`link-footer-${link.toLowerCase()}`}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-[0.3em] uppercase text-white/30 mb-6">
              Follow
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center border border-white/10 text-white/40 transition-all duration-300 hover:border-[#F4D03F] hover:text-[#F4D03F]"
                data-testid="link-social-instagram"
              >
                <SiInstagram size={16} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center border border-white/10 text-white/40 transition-all duration-300 hover:border-[#F4D03F] hover:text-[#F4D03F]"
                data-testid="link-social-linkedin"
              >
                <SiLinkedin size={16} />
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="w-10 h-10 flex items-center justify-center border border-white/10 text-white/40 transition-all duration-300 hover:border-[#F4D03F] hover:text-[#F4D03F]"
                data-testid="link-social-pinterest"
              >
                <SiPinterest size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/25 tracking-[0.1em]" data-testid="text-copyright">
            &copy; {new Date().getFullYear()} DSK Architecture Studio. All rights reserved.
          </p>
          <p className="font-sans text-xs text-white/25 tracking-[0.1em]">
            Cape Town, South Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
