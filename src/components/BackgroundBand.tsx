import { IMAGES } from '../assets/images';

export function BackgroundBand() {
  return (
    <section className="relative w-full py-20 sm:py-24 md:py-32 bg-[#080808] text-white overflow-hidden border-b border-[#E0E0E0]">
      {/* Background Image with Controlled Editorial Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={IMAGES.infrastructureBand}
          alt="Large commercial pipework and mechanical infrastructure"
          className="w-full h-full object-cover object-center filter grayscale-[25%] contrast-[1.08]"
          loading="lazy"
        />
        {/* Exact Overlay: #080808 opacity 0.24 */}
        <div className="absolute inset-0 bg-[#080808]/75 md:bg-[#080808]/65 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-[#080808]/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="max-w-[760px]">
          {/* Small Label */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#146EF5]"></span>
            <span className="font-meta-label text-white/80 tracking-[0.16em]">
              INFRASTRUCTURE
            </span>
          </div>

          {/* Large text */}
          <h2 className="text-[34px] sm:text-[46px] md:text-[56px] font-semibold text-white leading-[1.04] tracking-[-0.03em] mb-5">
            Behind every<br />
            working building<br />
            is a working system.
          </h2>

          {/* One short supporting sentence */}
          <p className="text-[16px] sm:text-[18px] text-white/85 font-normal leading-[1.55] max-w-[560px]">
            Commercial, industrial and multifamily plumbing systems engineered for uninterrupted operation across Southern California.
          </p>

          <div className="mt-8 flex items-center gap-6 text-[13px] font-mono text-white/70">
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 bg-[#146EF5] rounded-full"></span>
              HIGH-VOLUME CIRCULATION
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 bg-[#146EF5] rounded-full"></span>
              NATURAL GAS MANIFOLDS
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <span className="w-1 h-1 bg-[#146EF5] rounded-full"></span>
              BACKFLOW ISOLATION
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
