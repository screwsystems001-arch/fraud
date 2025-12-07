import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Home, BookOpen, Users, Briefcase } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Footer() {
  const { elementRef, isVisible } = useScrollAnimation({ triggerOnce: true });
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px] animate-spin-slow"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={elementRef}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
          }`}
        >
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Screw Systems Logo" 
                className="h-16 w-16 rounded-full object-cover border-2 border-blue-300 shadow-lg"
                style={{ display: logoError ? 'none' : 'block' }}
                onError={() => setLogoError(true)}
              />
              <h3 className="text-2xl font-bold transform hover:scale-105 transition-transform duration-300">
                Screw Systems
              </h3>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Advanced development and consulting services for aspiring and professional engineers.
            </p>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 p-3 rounded-full transition-all duration-300 transform hover:scale-125 hover:rotate-12 hover:shadow-xl relative group"
              >
                <MessageCircle className="w-5 h-5 relative z-10" />
                <span className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-0 group-hover:opacity-75"></span>
              </a>
              <span className="text-blue-100 hover:text-white transition-colors duration-300">Connect on WhatsApp</span>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <a 
                href="tel:+919876543210"
                className="flex items-center group cursor-pointer hover:underline"
              >
                <Phone className="w-5 h-5 mr-3 text-blue-300 group-hover:text-white transition-colors duration-300" />
                <span className="text-blue-100 group-hover:text-white transition-colors duration-300">+91 98765 43210</span>
              </a>
              <a 
                href="mailto:screwsystems001@gmail.com?subject=Inquiry%20from%20Website"
                className="flex items-center group cursor-pointer hover:underline"
              >
                <Mail className="w-5 h-5 mr-3 text-blue-300 group-hover:text-white transition-colors duration-300" />
                <span className="text-blue-100 group-hover:text-white transition-colors duration-300">screwsystems001@gmail.com</span>
              </a>
              <a 
                href="https://www.google.com/maps/search/Bangalore+Karnataka+India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group cursor-pointer hover:underline"
              >
                <MapPin className="w-5 h-5 mr-3 text-blue-300 group-hover:text-white transition-colors duration-300" />
                <span className="text-blue-100 group-hover:text-white transition-colors duration-300">Bangalore, Karnataka, India</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center text-blue-100 hover:text-white transition-all duration-300 transform hover:translate-x-2 group">
                <Home className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Home
              </a>
              <a href="#" className="flex items-center text-blue-100 hover:text-white transition-all duration-300 transform hover:translate-x-2 group">
                <Users className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                About Us
              </a>
              <a href="#" className="flex items-center text-blue-100 hover:text-white transition-all duration-300 transform hover:translate-x-2 group">
                <BookOpen className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Services
              </a>
              <a href="#" className="flex items-center text-blue-100 hover:text-white transition-all duration-300 transform hover:translate-x-2 group">
                <Briefcase className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Career
              </a>
              <a href="#" className="flex items-center text-blue-100 hover:text-white transition-all duration-300 transform hover:translate-x-2 group">
                <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Contact
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-12 pt-8 text-center">
          <p className="text-blue-200 animate-fade-in">
            © 2025 Screw Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}