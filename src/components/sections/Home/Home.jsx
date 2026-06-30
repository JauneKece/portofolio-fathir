// src/components/sections/Home/Home.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Zap, Sparkles } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
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
      <div className="relative z-10 text-center px-3 sm:px-4 max-w-4xl">
        {/* Avatar Circle */}
        <div className="mb-6 sm:mb-8 relative">
          <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 mx-auto relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-spin" style={{ animationDuration: '4s' }}></div>
            
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-white to-slate-50 p-1 shadow-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500 overflow-hidden">
              <img 
                src={process.env.PUBLIC_URL + '/assets/images/pp.jpg'} 
                alt="Fathir Dwi Assyawal" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          
          {/* Orbiting Elements */}
          <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-12 sm:w-16 h-12 sm:h-16 bg-red-500 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-9 sm:w-12 h-9 sm:h-12 bg-orange-400 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute top-1/2 -right-6 sm:-right-8 w-6 sm:w-8 h-6 sm:h-8 bg-amber-300 rounded-full opacity-50 animate-pulse"></div>
        </div>

        {/* Main Text */}
        <div className="mb-4 sm:mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-8 bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent leading-[1.2]">
            Fathir Dwi Assyawal
          </h1>
        </div>

        {/* Typing Text */}
        <div className="mb-8 sm:mb-12 min-h-9 sm:min-h-12">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-600 tracking-wide flex items-center justify-center">
            {displayText}
            <span className="animate-pulse ml-2">|</span>
          </p>
        </div>

        {/* Subtitle with Icons */}
        <div className="mb-8 sm:mb-12 space-y-3 sm:space-y-4">
          <div className="flex justify-center items-center space-x-2 sm:space-x-4 flex-wrap gap-2 sm:gap-3">
            <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow text-sm sm:text-base">
              <Sparkles className="text-red-500 flex-shrink-0" size={16} />
              <span className="text-slate-700 font-semibold">Creative Solutions</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow text-sm sm:text-base">
              <Zap className="text-orange-500 flex-shrink-0" size={16} />
              <span className="text-slate-700 font-semibold">Fast & Responsive</span>
            </div>
          </div>
          
          <div className="flex justify-center items-center space-x-2 bg-white/70 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow w-fit mx-auto text-sm sm:text-base">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-slate-700 font-semibold">Available for work</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-12 sm:mb-16">
          <button 
            onClick={() => navigate('/portfolio')}
            className="group inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-5 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>Explore My Work</span>
            <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform duration-300 hidden sm:inline" />
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