import { useEffect, useRef, useState } from 'react';
import { Shield, MapPin, Clock, Building } from 'lucide-react';

export function ProofSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [countYear, setCountYear] = useState(1980);

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
        threshold: 0.25,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Smooth counter for 2005
  useEffect(() => {
    if (!inView) return;

    const startYear = 1995;
    const targetYear = 2005;
    const duration = 1100;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.round(startYear + (targetYear - startYear) * easedProgress);
      setCountYear(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [inView]);

  const facts = [
    {
      id: 'year',
      icon: Shield,
      stat: countYear.toString(),
      label: 'ESTABLISHED',
      title: 'Since 2005',
      desc: 'Over two decades of dedicated commercial infrastructure service.',
    },
    {
      id: 'region',
      icon: MapPin,
      stat: 'SoCal',
      label: 'REGIONAL COVERAGE',
      title: 'Southern California',
      desc: 'Serving Greater Orange County and the Inland Empire corridor.',
    },
    {
      id: 'dispatch',
      icon: Clock,
      stat: '24 / 7',
      label: 'RESPONSE TIME',
      title: '24/7 Callout',
      desc: 'Year-round emergency response teams ready for critical system failures.',
    },
    {
      id: 'focus',
      icon: Building,
      stat: 'B2B',
      label: 'MARKET SPEC',
      title: 'Commercial + Multifamily',
      desc: 'Specialized focus on large-scale buildings, campuses, and industrial sites.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 bg-white border-b border-[#E0E0E0]"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Subtle section label */}
        <div className="mb-10 text-center max-w-[600px] mx-auto">
          <span className="font-meta-label text-[#3B4146] tracking-[0.16em] inline-block mb-2">
            VERIFIED CAPABILITY
          </span>
          <h3 className="text-[26px] sm:text-[32px] font-semibold text-[#080808] tracking-[-0.02em]">
            Built on verified service history.
          </h3>
        </div>

        {/* 4 Proof Markers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, idx) => {
            const Icon = fact.icon;
            return (
              <div
                key={fact.id}
                className="p-6 rounded-[8px] bg-[#F5F5F5] border border-[#E0E0E0] flex flex-col justify-between will-change-transform"
                style={{
                  transform: inView ? 'translateY(0)' : 'translateY(20px)',
                  opacity: inView ? 1 : 0,
                  transition: 'transform 500ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms cubic-bezier(0.22, 1, 0.36, 1)',
                  transitionDelay: inView ? `${idx * 90}ms` : '0ms',
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] font-bold text-[#6B6B6B] uppercase tracking-wider">
                      {fact.label}
                    </span>
                    <Icon className="w-4 h-4 text-[#146EF5]" />
                  </div>

                  <div className="text-[34px] sm:text-[40px] font-bold text-[#080808] tracking-tight leading-none mb-2 font-mono">
                    {fact.stat}
                  </div>

                  <div className="text-[17px] font-semibold text-[#080808] mb-2">
                    {fact.title}
                  </div>
                </div>

                <p className="text-[13px] text-[#6B6B6B] leading-relaxed pt-3 border-t border-[#E0E0E0]">
                  {fact.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
