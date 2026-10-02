import { useState, useEffect } from 'react';
import { Phone, Mail, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenCallback?: () => void;
}

export function Navbar({ onOpenCallback }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock and Escape key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Hot Water', href: '#hot-water' },
    { label: 'The System', href: '#system' },
    { label: 'Reviews', href: '#system' },
    { label: 'Contact', href: '#contact' },
  ];

  const drawerLinks = [
    { label: 'SERVICES', href: '#services' },
    { label: 'INDUSTRIES', href: '#industries' },
    { label: 'HOT WATER', href: '#hot-water' },
    { label: 'THE SYSTEM', href: '#system' },
    { label: 'DIAGNOSTICS', href: '#services' },
    { label: 'REVIEWS', href: '#system' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      {/* Main Top Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#E0E0E0] py-3.5 shadow-[0_1px_4px_rgba(0,0,0,0.03)]'
            : 'bg-white border-b border-[#E0E0E0] py-4'
        }`}
        style={{
          animation: 'navFadeIn 450ms cubic-bezier(0.22, 1, 0.36, 1) forwards',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Left: Brand Identity */}
          <a
            href="#"
            className="flex flex-col group transition-transform duration-200"
            aria-label="Ironwood Plumbing Home"
          >
            <span className="text-[17px] sm:text-[19px] font-bold tracking-[-0.04em] text-[#080808] leading-tight flex items-center gap-1.5">
              IRONWOOD
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#146EF5]"></span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] text-[#3B4146] uppercase leading-none mt-0.5">
              PLUMBING
            </span>
          </a>

          {/* Center Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center gap-9" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[15px] font-medium text-[#080808] hover:text-[#146EF5] transition-colors duration-200 link-editorial"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: CTA (Desktop / Tablet) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="mailto:seth@ironwoodplumbing.com"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-[#F5F5F5] hover:bg-[#EAEAEA] text-[#080808] text-[13px] font-semibold tracking-[-0.01em] rounded-[6px] border border-[#E0E0E0] hover:border-[#146EF5] transition-all duration-200"
              aria-label="Email Ironwood Plumbing"
            >
              <Mail className="w-3.5 h-3.5 text-[#146EF5]" />
              <span>EMAIL US</span>
            </a>

            <a
              href="tel:18774847575"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-[#146EF5] text-white text-[13px] sm:text-[14px] font-semibold tracking-[-0.01em] rounded-[6px] transition-all duration-300 btn-wipe shadow-[0_1px_2px_rgba(20,110,245,0.2)]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>CALL NOW</span>
            </a>
          </div>

          {/* Mobile / Tablet Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#080808] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#146EF5] rounded-[4px] z-50 flex items-center gap-2"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#6B6B6B] hidden xs:inline">
              MENU
            </span>
            <div className="w-[22px] h-[16px] relative flex flex-col justify-between items-center">
              <span
                className="w-[22px] h-[2px] bg-[#080808] block transition-transform origin-center"
                style={{
                  transitionDuration: '280ms',
                  transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                  transform: isOpen ? 'translateY(7px) rotate(45deg)' : 'translateY(0) rotate(0)',
                }}
              />
              <span
                className="w-[22px] h-[2px] bg-[#080808] block transition-opacity"
                style={{
                  transitionDuration: '280ms',
                  transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                  opacity: isOpen ? 0 : 1,
                }}
              />
              <span
                className="w-[22px] h-[2px] bg-[#080808] block transition-transform origin-center"
                style={{
                  transitionDuration: '280ms',
                  transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                  transform: isOpen ? 'translateY(-7px) rotate(-45deg)' : 'translateY(0) rotate(0)',
                }}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Slide-In Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-In Mobile Drawer Container (Clean & Minimal) */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation drawer"
        className="fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-[360px] bg-white border-l border-[#E0E0E0] shadow-2xl flex flex-col justify-between lg:hidden transition-transform will-change-transform"
        style={{
          transform: isOpen ? 'translateX(0%)' : 'translateX(100%)',
          transitionDuration: '320ms',
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {/* Drawer Header */}
        <div className="p-5 sm:p-6 border-b border-[#E0E0E0] flex items-center justify-between bg-white">
          <div className="flex flex-col">
            <span className="text-[17px] font-bold tracking-[-0.03em] text-[#080808] flex items-center gap-1.5">
              IRONWOOD
              <span className="w-1.5 h-1.5 rounded-full bg-[#146EF5]"></span>
            </span>
            <span className="text-[10px] font-semibold tracking-[0.16em] text-[#3B4146] uppercase">
              PLUMBING
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 rounded-full bg-[#F5F5F5] hover:bg-[#EAEAEA] text-[#080808] flex items-center justify-center transition-colors"
            aria-label="Close navigation drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Clean, Minimal Drawer Navigation Links */}
        <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col justify-center space-y-2">
          {drawerLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between py-2 text-[#080808] hover:text-[#146EF5] transition-colors"
            >
              <span className="text-[24px] sm:text-[28px] font-semibold tracking-[-0.03em] group-hover:translate-x-1 transition-transform duration-200">
                {item.label}
              </span>
              <ChevronRight className="w-4 h-4 text-[#C0C0C0] group-hover:text-[#146EF5] group-hover:translate-x-0.5 transition-all" />
            </a>
          ))}
        </nav>

        {/* Minimal Bottom Action Buttons */}
        <div className="p-5 sm:p-6 border-t border-[#E0E0E0] bg-[#FAFAFA]">
          <div className="grid grid-cols-2 gap-3">
            <a
              href="tel:18774847575"
              className="flex items-center justify-center gap-2 py-3 bg-[#146EF5] text-white font-semibold text-[14px] rounded-[6px] btn-wipe shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>CALL NOW</span>
            </a>

            <a
              href="mailto:seth@ironwoodplumbing.com"
              className="flex items-center justify-center gap-2 py-3 bg-white text-[#080808] border border-[#E0E0E0] hover:border-[#146EF5] font-semibold text-[14px] rounded-[6px] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#146EF5]" />
              <span>EMAIL US</span>
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
