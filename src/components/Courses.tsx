import React from 'react';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Courses() {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ triggerOnce: true });
  const { elementRef: coursesRef, isVisible: coursesVisible } = useScrollAnimation({ triggerOnce: true });

  const courses = [
    {
      title: "Advanced AutoCAD & Design",
      description: "Professional 2D/3D drafting and industry-standard designing skills.",
      duration: "3 Months",
      students: "150+",
      rating: 4.8,
      image: "🏗️",
    },
    {
      title: "Project Management Professional (PMP)",
      description: "Master project lifecycle, planning, execution, and management.",
      duration: "4 Months", 
      students: "200+",
      rating: 4.9,
      image: "📊",
    },
    {
      title: "Structural Engineering & Analysis",
      description: "Learn STAAD Pro, ETABS, and advanced building modeling & analysis.",
      duration: "6 Months",
      students: "120+", 
      rating: 4.7,
      image: "🏢",
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
            Popular <span className="text-blue-800">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional development programs designed to accelerate your engineering career
          </p>
        </div>
        
        <div 
          ref={coursesRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {courses.map((course, index) => (
            <div 
              key={index}
              className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-blue-100 relative overflow-hidden ${
                coursesVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                animation: coursesVisible ? `fadeInUp 0.6s ease-out ${index * 0.15}s both` : 'none'
              }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-6xl mb-4 text-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {course.image}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-sm text-gray-500 group-hover:text-blue-600 transition-colors">
                    <Clock className="w-4 h-4 mr-1 group-hover:rotate-12 transition-transform duration-300" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 group-hover:text-blue-600 transition-colors">
                    <Users className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform duration-300" />
                    {course.students}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 group-hover:text-yellow-500 transition-colors">
                    <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400 group-hover:fill-yellow-500 group-hover:text-yellow-500 group-hover:animate-wiggle" />
                    {course.rating}
                  </div>
                </div>
                
                <button className="w-full group/btn bg-blue-800 hover:bg-blue-900 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center relative overflow-hidden shadow-lg hover:shadow-xl">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover/btn:opacity-20 group-hover/btn:animate-shimmer"></span>
                  <span className="relative z-10 flex items-center">
                    Enroll Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="group bg-white hover:bg-blue-50 text-blue-800 border-2 border-blue-800 hover:border-blue-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center mx-auto relative overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></span>
            <span className="relative z-10 flex items-center">
              View All Courses
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}