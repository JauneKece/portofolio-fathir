// src/components/common/Navigation/Navigation.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, Briefcase, Award } from 'lucide-react';

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();
  
  // Determine active section from current path
  const getActiveSection = () => {
    const path = location.pathname;
    if (path === '/' || path === '/home') return 'home';
    if (path === '/about') return 'about';
    if (path === '/portfolio') return 'portfolio';
    if (path === '/certificates') return 'certificates';
    return 'home';
  };
  
  const activeSection = getActiveSection();
  
  const sections = [
    { id: 'home', path: '/', label: 'Home', icon: Home },
    { id: 'about', path: '/about', label: 'About Me', icon: User },
    { id: 'portfolio', path: '/portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'certificates', path: '/certificates', label: 'Certificates', icon: Award }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 overflow-visible bg-white/80 backdrop-blur-lg shadow-lg">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group">
            <div className="relative w-14 h-14 flex items-center justify-center">
              {/* Outer vintage border */}
              <div className="absolute inset-0 rounded-full border-2 border-red-600 group-hover:border-red-700 transition-colors duration-300" />
              
              {/* Decorative dashes - top */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1.5 flex gap-1">
                <div className="w-1 h-0.5 bg-red-500 rounded-full" />
                <div className="w-1 h-0.5 bg-red-500 rounded-full" />
                <div className="w-1 h-0.5 bg-red-500 rounded-full" />
              </div>
              
              {/* Decorative dashes - bottom */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1.5 flex gap-1">
                <div className="w-1 h-0.5 bg-red-500 rounded-full" />
                <div className="w-1 h-0.5 bg-red-500 rounded-full" />
                <div className="w-1 h-0.5 bg-red-500 rounded-full" />
              </div>
              
              {/* Main background */}
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-red-700 to-red-800 group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300 shadow-md" />
              
              {/* Inner cream circle for contrast */}
              <div className="absolute inset-2.5 rounded-full bg-amber-50 opacity-90" />
              
              {/* Center monogram */}
              <div className="relative z-10 flex items-center justify-center">
                <span className="text-red-700 font-serif font-black text-xl tracking-tighter">F</span>
              </div>
              
              {/* Corner accent marks */}
              <div className="absolute top-2 right-2 text-red-500 text-xs font-bold">·</div>
              <div className="absolute bottom-2 left-2 text-red-500 text-xs font-bold">·</div>
            </div>
            
            <div className="hidden xs:block">
              <span className="block text-xs uppercase text-red-700 tracking-[0.24em] font-bold group-hover:text-red-600 transition-colors">Fathir Dwi</span>
              <span className="block text-base sm:text-lg font-serif font-black text-slate-900 group-hover:text-red-700 transition-colors">Assyawal</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <Link
                  key={section.id}
                  to={section.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === section.id 
                      ? 'bg-red-500 text-white shadow-lg' 
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{section.label}</span>
                </Link>
              );
            })}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-3xl z-[60]">
            <div className="p-4 space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <Link
                    key={section.id}
                    to={section.path}
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 block ${
                      activeSection === section.id 
                        ? 'bg-red-500 text-white' 
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{section.label}</span>
                  </Link>
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