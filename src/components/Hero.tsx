import React from 'react';
import { ChevronRight, Users, Trophy, BookOpen } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface HeroProps {
  onGetSeatClick: () => void;
}

export default function Hero({ onGetSeatClick }: HeroProps) {
  const { elementRef: leftRef, isVisible: leftVisible } = useScrollAnimation({ triggerOnce: true });
  const { elementRef: rightRef, isVisible: rightVisible } = useScrollAnimation({ triggerOnce: true });
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation({ triggerOnce: true });

  return (
    <section 
      className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full animate-spin-slow" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,400 Q300,200 600,400 T1200,400 V800 H0 V400Z" fill="#1A237E" />
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-300 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-float-delayed opacity-50"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-blue-200 rounded-full animate-float opacity-70"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-300 rounded-full animate-float-delayed opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div 
            ref={leftRef}
            className={`text-center lg:text-left transition-all duration-1000 ${
              leftVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
            }`}
          >
            <div className="inline-flex items-center bg-blue-100 px-4 py-2 rounded-full text-blue-800 text-sm font-medium mb-6 animate-pulse hover:animate-none hover:scale-105 transition-transform duration-300">
              <Trophy className="w-4 h-4 mr-2 animate-wiggle" />
              Screw Systems - Leading Engineering Development & Consulting Company
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Empowering <span className="text-blue-800">Engineers</span>.
              <br />
              Enabling <span className="text-blue-800">Growth</span>.
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in">
              Professional Engineering Development, Skill Building & Consulting Services
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onGetSeatClick}
                className="group bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:animate-glow flex items-center justify-center relative overflow-hidden"
                aria-label="Get a seat - Contact us for services"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-shimmer"></span>
                Get Seat
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              
              <button 
                className="border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center group"
                aria-label="View our services"
              >
                <BookOpen className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                View Services
              </button>
            </div>
            
            {/* Stats */}
            <div 
              ref={statsRef}
              className={`grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200 transition-all duration-1000 delay-300 ${
                statsVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
              }`}
            >
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-blue-800 animate-count-up">500+</div>
                <div className="text-gray-600 text-sm">Professional Developers</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-blue-800 animate-count-up">15+</div>
                <div className="text-gray-600 text-sm">Expert Developers & Consultants</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-blue-800 animate-count-up">95%</div>
                <div className="text-gray-600 text-sm">Successful Career Growth & Job Placement</div>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div 
            ref={rightRef}
            className={`relative transition-all duration-1000 delay-200 ${
              rightVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-blue-400 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 relative z-10">
                <div className="bg-white rounded-2xl p-8 transform -rotate-3 hover:rotate-0 transition-all duration-500 shadow-xl hover:shadow-2xl">
                  <div className="flex items-center justify-center h-64">
                    <div className="text-center">
                      <div className="relative inline-block">
                        <Users className="w-24 h-24 text-blue-800 mx-auto mb-4 animate-float" />
                        <div className="absolute inset-0 bg-blue-200 rounded-full blur-xl opacity-50 animate-pulse"></div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Join Our Engineering Community</h3>
                      <p className="text-gray-600">Connect with skilled professionals, industry mentors, and expert developers to grow your career and technical knowledge.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}