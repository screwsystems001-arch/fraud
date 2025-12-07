import React from 'react';
import { Clock, Users, Star, ArrowRight, Award, CheckCircle } from 'lucide-react';

export default function CoursesPage() {
  const courses = [
    {
      title: "Advanced AutoCAD & Design",
      description: "Master 2D/3D design with industry-standard AutoCAD software. Learn architectural drafting, mechanical design, and 3D modeling techniques.",
      duration: "3 Months",
      students: "150+",
      rating: 4.8,
      image: "🏗️",
      features: ["2D Drafting", "3D Modeling", "Industry Projects", "Certification"],
      level: "Beginner to Advanced"
    },
    {
      title: "Project Management Professional",
      description: "Learn PMP methodologies and project lifecycle management. Prepare for PMP certification with real-world case studies.",
      duration: "4 Months", 
      students: "200+",
      rating: 4.9,
      image: "📊",
      features: ["PMP Preparation", "Agile Methods", "Risk Management", "Leadership Skills"],
      level: "Intermediate"
    },
    {
      title: "Structural Engineering Analysis",
      description: "Advanced structural analysis using STAAD Pro and ETABS. Design and analyze complex structures with confidence.",
      duration: "6 Months",
      students: "120+", 
      rating: 4.7,
      image: "🏢",
      features: ["STAAD Pro", "ETABS", "Seismic Analysis", "Design Codes"],
      level: "Advanced"
    },
    {
      title: "Civil Engineering Diploma",
      description: "Comprehensive civil engineering program covering construction, surveying, and project management fundamentals.",
      duration: "12 Months",
      students: "300+",
      rating: 4.8,
      image: "🚧",
      features: ["Construction Tech", "Surveying", "Materials", "Site Management"],
      level: "Beginner"
    },
    {
      title: "Mechanical Design Engineering",
      description: "Learn mechanical design principles, CAD software, and manufacturing processes for industrial applications.",
      duration: "5 Months",
      students: "180+",
      rating: 4.6,
      image: "⚙️",
      features: ["SolidWorks", "Design Analysis", "Manufacturing", "Quality Control"],
      level: "Intermediate"
    },
    {
      title: "Electrical Systems Design",
      description: "Master electrical system design, power distribution, and control systems for industrial and commercial projects.",
      duration: "4 Months",
      students: "140+",
      rating: 4.7,
      image: "⚡",
      features: ["Power Systems", "Control Circuits", "PLC Programming", "Safety Standards"],
      level: "Intermediate to Advanced"
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
            Our Development Programs
          </h1>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
            Industry-focused development programs designed to accelerate your engineering career
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100"
              >
                <div className="text-4xl mb-4 text-center">{course.image}</div>
                
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {course.level}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">What you'll learn:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className="w-full group/btn bg-blue-800 hover:bg-blue-900 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center">
                  Enroll Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Development Programs?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide more than just development - we provide career transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Award className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Industry Experts</h3>
              <p className="text-gray-600 text-sm">Learn from professionals with 10+ years experience</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <CheckCircle className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Practical Development</h3>
              <p className="text-gray-600 text-sm">Hands-on projects and real-world applications</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Users className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Job Placement</h3>
              <p className="text-gray-600 text-sm">95% placement rate with top companies</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Star className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Certification</h3>
              <p className="text-gray-600 text-sm">Industry-recognized certificates upon completion</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of professionals who have transformed their careers with us
          </p>
          <button className="group bg-white hover:bg-blue-50 text-blue-800 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center mx-auto">
            Get Seat
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}