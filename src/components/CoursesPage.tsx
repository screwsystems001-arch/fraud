import React from 'react';
import { Code, Building2, Settings, Target, CheckCircle, ArrowRight, Award, Users, Briefcase, Zap } from 'lucide-react';

export default function CoursesPage() {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs. We develop scalable, robust applications using cutting-edge technologies.",
      features: ["Web Applications", "Mobile Apps", "Enterprise Solutions", "API Development"],
      category: "Development"
    },
    {
      icon: Building2,
      title: "Engineering Consultancy",
      description: "Expert engineering consulting services for structural, mechanical, and civil engineering projects. Get professional guidance from industry experts.",
      features: ["Structural Analysis", "Design Review", "Technical Audits", "Project Planning"],
      category: "Consultancy"
    },
    {
      icon: Settings,
      title: "System Design & Architecture",
      description: "Comprehensive system design and architecture services. We design scalable, efficient systems that meet your technical and business requirements.",
      features: ["System Architecture", "Cloud Solutions", "Infrastructure Design", "Scalability Planning"],
      category: "Development"
    },
    {
      icon: Target,
      title: "Technical Consulting",
      description: "Strategic technical consulting to help you make informed decisions. Our experts provide guidance on technology selection, implementation, and optimization.",
      features: ["Technology Assessment", "Strategy Planning", "Implementation Support", "Performance Optimization"],
      category: "Consultancy"
    },
    {
      icon: Briefcase,
      title: "Project Management",
      description: "End-to-end project management services ensuring timely delivery and quality outcomes. We manage your projects from conception to completion.",
      features: ["Agile Methodology", "Risk Management", "Quality Assurance", "Stakeholder Management"],
      category: "Consultancy"
    },
    {
      icon: Zap,
      title: "Quality Assurance & Testing",
      description: "Comprehensive QA and testing services to ensure your software meets the highest quality standards. We ensure reliability and performance.",
      features: ["Automated Testing", "Performance Testing", "Security Testing", "Quality Metrics"],
      category: "Development"
    },
    {
      icon: Settings,
      title: "Custom Solutions Development",
      description: "Bespoke software solutions designed specifically for your unique requirements. We build custom applications that solve your specific business challenges.",
      features: ["Custom Software", "Integration Services", "Legacy Modernization", "Maintenance & Support"],
      category: "Development"
    },
    {
      icon: Target,
      title: "Technology Consulting",
      description: "Strategic technology consulting to help you leverage the right tools and platforms. We guide you through digital transformation journeys.",
      features: ["Digital Transformation", "Technology Roadmap", "Vendor Selection", "Best Practices"],
      category: "Consultancy"
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Expert Team",
      description: "Work with experienced developers and consultants with 10+ years of industry experience"
    },
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: "Successfully delivered 500+ projects across various industries and domains"
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "We prioritize your business goals and deliver solutions that drive real value"
    },
    {
      icon: Zap,
      title: "Agile Methodology",
      description: "Flexible, iterative approach ensuring quick delivery and continuous improvement"
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
            Our Services
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-700 max-w-2xl mx-auto px-4 sm:px-0">
            Professional development and consultancy services to transform your business
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200"
                >
                  <div className="bg-navy-100 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-navy-200 transition-colors">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-navy-700" />
                  </div>
                  
                  <div className="mb-2 sm:mb-3">
                    <span className="inline-block bg-slate-100 text-navy-800 text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-navy-800 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm">
                    {service.description}
                  </p>
                  
                  <div className="mb-4 sm:mb-6">
                    <h4 className="font-semibold text-slate-900 mb-1.5 sm:mb-2 text-xs sm:text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-slate-600">
                          <CheckCircle className="w-3 h-3 mr-1.5 sm:mr-2 text-teal-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full group/btn bg-navy-800 hover:bg-navy-900 text-white py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">Why Choose Screw Systems?</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4 sm:px-0">
              We deliver exceptional value through expertise, innovation, and commitment to excellence
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-navy-100 w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 mx-auto hover:bg-navy-200 transition-colors">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-navy-700" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">{benefit.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">Our Process</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4 sm:px-0">
              A structured approach to delivering successful projects
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your requirements and business objectives" },
              { step: "02", title: "Planning", description: "Creating detailed project plans and technical specifications" },
              { step: "03", title: "Development", description: "Building solutions using best practices and modern technologies" },
              { step: "04", title: "Delivery", description: "Testing, deployment, and ongoing support for your success" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-navy-800 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto text-lg sm:text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">{phase.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-navy-800 to-navy-900">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
            Let's discuss how our development and consultancy services can help you achieve your goals
          </p>
          <button className="group bg-white hover:bg-slate-50 text-navy-800 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center mx-auto">
            Get Started
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
