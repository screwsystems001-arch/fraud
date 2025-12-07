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
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 animated-gradient opacity-20"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-20 animate-float-delayed"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'animate-fade-in-down opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-800">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional development and consultancy services designed to accelerate your business growth
          </p>
        </div>
        
        <div 
          ref={servicesRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-blue-100 relative overflow-hidden ${
                  servicesVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ 
                  animation: servicesVisible ? `fadeInUp 0.6s ease-out ${index * 0.15}s both` : 'none'
                }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Icon className="w-8 h-8 text-blue-800" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </p>
                  
                  <button className="w-full group/btn bg-blue-800 hover:bg-blue-900 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center relative overflow-hidden shadow-lg hover:shadow-xl">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover/btn:opacity-20 group-hover/btn:animate-shimmer"></span>
                    <span className="relative z-10 flex items-center">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <button className="group bg-white hover:bg-blue-50 text-blue-800 border-2 border-blue-800 hover:border-blue-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center mx-auto relative overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></span>
            <span className="relative z-10 flex items-center">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
