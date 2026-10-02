import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, ShieldCheck, Clock } from 'lucide-react';

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const servicesList = [
    { label: 'Commercial Plumbing', href: '#services' },
    { label: 'Hot Water Systems', href: '#hot-water' },
    { label: 'Boilers & Hydronics', href: '#services' },
    { label: 'Camera Diagnostics', href: '#services' },
    { label: 'Sewer Rehabilitation', href: '#services' },
    { label: 'Backflow Testing', href: '#services' },
    { label: 'Acoustic Leak Detection', href: '#services' },
    { label: 'Water Treatment', href: '#services' },
  ];

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="bg-[#080808] text-white pt-16 sm:pt-24 pb-12 border-t border-[#222222] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Top Operational Bar with Clean Action Buttons */}
        <div className="p-6 sm:p-8 rounded-[10px] bg-[#121212] border border-white/10 mb-14 sm:mb-16 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[12px] font-bold tracking-[0.16em] text-white uppercase">
                24/7 DISPATCH ACTIVE
              </span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-white/20" />
            <span className="text-[14px] text-white/70">
              Immediate response for commercial and multifamily water emergencies.
            </span>
          </div>

          {/* Action Group: Clean Call and Email buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:seth@ironwoodplumbing.com"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[6px] bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/40 text-[14px] font-semibold transition-all duration-200"
              aria-label="Email Ironwood Dispatch"
            >
              <Mail className="w-4 h-4 text-[#146EF5]" />
              <span>EMAIL DISPATCH</span>
            </a>

            <a
              href="tel:18774847575"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[6px] bg-[#146EF5] text-white text-[14px] font-semibold transition-all duration-300 btn-wipe shadow-[0_2px_12px_rgba(20,110,245,0.3)]"
              aria-label="Call Ironwood Dispatch"
            >
              <Phone className="w-4 h-4" />
              <span>CALL NOW</span>
            </a>
          </div>
        </div>

        {/* Clean Footer Navigation & Spec Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16">
          
          {/* Column 1: Regional Scope & Verified Credentials (4 cols) */}
          <div
            className="lg:col-span-4 flex flex-col justify-between will-change-transform"
            style={{
              transform: inView ? 'translateY(0)' : 'translateY(25px)',
              opacity: inView ? 1 : 0,
              transition: 'transform 550ms cubic-bezier(0.22, 1, 0.36, 1) 100ms, opacity 550ms cubic-bezier(0.22, 1, 0.36, 1) 100ms',
            }}
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#146EF5]"></span>
                <span className="font-mono text-[11px] font-bold text-[#146EF5] tracking-[0.2em] uppercase">
                  SOUTHERN CALIFORNIA COMMERCIAL INFRASTRUCTURE
                </span>
              </div>

              <div className="space-y-3 text-[13px] font-mono text-white/75">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#146EF5]" />
                  <span>ESTABLISHED 2005 &bull; LICENSED CONTRACTOR</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#146EF5]" />
                  <span>YEAR-ROUND 24/7 EMERGENCY COVERAGE</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 text-[12px] font-mono text-white/40">
              COMMERCIAL &bull; MULTIFAMILY &bull; BOILERS &bull; HOT WATER
            </div>
          </div>

          {/* Column 2: Direct Contact & Dispatch Card (4 cols) */}
          <div
            className="lg:col-span-4 will-change-transform"
            style={{
              transform: inView ? 'translateY(0)' : 'translateY(25px)',
              opacity: inView ? 1 : 0,
              transition: 'transform 550ms cubic-bezier(0.22, 1, 0.36, 1) 170ms, opacity 550ms cubic-bezier(0.22, 1, 0.36, 1) 170ms',
            }}
          >
            <div className="bg-[#121212] border border-white/10 rounded-[8px] p-5">
              <span className="font-mono text-[11px] font-bold text-white/80 uppercase tracking-wider block mb-4">
                DIRECT CONTACT
              </span>

              <div className="space-y-4">
                <div>
                  <span className="text-[11px] font-mono text-white/50 block mb-1">
                    TOLL-FREE DISPATCH
                  </span>
                  <a
                    href="tel:18774847575"
                    className="inline-flex items-center gap-2 text-[15px] font-semibold text-white hover:text-[#146EF5] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#146EF5]" />
                    <span>1-877-484-7575</span>
                  </a>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <span className="text-[11px] font-mono text-white/50 block mb-1">
                    DIRECT EMAIL
                  </span>
                  <a
                    href="mailto:seth@ironwoodplumbing.com"
                    className="inline-flex items-center gap-2 text-[14px] font-mono text-white/90 hover:text-[#146EF5] transition-colors break-all"
                  >
                    <Mail className="w-4 h-4 text-[#146EF5] shrink-0" />
                    <span>seth@ironwoodplumbing.com</span>
                  </a>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <span className="text-[11px] font-mono text-white/50 block mb-1.5">
                    SERVICE CORRIDOR
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 rounded-[4px] bg-white/5 border border-white/10 text-[11px] font-mono text-white/70">
                      Orange County
                    </span>
                    <span className="px-2 py-0.5 rounded-[4px] bg-white/5 border border-white/10 text-[11px] font-mono text-white/70">
                      Inland Empire
                    </span>
                    <span className="px-2 py-0.5 rounded-[4px] bg-white/5 border border-white/10 text-[11px] font-mono text-white/70">
                      Greater SoCal
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Services (4 cols) */}
          <div
            className="lg:col-span-4 will-change-transform"
            style={{
              transform: inView ? 'translateY(0)' : 'translateY(25px)',
              opacity: inView ? 1 : 0,
              transition: 'transform 550ms cubic-bezier(0.22, 1, 0.36, 1) 240ms, opacity 550ms cubic-bezier(0.22, 1, 0.36, 1) 240ms',
            }}
          >
            <span className="font-mono text-[11px] font-bold text-white/90 uppercase tracking-[0.16em] block mb-4">
              SERVICES
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {servicesList.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center text-[14px] text-white/75 hover:text-white transition-all duration-200"
                    style={{
                      transition: 'transform 250ms cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span className="relative">
                      {item.label}
                      <span className="absolute bottom-[-2px] left-0 w-full h-[1.5px] bg-[#146EF5] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-250" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Oversized Architectural Brand Typography Reveal */}
        <div className="pt-10 pb-8 border-t border-white/[0.14] overflow-hidden">
          <div
            className="text-[44px] sm:text-[76px] md:text-[108px] lg:text-[132px] font-bold text-white tracking-[-0.04em] leading-none select-none will-change-[clip-path]"
            style={{
              clipPath: inView ? 'inset(0% 0 0 0)' : 'inset(100% 0 0 0)',
              transition: 'clip-path 900ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            IRONWOOD
          </div>
        </div>

        {/* Bottom Legal & Meta Bar */}
        <div className="pt-6 border-t border-white/[0.14] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] font-mono text-white/50">
          <div>
            &copy; Ironwood Plumbing Inc. 2026. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="text-white/20">&bull;</span>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <span className="text-white/20">&bull;</span>
            <span>Commercial Plumbing Systems</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
