import { Briefcase, MapPin, Clock, Users, ArrowRight, CheckCircle, TrendingUp, Award, Trophy, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState, useEffect, useRef } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../contexts/AuthContext';

type InternshipPosition = {
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
};

type CareerPageProps = {
  onRequireLogin: () => void;
};

export default function CareerPage({ onRequireLogin }: CareerPageProps) {
  const [selectedInternship, setSelectedInternship] = useState<InternshipPosition | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    roleStatus: 'Student',
    experience: '',
    city: '',
    state: '',
    college: '',
    linkedin: '',
    portfolio: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const formRef = useRef<HTMLDivElement | null>(null);
  const { elementRef: leftRef, isVisible: leftVisible } = useScrollAnimation({ triggerOnce: true });
  const { elementRef: rightRef, isVisible: rightVisible } = useScrollAnimation({ triggerOnce: true });
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation({ triggerOnce: true });
  const { elementRef: jobsRef, isVisible: jobsVisible } = useScrollAnimation({ triggerOnce: true });
  const { user } = useAuth();

  useEffect(() => {
    if (user && !selectedInternship) {
      const pending = localStorage.getItem('pendingInternship');
      if (pending) {
        try {
          const parsed = JSON.parse(pending) as InternshipPosition;
          setSelectedInternship(parsed);
          localStorage.removeItem('pendingInternship');
        } catch {
          localStorage.removeItem('pendingInternship');
        }
      }
    }
  }, [user, selectedInternship]);

  const handleInternshipClick = (internship: InternshipPosition) => {
    if (!user) {
      localStorage.setItem('pendingInternship', JSON.stringify(internship));
      setSelectedInternship(internship);
      onRequireLogin();
    } else {
      setSelectedInternship(internship);
      setIsSubmitted(false);
      setFormError('');
      setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
    }
  };

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedInternship) return;
    setIsSubmitting(true);
    setFormError('');
    try {
      await addDoc(collection(db, 'internshipApplications'), {
        ...formData,
        internshipTitle: selectedInternship.title,
        internshipDepartment: selectedInternship.department,
        internshipLocation: selectedInternship.location,
        internshipType: selectedInternship.type,
        createdAt: serverTimestamp(),
        userEmail: user?.email || '',
      });
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        roleStatus: 'Student',
        experience: '',
        city: '',
        state: '',
        college: '',
        linkedin: '',
        portfolio: '',
        message: '',
      });
    } catch (err) {
      setFormError('Unable to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <div className="min-h-screen bg-white relative z-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-navy-50 min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-50/30 via-transparent to-slate-100/20 animate-gradient-mesh" />
          <div className="absolute top-0 left-0 w-[28rem] h-[28rem] bg-navy-100/15 rounded-full blur-3xl animate-float-slow -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-teal-100/15 rounded-full blur-3xl animate-float-slow-delayed translate-x-1/2 translate-y-1/2" />
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[10%] w-2 h-2 bg-teal-400/50 rounded-full animate-particle-1" />
          <div className="absolute top-[25%] right-[15%] w-2.5 h-2.5 bg-blue-500/40 rounded-full animate-particle-2" />
          <div className="absolute bottom-[30%] left-[20%] w-1.5 h-1.5 bg-navy-300/40 rounded-full animate-particle-3" />
          <div className="absolute top-[50%] right-[25%] w-2 h-2 bg-teal-300/50 rounded-full animate-particle-4" />
          <div className="absolute bottom-[20%] right-[10%] w-2 h-2 bg-blue-400/30 rounded-full animate-particle-5 hidden sm:block" />
          <div className="absolute top-[70%] left-[30%] w-1.5 h-1.5 bg-navy-200/40 rounded-full animate-particle-6 hidden sm:block" />
        </div>
        
        <div className="container mx-auto px-6 sm:px-8 relative z-10 py-12 sm:py-16 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div 
              ref={leftRef}
              className={`text-center lg:text-left transition-all duration-1000 ${
                leftVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div 
                className={`inline-flex items-center bg-navy-100 px-4 py-2 rounded-full text-navy-800 text-xs sm:text-sm font-medium mb-4 sm:mb-6 hover:scale-105 transition-all duration-300 ${
                  leftVisible ? 'animate-slide-down' : ''
                }`}
                style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
              >
                <Trophy className="w-4 h-4 mr-2 animate-wiggle" />
                High Priority: Paid Internships & Career Roles Open Now
              </div>
              
              <h1 
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4 sm:mb-6 ${
                  leftVisible ? 'animate-text-reveal' : ''
                }`}
                style={{ animationDelay: '0.25s', animationFillMode: 'both' }}
              >
                Build Your Career With Us.
                <br />
                Internship-First Growth <span className="text-teal-600 inline-block animate-text-highlight" style={{ animationDelay: '0.45s' }}>Starts Here</span>.
              </h1>
              
              <p 
                className={`text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed ${
                  leftVisible ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: '0.45s', animationFillMode: 'both' }}
              >
                Professional Engineering Development, Skill Building & Consulting Services with a strong focus on internship opportunities that turn into full-time roles.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="#internships"
                  className="group bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-teal-500/40 flex items-center justify-center relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-shimmer"></span>
                  Explore Internships First
                  <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </a>
                
                <a
                  href="#open-positions"
                  className="group border-2 border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
                >
                  View Open Roles
                  <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </a>
              </div>
              
              <div 
                ref={statsRef}
                className={`grid grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200 transition-all duration-1000 delay-300 ${
                  statsVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
                }`}
              >
                <div className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="text-xl sm:text-2xl font-bold text-navy-700 animate-count-up">500+</div>
                  <div className="text-slate-600 text-xs sm:text-sm">Professional Developers</div>
                </div>
                <div className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="text-xl sm:text-2xl font-bold text-teal-600 animate-count-up">15+</div>
                  <div className="text-slate-600 text-xs sm:text-sm">Expert Developers & Consultants</div>
                </div>
                <div className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600 animate-count-up">95%</div>
                  <div className="text-slate-600 text-xs sm:text-sm">Successful Career Growth & Job Placement</div>
                </div>
              </div>
            </div>
            
            <div 
              ref={rightRef}
              className={`relative transition-all duration-1000 delay-200 ${
                rightVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br from-navy-400/30 to-teal-500/20 rounded-3xl blur-3xl ${rightVisible ? 'animate-glow-smooth' : ''}`} style={{ animationDelay: '0.4s', animationFillMode: 'both' }} />
                
                <div 
                  className={`bg-gradient-to-br from-slate-100 to-navy-50 rounded-3xl p-6 sm:p-8 transform transition-all duration-700 hover:scale-105 relative z-10 border border-slate-200/50 ${rightVisible ? 'animate-card-float' : ''}`}
                  style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
                >
                  <div className="bg-white rounded-2xl p-6 sm:p-8 transform transition-all duration-700 shadow-xl hover:shadow-2xl">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full animate-pulse-slow">Internship Priority</span>
                      <span className="text-xs text-slate-500">Career + Internship</span>
                    </div>
                    <div className="flex items-center justify-center h-56 sm:h-64">
                      <div className="text-center px-2">
                        <div className="relative inline-block">
                          <Briefcase className={`w-20 h-20 sm:w-24 sm:h-24 text-navy-700 mx-auto mb-4 ${rightVisible ? 'animate-icon-bounce' : ''}`} style={{ animationDelay: '0.8s', animationFillMode: 'both' }} />
                          <div className="absolute inset-0 bg-teal-200/30 rounded-full blur-2xl animate-pulse-slow"></div>
                        </div>
                        <h3 
                          className={`text-lg sm:text-xl font-bold text-slate-900 mb-2 ${
                            rightVisible ? 'animate-fade-in-up' : ''
                          }`}
                          style={{ animationDelay: '1s', animationFillMode: 'both' }}
                        >
                          Join Our Team & Internships
                        </h3>
                        <p 
                          className={`text-sm sm:text-base text-slate-600 ${
                            rightVisible ? 'animate-fade-in-up' : ''
                          }`}
                          style={{ animationDelay: '1.1s', animationFillMode: 'both' }}
                        >
                          Work with industry experts, start with internships, and convert to full-time roles as you grow with us.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inline Application Form (only after login and selection) */}
      {user && selectedInternship && (
        <section ref={formRef} className="py-16 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-slate-200 p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-teal-700 inline-flex px-3 py-1 bg-teal-50 rounded-full">
                    Internship Application
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900 mt-2">{selectedInternship.title}</h3>
                  <p className="text-slate-600 text-sm">
                    {selectedInternship.department} • {selectedInternship.location} • {selectedInternship.type}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedInternship(null)}
                  className="text-slate-500 hover:text-slate-800 transition text-sm font-semibold"
                >
                  Close
                </button>
              </div>

              {isSubmitted && (
                <div className="p-3 rounded-xl border border-teal-200 bg-teal-50 text-teal-800 flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  Application submitted. We will reach out soon.
                </div>
              )}
              {formError && <p className="text-red-600 text-sm">{formError}</p>}

              <form onSubmit={handleSubmitApplication} className="space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                    <input
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Email *</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Role / Status *</label>
                    <select
                      name="roleStatus"
                      value={formData.roleStatus}
                      onChange={(e) => setFormData({ ...formData, roleStatus: e.target.value, experience: '' })}
                      className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500 bg-white"
                    >
                      <option value="Student">Student</option>
                      <option value="Recent Graduate">Recent Graduate</option>
                      <option value="Working Professional">Working Professional</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Experience / Year *</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500 bg-white"
                    >
                      {formData.roleStatus === 'Student' && (
                        <>
                          <option value="">Select year</option>
                          <option value="1st Year">1st Year</option>
                          <option value="2nd Year">2nd Year</option>
                          <option value="3rd Year">3rd Year</option>
                          <option value="4th Year">4th Year</option>
                          <option value="Final Year">Final Year</option>
                        </>
                      )}
                      {formData.roleStatus === 'Recent Graduate' && (
                        <>
                          <option value="">Select graduation year range</option>
                          <option value="Graduated < 1 year">Graduated &lt; 1 year</option>
                          <option value="Graduated 1-2 years">Graduated 1-2 years</option>
                        </>
                      )}
                      {formData.roleStatus === 'Working Professional' && (
                        <>
                          <option value="">Select experience</option>
                          <option value="0-1 year">0-1 year</option>
                          <option value="1-3 years">1-3 years</option>
                          <option value="3-5 years">3-5 years</option>
                          <option value="5+ years">5+ years</option>
                        </>
                      )}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone *</label>
                    <input
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">City *</label>
                    <input
                      name="city"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">State *</label>
                    <input
                      name="state"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">College *</label>
                    <input
                      name="college"
                      required
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">LinkedIn (optional)</label>
                    <input
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                      placeholder="https://linkedin.com/in/..."
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Portfolio / GitHub (optional)</label>
                    <input
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500"
                      placeholder="https://..."
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Message (optional)</label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm focus:ring-2 focus:ring-navy-500 focus:border-navy-500 resize-none"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedInternship(null)}
                    className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 text-sm font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center px-5 py-2.5 rounded-lg bg-navy-800 text-white font-semibold hover:bg-navy-900 disabled:opacity-50 text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Submit Application
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Internship Positions */}
      <section id="internships" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-teal-50 text-teal-700 text-xs font-semibold px-4 py-2 rounded-full mb-4">Internships First</div>
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
                
                <button
                  onClick={() => handleInternshipClick(internship)}
                  className="group bg-navy-800 hover:bg-navy-900 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-colors duration-200 flex items-center justify-center w-full"
                >
                  Apply / Enquire
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
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