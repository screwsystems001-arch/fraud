import React, { useState } from 'react';
import { Send, CheckCircle, X } from 'lucide-react';

interface GetSeatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GetSeatModal({ isOpen, onClose }: GetSeatModalProps) {
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
      
      // Reset form and close modal after 3 seconds
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
        onClose();
      }, 3000);
    }, 1000);
  };

  const handleClose = () => {
    if (!isSubmitting) {
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
      setIsSubmitted(false);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in transform">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Reserve Your Seat</h2>
          <button
            onClick={handleClose}
            disabled={isSubmitting}
            className="text-gray-400 hover:text-gray-600 transition-all duration-300 transform hover:scale-110 hover:rotate-90 disabled:opacity-50 p-1"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {isSubmitted ? (
            <div className="text-center py-6 sm:py-8 animate-bounce-in">
              <div className="relative inline-block mb-4 sm:mb-6">
                <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto animate-scale-in" />
                <div className="absolute inset-0 bg-green-200 rounded-full blur-xl opacity-50 animate-pulse"></div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 animate-fade-in-up">Thank You!</h3>
              <p className="text-sm sm:text-base text-gray-600 animate-fade-in px-2">
                Redirected to WhatsApp. We'll contact you shortly to discuss your enrollment.
              </p>
            </div>
          ) : (
            <>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 text-center">
                Take the first step towards transforming your engineering career
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                {/* Personal Information */}
                <div className="border-b border-gray-200 pb-3 mb-3">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3">Personal Information</h3>
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label htmlFor="fullName" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-slate-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all duration-200 hover:border-slate-400 text-sm sm:text-base"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-slate-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all duration-200 hover:border-slate-400 text-sm sm:text-base"
                          placeholder="Email address"
                        />
                      </div>
                      <div>
                        <label htmlFor="phoneNumber" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-slate-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all duration-200 hover:border-slate-400 text-sm sm:text-base"
                          placeholder="Phone number"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="whatsappNumber" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        id="whatsappNumber"
                        name="whatsappNumber"
                        value={formData.whatsappNumber}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-slate-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all duration-200 hover:border-slate-400 text-sm sm:text-base"
                        placeholder="WhatsApp (if different)"
                      />
                    </div>
                  </div>
                </div>

                {/* Academic Information */}
                <div className="border-b border-gray-200 pb-3 mb-3">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3">Academic Information</h3>
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label htmlFor="college" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                        College/University *
                      </label>
                      <input
                        type="text"
                        id="college"
                        name="college"
                        value={formData.college}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-slate-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all duration-200 hover:border-slate-400 text-sm sm:text-base"
                        placeholder="College/University name"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="yearOfStudy" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                          Year of Study *
                        </label>
                        <select
                          id="yearOfStudy"
                          name="yearOfStudy"
                          value={formData.yearOfStudy}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-slate-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all duration-200 hover:border-slate-400 text-sm sm:text-base"
                        >
                          <option value="">Select year</option>
                          {years.map((year, index) => (
                            <option key={index} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                          Service Interested *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-slate-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all duration-200 hover:border-slate-400 text-sm sm:text-base"
                        >
                          <option value="">Select service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location Information */}
                <div className="border-b border-gray-200 pb-3 mb-3">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3">Location</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="city" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-slate-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all duration-200 hover:border-slate-400 text-sm sm:text-base"
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                        State *
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-slate-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all duration-200 hover:border-slate-400 text-sm sm:text-base"
                        placeholder="State"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                    Additional Message / Questions
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400 resize-none text-sm sm:text-base"
                    placeholder="Any additional information..."
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
              
              <p className="text-xs sm:text-sm text-gray-500 text-center mt-3 sm:mt-4 px-2">
                By submitting this form, you'll be redirected to WhatsApp to complete your inquiry.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}