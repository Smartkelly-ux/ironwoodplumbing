import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, ArrowUpRight, Clock, ShieldCheck } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface FinalCtaProps {
  onOpenCallback: () => void;
}

export function FinalCta({ onOpenCallback }: FinalCtaProps) {
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
    <section
      ref={sectionRef}
      className="relative py-28 sm:py-36 md:py-44 bg-[#080808] text-white overflow-hidden border-b border-[#222222]"
    >
      {/* Background Image with Controlled Motion */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={IMAGES.ctaBackground}
          alt="High-capacity commercial plumbing plant"
          className="w-full h-full object-cover object-center will-change-transform"
          style={{
            transform: inView ? 'scale(1) translateY(-3%)' : 'scale(1.08) translateY(5%)',
            transition: 'transform 1200ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
          loading="lazy"
        />
        {/* Exact Overlay: #080808 opacity 0.55 */}
        <div className="absolute inset-0 bg-[#080808]/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/40" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 text-center">
        <div
          className="max-w-[820px] mx-auto flex flex-col items-center will-change-transform"
          style={{
            transform: inView ? 'translateY(0)' : 'translateY(50px)',
            opacity: inView ? 1 : 0,
            transition: 'transform 800ms cubic-bezier(0.22, 1, 0.36, 1) 150ms, opacity 800ms cubic-bezier(0.22, 1, 0.36, 1) 150ms',
          }}
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] bg-white/10 backdrop-blur-md border border-white/15 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#146EF5]"></span>
            <span className="font-mono text-[11px] font-bold tracking-[0.16em] text-white uppercase">
              IMMEDIATE INFRASTRUCTURE DISPATCH
            </span>
          </div>

          {/* Oversized Headline */}
          <h2 className="text-[38px] sm:text-[56px] md:text-[72px] font-semibold text-white tracking-[-0.03em] leading-[0.98] mb-6 uppercase">
            KEEP THE<br />
            SYSTEM MOVING.
          </h2>

          {/* Supporting */}
          <p className="text-[17px] sm:text-[20px] text-white/85 max-w-[580px] leading-[1.5] mb-10">
            Plumbing, hot water and commercial service across Southern California.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
            {/* Primary CTA */}
            <a
              href="tel:18774847575"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#146EF5] text-white font-semibold text-[16px] rounded-[6px] btn-wipe shadow-[0_4px_16px_rgba(20,110,245,0.35)] min-h-[52px]"
            >
              <Phone className="w-4 h-4" />
              <span>CALL NOW</span>
            </a>

            {/* Email Button */}
            <a
              href="mailto:seth@ironwoodplumbing.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/25 hover:border-white/50 font-semibold text-[15px] rounded-[6px] backdrop-blur-sm transition-all duration-200 min-h-[52px]"
            >
              <Mail className="w-4 h-4 text-[#146EF5]" />
              <span>EMAIL DISPATCH</span>
            </a>

            {/* Secondary CTA: Callback */}
            <button
              type="button"
              onClick={onOpenCallback}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-[#080808] hover:bg-[#F5F5F5] font-semibold text-[15px] rounded-[6px] transition-all duration-200 min-h-[52px]"
            >
              <span>REQUEST A CALLBACK</span>
              <ArrowUpRight className="w-4 h-4 text-[#146EF5]" />
            </button>
          </div>

          {/* Footer Metadata */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[12px] font-mono text-white/60">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#146EF5]" />
              24/7/365 EMERGENCY CALLOUT
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#146EF5]" />
              ESTABLISHED 2005
            </span>
            <span>GREATER ORANGE COUNTY &bull; INLAND EMPIRE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
