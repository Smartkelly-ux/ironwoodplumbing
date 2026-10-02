import { useEffect, useRef, useState } from 'react';
import { Camera, Radio, Check, Phone, Mail, ArrowRight } from 'lucide-react';
import { IMAGES } from '../assets/images';

export function CameraInspection() {
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
        rootMargin: '0px 0px -15% 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const diagnosticPoints = [
    'Digital CCTV 4K Color Feed with meter distance counters',
    'Radio frequency sonde locating for exact depth & alignment',
    'Structural defect, root invasion, belly and crack logging',
    'Certified video inspection archiving for HOA boards & managers',
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 lg:py-32 bg-[#080808] text-white border-b border-[#222222] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Technical Diagnostic Headline (Enters from left) */}
          <div
            className="lg:col-span-6 flex flex-col justify-center will-change-transform"
            style={{
              transform: inView ? 'translateX(0)' : 'translateX(-35px)',
              opacity: inView ? 1 : 0,
              transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1) 100ms, opacity 700ms cubic-bezier(0.22, 1, 0.36, 1) 100ms',
            }}
          >
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <Camera className="w-4 h-4 text-[#146EF5]" />
              <span className="font-meta-label text-[#146EF5] tracking-[0.16em] font-semibold">
                DIAGNOSTICS
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-large text-white font-semibold tracking-[-0.03em] mb-6">
              See what's<br />
              inside the line.
            </h2>

            {/* Supporting */}
            <p className="font-body text-[#A0A0A0] text-[17px] leading-[1.6] mb-8 max-w-[500px]">
              Camera inspections help identify drain and sewer conditions before repair decisions are made.
            </p>

            {/* Technical Verification List */}
            <div className="space-y-3.5 mb-8">
              {diagnosticPoints.map((pt) => (
                <div key={pt} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#146EF5]/15 border border-[#146EF5]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#146EF5]" />
                  </div>
                  <span className="text-[14px] text-white/85 leading-snug">
                    {pt}
                  </span>
                </div>
              ))}
            </div>

            {/* Callout */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
              <a
                href="tel:18774847575"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[6px] bg-[#146EF5] text-white text-[14px] font-semibold btn-wipe"
              >
                <Phone className="w-4 h-4" />
                <span>Call for Camera Diagnostic</span>
              </a>

              <a
                href="mailto:seth@ironwoodplumbing.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[6px] bg-white/10 hover:bg-white/15 text-white border border-white/20 text-[14px] font-semibold transition-colors"
              >
                <Mail className="w-4 h-4 text-[#146EF5]" />
                <span>Email Diagnostics Team</span>
              </a>
            </div>
          </div>

          {/* Right Column: Close-up Drain Inspection Equipment Image (Enters from right with clip inset) */}
          <div className="lg:col-span-6">
            <div
              className="relative rounded-[10px] overflow-hidden border border-white/15 aspect-[16/11] bg-[#141414] will-change-[clip-path]"
              style={{
                clipPath: inView ? 'inset(0 0 0 0%)' : 'inset(0 0 0 100%)',
                transition: 'clip-path 900ms cubic-bezier(0.22, 1, 0.36, 1) 0ms',
              }}
            >
              <img
                src={IMAGES.cameraDiagnostics}
                alt="High definition sewer camera inspection equipment diagnostic monitor"
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* High-tech HUD telemetry overlay */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-[4px] border border-white/20 flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 text-[#146EF5] animate-pulse" />
                <span className="font-mono text-[11px] text-white tracking-widest uppercase">
                  LIVE CCTV TELEMETRY
                </span>
              </div>

              <div className="absolute bottom-4 right-4 bg-black/85 backdrop-blur-md px-3.5 py-2 rounded-[4px] border border-white/10 text-right">
                <span className="font-mono text-[10px] text-[#A0A0A0] block">RESOLUTION</span>
                <span className="font-mono text-[12px] text-white font-bold tracking-wider">
                  4K SELF-LEVELING OPTICS
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
