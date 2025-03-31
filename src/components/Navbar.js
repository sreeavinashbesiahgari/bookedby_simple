import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navigation = [
    { name: 'Home', href: '#home', path: '/' },
    { name: 'Features', href: '#features', path: '/' },
    { name: 'Pricing', href: '#pricing', path: '/' },
    { name: 'About Us', href: '#about', path: '/' },
    { name: 'Contact', href: '#contact', path: '/' },
  ];

  const handleNavigation = (e, item) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu after clicking

    if (location.pathname !== item.path) {
      // If we're not on the home page, navigate to home page first
      navigate(item.path, {
        state: { scrollTo: item.href }
      });
    } else {
      // If we're already on the home page, just scroll to the section
      const element = document.querySelector(item.href);
      if (element) {
        const navbarHeight = 64;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleGetStarted = (e) => {
    e.preventDefault();
    setIsOpen(false);
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <a 
                href="/"
                onClick={(e) => handleNavigation(e, { href: '#home', path: '/' })}
                className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors duration-200"
              >
                BookedBy
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item)}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-primary-600 transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button 
              onClick={handleGetStarted}
              className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transform hover:scale-105 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              {location.pathname === '/login' ? 'Back to Home' : 'Get Started'}
            </button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavigation(e, item)}
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <button 
              onClick={handleGetStarted}
              className="w-full mt-4 bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transform hover:scale-105 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              {location.pathname === '/login' ? 'Back to Home' : 'Get Started'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 