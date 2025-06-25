// src/components/common/Navigation/Navigation.jsx
import React from 'react';
import { Menu, X, User, Briefcase, Award, Mail } from 'lucide-react';

const Navigation = ({ activeSection, setActiveSection, isMenuOpen, setIsMenuOpen }) => {
  const sections = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">FDA</span>
            </div>
            <span className="text-xl font-bold text-slate-800">Fathir Dwi Assyawal</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    activeSection === section.id 
                      ? 'bg-red-500 text-white shadow-lg' 
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{section.label}</span>
                </button>
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
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-3xl">
            <div className="p-4 space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeSection === section.id 
                        ? 'bg-red-500 text-white' 
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="font-medium">{section.label}</span>
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