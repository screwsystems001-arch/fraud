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
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/logo.png" 
              alt="Screw Systems Logo" 
              className="h-20 w-20 rounded-full object-cover border-4 border-blue-800 shadow-xl"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            About Our Company
          </h1>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
            Professional Engineering Development & Consulting Services
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-1 bg-blue-800 mb-6"></div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
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
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-500 shadow-xl">
                  <div className="flex items-center justify-center h-64">
                    <div className="text-center">
                      <BookOpen className="w-24 h-24 text-blue-800 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence in Development</h3>
                      <p className="text-gray-600">Transforming engineers through professional development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that drive our commitment to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <item.icon className="w-8 h-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600">Numbers that reflect our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-100 transition-colors duration-300">
                  <stat.icon className="w-10 h-10 text-blue-800" />
                </div>
                <div className="text-3xl font-bold text-blue-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of professionals who have already advanced their careers with us
          </p>
          <button className="group bg-white hover:bg-blue-50 text-blue-800 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center mx-auto">
            Explore Courses
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}