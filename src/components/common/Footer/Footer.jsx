// src/components/common/Footer/Footer.jsx
import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: 'https://github.com/JauneKece', label: 'GitHub', color: 'hover:bg-gray-700' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/fathir-dwi-assyawal-a88375337/', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: Twitter, url: 'https://x.com/FathirDwii', label: 'Twitter', color: 'hover:bg-sky-600' },
    { icon: Mail, url: 'mailto:fathirdwi28@gmail.com', label: 'Email', color: 'hover:bg-red-600' }
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Certificates', href: '#certificates' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-md:1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="text-red-500" size={28} />
              <span className="text-2xl font-bold">Fathir</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Full Stack Developer creating innovative digital solutions with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-slate-400 hover:text-red-500 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="hover:text-red-500 transition-colors cursor-pointer">Web Development</li>
              <li className="hover:text-red-500 transition-colors cursor-pointer">Mobile Apps</li>
              <li className="hover:text-red-500 transition-colors cursor-pointer">UI/UX Design</li>
              <li className="hover:text-red-500 transition-colors cursor-pointer">Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Get in Touch</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <p>📧 fathirdwi28@gmail.com</p>
              <p>📍 Indonesia</p>
              <p className="text-xs text-slate-500 mt-4">
                Always open to new projects and collaboration opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-8"></div>

        {/* Social Links & Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Social Links */}
          <div className="flex space-x-4 mb-6 md:mb-0">
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