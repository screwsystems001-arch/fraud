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
      className={`fixed bottom-4 left-4 right-4 z-50 md:hidden transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <button
        onClick={onGetSeatClick}
        className="w-full bg-blue-800 hover:bg-blue-900 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200"
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        Get Seat
      </button>
    </div>
  );
}