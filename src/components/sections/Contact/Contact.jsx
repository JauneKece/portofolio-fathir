// src/components/sections/Contact/Contact.jsx
import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import Card from '../../ui/Card/Card';
import Button from '../../ui/Button/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '6285893650200'; // Ganti dengan nomor WhatsApp Anda
    const message = `Halo, perkenalkan nama saya ${formData.name} (${formData.email}). Saya ingin menghubungi Anda melalui website portfolio. Berikut pesan saya: (${formData.message}) Terima kasih.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-3 sm:px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-slate-800">Get In Touch</h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg">Let's collaborate on your next project</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <Card className="p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-slate-800">Contact Information</h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-slate-800 text-sm sm:text-base">Email</p>
                    <p className="text-slate-600 text-xs sm:text-sm break-all">fathirdwi28@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Github className="text-white" size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-slate-800 text-sm sm:text-base">GitHub</p>
                    <p className="text-slate-600 text-xs sm:text-sm">JauneKece</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Linkedin className="text-white" size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-slate-800 text-sm sm:text-base">LinkedIn</p>
                    <p className="text-slate-600 text-xs sm:text-sm">@FathirDwiAssyawal</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <div className="bg-gradient-to-r from-slate-700 to-slate-800 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Available for</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-xs sm:text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Full-time opportunities</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Freelance projects</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Consulting</span>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="p-4 sm:p-6 md:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-slate-800">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-slate-700 font-medium mb-2 text-sm sm:text-base">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm sm:text-base"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-slate-700 font-medium mb-2 text-sm sm:text-base">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm sm:text-base"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-slate-700 font-medium mb-2 text-sm sm:text-base">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              
              <Button 
                type="submit"
                variant="secondary"
                className="w-full"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;