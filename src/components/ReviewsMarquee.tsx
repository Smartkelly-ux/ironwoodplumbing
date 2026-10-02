import { useState } from 'react';
import { Star, ShieldCheck, Phone, Mail } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  title: string;
  facility: string;
  location: string;
  quote: string;
  specialty: string;
  rating: number;
}

export function ReviewsMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  const reviews: Review[] = [
    {
      id: 'rev-1',
      name: 'David Sterling',
      title: 'Director of Property Operations',
      facility: '220-Unit Multifamily Community',
      location: 'Irvine, CA',
      quote: 'When our central boiler manifold developed a hairline fracture on a holiday weekend, Ironwood had master technicians on site in 45 minutes. They fabricated a replacement bypass on the spot without shutting down tenant water.',
      specialty: 'Central Boiler Replacement',
      rating: 5,
    },
    {
      id: 'rev-2',
      name: 'Elena Rostova',
      title: 'Senior Asset Manager',
      facility: 'Commercial Office Tower (14 Stories)',
      location: 'Newport Beach, CA',
      quote: 'Their camera diagnostic equipment pinpointed a deep underground main sewer collapse that two previous plumbing vendors failed to locate. Saved our building tens of thousands in asphalt excavation costs.',
      specialty: 'CCTV Pipeline Diagnostics',
      rating: 5,
    },
    {
      id: 'rev-3',
      name: 'Marcus Holloway',
      title: 'HOA Board President',
      facility: 'Pelican Ridge HOA (160 Units)',
      location: 'Orange County, CA',
      quote: 'Ironwood manages our annual backflow testing and domestic water balancing. Our cold water complaints dropped to zero once they re-engineered the recirculating loop.',
      specialty: 'Hot Water Loop Balancing',
      rating: 5,
    },
    {
      id: 'rev-4',
      name: 'Robert Cheng',
      title: 'Facilities & Maintenance Supervisor',
      facility: 'Food Processing & Cold Storage Plant',
      location: 'Ontario / Inland Empire, CA',
      quote: 'Industrial water demands require certified specialists who understand high-PSI pressure regulators and stainless piping. Ironwood is the only commercial team we trust with our plant water supply.',
      specialty: 'Industrial Domestic Piping',
      rating: 5,
    },
    {
      id: 'rev-5',
      name: 'Sarah Jenkins',
      title: 'Executive Property Director',
      facility: 'Luxury Apartment Complex',
      location: 'Costa Mesa, CA',
      quote: 'Professional, uniform-clad, and communicative. They understand the sensitivity of tenant relations when emergency shutoffs are necessary. Cleanest mechanical installations in Southern California.',
      specialty: 'Apartment Riser Re-Pipe',
      rating: 5,
    },
    {
      id: 'rev-6',
      name: 'Kevin O’Connor',
      title: 'Campus Maintenance Director',
      facility: 'Private Preparatory Academy',
      location: 'Southern California',
      quote: 'Ironwood completed our full hydronic boiler overhaul ahead of schedule before the fall semester. Flawless ASME compliance documentation delivered directly to our district inspectors.',
      specialty: 'Hydronic Boiler Overhaul',
      rating: 5,
    },
  ];

  // Duplicate for seamless infinite marquee loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E0E0E0] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 mb-12 sm:mb-16">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-[700px]">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#146EF5]"></span>
              <span className="font-meta-label text-[#3B4146] tracking-[0.14em]">
                CLIENT REVIEWS &bull; SOUTHERN CALIFORNIA FACILITIES
              </span>
            </div>

            <h2 className="font-large text-[#080808] font-semibold tracking-[-0.03em]">
              Trusted by facilities<br />that cannot stop.
            </h2>

            <p className="font-body text-[#6B6B6B] mt-4 text-[16px] max-w-[540px]">
              Property managers, HOA directors, and facility superintendents across Orange County and the Inland Empire depend on Ironwood for mission-critical mechanical plumbing.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 rounded-[4px] bg-[#F5F5F5] border border-[#E0E0E0] font-mono text-[12px] text-[#3B4146] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#146EF5]" />
              <span>VERIFIED COMMERCIAL CLIENTS</span>
            </span>
            <span className="text-[12px] font-mono text-[#6B6B6B]">
              HOVER TO PAUSE
            </span>
          </div>
        </div>

      </div>

      {/* Single Moving Row Carousel */}
      <div
        className="select-none overflow-hidden w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="animate-marquee-left flex gap-5"
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {duplicatedReviews.map((rev, index) => (
            <div
              key={`${rev.id}-${index}`}
              className="w-[380px] sm:w-[440px] shrink-0 p-6 rounded-[8px] bg-[#F5F5F5] border border-[#E0E0E0] hover:border-[#146EF5] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  {/* 5-Star Rating */}
                  <div className="flex items-center gap-1 text-[#146EF5]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#146EF5]" />
                    ))}
                  </div>

                  <span className="font-mono text-[11px] font-semibold text-[#146EF5] uppercase tracking-wider px-2 py-0.5 rounded bg-white border border-[#E0E0E0]">
                    {rev.specialty}
                  </span>
                </div>

                <p className="text-[14px] sm:text-[15px] text-[#080808] leading-relaxed mb-6 italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E0E0E0] flex items-center justify-between">
                <div>
                  <h4 className="text-[14px] font-bold text-[#080808]">
                    {rev.name}
                  </h4>
                  <p className="text-[12px] text-[#6B6B6B]">
                    {rev.title} &bull; {rev.facility}
                  </p>
                </div>
                <span className="font-mono text-[11px] text-[#3B4146] shrink-0">
                  {rev.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Direct Contact Bar Under Reviews */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 mt-12 pt-8 border-t border-[#E0E0E0] flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[14px] text-[#6B6B6B]">
          Have a commercial property or central boiler plant needing inspection?
        </span>

        <div className="flex items-center gap-3">
          <a
            href="mailto:seth@ironwoodplumbing.com"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[6px] bg-[#F5F5F5] hover:bg-[#EAEAEA] text-[#080808] border border-[#E0E0E0] text-[13px] font-semibold transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#146EF5]" />
            <span>EMAIL DISPATCH</span>
          </a>

          <a
            href="tel:18774847575"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[6px] bg-[#146EF5] text-white text-[13px] font-semibold btn-wipe"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>CALL NOW</span>
          </a>
        </div>
      </div>
    </section>
  );
}
