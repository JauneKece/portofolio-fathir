// src/components/common/Footer/Footer.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: 'https://github.com/JauneKece', label: 'GitHub', color: 'hover:bg-gray-700' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/fathir-dwi-assyawal-a88375337/', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: Twitter, url: 'https://x.com/FathirDwii', label: 'Twitter', color: 'hover:bg-sky-600' },
    { icon: Mail, url: 'mailto:fathirdwi28@gmail.com', label: 'Email', color: 'hover:bg-red-600' }
  ];

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Certificates', path: '/certificates' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-red-500 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="col-span-full sm:col-span-1">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <Code2 className="text-red-500" size={24} />
              <span className="text-xl sm:text-2xl font-bold">Fathir</span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Frontend & Mobile Developer passionate about creating beautiful, intuitive digital experiences across platforms.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-white">Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-slate-400 hover:text-red-500 transition-colors duration-300 text-xs sm:text-sm cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-white">Focus Areas</h3>
            <ul className="space-y-2 text-slate-400 text-xs sm:text-sm">
              <li className="hover:text-red-500 transition-colors cursor-pointer">Frontend Web</li>
              <li className="hover:text-red-500 transition-colors cursor-pointer">Mobile Development</li>
              <li className="hover:text-red-500 transition-colors cursor-pointer">UI/UX Design</li>
              <li className="hover:text-red-500 transition-colors cursor-pointer">Clean Code</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-white">Get in Touch</h3>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-400">
              <p>📧 fathirdwi28@gmail.com</p>
              <p>📍 Indonesia</p>
              <p className="text-xs text-slate-500 mt-3 sm:mt-4">
                Always open to new projects and collaboration opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-8 sm:my-10"></div>

        {/* Social Links & Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Social Links */}
          <div className="flex space-x-3 sm:space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className={`w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-slate-400 text-sm space-y-1">
            <p className="flex items-center justify-center md:justify-end space-x-2">
              <span>© {currentYear} Fathir Dwi Assyawal. All rights reserved.</span>
            </p>
            <p className="flex items-center justify-center md:justify-end space-x-1">
              <span>Crafted with</span>
              <Heart className="text-red-500 animate-pulse" size={14} />
              <span>using React & Tailwind CSS</span>
            </p>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl"
          title="Back to top"
        >
          ↑
        </button>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }

        .animate-pulse {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;