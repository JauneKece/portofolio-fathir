// src/components/sections/Home/Home.jsx
import React, { useState, useEffect } from 'react';
import { ChevronDown, Zap, Sparkles } from 'lucide-react';

const Home = ({ setActiveSection }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  const fullText = 'Mobile & Web Developer';
  
  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullText[textIndex]);
        setTextIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [textIndex]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50"></div>
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-full h-full" style={{
          backgroundImage: 'linear-gradient(rgba(100,116,139,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(100,116,139,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'moveGrid 20s linear infinite'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-red-500 rounded-full opacity-10 blur-3xl animate-pulse"
          style={{
            top: `${mousePosition.y * 30}%`,
            left: `${mousePosition.x * 30}%`,
            transition: 'all 0.3s ease-out'
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-orange-500 rounded-full opacity-5 blur-3xl"
          style={{
            bottom: `${mousePosition.y * 20}%`,
            right: `${mousePosition.x * 20}%`,
            transition: 'all 0.3s ease-out',
            animation: 'float 6s ease-in-out infinite'
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        {/* Avatar Circle */}
        <div className="mb-8 relative">
          <div className="w-72 h-72 mx-auto relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-spin" style={{ animationDuration: '4s' }}></div>
            
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-white to-slate-50 p-1 shadow-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden">
              <img 
                src={process.env.PUBLIC_URL + '/assets/images/pp.jpg'} 
                alt="Profile Picture" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          
          {/* Orbiting Elements */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-500 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-orange-400 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute top-1/2 -right-8 w-8 h-8 bg-amber-300 rounded-full opacity-50 animate-pulse"></div>
        </div>

        {/* Main Text */}
        <div className="mb-6">
          <h1 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent leading-[1.2]">
            Fathir Dwi Assyawal
          </h1>
        </div>

        {/* Typing Text */}
        <div className="mb-12 min-h-12">
          <p className="text-3xl md:text-4xl font-bold text-slate-600 tracking-wide flex items-center justify-center">
            {displayText}
            <span className="animate-pulse ml-2">|</span>
          </p>
        </div>

        {/* Subtitle with Icons */}
        <div className="mb-12 space-y-4">
          <div className="flex justify-center items-center space-x-4 flex-wrap">
            <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-md px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <Sparkles className="text-red-500" size={18} />
              <span className="text-slate-700 font-semibold">Creative Solutions</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-md px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <Zap className="text-orange-500" size={18} />
              <span className="text-slate-700 font-semibold">Fast & Responsive</span>
            </div>
          </div>
          
          <div className="flex justify-center items-center space-x-2 bg-white/70 backdrop-blur-md px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow w-fit mx-auto">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-slate-700 font-semibold">Available for work</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-16">
          <button 
            onClick={() => setActiveSection('portfolio')}
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>Explore My Work</span>
            <ChevronDown size={24} className="group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-30px) translateX(-10px); }
          75% { transform: translateY(-10px) translateX(15px); }
        }

        @keyframes moveGrid {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-spin {
          animation: spin 4s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Home;