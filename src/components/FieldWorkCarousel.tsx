import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, Play, Pause } from 'lucide-react';
import { IMAGES } from '../assets/images';

export function FieldWorkCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isPaused, setIsPaused] = useState(false);

  const slides = IMAGES.fieldWork;
  const AUTO_PLAY_INTERVAL = 5000; // Changes after 5 seconds

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setDirection('next');
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 650);
  }, [isTransitioning, slides.length]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setDirection('prev');
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 650);
  }, [isTransitioning, slides.length]);

  const handleSelect = (idx: number) => {
    if (isTransitioning || idx === currentIndex) return;
    setDirection(idx > currentIndex ? 'next' : 'prev');
    setIsTransitioning(true);
    setCurrentIndex(idx);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 650);
  };

  // Automatically advance after some seconds (5s), pausing on hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  const activeSlide = slides[currentIndex];

  return (
    <section
      className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E0E0E0] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Section Header with Minimal Bordered Controls & Timed Progress */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 border-b border-[#E0E0E0] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#146EF5]"></span>
              <span className="font-meta-label text-[#3B4146] tracking-[0.14em]">
                EDITORIAL PORTFOLIO &bull; AUTO ADVANCE
              </span>
            </div>
            <h2 className="font-large text-[#080808] font-semibold tracking-[-0.03em]">
              FIELD WORK
            </h2>
          </div>

          {/* Minimal Controls: Slide Progress Bars & Previous / Next Buttons */}
          <div className="flex items-center gap-4">
            
            {/* Interactive Slide Progress Indicators */}
            <div className="flex items-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => handleSelect(i)}
                  className="group py-2 px-1 focus:outline-none"
                  aria-label={`Go to slide ${i + 1}`}
                >
                  <div className="relative w-8 sm:w-12 h-[3px] bg-[#E0E0E0] rounded-full overflow-hidden">
                    {currentIndex === i && (
                      <div
                        className="absolute inset-0 bg-[#146EF5] origin-left"
                        style={{
                          animation: !isPaused ? `carouselProgress ${AUTO_PLAY_INTERVAL}ms linear forwards` : 'none',
                          width: isPaused ? '100%' : undefined,
                        }}
                      />
                    )}
                  </div>
                </button>
              ))}
            </div>

            <span className="font-mono text-[13px] text-[#6B6B6B] min-w-[50px] text-right">
              0{currentIndex + 1} / 0{slides.length}
            </span>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                disabled={isTransitioning}
                className="w-10 h-10 rounded-[6px] border border-[#E0E0E0] bg-white text-[#080808] hover:border-[#146EF5] hover:text-[#146EF5] flex items-center justify-center transition-colors disabled:opacity-50"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={isTransitioning}
                className="w-10 h-10 rounded-[6px] border border-[#E0E0E0] bg-white text-[#080808] hover:border-[#146EF5] hover:text-[#146EF5] flex items-center justify-center transition-colors disabled:opacity-50"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Slide Container */}
        <div className="relative min-h-[460px] sm:min-h-[500px]">
          <div
            key={activeSlide.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center will-change-transform"
            style={{
              animation: `slideEnter 650ms cubic-bezier(0.22, 1, 0.36, 1) forwards`,
            }}
          >
            {/* Slide Visual (8 cols) */}
            <div className="lg:col-span-8">
              <div className="relative rounded-[10px] overflow-hidden border border-[#E0E0E0] aspect-[16/10] bg-[#F5F5F5] group">
                <img
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  className="w-full h-full object-cover will-change-transform"
                  style={{
                    animation: 'slideImageZoom 800ms cubic-bezier(0.22, 1, 0.36, 1) forwards',
                  }}
                  loading="lazy"
                />

                {/* Small Label inside image */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                  <span className="px-3 py-1.5 rounded-[4px] bg-white/95 backdrop-blur-md border border-[#E0E0E0] font-mono text-[11px] font-bold tracking-wider text-[#080808] shadow-sm">
                    {activeSlide.label}
                  </span>
                </div>

                {/* Subtitle badge bottom right */}
                <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-sm px-3 py-1 rounded-[4px] font-mono text-[10px] text-white/80 border border-white/10 hidden sm:block">
                  SOUTHERN CALIFORNIA COMMERCIAL SPEC
                </div>
              </div>
            </div>

            {/* Slide Editorial Details (4 cols) */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <span className="font-mono text-[12px] uppercase text-[#146EF5] font-semibold tracking-wider mb-2">
                0{currentIndex + 1} &bull; DISCIPLINE FOCUS
              </span>

              <h3 className="text-[26px] sm:text-[32px] font-bold text-[#080808] tracking-tight leading-tight mb-4">
                {activeSlide.title}
              </h3>

              <p className="text-[15px] sm:text-[16px] text-[#6B6B6B] leading-[1.6] mb-8">
                {activeSlide.description}
              </p>

              <div className="pt-6 border-t border-[#E0E0E0] flex flex-wrap items-center justify-between gap-4">
                <a
                  href="tel:18774847575"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#080808] hover:text-[#146EF5] transition-colors group"
                >
                  <span>Inquire for Similar Project</span>
                  <ArrowUpRight className="w-4 h-4 text-[#146EF5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <span className="text-[11px] font-mono text-[#A0A0A0]">
                  {isPaused ? 'Auto-play paused' : 'Auto-advancing 5s'}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @keyframes slideEnter {
          0% {
            transform: translateX(${direction === 'next' ? '30px' : '-30px'});
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideImageZoom {
          0% {
            transform: scale(1.04);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes carouselProgress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
