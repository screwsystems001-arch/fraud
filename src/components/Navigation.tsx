import { useState, useEffect } from 'react';
import { Menu, X, Home, Users, BookOpen, MessageCircle, Briefcase } from 'lucide-react';

interface NavigationProps {
  currentPage: 'home' | 'about' | 'courses' | 'contact' | 'career';
  onPageChange: (page: 'home' | 'about' | 'courses' | 'contact' | 'career') => void;
  onGetSeatClick: () => void;
}

export default function Navigation({ currentPage, onPageChange, onGetSeatClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home' as const, label: 'Home', icon: Home },
    { id: 'about' as const, label: 'About', icon: Users },
    { id: 'courses' as const, label: 'Services', icon: BookOpen },
    { id: 'career' as const, label: 'Career', icon: Briefcase },
    { id: 'contact' as const, label: 'Contact', icon: MessageCircle },
  ];

  const handleNavClick = (page: 'home' | 'about' | 'courses' | 'contact' | 'career') => {
    // Scroll to top immediately when clicking any page (including current page)
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onPageChange(page);
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-xl bg-white/95 backdrop-blur-sm' : ''
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-2 sm:space-x-3 transition-all duration-300 transform hover:scale-105 relative group"
            >
              <img 
                src="/logo.png" 
                alt="Screw Systems Logo - Engineering Development and Consulting Company" 
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover border-2 border-navy-800 shadow-md"
                width="40"
                height="40"
                loading="eager"
                style={{ display: logoError ? 'none' : 'block' }}
                onError={() => setLogoError(true)}
              />
              <span className="text-base sm:text-xl font-bold text-navy-800 group-hover:text-navy-900 relative z-10">Screw Systems</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy-800 group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ml-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center px-3 py-2 rounded-lg font-medium transition-all duration-300 relative group ${
                  currentPage === item.id
                    ? 'text-navy-800 bg-navy-50'
                    : 'text-slate-600 hover:text-navy-800 hover:bg-navy-50'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className={`w-4 h-4 mr-2 transition-transform duration-300 ${
                  currentPage === item.id ? 'scale-110' : 'group-hover:scale-110'
                }`} />
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-navy-800 rounded-full animate-scale-in"></span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-navy-800 transition-all duration-300 transform hover:scale-110 relative z-50 p-2 -mr-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 animate-scale-in" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-3 border-t border-gray-200 space-y-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-300 transform text-sm ${
                  currentPage === item.id
                    ? 'text-navy-800 bg-navy-50 scale-105'
                    : 'text-slate-600 hover:text-navy-800 hover:bg-navy-50 hover:scale-105'
                }`}
                style={{ 
                  animation: isMenuOpen ? `fadeInUp 0.4s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                <item.icon className={`w-4 h-4 mr-3 transition-transform duration-300 ${
                  currentPage === item.id ? 'scale-110' : ''
                }`} />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}