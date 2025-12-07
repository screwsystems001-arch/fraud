import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Home, BookOpen, Users, Briefcase } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Footer() {
  const { elementRef, isVisible } = useScrollAnimation({ triggerOnce: true });
  const [logoError, setLogoError] = useState(false);

  return (
    <footer 
      className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-10 sm:py-12 lg:py-16 relative overflow-hidden"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px] animate-spin-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div 
          ref={elementRef}
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
          }`}
        >
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <img 
                src="/logo.png" 
                alt="Screw Systems Logo - Engineering Development and Consulting Company" 
                className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 rounded-full object-cover border-2 border-teal-400 shadow-lg"
                width="64"
                height="64"
                loading="lazy"
                style={{ display: logoError ? 'none' : 'block' }}
                onError={() => setLogoError(true)}
              />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold transform hover:scale-105 transition-transform duration-300">
                Screw Systems
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-300 mb-4 sm:mb-6 leading-relaxed">
              Advanced development and consulting services for aspiring and professional engineers.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 p-2.5 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-125 hover:rotate-12 hover:shadow-xl relative group"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                <span className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-0 group-hover:opacity-75"></span>
              </a>
                <span className="text-sm sm:text-base text-slate-300 hover:text-white transition-colors duration-300">Connect on WhatsApp</span>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contact Info</h4>
            <div className="space-y-2 sm:space-y-3">
              <a 
                href="tel:+919876543210"
                className="flex items-center group cursor-pointer hover:underline text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-teal-400 group-hover:text-white transition-colors duration-300 flex-shrink-0" />
                <span className="text-slate-300 group-hover:text-white transition-colors duration-300 break-all">+91 98765 43210</span>
              </a>
              <a 
                href="mailto:screwsystems001@gmail.com?subject=Inquiry%20from%20Website"
                className="flex items-center group cursor-pointer hover:underline text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-teal-400 group-hover:text-white transition-colors duration-300 flex-shrink-0" />
                <span className="text-slate-300 group-hover:text-white transition-colors duration-300 break-all">screwsystems001@gmail.com</span>
              </a>
              <a 
                href="https://www.google.com/maps/search/Bangalore+Karnataka+India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start group cursor-pointer hover:underline text-sm sm:text-base"
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-teal-400 group-hover:text-white transition-colors duration-300 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 group-hover:text-white transition-colors duration-300">Bangalore, Karnataka, India</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Quick Links</h4>
            <div className="space-y-2 sm:space-y-3">
              <a href="#" className="flex items-center text-sm sm:text-base text-slate-300 hover:text-white transition-all duration-300 transform hover:translate-x-2 group">
                <Home className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Home
              </a>
              <a href="#" className="flex items-center text-sm sm:text-base text-slate-300 hover:text-white transition-all duration-300 transform hover:translate-x-2 group">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                About Us
              </a>
              <a href="#" className="flex items-center text-sm sm:text-base text-slate-300 hover:text-white transition-all duration-300 transform hover:translate-x-2 group">
                <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Services
              </a>
              <a href="#" className="flex items-center text-sm sm:text-base text-slate-300 hover:text-white transition-all duration-300 transform hover:translate-x-2 group">
                <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Career
              </a>
              <a href="#" className="flex items-center text-sm sm:text-base text-slate-300 hover:text-white transition-all duration-300 transform hover:translate-x-2 group">
                <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Contact
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-navy-700 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-slate-400 animate-fade-in">
            © 2025 Screw Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}