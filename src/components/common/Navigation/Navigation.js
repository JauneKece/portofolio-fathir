// src/components/common/Navigation/Navigation.js
import React, { useState, useEffect } from 'react';
import { Menu, X, User, Briefcase, Award } from 'lucide-react';

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = [
    { id: 'detailed-about', label: 'About Me', icon: User },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'certificates', label: 'Sertifikat', icon: Award }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky navbar shadow styling on scroll
      setIsScrolled(window.scrollY > 20);

      // Section active detection based on scroll position
      const scrollPosition = window.scrollY + 200;
      
      const detailedAboutElem = document.getElementById('detailed-about');
      const portfolioElem = document.getElementById('portfolio');
      const certificatesElem = document.getElementById('certificates');

      if (certificatesElem && scrollPosition >= certificatesElem.offsetTop) {
        setActiveSection('certificates');
      } else if (portfolioElem && scrollPosition >= portfolioElem.offsetTop) {
        setActiveSection('portfolio');
      } else if (detailedAboutElem && scrollPosition >= detailedAboutElem.offsetTop) {
        setActiveSection('detailed-about');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // height of fixed navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' 
        : 'bg-white/70 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center">
              {/* Outer vintage border */}
              <div className="absolute inset-0 rounded-full border-2 border-red-600 group-hover:border-red-700 transition-colors duration-300" />
              
              {/* Main background */}
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-red-600 to-orange-600 group-hover:from-red-500 group-hover:to-orange-500 transition-all duration-300 shadow-md" />
              
              {/* Center monogram */}
              <div className="relative z-10 flex items-center justify-center">
                <span className="text-white font-serif font-black text-lg sm:text-xl tracking-tighter">F</span>
              </div>
            </div>
            
            <div>
              <span className="block text-[10px] sm:text-xs uppercase text-red-600 tracking-[0.2em] font-bold group-hover:text-red-500 transition-colors">Fathir Dwi</span>
              <span className="block text-sm sm:text-base font-serif font-black text-slate-900 group-hover:text-red-600 transition-colors leading-tight">Assyawal</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-md scale-105' 
                      : 'text-slate-700 hover:bg-slate-100/80 hover:text-red-500'
                  }`}
                >
                  <Icon size={16} />
                  <span>{section.label}</span>
                </button>
              );
            })}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-xl border-t border-slate-100 py-4 px-4 z-[60] animate-fade-in">
            <div className="space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium text-base transition-all duration-300 text-left ${
                      isActive 
                        ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-md' 
                        : 'text-slate-700 hover:bg-slate-50 hover:text-red-500'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{section.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;