// src/components/common/Footer/Footer.jsx
import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors">
              <Mail size={20} />
            </a>
          </div>
          <p className="text-slate-400 mb-2">© 2025 Fathir Dwi Assyawal. All rights reserved.</p>
          <p className="text-slate-500 text-sm">Crafted with ❤️ using React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;