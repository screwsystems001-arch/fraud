import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

interface MobileStickyCTAProps {
  onGetSeatClick: () => void;
}

export default function MobileStickyCTA({ onGetSeatClick }: MobileStickyCTAProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-50 md:hidden transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <button
        onClick={onGetSeatClick}
        className="w-full bg-navy-800 hover:bg-navy-900 text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200"
        aria-label="Get a seat - Contact us"
      >
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
        Get Seat
      </button>
    </div>
  );
}