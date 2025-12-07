import React from 'react';
import { Target, Award, Users, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const { elementRef: leftRef, isVisible: leftVisible } = useScrollAnimation({ triggerOnce: true });
  const { elementRef: rightRef, isVisible: rightVisible } = useScrollAnimation({ triggerOnce: true });

  const cards = [
    { icon: Target, title: 'Our Mission', description: 'To build industry-ready engineers through practical learning, innovation, and technical excellence.', delay: '0.1s' },
    { icon: Award, title: 'Excellence', description: 'Delivering world-class development and consultancy with certified experts.', delay: '0.2s' },
    { icon: Users, title: 'Growth', description: 'Enabling students and professionals to build successful engineering careers.', delay: '0.3s' },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 animate-float-delayed"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={leftRef}
            className={`transition-all duration-1000 ${
              leftVisible ? 'animate-fade-in-left opacity-100' : 'opacity-0'
            }`}
          >
            <div className="w-12 h-1 bg-blue-800 mb-6 animate-scale-in"></div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Shaping Future <span className="text-blue-800">Engineers</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in">
              Screw Systems is a trusted organization offering advanced engineering education, corporate development, and consulting support to students, professionals, and industries.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in">
              We bridge the gap between engineering theory and real-world industry requirements through hands-on development, live projects, and mentoring from experienced engineers.
            </p>
            <button className="group bg-blue-50 hover:bg-blue-100 text-blue-800 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-shimmer"></span>
              <span className="relative z-10 flex items-center">
                Learn More
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>
          </div>
          
          <div 
            ref={rightRef}
            className={`grid grid-cols-2 gap-6 transition-all duration-1000 ${
              rightVisible ? 'animate-fade-in-right opacity-100' : 'opacity-0'
            }`}
          >
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className={`bg-blue-50 p-6 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 relative overflow-hidden group ${
                    index === 1 ? 'mt-8' : index === 2 ? '-mt-8' : ''
                  }`}
                  style={{ 
                    animation: rightVisible ? `fadeInUp 0.6s ease-out ${card.delay} both` : 'none'
                  }}
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-12 h-12 text-blue-800" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}