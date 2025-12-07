import React from 'react';
import { Code, Building2, Settings, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Courses() {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ triggerOnce: true });
  const { elementRef: servicesRef, isVisible: servicesVisible } = useScrollAnimation({ triggerOnce: true });

  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions and enterprise applications built with modern technologies and best practices.",
    },
    {
      icon: Building2,
      title: "Engineering Consultancy",
      description: "Expert consulting services for structural, mechanical, and civil engineering projects.",
    },
    {
      icon: Settings,
      title: "System Design & Architecture",
      description: "Comprehensive system design and scalable architecture solutions for your business needs.",
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-navy-50 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 animated-gradient opacity-20"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-30 animate-float hidden sm:block"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-20 animate-float-delayed hidden sm:block"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-10 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
            headerVisible ? 'animate-fade-in-down opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 lg:mb-6">
            Our <span className="text-navy-700">Services</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto px-4 sm:px-0">
            Professional development and consultancy services designed to accelerate your business growth
          </p>
        </div>
        
        <div 
          ref={servicesRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className={`group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-3 hover:scale-105 border border-slate-200 relative overflow-hidden ${
                  servicesVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ 
                  animation: servicesVisible ? `fadeInUp 0.6s ease-out ${index * 0.15}s both` : 'none'
                }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-navy-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="bg-navy-100 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-navy-200 transition-colors transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-navy-700" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-navy-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed group-hover:text-slate-700 transition-colors">
                    {service.description}
                  </p>
                  
                  <button className="w-full group/btn bg-navy-800 hover:bg-navy-900 text-white py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 flex items-center justify-center relative overflow-hidden shadow-lg hover:shadow-xl">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover/btn:opacity-20 group-hover/btn:animate-shimmer"></span>
                    <span className="relative z-10 flex items-center">
                      Learn More
                      <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <button className="group bg-white hover:bg-navy-50 text-navy-800 border-2 border-navy-800 hover:border-navy-900 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center mx-auto relative overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-navy-100 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></span>
            <span className="relative z-10 flex items-center">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
