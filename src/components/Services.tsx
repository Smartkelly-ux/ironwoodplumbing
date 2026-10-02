import { useState, useRef, useEffect } from 'react';
import {
  Wrench,
  Flame,
  Gauge,
  Camera,
  Layers,
  Search,
  ShieldCheck,
  Droplets,
  ArrowRight,
  X,
  Phone,
  Mail,
} from 'lucide-react';

interface ServiceDetail {
  id: string;
  name: string;
  icon: typeof Wrench;
  shortDesc: string;
  fullDesc: string;
  equipment: string[];
  response: string;
}

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

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
        threshold: 0.15,
        rootMargin: '0px 0px -15% 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const services: ServiceDetail[] = [
    {
      id: 'plumbing',
      name: 'PLUMBING SERVICE',
      icon: Wrench,
      shortDesc: 'Comprehensive commercial water distribution, fixture banks & isolation valves.',
      fullDesc: 'Commercial and multifamily domestic water supply piping, copper and cast-iron riser replacements, master pressure regulators, and complex fixture maintenance for demanding properties.',
      equipment: ['Ridgid Pipe Threaders', 'ProPress Copper Joinery', 'High-Pressure Testing Manifolds'],
      response: 'Standard Dispatch & 24/7 Emergency',
    },
    {
      id: 'hot-water',
      name: 'HOT WATER',
      icon: Flame,
      shortDesc: 'High-capacity storage tanks, tankless arrays & recirculating pumps.',
      fullDesc: 'Custom-engineered commercial hot-water systems designed to eliminate recovery bottlenecks. We service, size, install, and balance high-recovery water heaters and recirculation loops.',
      equipment: ['Cascade Tankless Arrays', 'Commercial Storage Vessels', 'Taco Recirculating Pumps'],
      response: 'Immediate 24/7 Callout Availability',
    },
    {
      id: 'boilers',
      name: 'BOILERS',
      icon: Gauge,
      shortDesc: 'Commercial hydronic heating, steam plants & combustion diagnostics.',
      fullDesc: 'Certified boiler servicing for multifamily, institutional, and commercial facilities. Combustion efficiency analysis, ASME safety valve testing, heat exchanger descaling, and natural gas line balancing.',
      equipment: ['Digital Combustion Analyzers', 'ASME Rated Safety Valves', 'Modulating Burner Controllers'],
      response: 'Scheduled Maintenance & Emergency Repairs',
    },
    {
      id: 'camera',
      name: 'CAMERA INSPECTIONS',
      icon: Camera,
      shortDesc: 'Digital CCTV pipeline diagnostic scans, defect mapping & video audits.',
      fullDesc: 'Non-destructive pipeline evaluation utilizing high-definition self-leveling sewer inspection cameras. Pinpoints root intrusions, line collapses, bellies, and joint separations with radio sondes.',
      equipment: ['Ridgid SeeSnake 4K Cameras', 'NaviTrack Sonde Locators', 'Digital Defect Video Logging'],
      response: 'Same-Day Diagnostic Reporting',
    },
    {
      id: 'sewer',
      name: 'SEWER',
      icon: Layers,
      shortDesc: 'Heavy-duty hydro-jetting, mainline rehabilitation & grease interceptors.',
      fullDesc: 'Industrial sewer line descaling, root cutting, and high-pressure water jetting for commercial kitchens, multi-unit complexes, and industrial sewer connections.',
      equipment: ['High-PSI Trailer Jetters', 'Rotary Chain Knockers', 'Commercial Snaking Assemblies'],
      response: 'Emergency Line Clearing Available',
    },
    {
      id: 'leak',
      name: 'LEAK DETECTION',
      icon: Search,
      shortDesc: 'Acoustic underground tracking & non-invasive thermal line locating.',
      fullDesc: 'Precision leak pinpointing under concrete slabs, inside commercial riser chases, and across underground fire or domestic lines without premature structural demolition.',
      equipment: ['Ultrasonic Ground Microphones', 'FLIR Infrared Thermography', 'Electromagnetic Pipe Locators'],
      response: 'Targeted Non-Destructive Dispatch',
    },
    {
      id: 'backflow',
      name: 'BACKFLOW',
      icon: ShieldCheck,
      shortDesc: 'Assembly testing, certified repairs & municipal cross-connection control.',
      fullDesc: 'State-certified backflow prevention assembly testing, annual compliance certification, rebuilds, and replacements on domestic, fire, and irrigation cross-connections.',
      equipment: ['Certified Differential Pressure Gauges', 'OEM Rebuild Kits', 'Municipal Test Documentation'],
      response: 'Annual Certification & Rapid Rebuilds',
    },
    {
      id: 'treatment',
      name: 'WATER TREATMENT',
      icon: Droplets,
      shortDesc: 'Commercial scale prevention, water conditioning & filtration systems.',
      fullDesc: 'Industrial and commercial water softening, filtration, and anti-scale conditioners engineered to protect boiler heat exchangers, fixtures, and tenant appliances from Southern California mineral hardness.',
      equipment: ['Commercial Duplex Softeners', 'Catalytic Scale Reducers', 'Heavy-Duty Sediment Media Filters'],
      response: 'Water Analysis & Turnkey Installation',
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E0E0E0]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 max-w-[720px]">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#146EF5]"></span>
            <span className="font-meta-label text-[#3B4146] tracking-[0.14em]">
              SERVICES
            </span>
          </div>

          <h2 className="font-large text-[#080808] font-semibold tracking-[-0.03em]">
            One system.<br />
            Many disciplines.
          </h2>

          <p className="font-body text-[#6B6B6B] mt-4 text-[16px] max-w-[560px]">
            Comprehensive mechanical plumbing solutions built to maintain facility compliance, system efficiency, and uninterrupted service for Southern California property owners.
          </p>
        </div>

        {/* Sequential Staggered Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {services.map((srv, index) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                onClick={() => setSelectedService(srv)}
                className="group cursor-pointer bg-white border border-[#E0E0E0] hover:border-[#146EF5] rounded-[8px] p-5 flex flex-col justify-between transition-all duration-250 will-change-transform relative hover:bg-[#F9FBFF]"
                style={{
                  transform: inView ? 'translateX(0)' : 'translateX(-25px)',
                  opacity: inView ? 1 : 0,
                  transition: 'transform 450ms cubic-bezier(0.22, 1, 0.36, 1), opacity 450ms cubic-bezier(0.22, 1, 0.36, 1), border-color 200ms ease, background-color 200ms ease',
                  transitionDelay: inView ? `${index * 70}ms` : '0ms',
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-[6px] bg-[#F5F5F5] group-hover:bg-[#146EF5]/10 flex items-center justify-center transition-colors">
                      <Icon className="w-4 h-4 text-[#3B4146] group-hover:text-[#146EF5] transition-colors" />
                    </div>
                    <span className="font-mono text-[11px] text-[#6B6B6B]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-[16px] font-semibold text-[#080808] tracking-[-0.01em] mb-2 group-hover:text-[#146EF5] transition-colors">
                    {srv.name}
                  </h3>

                  <p className="text-[13px] text-[#6B6B6B] leading-[1.5] mb-4">
                    {srv.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F0F0F0] flex items-center justify-between text-[12px] font-medium text-[#146EF5]">
                  <span>Technical Scope</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal for Selected Service */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white border border-[#E0E0E0] rounded-[10px] max-w-[560px] w-full p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-1.5 rounded-full text-[#6B6B6B] hover:text-[#080808] hover:bg-[#F5F5F5] transition-colors"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#146EF5]"></span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#3B4146]">
                SERVICE SPECIFICATION
              </span>
            </div>

            <h3 className="text-[24px] font-bold text-[#080808] tracking-tight mb-4">
              {selectedService.name}
            </h3>

            <p className="text-[15px] text-[#3B4146] leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <div className="space-y-4 border-t border-[#E0E0E0] pt-5">
              <div>
                <span className="font-mono text-[11px] text-[#6B6B6B] uppercase tracking-wider block mb-1.5">
                  CORE INFRASTRUCTURE & TOOLING
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedService.equipment.map((eq) => (
                    <span
                      key={eq}
                      className="px-2.5 py-1 bg-[#F5F5F5] text-[#080808] border border-[#E0E0E0] text-[12px] font-mono rounded-[4px]"
                    >
                      {eq}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-mono text-[11px] text-[#6B6B6B] uppercase tracking-wider block mb-1">
                  DISPATCH AVAILABILITY
                </span>
                <span className="text-[14px] font-semibold text-[#146EF5]">
                  {selectedService.response}
                </span>
              </div>
            </div>

            <div className="mt-7 pt-5 border-t border-[#E0E0E0] flex flex-col sm:flex-row items-center gap-3">
              <a
                href="tel:18774847575"
                className="w-full sm:flex-1 py-3 bg-[#146EF5] text-white font-semibold text-[14px] rounded-[6px] flex items-center justify-center gap-2 btn-wipe"
              >
                <Phone className="w-4 h-4" />
                <span>Call Dispatch</span>
              </a>

              <a
                href="mailto:seth@ironwoodplumbing.com"
                className="w-full sm:flex-1 py-3 bg-[#F5F5F5] hover:bg-[#EAEAEA] text-[#080808] border border-[#E0E0E0] font-semibold text-[14px] rounded-[6px] flex items-center justify-center gap-2 transition-colors"
              >
                <Mail className="w-4 h-4 text-[#146EF5]" />
                <span>Email Us</span>
              </a>

              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-4 py-3 text-[#6B6B6B] hover:text-[#080808] text-[14px] font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
