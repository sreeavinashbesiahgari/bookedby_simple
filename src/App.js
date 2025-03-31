import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';

// ScrollToTop component to handle scroll restoration
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.querySelector(location.state.scrollTo);
      if (element) {
        const navbarHeight = 64;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      // Clear the scrollTo state after scrolling
      window.history.replaceState({}, document.title);
    } else {
      // If no scrollTo state, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

// Wrap the main content in a component to use hooks
const MainContent = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <main>
            <Hero />
            <Features />
            <div id="about" className="bg-white py-16 lg:py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">About Us</h2>
                  <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Simplifying Scheduling for Everyone
                  </p>
                  <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                    We're on a mission to make scheduling and booking appointments easier for businesses and their customers.
                    Our platform provides intuitive tools that save time and reduce scheduling headaches.
                  </p>
                </div>
              </div>
            </div>
            <Pricing />
            <Testimonials />
            <Contact />
          </main>
        } />
      </Routes>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter basename="/BookedBy_Simple">
      <MainContent />
    </BrowserRouter>
  );
}

export default App; 