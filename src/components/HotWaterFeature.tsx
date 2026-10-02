import { useEffect, useRef, useState } from 'react';
import { Flame, CheckCircle2, ArrowRight, Phone, Mail } from 'lucide-react';
import { IMAGES } from '../assets/images';

export function HotWaterFeature() {
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

  const capabilities = [
    { title: 'Commercial Boilers', desc: 'Gas-fired hydronic systems & atmospheric boilers' },
    { title: 'Hot-Water Tanks', desc: 'High-volume commercial storage reservoirs & heat exchangers' },
    { title: 'Tankless Systems', desc: 'Multi-unit cascade arrays for high-efficiency on-demand recovery' },
    { title: 'Circulating Loops', desc: 'Continuous hot-water balance for instant fixtures across all floors' },
  ];

  return (
    <section
      id="hot-water"
      ref={sectionRef}
      className="py-20 sm:py-28 lg:py-32 bg-[#F5F5F5] border-b border-[#E0E0E0] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Huge Typography & Infrastructure Story (5 cols) */}
          <div
            className="lg:col-span-5 flex flex-col justify-center will-change-transform"
            style={{
              transform: inView ? 'translateX(0)' : 'translateX(-30px)',
              opacity: inView ? 1 : 0,
              transition: 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1) 120ms, opacity 700ms cubic-bezier(0.22, 1, 0.36, 1) 120ms',
            }}
          >
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <Flame className="w-4 h-4 text-[#146EF5]" />
              <span className="font-meta-label text-[#3B4146] tracking-[0.16em]">
                HOT WATER
              </span>
            </div>

            {/* Oversized Headline */}
            <h2 className="font-large text-[#080808] font-semibold tracking-[-0.03em] mb-6">
              Heat is<br />
              infrastructure.
            </h2>

            {/* Supporting */}
            <p className="font-body text-[#3B4146] text-[17px] leading-[1.6] mb-8">
              Boilers, hot-water tanks and tankless systems for demanding properties.
            </p>

            <p className="text-[14px] text-[#6B6B6B] leading-[1.6] mb-8">
              In high-occupancy multifamily buildings and commercial facilities, hot water is not an amenity—it is essential mechanical life support. Ironwood specializes in large-recovery thermal systems designed to eliminate cold-water complaints and maintain continuous code-compliant supply.
            </p>

            {/* Technical Capability Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#E0E0E0]">
              {capabilities.map((cap) => (
                <div key={cap.title} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#146EF5] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[14px] font-semibold text-[#080808]">
                      {cap.title}
                    </h4>
                    <p className="text-[12px] text-[#6B6B6B] mt-0.5">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="tel:18774847575"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#146EF5] text-white text-[14px] font-semibold rounded-[6px] btn-wipe shadow-[0_2px_6px_rgba(20,110,245,0.25)]"
              >
                <Phone className="w-4 h-4" />
                <span>Call Specialist</span>
              </a>

              <a
                href="mailto:seth@ironwoodplumbing.com"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-[#080808] hover:text-[#146EF5] border border-[#E0E0E0] hover:border-[#146EF5] text-[14px] font-semibold rounded-[6px] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#146EF5]" />
                <span>Email Hot Water Team</span>
              </a>
            </div>
          </div>

          {/* Right Column: Large Background Image with Opposite-Direction Choreography (7 cols) */}
          <div
            className="lg:col-span-7 will-change-transform"
            style={{
              transform: inView ? 'translateX(0)' : 'translateX(50px)',
              opacity: inView ? 1 : 0.5,
              transition: 'transform 900ms cubic-bezier(0.22, 1, 0.36, 1) 0ms, opacity 900ms cubic-bezier(0.22, 1, 0.36, 1) 0ms',
            }}
          >
            <div className="relative rounded-[10px] overflow-hidden border border-[#E0E0E0] aspect-[16/11] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] group">
              <img
                src={IMAGES.hotWater}
                alt="Commercial high capacity boiler bank and hot water infrastructure"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                style={{
                  transform: inView ? 'scale(1)' : 'scale(1.04)',
                  transition: 'transform 900ms cubic-bezier(0.22, 1, 0.36, 1)',
                }}
                loading="lazy"
              />

              {/* Data Overlay Badge */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-[6px] border border-[#E0E0E0] max-w-[280px]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-mono font-bold tracking-wider text-[#080808]">
                    THERMAL EFFICIENCY
                  </span>
                  <span className="text-[11px] font-mono text-[#146EF5] font-semibold">
                    UP TO 96%
                  </span>
                </div>
                <p className="text-[11px] text-[#6B6B6B] leading-tight">
                  High-recovery condensing technology calibrated for Southern California natural gas infrastructure.
                </p>
              </div>

              {/* Top Right Label */}
              <div className="absolute top-4 right-4 bg-[#080808]/80 text-white backdrop-blur-sm px-3 py-1 rounded-[4px] text-[11px] font-mono">
                FIELD SPEC: ASME RATED
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
