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
      className="relative bg-gradient-to-br from-slate-50 via-white to-navy-50 min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Professional Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gradient mesh animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-50/30 via-transparent to-slate-100/20 animate-gradient-mesh"></div>
        
        {/* Geometric shapes with smooth movement */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-navy-100/15 rounded-full blur-3xl animate-float-slow -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100/15 rounded-full blur-3xl animate-float-slow-delayed translate-x-1/2 translate-y-1/2"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Enhanced Floating particles with better animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-2 h-2 bg-teal-400/50 rounded-full animate-particle-1"></div>
        <div className="absolute top-[25%] right-[15%] w-2.5 h-2.5 bg-blue-500/40 rounded-full animate-particle-2"></div>
        <div className="absolute bottom-[30%] left-[20%] w-1.5 h-1.5 bg-navy-300/40 rounded-full animate-particle-3"></div>
        <div className="absolute top-[50%] right-[25%] w-2 h-2 bg-teal-300/50 rounded-full animate-particle-4"></div>
        <div className="absolute bottom-[20%] right-[10%] w-2 h-2 bg-blue-400/30 rounded-full animate-particle-5 hidden sm:block"></div>
        <div className="absolute top-[70%] left-[30%] w-1.5 h-1.5 bg-navy-200/40 rounded-full animate-particle-6 hidden sm:block"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12 sm:py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div 
            ref={leftRef}
            className={`text-center lg:text-left ${
              leftVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className={`inline-flex items-center bg-navy-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-navy-800 text-xs sm:text-sm font-medium mb-4 sm:mb-6 hover:scale-105 transition-all duration-300 ${
                leftVisible ? 'animate-slide-down' : ''
              }`}
              style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
            >
              <Trophy className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              <span className="hidden sm:inline">Screw Systems - Leading Engineering Development & Consulting Company</span>
              <span className="sm:hidden">Leading Engineering Development</span>
            </div>
            
            <h1 
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4 sm:mb-6 ${
                leftVisible ? 'animate-text-reveal' : ''
              }`}
              style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
            >
              Empowering <span className="text-navy-700 inline-block animate-text-highlight">Engineers</span>.
              <br />
              Enabling <span className="text-teal-600 inline-block animate-text-highlight" style={{ animationDelay: '0.5s' }}>Growth</span>.
            </h1>
            
            <p 
              className={`text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0 ${
                leftVisible ? 'animate-fade-in-up' : ''
              }`}
              style={{ animationDelay: '0.7s', animationFillMode: 'both' }}
            >
              Professional Engineering Development, Skill Building & Consulting Services
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button
                onClick={onGetSeatClick}
                className="group bg-navy-800 hover:bg-navy-900 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-navy-500/50 flex items-center justify-center relative overflow-hidden"
                aria-label="Get a seat - Contact us for services"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-shimmer"></span>
                Get Seat
                <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              
              <button 
                className="border-2 border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center group"
                aria-label="View our services"
              >
                <BookOpen className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
                View Services
              </button>
            </div>
            
            {/* Stats */}
            <div 
              ref={statsRef}
              className={`grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200 transition-all duration-1000 delay-300 ${
                statsVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
              }`}
            >
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-xl sm:text-2xl font-bold text-navy-700 animate-count-up">500+</div>
                <div className="text-slate-600 text-xs sm:text-sm mt-1">Professional Developers</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-xl sm:text-2xl font-bold text-teal-600 animate-count-up">15+</div>
                <div className="text-slate-600 text-xs sm:text-sm mt-1">Expert Developers & Consultants</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-xl sm:text-2xl font-bold text-blue-600 animate-count-up">95%</div>
                <div className="text-slate-600 text-xs sm:text-sm mt-1">Successful Career Growth & Job Placement</div>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div 
            ref={rightRef}
            className={`relative mt-8 lg:mt-0 ${
              rightVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative">
              {/* Enhanced Glow effect with smooth animation */}
              <div className={`absolute inset-0 bg-gradient-to-br from-navy-400/30 to-teal-500/20 rounded-2xl sm:rounded-3xl blur-3xl ${
                rightVisible ? 'animate-glow-smooth' : ''
              }`} style={{ animationDelay: '0.4s', animationFillMode: 'both' }}></div>
              
              <div 
                className={`bg-gradient-to-br from-slate-100 to-navy-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 transform transition-all duration-700 hover:scale-105 relative z-10 border border-slate-200/50 ${
                  rightVisible ? 'animate-card-float' : ''
                }`}
                style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
              >
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 transform transition-all duration-700 shadow-xl hover:shadow-2xl">
                  <div className="flex items-center justify-center h-48 sm:h-56 lg:h-64">
                    <div className="text-center px-2">
                      <div className="relative inline-block">
                        <Users 
                          className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-navy-700 mx-auto mb-3 sm:mb-4 ${
                            rightVisible ? 'animate-icon-bounce' : ''
                          }`}
                          style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
                        />
                        <div className="absolute inset-0 bg-teal-200/30 rounded-full blur-2xl animate-pulse-slow"></div>
                      </div>
                      <h3 
                        className={`text-lg sm:text-xl font-bold text-slate-900 mb-2 ${
                          rightVisible ? 'animate-fade-in-up' : ''
                        }`}
                        style={{ animationDelay: '1s', animationFillMode: 'both' }}
                      >
                        Join Our Engineering Community
                      </h3>
                      <p 
                        className={`text-sm sm:text-base text-slate-600 ${
                          rightVisible ? 'animate-fade-in-up' : ''
                        }`}
                        style={{ animationDelay: '1.1s', animationFillMode: 'both' }}
                      >
                        Connect with skilled professionals, industry mentors, and expert developers to grow your career and technical knowledge.
                      </p>
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