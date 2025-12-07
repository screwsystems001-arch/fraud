import { Target, Award, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const { elementRef: leftRef, isVisible: leftVisible } = useScrollAnimation({ triggerOnce: true });
  const { elementRef: rightRef, isVisible: rightVisible } = useScrollAnimation({ triggerOnce: true });

  const leftCards = [
    { icon: Target, title: 'Our Mission', description: 'To build industry-ready engineers through practical learning, innovation, and technical excellence.', delay: '0.1s' },
    { icon: Users, title: 'Growth', description: 'Enabling students and professionals to build successful engineering careers.', delay: '0.2s' },
  ];

  const rightCard = {
    icon: Award,
    title: 'Excellence',
    description: 'Delivering world-class development and consultancy with certified experts.',
    delay: '0.3s'
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Left Side - Two Stacked Cards */}
          <div 
            ref={leftRef}
            className={`flex flex-col gap-4 sm:gap-6 transition-all duration-1000 ${
              leftVisible ? 'animate-fade-in-left opacity-100' : 'opacity-0'
            }`}
          >
            {leftCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-50 p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-lg border border-slate-100"
                  style={{ 
                    animation: leftVisible ? `fadeInUp 0.6s ease-out ${card.delay} both` : 'none'
                  }}
                >
                  <div className="mb-3 sm:mb-4">
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-navy-700" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-2 sm:mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
          
          {/* Right Side - Single Larger Card */}
          <div 
            ref={rightRef}
            className={`transition-all duration-1000 ${
              rightVisible ? 'animate-fade-in-right opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="bg-slate-50 p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl h-full flex flex-col transition-all duration-300 hover:shadow-lg border border-slate-100"
              style={{ 
                animation: rightVisible ? `fadeInUp 0.6s ease-out ${rightCard.delay} both` : 'none'
              }}
            >
              <div className="mb-3 sm:mb-4">
                <rightCard.icon className="w-10 h-10 sm:w-12 sm:h-12 text-teal-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-2 sm:mb-3">
                {rightCard.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {rightCard.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}