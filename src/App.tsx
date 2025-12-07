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

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'courses' | 'contact' | 'career'>('home');
  const [isGetSeatModalOpen, setIsGetSeatModalOpen] = useState(false);

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
        return <CareerPage />;
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

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <Navigation 
        currentPage={currentPage} 
        onPageChange={setCurrentPage}
        onGetSeatClick={openGetSeatModal}
      />
      
      {/* Main Content */}
      <div className="page-transition-enter-active">
        {renderPage()}
      </div>
      
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
  );
}

export default App;