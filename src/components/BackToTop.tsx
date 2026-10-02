import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appears when scrolled past the hero section (~480px)
      if (window.scrollY > 480) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-[6px] bg-white border border-[#E0E0E0] hover:border-[#146EF5] text-[#080808] hover:text-[#146EF5] shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center justify-center transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#146EF5] ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform duration-200" />
      <span className="sr-only">Back to top</span>
    </button>
  );
}
