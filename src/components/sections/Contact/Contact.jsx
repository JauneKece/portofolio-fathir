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
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-slate-800">Get In Touch</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-6 text-lg">Let's collaborate on your next project</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-6 text-slate-800">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Email</p>
                    <p className="text-slate-600">fathirdwi28@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center">
                    <Github className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">GitHub</p>
                    <p className="text-slate-600">JauneKece</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Linkedin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">LinkedIn</p>
                    <p className="text-slate-600">@FathirDwiAssyawal</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <div className="bg-gradient-to-r from-slate-700 to-slate-800 p-6 rounded-3xl shadow-xl text-white">
              <h3 className="text-xl font-bold mb-4">Available for</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Full-time opportunities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Freelance projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Consulting</span>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-slate-700 font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-slate-700 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-slate-700 font-medium mb-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
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