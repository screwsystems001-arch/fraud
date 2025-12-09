import React from 'react';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import GetSeatForm from './components/GetSeatForm';
import GetSeatModal from './components/GetSeatModal';
import Footer from './components/Footer';
import MobileStickyCTA from './components/MobileStickyCTA';
import AboutPage from './components/AboutPage';
import CoursesPage from './components/CoursesPage';
import ContactPage from './components/ContactPage';
import CareerPage from './components/CareerPage';
import AdminPanel from './components/AdminPanel';
import SEO from './components/SEO';
import LoginModal from './components/LoginModal';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'courses' | 'contact' | 'career' | 'admin'>('home');
  const [isGetSeatModalOpen, setIsGetSeatModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const openGetSeatModal = () => {
    setIsGetSeatModalOpen(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'courses':
        return <CoursesPage />;
      case 'contact':
        return <ContactPage />;
      case 'career':
        return <CareerPage onRequireLogin={() => setIsLoginModalOpen(true)} />;
      case 'admin':
        return <AdminPanel />;
      default:
        return (
          <>
            <Hero onGetSeatClick={openGetSeatModal} />
            <About />
            <Courses />
            <GetSeatForm />
          </>
        );
    }
  };

  // SEO configuration based on current page
  const getSEOConfig = () => {
    switch (currentPage) {
      case 'about':
        return {
          title: 'About Us - Screw Systems Tech | Screw Systems Engineering Development & Consulting Company',
          description: 'Learn about Screw Systems Tech (Screw Systems) - a leading engineering development and consulting company. We specialize in software development, engineering consultancy, and technical consulting services.',
          keywords: 'about screw systems, about screw systems tech, screws system about, screw systems engineering company, screw systems development company, screw systems consultancy company, Bangalore engineering services',
          url: 'https://screwsystems.tech/about'
        };
      case 'courses':
        return {
          title: 'Our Services - Screw Systems Tech | Screw Systems Software Development & Engineering Consultancy',
          description: 'Explore Screw Systems Tech (Screw Systems) professional services: Software Development, Engineering Consultancy, System Design & Architecture, Technical Consulting, Project Management, and Quality Assurance.',
          keywords: 'screw systems services, screw systems tech services, screws system services, engineering services, software development services, engineering consultancy, system design, technical consulting, project management, QA services',
          url: 'https://screwsystems.tech/services'
        };
      case 'contact':
        return {
          title: 'Contact Us - Screw Systems Tech | Screw Systems Engineering Services Contact',
          description: 'Contact Screw Systems Tech (Screw Systems) for engineering development and consulting services. Reach out via email, phone, or WhatsApp. Located in Bangalore, Karnataka, India.',
          keywords: 'contact screw systems, contact screw systems tech, screws system contact, engineering services contact, Bangalore engineering company, screw systems consultancy contact',
          url: 'https://screwsystems.tech/contact'
        };
      case 'career':
        return {
          title: 'Careers & Internships - Screw Systems Tech | Screw Systems Join Our Team',
          description: 'Join Screw Systems Tech (Screw Systems)! Explore career opportunities and internships in software development, engineering consultancy, AI, web development, data analytics, and more.',
          keywords: 'careers screw systems, careers screw systems tech, screws system careers, engineering jobs, software development jobs, internships, fresher opportunities, Bangalore jobs, screw systems jobs',
          url: 'https://screwsystems.tech/career'
        };
      case 'admin':
        return {
          title: 'Admin - Internship Enquiries',
          description: 'Admin panel for viewing internship enquiries submitted via the career page.',
          keywords: 'admin, enquiries, internship, screw systems',
          url: 'https://screwsystems.tech/admin'
        };
      default:
        return {
          title: 'Screw Systems Tech - Professional Engineering Development & Consulting Services | Screw Systems',
          description: 'Screw Systems Tech (Screw Systems) is a leading engineering development and consulting company offering software development, engineering consultancy, system design, and technical consulting services.',
          keywords: 'screw systems, screw systems tech, screws system, screw systems engineering, screw systems development, screw systems consultancy, screw systems tech services, screw systems software, screw systems consulting, engineering development, software development, engineering consultancy, technical consulting, system design, engineering services, development company, consultancy services',
          url: 'https://screwsystems.tech/'
        };
    }
  };

  const seoConfig = getSEOConfig();

  return (
    <>
      <SEO {...seoConfig} />
      <div className="min-h-screen font-sans">
        {/* Navigation */}
        <Navigation 
          currentPage={currentPage} 
          onPageChange={setCurrentPage}
          onOpenLogin={() => setIsLoginModalOpen(true)}
        />
        
        {/* Main Content */}
        <main className="page-transition-enter-active">
          {renderPage()}
        </main>
        
        {/* Get Seat Modal */}
        <GetSeatModal 
          isOpen={isGetSeatModalOpen} 
          onClose={() => setIsGetSeatModalOpen(false)} 
        />
        
        {/* Footer */}
        <Footer />
        
        {/* Mobile Sticky CTA */}
        <MobileStickyCTA onGetSeatClick={openGetSeatModal} />
      </div>

      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSuccess={() => setIsLoginModalOpen(false)}
        title="Sign up or login"
      />
    </>
  );
}

export default App;