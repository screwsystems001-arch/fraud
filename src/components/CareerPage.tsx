import React from 'react';
import { Briefcase, MapPin, Clock, Users, ArrowRight, CheckCircle, TrendingUp, Award, Trophy, BookOpen, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CareerPage() {
  const { elementRef: leftRef, isVisible: leftVisible } = useScrollAnimation({ triggerOnce: true });
  const { elementRef: rightRef, isVisible: rightVisible } = useScrollAnimation({ triggerOnce: true });
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation({ triggerOnce: true });
  const { elementRef: jobsRef, isVisible: jobsVisible } = useScrollAnimation({ triggerOnce: true });

  const openPositions = [
    {
      title: 'Senior Engineering Developer',
      department: 'Development & Engineering',
      location: 'Bangalore, Karnataka',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead development programs for engineering professionals. Develop curriculum and mentor junior developers.',
      requirements: ['B.E./B.Tech in Engineering', '5+ years industry experience', 'Strong communication skills', 'Development experience preferred']
    },
    {
      title: 'Structural Engineering Consultant',
      department: 'Consulting Services',
      location: 'Bangalore, Karnataka',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Provide expert consulting services for structural engineering projects. Work with clients on design and analysis.',
      requirements: ['M.Tech in Structural Engineering', '7+ years experience', 'STAAD Pro & ETABS expertise', 'Client management skills']
    },
    {
      title: 'Technical Content Developer',
      department: 'Content & Documentation',
      location: 'Remote / Bangalore',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create and update technical documentation, develop content modules, and ensure quality of technical materials.',
      requirements: ['Engineering degree', '3+ years experience', 'Content creation skills', 'Technical writing ability']
    },
    {
      title: 'Business Development Executive',
      department: 'Sales & Marketing',
      location: 'Bangalore, Karnataka',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Drive business growth by identifying opportunities, building client relationships, and expanding market presence.',
      requirements: ['Any graduate', '2+ years sales experience', 'Excellent communication', 'Engineering domain knowledge']
    }
  ];

  const internshipPositions = [
    {
      title: 'Generative AI Intern',
      department: 'AI & Machine Learning',
      location: 'Remote / Bangalore',
      type: 'Internship',
      experience: 'Fresher',
      description: 'Learn and work on cutting-edge Generative AI technologies. Build AI models and applications using modern frameworks.',
      requirements: ['Any graduate or final year student', 'Basic programming knowledge', 'Interest in AI/ML', 'Willingness to learn']
    },
    {
      title: 'AI Tools & Automation Intern',
      department: 'AI & Automation',
      location: 'Remote / Bangalore',
      type: 'Internship',
      experience: 'Fresher',
      description: 'Develop automation solutions using AI tools. Work on process automation, chatbots, and intelligent systems.',
      requirements: ['Any graduate or final year student', 'Basic programming skills', 'Logical thinking', 'Problem-solving attitude']
    },
    {
      title: 'Full Stack Web Development Intern',
      department: 'Web Development',
      location: 'Remote / Bangalore',
      type: 'Internship',
      experience: 'Fresher',
      description: 'Build full-stack web applications using modern technologies. Work on frontend, backend, and database development.',
      requirements: ['Any graduate or final year student', 'Basic HTML/CSS/JavaScript', 'Eagerness to learn frameworks', 'Portfolio preferred']
    },
    {
      title: 'Data Analytics Intern (Excel + Power BI)',
      department: 'Data Analytics',
      location: 'Remote / Bangalore',
      type: 'Internship',
      experience: 'Fresher',
      description: 'Analyze data and create visualizations using Excel and Power BI. Work on real-world data analytics projects.',
      requirements: ['Any graduate or final year student', 'Basic Excel knowledge', 'Analytical mindset', 'Attention to detail']
    },
    {
      title: 'Python Programming Intern',
      department: 'Software Development',
      location: 'Remote / Bangalore',
      type: 'Internship',
      experience: 'Fresher',
      description: 'Develop Python applications and scripts. Learn Python frameworks, libraries, and best practices.',
      requirements: ['Any graduate or final year student', 'Basic programming concepts', 'Interest in Python', 'Problem-solving skills']
    },
    {
      title: 'UI/UX Design Intern',
      department: 'Design',
      location: 'Remote / Bangalore',
      type: 'Internship',
      experience: 'Fresher',
      description: 'Design user interfaces and experiences for web and mobile applications. Create wireframes, prototypes, and design systems.',
      requirements: ['Any graduate or final year student', 'Creative mindset', 'Basic design tools knowledge', 'Portfolio preferred']
    },
    {
      title: 'Cybersecurity Fundamentals Intern',
      department: 'Cybersecurity',
      location: 'Remote / Bangalore',
      type: 'Internship',
      experience: 'Fresher',
      description: 'Learn cybersecurity fundamentals, threat analysis, and security best practices. Work on security assessments.',
      requirements: ['Any graduate or final year student', 'Basic IT knowledge', 'Interest in security', 'Ethical mindset']
    },
    {
      title: 'Git & GitHub Basics Intern',
      department: 'Version Control',
      location: 'Remote / Bangalore',
      type: 'Internship',
      experience: 'Fresher',
      description: 'Master version control with Git and GitHub. Learn collaborative development workflows and best practices.',
      requirements: ['Any graduate or final year student', 'Basic command line knowledge', 'Team collaboration skills', 'Willingness to learn']
    },
    {
      title: 'Mobile App UI Design Intern',
      department: 'Mobile Design',
      location: 'Remote / Bangalore',
      type: 'Internship',
      experience: 'Fresher',
      description: 'Design mobile app interfaces for iOS and Android. Create responsive designs and mobile-first experiences.',
      requirements: ['Any graduate or final year student', 'Design thinking', 'Mobile design principles', 'Creative portfolio']
    },
    {
      title: 'Digital Marketing Intern',
      department: 'Marketing',
      location: 'Remote / Bangalore',
      type: 'Internship',
      experience: 'Fresher',
      description: 'Learn digital marketing strategies, SEO, social media marketing, and content creation. Work on real marketing campaigns.',
      requirements: ['Any graduate or final year student', 'Good communication skills', 'Social media knowledge', 'Creative writing']
    }
  ];

  const benefits = [
    { icon: TrendingUp, title: 'Career Growth', description: 'Opportunities for professional development and advancement' },
    { icon: Award, title: 'Competitive Salary', description: 'Attractive compensation packages with performance bonuses' },
    { icon: Users, title: 'Great Team', description: 'Work with experienced professionals and industry experts' },
    { icon: Clock, title: 'Work-Life Balance', description: 'Flexible working hours and supportive work environment' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Matching Homepage */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen flex items-center overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full animate-spin-slow" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,400 Q300,200 600,400 T1200,400 V800 H0 V400Z" fill="#1A237E" />
          </svg>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-300 rounded-full animate-float opacity-60"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-float-delayed opacity-50"></div>
          <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-blue-200 rounded-full animate-float opacity-70"></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-300 rounded-full animate-float-delayed opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div 
              ref={leftRef}
              className={`text-center lg:text-left transition-all duration-1000 ${
                leftVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
              }`}
            >
              <div className="inline-flex items-center bg-navy-100 px-4 py-2 rounded-full text-navy-800 text-sm font-medium mb-6 animate-pulse hover:animate-none hover:scale-105 transition-transform duration-300">
                <Trophy className="w-4 h-4 mr-2 animate-wiggle" />
                Screw Systems - Leading Engineering Development & Consulting Company
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Build Your Career <span className="text-navy-700">With Us</span>.
                <br />
                Join Our <span className="text-teal-600">Team</span>.
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed animate-fade-in">
                Professional Engineering Development, Skill Building & Consulting Services
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#open-positions"
                  className="group bg-navy-800 hover:bg-navy-900 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-navy-500/50 flex items-center justify-center relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-shimmer"></span>
                  View Open Positions
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </a>
                
                <a 
                  href="mailto:screwsystems001@gmail.com?subject=General Application"
                  className="border-2 border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center group"
                >
                  <Briefcase className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Send Resume
                </a>
              </div>
              
              {/* Stats */}
              <div 
                ref={statsRef}
                className={`grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-200 transition-all duration-1000 delay-300 ${
                  statsVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
                }`}
              >
                <div className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl font-bold text-navy-700 animate-count-up">500+</div>
                  <div className="text-slate-600 text-sm">Professional Developers</div>
                </div>
                <div className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl font-bold text-teal-600 animate-count-up">15+</div>
                  <div className="text-slate-600 text-sm">Expert Developers & Consultants</div>
                </div>
                <div className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl font-bold text-blue-600 animate-count-up">95%</div>
                  <div className="text-slate-600 text-sm">Successful Career Growth & Job Placement</div>
                </div>
              </div>
            </div>
            
            {/* Right Content */}
            <div 
              ref={rightRef}
              className={`relative transition-all duration-1000 delay-200 ${
                rightVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
              }`}
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-navy-400/30 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                
                <div className="bg-gradient-to-br from-slate-100 to-navy-50 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 relative z-10 border border-slate-200/50">
                  <div className="bg-white rounded-2xl p-8 transform -rotate-3 hover:rotate-0 transition-all duration-500 shadow-xl hover:shadow-2xl">
                    <div className="flex items-center justify-center h-64">
                      <div className="text-center">
                        <div className="relative inline-block">
                          <Briefcase className="w-24 h-24 text-navy-700 mx-auto mb-4 animate-float" />
                          <div className="absolute inset-0 bg-teal-200/30 rounded-full blur-xl opacity-50 animate-pulse"></div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Join Our Team</h3>
                        <p className="text-slate-600">Build your career with experienced professionals and industry experts in engineering development and consulting.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Be part of a company that's transforming engineering careers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 text-center"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-8 h-8 text-blue-800" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore exciting career opportunities with us
            </p>
          </div>
          
          <div 
            ref={jobsRef}
            className="space-y-6"
          >
            {openPositions.map((job, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 ${
                  jobsVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ 
                  animation: jobsVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                      <span className="bg-navy-100 text-navy-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {job.department}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-slate-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {job.experience}
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {job.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-900 mb-2 text-sm">Requirements:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {job.requirements.map((req, idx) => (
                          <div key={idx} className="flex items-center text-sm text-slate-600">
                            <CheckCircle className="w-4 h-4 mr-2 text-teal-500 flex-shrink-0" />
                            {req}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:ml-4">
                    <a 
                      href={`mailto:screwsystems001@gmail.com?subject=Application for ${encodeURIComponent(job.title)}&body=Dear Hiring Manager,%0A%0AI am interested in applying for the position of ${encodeURIComponent(job.title)} (${encodeURIComponent(job.department)}).%0A%0APlease find my resume attached.%0A%0AThank you for considering my application.%0A%0ABest regards`}
                      className="group bg-navy-800 hover:bg-navy-900 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center whitespace-nowrap inline-block"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Positions for Freshers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Internship Opportunities for Freshers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kickstart your career with hands-on experience in cutting-edge technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internshipPositions.map((internship, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 transform hover:-translate-y-2"
              >
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{internship.title}</h3>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {internship.type}
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {internship.location}
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-1" />
                    {internship.experience}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {internship.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Requirements:</h4>
                  <ul className="space-y-1">
                    {internship.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href={`mailto:screwsystems001@gmail.com?subject=Internship Application - ${encodeURIComponent(internship.title)}&body=Dear Hiring Manager,%0A%0AI am a fresher interested in applying for the internship position: ${encodeURIComponent(internship.title)} (${encodeURIComponent(internship.department)}).%0A%0AI am eager to learn and contribute to your team.%0A%0APlease find my resume attached.%0A%0AThank you for considering my application.%0A%0ABest regards`}
                  className="group bg-navy-800 hover:bg-navy-900 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-colors duration-200 flex items-center justify-center w-full"
                >
                  Apply for Internship
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">How to Apply</h2>
              <p className="text-base sm:text-lg text-slate-600 px-4 sm:px-0">
                Follow these simple steps to join our team
              </p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="bg-navy-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-navy-800">1</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Browse Positions</h3>
                <p className="text-slate-600 text-sm">Explore our open positions and find the role that matches your skills</p>
              </div>
              
              <div className="text-center">
                <div className="bg-navy-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-navy-800">2</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Submit Application</h3>
                <p className="text-slate-600 text-sm">Click "Apply Now" and send us your resume with a cover letter</p>
              </div>
              
              <div className="text-center">
                <div className="bg-navy-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-navy-800">3</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Interview Process</h3>
                <p className="text-slate-600 text-sm">Our team will review and contact you for the next steps</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-navy-800 to-navy-900">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
            Don't See a Role That Fits?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <a 
            href="mailto:screwsystems001@gmail.com?subject=General Application"
            className="inline-flex items-center bg-white hover:bg-slate-50 text-navy-800 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-colors duration-200 hover:shadow-lg"
          >
            Send Your Resume
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}

