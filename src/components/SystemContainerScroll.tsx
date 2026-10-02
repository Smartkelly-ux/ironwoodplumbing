import { useState, useEffect, useCallback } from 'react';
import { IMAGES } from '../assets/images';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SystemSlide {
  num: string;
  id: string;
  name: string;
  image: string;
}

export function SystemContainerScroll() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides: SystemSlide[] = [
    {
      num: '01',
      id: 'plumbing',
      name: 'PLUMBING',
      image: IMAGES.hero.main,
    },
    {
      num: '02',
      id: 'hot-water',
      name: 'HOT WATER',
      image: IMAGES.hotWater,
    },
    {
      num: '03',
      id: 'boilers',
      name: 'BOILERS',
      image: IMAGES.fieldWork[2].image,
    },
    {
      num: '04',
      id: 'sewer',
      name: 'SEWER',
      image: IMAGES.fieldWork[3].image,
    },
  ];

  const AUTO_PLAY_INTERVAL = 4500; // changes after 4.5 seconds

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  const active = slides[activeIndex];

  return (
    <section
      id="system"
      className="py-16 sm:py-24 bg-[#080808] text-white border-b border-[#222222] relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        
        {/* Header with Title and Prev/Next Navigation Controls */}
        <div className="flex items-end justify-between gap-6 mb-8 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#146EF5]"></span>
              <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#146EF5] uppercase">
                SIGNATURE ARCHITECTURE
              </span>
            </div>

            <h2 className="text-[32px] sm:text-[44px] font-bold text-white tracking-[-0.03em] leading-tight">
              THE SYSTEM
            </h2>
          </div>

          {/* Prev / Next controls */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-[13px] text-white/50">
              0{activeIndex + 1} / 0{slides.length}
            </span>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                className="w-10 h-10 rounded-[6px] border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/40 flex items-center justify-center text-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="w-10 h-10 rounded-[6px] border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/40 flex items-center justify-center text-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Buttons Above: 01 PLUMBING, 02 HOT WATER, 03 BOILERS, 04 SEWER */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mb-6">
          {slides.map((item, idx) => {
            const isSelected = activeIndex === idx;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveIndex(idx);
                }}
                className={`py-3.5 px-4 rounded-[6px] border transition-all duration-300 text-left relative overflow-hidden ${
                  isSelected
                    ? 'bg-[#181818] border-[#146EF5] text-white shadow-lg'
                    : 'bg-[#101010] border-white/10 text-white/60 hover:text-white hover:border-white/25'
                }`}
              >
                {/* Active animated progress indicator line */}
                {isSelected && (
                  <div
                    className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#146EF5] origin-left"
                    style={{
                      animation: !isPaused ? `systemBarProgress ${AUTO_PLAY_INTERVAL}ms linear forwards` : 'none',
                      width: isPaused ? '100%' : undefined,
                    }}
                  />
                )}

                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-[11px] font-bold tracking-wider ${
                      isSelected ? 'text-[#146EF5]' : 'text-white/40'
                    }`}
                  >
                    {item.num}
                  </span>
                  <span className="text-[13px] sm:text-[14px] font-bold tracking-wider uppercase">
                    {item.name}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Images Display Area (NO TEXT - Pure high-impact image that changes after seconds or when clicking buttons above) */}
        <div className="relative rounded-[12px] overflow-hidden border border-white/15 aspect-[16/9] sm:aspect-[21/9] min-h-[340px] sm:min-h-[460px] lg:min-h-[560px] bg-[#101010] shadow-2xl">
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out will-change-transform ${
                idx === activeIndex
                  ? 'opacity-100 scale-100 z-10 pointer-events-auto'
                  : 'opacity-0 scale-[1.03] z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt=""
                className="w-full h-full object-cover object-center"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes systemBarProgress {
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
