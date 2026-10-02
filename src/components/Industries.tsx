import { IMAGES } from '../assets/images';

interface IndustryItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
}

export function Industries() {
  const industries: IndustryItem[] = [
    {
      number: '01',
      title: 'MULTIFAMILY',
      tagline: 'HOA & Residential Complexes',
      description: 'Central boiler plants, riser re-piping, and high-occupancy hot water loops.',
      image: IMAGES.industries.multifamily,
    },
    {
      number: '02',
      title: 'APARTMENTS',
      tagline: 'Multi-Story Buildings',
      description: 'Master metering banks, domestic water loops, and continuous tenant hot water uptime.',
      image: IMAGES.industries.apartments,
    },
    {
      number: '03',
      title: 'COMMERCIAL',
      tagline: 'Office & Retail Facilities',
      description: 'Hydronic heating plants, backflow prevention assemblies, and preventive camera audits.',
      image: IMAGES.industries.commercial,
    },
    {
      number: '04',
      title: 'INSTITUTIONAL',
      tagline: 'Schools, Colleges & Plants',
      description: 'Campus-wide water infrastructure, heavy industrial gas piping, and emergency response.',
      image: IMAGES.industries.institutional,
    },
  ];

  return (
    <section id="industries" className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E0E0E0]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 max-w-[700px]">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#146EF5]"></span>
            <span className="font-meta-label text-[#3B4146] tracking-[0.14em]">
              WHERE WE WORK
            </span>
          </div>

          <h2 className="font-large text-[#080808] font-semibold tracking-[-0.03em]">
            Built for bigger systems.
          </h2>

          <p className="font-body text-[#6B6B6B] mt-4 text-[16px] max-w-[540px]">
            Ironwood concentrates on demanding high-capacity infrastructure across Southern California where reliability directly affects occupancy and daily operations.
          </p>
        </div>

        {/* Horizontal Sequence of Four Flat Bordered Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {industries.map((ind) => (
            <div
              key={ind.number}
              className="group relative bg-white border border-[#E0E0E0] rounded-[8px] p-4 flex flex-col justify-between transition-colors duration-300"
            >
              {/* Card Image with Crop Shift Hover Effect */}
              <div className="w-full aspect-[4/3] rounded-[6px] overflow-hidden bg-[#F5F5F5] mb-4 relative">
                <img
                  src={ind.image}
                  alt={`${ind.title} plumbing and mechanical systems`}
                  className="w-full h-full object-cover transition-all duration-350"
                  style={{
                    objectPosition: '50% 50%',
                    transitionProperty: 'object-position',
                    transitionDuration: '350ms',
                    transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.objectPosition = '54% 46%';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.objectPosition = '50% 50%';
                  }}
                  loading="lazy"
                />

                {/* Number index pill */}
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-[3px] bg-white/95 backdrop-blur-sm border border-[#E0E0E0] text-[11px] font-mono font-semibold text-[#080808]">
                  {ind.number}
                </div>
              </div>

              {/* Title & Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-[19px] sm:text-[20px] font-semibold text-[#080808] tracking-[-0.02em] transition-transform duration-350 group-hover:translate-x-[3px]"
                    style={{
                      transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  >
                    {ind.title}
                  </h3>

                  <p className="text-[12px] font-mono text-[#3B4146] uppercase tracking-wider mt-1 mb-2.5">
                    {ind.tagline}
                  </p>

                  <p className="text-[14px] text-[#6B6B6B] leading-[1.5] mb-4">
                    {ind.description}
                  </p>
                </div>

                {/* Animated Blue Accent Line at Bottom */}
                <div className="pt-2 border-t border-[#F0F0F0]">
                  <div className="w-full h-[2px] bg-transparent relative overflow-hidden">
                    <span
                      className="absolute inset-0 bg-[#146EF5] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-350"
                      style={{
                        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
