import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function GetSeatForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    whatsappNumber: '',
    college: '',
    service: '',
    yearOfStudy: '',
    city: '',
    state: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { elementRef, isVisible } = useScrollAnimation({ triggerOnce: true });

  const services = [
    'Software Development',
    'Engineering Consultancy',
    'System Design & Architecture',
    'Technical Consulting',
    'Project Management',
    'Quality Assurance & Testing',
    'Custom Solutions Development',
    'Other'
  ];

  const years = [
    '1st Year',
    '2nd Year',
    '3rd Year',
    '4th Year',
    'Final Year',
    'Graduate',
    'Working Professional'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      const message = `Hi! I'm interested in reserving a seat at Screw Systems%0A%0A*Student Information:*%0A👤 Name: ${formData.fullName}%0A📧 Email: ${formData.email}%0A📱 Phone: ${formData.phoneNumber}%0A💬 WhatsApp: ${formData.whatsappNumber || formData.phoneNumber}%0A%0A*Academic Details:*%0A🏫 College: ${formData.college}%0A📚 Service Interested: ${formData.service}%0A📖 Year of Study: ${formData.yearOfStudy}%0A%0A*Location:*%0A📍 City: ${formData.city}%0A🗺️ State: ${formData.state}%0A%0A*Additional Message:*%0A${formData.message || 'Please provide more details about the service and your requirements.'}`;
      const whatsappUrl = `https://wa.me/919876543210?text=${message}`;
      
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ 
          fullName: '', 
          email: '', 
          phoneNumber: '', 
          whatsappNumber: '',
          college: '',
          service: '', 
          yearOfStudy: '',
          city: '',
          state: '',
          message: ''
        });
      }, 3000);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section id="get-seat" className="py-20 bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl animate-bounce-in transform hover:scale-105 transition-transform duration-300">
              <div className="relative inline-block mb-4 sm:mb-6">
                <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto animate-scale-in" />
                <div className="absolute inset-0 bg-green-200 rounded-full blur-xl opacity-50 animate-pulse"></div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 animate-fade-in-up">Thank You!</h3>
              <p className="text-sm sm:text-base text-gray-600 animate-fade-in px-2">
                Redirected to WhatsApp. We'll contact you shortly to discuss your enrollment.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="get-seat" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-navy-800 via-navy-900 to-navy-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/20 to-teal-900/10 opacity-30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-navy-700 rounded-full blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-700 rounded-full blur-3xl opacity-20 animate-float-delayed"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div 
          ref={elementRef}
          className={`max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-6 animate-fade-in-down">
              Reserve Your <span className="text-teal-300">Seat</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 animate-fade-in px-2 sm:px-0">
              Start Your Journey Toward a Successful Engineering Career.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              {/* Personal Information Section */}
              <div className="border-b border-gray-200 pb-3 sm:pb-4 mb-3 sm:mb-4">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Personal Information</h3>
                
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all duration-200 hover:border-slate-400 text-sm sm:text-base"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all duration-200 hover:border-slate-400 text-sm sm:text-base"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
                  <div>
                    <label htmlFor="phoneNumber" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all duration-200 hover:border-slate-400 text-sm sm:text-base"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="whatsappNumber" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      id="whatsappNumber"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all duration-200 hover:border-slate-400 text-sm sm:text-base"
                      placeholder="Enter WhatsApp number (if different)"
                    />
                  </div>
                </div>
              </div>

              {/* Academic Information Section */}
              <div className="border-b border-gray-200 pb-3 sm:pb-4 mb-3 sm:mb-4">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Academic Information</h3>
                
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="college" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      College/University Name *
                    </label>
                    <input
                      type="text"
                      id="college"
                      name="college"
                      value={formData.college}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all duration-200 hover:border-slate-400 text-sm sm:text-base"
                      placeholder="Enter your college/university name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="yearOfStudy" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      Year of Study *
                    </label>
                    <select
                      id="yearOfStudy"
                      name="yearOfStudy"
                      value={formData.yearOfStudy}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all duration-200 hover:border-slate-400 text-sm sm:text-base"
                    >
                      <option value="">Select year</option>
                      {years.map((year, index) => (
                        <option key={index} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="mt-3 sm:mt-4">
                  <label htmlFor="service" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all duration-200 hover:border-slate-400 text-sm sm:text-base"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Location Information Section */}
              <div className="border-b border-gray-200 pb-3 sm:pb-4 mb-3 sm:mb-4">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Location Information</h3>
                
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="city" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all duration-200 hover:border-slate-400 text-sm sm:text-base"
                      placeholder="Enter your city"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="state" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all duration-200 hover:border-slate-400 text-sm sm:text-base"
                      placeholder="Enter your state"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Message Section */}
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                  Additional Message / Questions
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400 resize-none text-sm sm:text-base"
                  placeholder="Any additional information or questions you'd like to share..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-navy-800 hover:bg-navy-900 disabled:bg-navy-400 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-colors duration-200 hover:shadow-lg flex items-center justify-center mt-4 sm:mt-6"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                    Redirecting...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 w-5 h-5" />
                    Get Seat
                  </>
                )}
              </button>
            </form>
            
            <p className="text-xs sm:text-sm text-gray-500 text-center mt-4 sm:mt-6 px-2">
              By submitting this form, you'll be redirected to WhatsApp to complete your inquiry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}