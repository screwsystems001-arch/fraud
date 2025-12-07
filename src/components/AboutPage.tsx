import React from 'react';
import { Target, Eye, Heart, Users, Award, BookOpen, MapPin, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { icon: Users, number: '500+', label: 'Professional Developers' },
    { icon: BookOpen, number: '15+', label: 'Development Programs' },
    { icon: MapPin, number: '10+', label: 'Cities Covered' },
    { icon: Award, number: '95%', label: 'Career Growth Rate' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To bridge the gap between engineering theory and industry requirements by providing world-class development programs and expert consulting services.'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'To become India\'s leading engineering development and consulting company that transforms careers and drives innovation in the industry.'
    },
    {
      icon: Heart,
      title: 'Core Values',
      description: 'Excellence in development, integrity in service, innovation in approach, and commitment to professional success guide everything we do.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-slate-50 to-navy-50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="flex justify-center mb-4 sm:mb-6">
            <img 
              src="/logo.png" 
              alt="Screw Systems Logo - Engineering Development and Consulting Company" 
              className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border-4 border-navy-800 shadow-xl"
              width="80"
              height="80"
              loading="lazy"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy-900 mb-3 sm:mb-4">
            About Our Company
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-700 max-w-2xl mx-auto px-4 sm:px-0">
            Professional Engineering Development & Consulting Services
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div>
              <div className="w-12 h-1 bg-navy-800 mb-4 sm:mb-6"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">Who We Are</h2>
              
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                <p>
                  Screw Systems is a leading engineering development and consulting 
                  company dedicated to empowering engineers with cutting-edge skills and industry-relevant knowledge. 
                  We specialize in professional development programs, corporate consulting, and skill building services.
                </p>
                
                <p>
                  Based in Bangalore, Karnataka, we serve students, working professionals, and companies across 
                  India. Our comprehensive approach combines theoretical knowledge with practical 
                  application to ensure our clients are industry-ready and competitive.
                </p>
                
                <p>
                  We believe in transforming careers through quality development, expert consulting, personalized 
                  mentorship, and continuous support that extends beyond traditional learning environments.
                </p>
              </div>
            </div>
            
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-slate-100 to-navy-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 transform rotate-1 sm:rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 transform -rotate-1 sm:-rotate-2 hover:rotate-0 transition-transform duration-500 shadow-xl">
                  <div className="flex items-center justify-center h-48 sm:h-56 lg:h-64">
                    <div className="text-center px-2">
                      <BookOpen className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-navy-700 mx-auto mb-3 sm:mb-4" />
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Excellence in Development</h3>
                      <p className="text-sm sm:text-base text-gray-600">Transforming engineers through professional development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">Our Foundation</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4 sm:px-0">
              The principles that drive our commitment to excellence
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {values.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200"
              >
                <div className="bg-navy-100 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-navy-700" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4 text-center">{item.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">Our Impact</h2>
            <p className="text-base sm:text-lg text-slate-600">Numbers that reflect our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-slate-100 w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:bg-navy-100 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-navy-700" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-navy-800 mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm lg:text-base text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-navy-800 to-navy-900">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
            Join hundreds of professionals who have already advanced their careers with us
          </p>
          <button className="group bg-white hover:bg-slate-50 text-navy-800 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center mx-auto">
            Explore Services
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}