import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle, Clock, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    whatsappNumber: '',
    college: '',
    yearOfStudy: '',
    city: '',
    state: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const years = [
    '1st Year',
    '2nd Year',
    '3rd Year',
    '4th Year',
    'Final Year',
    'Graduate',
    'Working Professional'
  ];
  
  const { elementRef: mapHeaderRef, isVisible: mapHeaderVisible } = useScrollAnimation({ triggerOnce: true });
  const { elementRef: mapRef, isVisible: mapVisible } = useScrollAnimation({ triggerOnce: true, threshold: 0.2 });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission and redirect to WhatsApp
    setTimeout(() => {
      const message = `Hi! I have a question:%0A%0A*Contact Information:*%0A👤 Name: ${formData.fullName}%0A📧 Email: ${formData.email}%0A📱 Phone: ${formData.phoneNumber || 'Not provided'}%0A💬 WhatsApp: ${formData.whatsappNumber || formData.phoneNumber || 'Not provided'}%0A%0A*Academic Details:*%0A🏫 College: ${formData.college || 'Not provided'}%0A📖 Year of Study: ${formData.yearOfStudy || 'Not provided'}%0A%0A*Location:*%0A📍 City: ${formData.city || 'Not provided'}%0A🗺️ State: ${formData.state || 'Not provided'}%0A%0A*Message:*%0A${formData.message}%0A%0APlease get back to me when convenient.`;
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
          yearOfStudy: '',
          city: '',
          state: '',
          message: '' 
        });
      }, 3000);
    }, 1000);
  };

  const handleWhatsAppClick = () => {
    const message = `Hi! I'd like to know more about Screw Systems development and consultancy services.`;
    const whatsappUrl = `https://wa.me/919876543210?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Bangalore, Karnataka 560001, India',
      action: 'https://www.google.com/maps/search/Bangalore+Karnataka+560001+India',
      isExternal: true
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 98765 43210',
      action: 'tel:+919876543210',
      isExternal: false
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'screwsystems001@gmail.com',
      action: 'mailto:screwsystems001@gmail.com?subject=Inquiry%20from%20Website',
      isExternal: false
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: 'Message us anytime',
      action: handleWhatsAppClick,
      isFunction: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Title Section */}
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
            Contact Us
          </h1>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
            Get in touch with our team for development programs, consulting services, or career opportunities
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <div 
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-200 transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-blue-800" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{item.title}</h3>
                {item.isFunction ? (
                  <button 
                    onClick={typeof item.action === 'function' ? item.action : undefined}
                    className="text-blue-800 hover:text-blue-900 font-medium text-center block w-full transition-colors duration-300 hover:underline"
                  >
                    {item.content}
                  </button>
                ) : item.action && typeof item.action === 'string' ? (
                  <a 
                    href={item.action}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="text-blue-800 hover:text-blue-900 font-medium text-center block transition-colors duration-300 hover:underline"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-600 text-center">{item.content}</p>
                )}
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-800 mb-1">24/7</div>
              <div className="text-gray-600 text-sm">WhatsApp Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-800 mb-1">&lt;2hrs</div>
              <div className="text-gray-600 text-sm">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-800 mb-1">500+</div>
              <div className="text-gray-600 text-sm">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-800 mb-1">15+</div>
              <div className="text-gray-600 text-sm">Expert Developers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-lg text-gray-600">
                Have a specific question? Fill out the form below and we'll get back to you
              </p>
            </div>
            
            {isSubmitted ? (
              <div className="bg-white rounded-3xl p-12 shadow-2xl text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                <p className="text-gray-600">
                  Redirected to WhatsApp. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Personal Information */}
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
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
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
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
                          placeholder="Enter WhatsApp number"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Academic Information */}
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Academic Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="college" className="block text-sm font-semibold text-gray-700 mb-2">
                          College/University Name
                        </label>
                        <input
                          type="text"
                          id="college"
                          name="college"
                          value={formData.college}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400"
                          placeholder="Enter your college/university name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="yearOfStudy" className="block text-sm font-semibold text-gray-700 mb-2">
                          Year of Study
                        </label>
                        <select
                          id="yearOfStudy"
                          name="yearOfStudy"
                          value={formData.yearOfStudy}
                          onChange={handleInputChange}
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
                  </div>

                  {/* Location Information */}
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Location</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400"
                          placeholder="Enter your city"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
                          State
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400"
                          placeholder="Enter your state"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400 resize-none"
                      placeholder="Tell us how we can help you..."
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
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-5 h-5" />
                        Send via WhatsApp
                      </>
                    )}
                  </button>
                </form>
                
                <p className="text-sm text-gray-500 text-center mt-6">
                  Your message will be sent via WhatsApp for faster response
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 animate-float"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div 
            ref={mapHeaderRef}
            className={`text-center mb-12 transition-all duration-1000 ${
              mapHeaderVisible ? 'animate-fade-in-down opacity-100' : 'opacity-0'
            }`}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visit Our <span className="text-blue-800">Location</span>
            </h2>
            <p className="text-lg text-gray-600">
              Find us in the heart of Bangalore, Karnataka
            </p>
          </div>
          
          <div 
            ref={mapRef}
            className={`bg-gray-100 rounded-3xl overflow-hidden shadow-2xl relative group hover:shadow-3xl transition-shadow duration-500 ${
              mapVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
            }`}
          >
            <div className="aspect-video w-full relative overflow-hidden">
              {/* OpenStreetMap with Bangalore location */}
              {/* Coordinates: 12.9716° N, 77.5946° E (Bangalore city center) */}
              {/* The marker parameter places a pin that moves with the map when you pan/drag */}
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.5746%2C12.9616%2C77.6146%2C12.9816&layer=mapnik&marker=12.9716%2C77.5946"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Screw Systems - Bangalore Office Location"
                className="rounded-3xl"
              />
            </div>
          </div>
          
          <div className="text-center mt-8 animate-fade-in">
            <p className="text-gray-600 mb-4">
              Located in the tech hub of Bangalore with easy access to public transportation and major business districts
            </p>
            <a 
              href="https://www.google.com/maps/search/Bangalore+Karnataka+560001"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-xl group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-shimmer"></span>
              <span className="relative z-10 flex items-center">
                <MapPin className="w-5 h-5 mr-2 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                Open in Google Maps
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <MessageCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Quick Help?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Send us a WhatsApp message and get instant support from our team
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="group bg-white hover:bg-blue-50 text-blue-800 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center mx-auto"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Message Us Now
            </button>
            
            <div className="flex items-center justify-center mt-8 space-x-8 text-blue-100">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}