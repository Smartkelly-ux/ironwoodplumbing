import { useEffect, useState } from 'react';
import { Phone, Mail, ArrowDownRight, ShieldCheck, Flame, Building2 } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface HeroProps {
  onOpenCallback?: () => void;
}

export function Hero({ onOpenCallback }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax subtle offset (5-8% max 30px)
  const parallaxOffset = Math.min(scrollY * 0.07, 35);

  const headlineLines = [
    'Plumbing systems',
    'that keep',
    'business moving.',
  ];

  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-24 lg:pb-28 bg-white border-b border-[#E0E0E0] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Typography & Actions (45-50% width on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-center z-10">
            
            {/* Small Label */}
            <div
              className="inline-flex items-center gap-2 mb-4 sm:mb-5"
              style={{
                animation: 'heroEyebrow 450ms cubic-bezier(0.22, 1, 0.36, 1) 120ms forwards',
                opacity: 0,
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#146EF5]"></span>
              <span className="font-meta-label text-[#3B4146] tracking-[0.14em]">
                SOUTHERN CALIFORNIA COMMERCIAL PLUMBING
              </span>
            </div>

            {/* Oversized Editorial Headline */}
            <h1 className="font-display text-[#080808] font-semibold mb-6 tracking-[-0.03em] flex flex-col">
              {headlineLines.map((line, idx) => (
                <span
                  key={line}
                  className="inline-block transform"
                  style={{
                    animation: `heroLineReveal 800ms cubic-bezier(0.22, 1, 0.36, 1) ${180 + idx * 100}ms forwards`,
                    opacity: 0,
                  }}
                >
                  {line}
                </span>
              ))}
            </h1>

            {/* Supporting Text */}
            <p
              className="font-body text-[#3B4146] text-[16px] sm:text-[17px] leading-[1.6] max-w-[460px] mb-8 sm:mb-10"
              style={{
                animation: 'heroSupporting 500ms cubic-bezier(0.22, 1, 0.36, 1) 420ms forwards',
                opacity: 0,
              }}
            >
              Commercial, multifamily and hot-water plumbing service across Southern California.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
              style={{
                animation: 'heroCta 450ms cubic-bezier(0.22, 1, 0.36, 1) 500ms forwards',
                opacity: 0,
              }}
            >
              <a
                href="tel:18774847575"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#146EF5] text-white font-semibold text-[15px] rounded-[6px] btn-wipe shadow-[0_2px_8px_rgba(20,110,245,0.25)] min-h-[48px]"
              >
                <Phone className="w-4 h-4" />
                <span>Call Ironwood</span>
              </a>

              <a
                href="mailto:seth@ironwoodplumbing.com"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 bg-white text-[#080808] hover:text-[#146EF5] border border-[#E0E0E0] hover:border-[#146EF5] font-semibold text-[15px] rounded-[6px] transition-all duration-200 min-h-[48px]"
              >
                <Mail className="w-4 h-4 text-[#146EF5]" />
                <span>Email Us</span>
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 bg-[#F5F5F5] text-[#080808] hover:text-[#146EF5] border border-[#E0E0E0] hover:border-[#146EF5] font-semibold text-[15px] rounded-[6px] transition-all duration-200 min-h-[48px] group"
              >
                <span>Services</span>
                <ArrowDownRight className="w-4 h-4 text-[#3B4146] group-hover:text-[#146EF5] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all duration-200" />
              </a>
            </div>

            {/* Core Credential Chips */}
            <div
              className="mt-8 pt-7 border-t border-[#E0E0E0] grid grid-cols-3 gap-3"
              style={{
                animation: 'heroSupporting 500ms cubic-bezier(0.22, 1, 0.36, 1) 580ms forwards',
                opacity: 0,
              }}
            >
              <div className="flex flex-col">
                <span className="font-mono text-[11px] text-[#6B6B6B] uppercase tracking-wider flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#146EF5]" />
                  ESTABLISHED
                </span>
                <span className="text-[14px] font-semibold text-[#080808] mt-0.5">Since 2005</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[11px] text-[#6B6B6B] uppercase tracking-wider flex items-center gap-1">
                  <Building2 className="w-3 h-3 text-[#146EF5]" />
                  CAPACITY
                </span>
                <span className="text-[14px] font-semibold text-[#080808] mt-0.5">Multifamily & B2B</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[11px] text-[#6B6B6B] uppercase tracking-wider flex items-center gap-1">
                  <Flame className="w-3 h-3 text-[#146EF5]" />
                  SPECIALTY
                </span>
                <span className="text-[14px] font-semibold text-[#080808] mt-0.5">Boiler & Hot Water</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Infrastructure Photography (~55% width) */}
          <div className="lg:col-span-7 relative">
            <div className="relative w-full rounded-[10px] overflow-hidden border border-[#E0E0E0] bg-[#F5F5F5] aspect-[16/10] sm:aspect-[16/10] lg:aspect-[16/10] shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              
              {/* Main Image with choreography */}
              <div
                className="w-full h-full overflow-hidden"
                style={{
                  animation: 'heroImageReveal 1050ms cubic-bezier(0.22, 1, 0.36, 1) 100ms forwards',
                  opacity: 0.65,
                  clipPath: 'inset(0 0 100% 0)',
                }}
              >
                <img
                  src={IMAGES.hero.main}
                  alt="Ironwood Plumbing commercial mechanical room with industrial hot water manifolds and hydronic equipment"
                  className="w-full h-full object-cover object-center transition-transform duration-700 will-change-transform"
                  style={{
                    transform: `translateY(${parallaxOffset}px) scale(1.02)`,
                  }}
                  loading="eager"
                />
              </div>

              {/* Technical Stamp Overlay */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-[4px] border border-[#E0E0E0] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#146EF5] animate-pulse"></span>
                <span className="text-[11px] font-mono font-bold tracking-[0.12em] text-[#080808]">
                  IRONWOOD / 01
                </span>
                <span className="text-[10px] font-mono text-[#6B6B6B] pl-2 border-l border-[#E0E0E0]">
                  COMMERCIAL PLANT
                </span>
              </div>

              {/* Secondary Floating Technical Detail Image */}
              <div
                className="absolute -bottom-3 -right-3 sm:bottom-4 sm:right-4 z-20 w-[160px] sm:w-[210px] md:w-[240px] aspect-[4/3] rounded-[6px] overflow-hidden border-2 border-white shadow-[0_8px_20px_rgba(0,0,0,0.14)] bg-white hidden xs:block"
                style={{
                  animation: 'heroSupporting 700ms cubic-bezier(0.22, 1, 0.36, 1) 500ms forwards',
                  opacity: 0,
                }}
              >
                <img
                  src={IMAGES.hero.detail}
                  alt="Industrial commercial plumbing joinery and pressure regulator detail"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2 text-white">
                  <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider font-semibold">
                    HIGH-PRESSURE VALVING
                  </p>
                </div>
              </div>

            </div>

            {/* Editorial Caption Bar */}
            <div className="mt-3 flex items-center justify-between text-[12px] font-mono text-[#6B6B6B] px-1">
              <span>SYSTEM SPEC: DUAL-MANIFOLD DOMESTIC WATER</span>
              <span className="hidden sm:inline">SOUTHERN CALIFORNIA REGION</span>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes heroEyebrow {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes heroLineReveal {
          0% { transform: translateX(-50px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes heroSupporting {
          0% { transform: translateY(18px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes heroCta {
          0% { transform: translateY(16px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes heroImageReveal {
          0% { transform: scale(1.08); opacity: 0.65; clip-path: inset(0 0 100% 0); }
          100% { transform: scale(1); opacity: 1; clip-path: inset(0); }
        }
        @keyframes navFadeIn {
          0% { transform: translateY(-15px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
