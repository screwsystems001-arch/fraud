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
    course: '',
    yearOfStudy: '',
    city: '',
    state: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { elementRef, isVisible } = useScrollAnimation({ triggerOnce: true });

  const courses = [
    'Advanced AutoCAD & Design',
    'Project Management Professional',
    'Structural Engineering Analysis',
    'Civil Engineering Diploma',
    'Mechanical Design Engineering',
    'Electrical Systems Design',
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
      const message = `Hi! I'm interested in reserving a seat at Screw Systems%0A%0A*Student Information:*%0A👤 Name: ${formData.fullName}%0A📧 Email: ${formData.email}%0A📱 Phone: ${formData.phoneNumber}%0A💬 WhatsApp: ${formData.whatsappNumber || formData.phoneNumber}%0A%0A*Academic Details:*%0A🏫 College: ${formData.college}%0A📚 Course Interested: ${formData.course}%0A📖 Year of Study: ${formData.yearOfStudy}%0A%0A*Location:*%0A📍 City: ${formData.city}%0A🗺️ State: ${formData.state}%0A%0A*Additional Message:*%0A${formData.message || 'Please provide more details about the course and enrollment process.'}`;
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
          course: '', 
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
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 shadow-2xl animate-bounce-in transform hover:scale-105 transition-transform duration-300">
              <div className="relative inline-block mb-6">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto animate-scale-in" />
                <div className="absolute inset-0 bg-green-200 rounded-full blur-xl opacity-50 animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 animate-fade-in-up">Thank You!</h3>
              <p className="text-gray-600 animate-fade-in">
                Redirected to WhatsApp. We'll contact you shortly to discuss your enrollment.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="get-seat" className="py-20 bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 animated-gradient opacity-20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-700 rounded-full blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 animate-float-delayed"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={elementRef}
          className={`max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in-down">
              Reserve Your <span className="text-blue-200">Seat</span>
            </h2>
            <p className="text-xl text-blue-100 animate-fade-in">
              Start Your Journey Toward a Successful Engineering Career.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Personal Information Section */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Personal Information</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="whatsappNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      id="whatsappNumber"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400"
                      placeholder="Enter WhatsApp number (if different)"
                    />
                  </div>
                </div>
              </div>

              {/* Academic Information Section */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Academic Information</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="college" className="block text-sm font-semibold text-gray-700 mb-2">
                      College/University Name *
                    </label>
                    <input
                      type="text"
                      id="college"
                      name="college"
                      value={formData.college}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400"
                      placeholder="Enter your college/university name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="yearOfStudy" className="block text-sm font-semibold text-gray-700 mb-2">
                      Year of Study *
                    </label>
                    <select
                      id="yearOfStudy"
                      name="yearOfStudy"
                      value={formData.yearOfStudy}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400"
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
                
                <div className="mt-4">
                  <label htmlFor="course" className="block text-sm font-semibold text-gray-700 mb-2">
                    Course Interested In *
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400"
                  >
                    <option value="">Select a course</option>
                    {courses.map((course, index) => (
                      <option key={index} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Location Information Section */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Location Information</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400"
                      placeholder="Enter your city"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400"
                      placeholder="Enter your state"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Message Section */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Message / Questions
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400 resize-none"
                  placeholder="Any additional information or questions you'd like to share..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-800 hover:bg-blue-900 disabled:bg-blue-400 text-white py-4 rounded-xl font-bold text-lg transition-colors duration-200 hover:shadow-lg flex items-center justify-center"
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
            
            <p className="text-sm text-gray-500 text-center mt-6">
              By submitting this form, you'll be redirected to WhatsApp to complete your inquiry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}