import React, { useState, useEffect } from 'react';
import Navigation from './components/common/Navigation/Navigation';
import About from './components/sections/About/About';
import Portfolio from './components/sections/Portfolio/Portfolio';
import Certificates from './components/sections/Certificates/Certificates';
import Footer from './components/common/Footer/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 text-slate-800">
      {/* Top Fixed Navigation */}
      <Navigation 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      {/* Main Single Page Content */}
      <main className={`pt-16 sm:pt-20 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        
        {/* 1. About Me Section (Includes Foto, Nama Besar, Bio, Story, Skills, Experience) */}
        <section id="about" className="relative scroll-mt-20">
          <About />
        </section>

        {/* Divider / Transition Line */}
        <div className="max-w-6xl mx-auto px-4 my-4 sm:my-8">
          <div className="h-px bg-gradient-to-r from-transparent via-orange-300/40 to-transparent"></div>
        </div>

        {/* 2. Portfolio Section */}
        <section id="portfolio" className="relative scroll-mt-20">
          <Portfolio />
        </section>

        {/* Divider / Transition Line */}
        <div className="max-w-6xl mx-auto px-4 my-4 sm:my-8">
          <div className="h-px bg-gradient-to-r from-transparent via-orange-300/40 to-transparent"></div>
        </div>

        {/* 3. Certificates Section */}
        <section id="certificates" className="relative scroll-mt-20">
          <Certificates />
        </section>

      </main>
      
      {/* 4. Footer */}
      <Footer />
    </div>
  );
}

export default App;