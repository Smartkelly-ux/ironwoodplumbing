import { useEffect, useRef, useState } from 'react';
import { IMAGES } from '../assets/images';

export function LongCurvedHolder() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Trigger when enters ~82% viewport height
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -18% 0px', // approximately 82% viewport height
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-14 sm:py-20 bg-white overflow-hidden" ref={containerRef}>
      <div className="w-full flex justify-end pr-4 sm:pr-8 md:pr-12 lg:pr-16">
        
        {/* Frame container: width 88vw, height 42vh, 12px radius, 1px border #E0E0E0, no shadow */}
        <div
          className="relative rounded-[12px] border border-[#E0E0E0] overflow-hidden bg-[#F5F5F5] transition-all"
          style={{
            width: '88vw',
            maxWidth: '1360px',
            height: '42vh',
            minHeight: '260px',
            maxHeight: '480px',
            transform: isInView ? 'translateY(0)' : 'translateY(30px)',
            opacity: isInView ? 1 : 0.8,
            transition: 'transform 1000ms cubic-bezier(0.22, 1, 0.36, 1), opacity 1000ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          {/* Inner Image with expansion clip-path animation */}
          <div
            className="w-full h-full will-change-[clip-path,transform]"
            style={{
              clipPath: isInView ? 'inset(0 0% 0 0)' : 'inset(0 45% 0 0)',
              transform: isInView ? 'scale(1)' : 'scale(1.06)',
              transition: 'clip-path 1000ms cubic-bezier(0.22, 1, 0.36, 1) 50ms, transform 1000ms cubic-bezier(0.22, 1, 0.36, 1) 50ms',
            }}
          >
            <img
              src={IMAGES.curvedHolder}
              alt="High-efficiency commercial condensing boiler field installation"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            {/* Subtle contrast gradient for editorial legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Small white label inside image */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-white/95 backdrop-blur-md border border-[#E0E0E0] text-[11px] font-mono font-bold tracking-[0.14em] text-[#080808] shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#146EF5]"></span>
              HOT WATER / FIELD 02
            </span>
          </div>

          {/* Bottom right specs watermark */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10 hidden sm:flex items-center gap-3 px-3 py-1.5 rounded-[4px] bg-black/60 backdrop-blur-sm text-white text-[11px] font-mono border border-white/10">
            <span>MULTI-STAGE CONDENSING SYSTEM</span>
            <span className="text-white/40">&bull;</span>
            <span>HIGH-RECOVERY RECIRCULATION</span>
          </div>
        </div>

      </div>
    </section>
  );
}
