import React, { useState, useEffect } from 'react';
import Navigation from './components/common/Navigation/Navigation';
import Home from './components/sections/Home/Home';
import About from './components/sections/About/About';
import Portfolio from './components/sections/Portfolio/Portfolio';
import Certificates from './components/sections/Certificates/Certificates';
import Contact from './components/sections/Contact/Contact';
import Footer from './components/common/Footer/Footer';
import { useActiveSection } from './hooks/useActiveSection';

function App() {
  const { activeSection, setActiveSection } = useActiveSection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return <Home setActiveSection={setActiveSection} />;
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'certificates':
        return <Certificates />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <Navigation 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <main className={`pt-20 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {renderSection()}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;