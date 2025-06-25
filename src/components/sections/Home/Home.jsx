// src/components/sections/Home/Home.jsx
import React from 'react';
import { User, ChevronDown } from 'lucide-react';
import Button from '../../ui/Button/Button';

const Home = ({ setActiveSection }) => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-100 opacity-20"></div>
      <div className="text-center z-10 px-4">
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-amber-200 to-orange-300 p-1 shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <User size={80} className="text-slate-600" />
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-500 rounded-full animate-pulse opacity-20"></div>
        </div>
        <h1 className="text-5xl font-bold mb-4 leading-[1.25] bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
          Fathir Dwi Assyawal
        </h1>
        <p className="text-2xl mb-8 text-slate-600 font-light tracking-wide">
          Web & Software Developer
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
          <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-slate-700">Available for work</span>
          </div>
        </div>
        
        <Button 
          onClick={() => setActiveSection('about')}
          className="flex items-center space-x-2 mx-auto"
        >
          <span>Explore My Work</span>
          <ChevronDown size={20} />
        </Button>
      </div>
      
      {/* Animated Elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-red-500 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-32 right-32 w-6 h-6 border-2 border-slate-400 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-1/2 left-10 w-8 h-8 bg-amber-300 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default Home;