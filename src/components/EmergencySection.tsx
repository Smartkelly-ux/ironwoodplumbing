import { useEffect, useRef, useState } from 'react';
import { PhoneCall, Mail, ShieldCheck } from 'lucide-react';

export function EmergencySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
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
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="emergency" ref={sectionRef} className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Blue Section Container with Clip Path Reveal */}
        <div
          className="relative rounded-[12px] bg-[#146EF5] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_12px_36px_rgba(20,110,245,0.25)] will-change-[clip-path]"
          style={{
            clipPath: inView ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
            transition: 'clip-path 650ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {/* Subtle architectural background pattern */}
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none select-none text-[160px] font-mono font-bold leading-none">
            24/7
          </div>

          <div className="relative z-10 max-w-[800px]">
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-white/15 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              <span className="font-mono text-[12px] font-bold tracking-[0.16em] text-white uppercase">
                24 / 7 CALLOUT
              </span>
            </div>

            {/* Headline */}
            <h2
              className="text-[34px] sm:text-[46px] md:text-[54px] font-bold text-white leading-[1.04] tracking-[-0.03em] mb-5 will-change-transform"
              style={{
                transform: inView ? 'translateY(0)' : 'translateY(35px)',
                opacity: inView ? 1 : 0,
                transition: 'transform 650ms cubic-bezier(0.22, 1, 0.36, 1) 100ms, opacity 650ms cubic-bezier(0.22, 1, 0.36, 1) 100ms',
              }}
            >
              When the system<br />
              can't wait.
            </h2>

            {/* Supporting */}
            <p className="text-[17px] sm:text-[19px] text-white/90 leading-[1.5] max-w-[580px] mb-8">
              Emergency plumbing support across Southern California. Rapid dispatch for mainline breaks, boiler failures, and domestic water shutdowns.
            </p>

            {/* CTA */}
            <div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 will-change-transform"
              style={{
                transform: inView ? 'translateY(0)' : 'translateY(15px)',
                opacity: inView ? 1 : 0,
                transition: 'transform 450ms cubic-bezier(0.22, 1, 0.36, 1) 200ms, opacity 450ms cubic-bezier(0.22, 1, 0.36, 1) 200ms',
              }}
            >
              <a
                href="tel:18774847575"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#146EF5] font-bold text-[16px] rounded-[6px] transition-all duration-300 btn-wipe-white shadow-lg min-h-[52px]"
              >
                <PhoneCall className="w-5 h-5 text-[#146EF5]" />
                <span>Call Emergency Dispatch</span>
              </a>

              <a
                href="mailto:seth@ironwoodplumbing.com"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-white/15 hover:bg-white/25 text-white font-semibold text-[15px] rounded-[6px] border border-white/30 transition-all duration-200 min-h-[52px]"
              >
                <Mail className="w-4 h-4 text-white" />
                <span>Email Dispatch</span>
              </a>

              <div className="flex items-center gap-2 text-white/80 text-[13px] font-mono px-2 py-1">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span>24/7 PRIORITY DISPATCH</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
