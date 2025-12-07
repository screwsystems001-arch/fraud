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
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/logo.png" 
              alt="Screw Systems Logo - Engineering Development and Consulting Company" 
              className="h-20 w-20 rounded-full object-cover border-4 border-blue-800 shadow-xl"
              width="80"
              height="80"
              loading="lazy"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
            Professional development and consultancy services to transform your business
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <Icon className="w-8 h-8 text-blue-800" />
                  </div>
                  
                  <div className="mb-3">
                    <span className="inline-block bg-blue-50 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full group/btn bg-blue-800 hover:bg-blue-900 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Screw Systems?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional value through expertise, innovation, and commitment to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto hover:bg-blue-200 transition-colors">
                    <Icon className="w-8 h-8 text-blue-800" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A structured approach to delivering successful projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your requirements and business objectives" },
              { step: "02", title: "Planning", description: "Creating detailed project plans and technical specifications" },
              { step: "03", title: "Development", description: "Building solutions using best practices and modern technologies" },
              { step: "04", title: "Delivery", description: "Testing, deployment, and ongoing support for your success" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-800 text-white w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our development and consultancy services can help you achieve your goals
          </p>
          <button className="group bg-white hover:bg-blue-50 text-blue-800 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center mx-auto">
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
