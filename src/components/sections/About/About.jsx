// src/components/sections/About/About.jsx
import React, { useState, useEffect } from 'react';
import Card from '../../ui/Card/Card';
import AnimatedCounter from '../../ui/AnimatedCounter/AnimatedCounter';
import Badge from '../../ui/Badge/Badge';
import { skills, experience } from '../../../data/skillsData';
import { Code2, Zap, Award, Target, Sparkles, ChevronDown } from 'lucide-react';

const About = () => {
  const [expandedExp, setExpandedExp] = useState(null);
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

  // Core Skills
  const coreSkills = [
    { name: 'Frontend Web', icon: '⚛️' },
    { name: 'Flutter & Mobile Dev', icon: '📱' },
    { name: 'UI/UX Design', icon: '🎨' },
    { name: 'Database & Backend Basics', icon: '💾' },
    { name: 'Git & Version Control', icon: '📦' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-4 pb-2 px-4 overflow-hidden">
      {/* Hero Header Inside About Me */}
      <div id="home" className="relative flex flex-col items-center justify-center pt-8 pb-16 sm:pb-24 scroll-mt-20">
        {/* Floating Elements Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-red-500 rounded-full opacity-10 blur-3xl animate-pulse"
            style={{
              top: `${mousePosition.y * 30}%`,
              left: `${mousePosition.x * 30}%`,
              transition: 'all 0.3s ease-out'
            }}
          ></div>
          <div 
            className="absolute w-60 h-60 sm:w-80 sm:h-80 bg-orange-500 rounded-full opacity-5 blur-3xl"
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
            <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 mx-auto relative group">
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
            <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-10 sm:w-14 h-10 sm:h-14 bg-red-500 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-8 sm:w-10 h-8 sm:h-10 bg-orange-400 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '0.3s' }}></div>
          </div>

          {/* Large Name Header */}
          <div className="mb-3 sm:mb-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2 sm:mb-4 bg-gradient-to-r from-slate-800 via-red-950 to-slate-900 bg-clip-text text-transparent leading-[1.15]">
              Fathir Dwi Assyawal
            </h1>
          </div>

          {/* Typing Subtitle */}
          <div className="mb-6 sm:mb-8 min-h-8 sm:min-h-10">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-red-600 tracking-wide flex items-center justify-center">
              {displayText}
              <span className="animate-pulse ml-1 text-slate-800">|</span>
            </p>
          </div>

          {/* Subtitle Badges */}
          <div className="mb-8 space-y-3">
            <div className="flex justify-center items-center space-x-2 sm:space-x-3 flex-wrap gap-2">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-md text-xs sm:text-sm font-semibold text-slate-700">
                <Sparkles className="text-red-500 flex-shrink-0" size={16} />
                <span>Creative Solutions</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-md text-xs sm:text-sm font-semibold text-slate-700">
                <Zap className="text-orange-500 flex-shrink-0" size={16} />
                <span>Fast & Responsive</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-md text-xs sm:text-sm font-semibold text-slate-700">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for work</span>
              </div>
            </div>
          </div>

          {/* Scroll Down CTA */}
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>Lihat Portofolio</span>
            <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <div id="detailed-about" className="max-w-6xl mx-auto pt-8 scroll-mt-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-800">Tentang Saya</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">Crafting digital experiences with passion and precision</p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <AnimatedCounter end={8} label="Portfolio Projects" />
          <AnimatedCounter end={15} label="Technologies" />
          <AnimatedCounter end={5} label="Certifications" suffix="+" />
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Story */}
          <div className="space-y-6">
            <Card className="p-8 border-l-4 border-red-500 hover:shadow-2xl transition-all duration-500">
              <div className="flex items-start space-x-4">
                <Target className="text-red-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">My Story</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    I'm a developer fresh graduate passionate about creating beautiful and functional digital experiences across platforms. My journey started with exploring both mobile and web development during SMK, and I've developed a strong interest in crafting responsive interfaces for both mobile apps and modern web applications.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    With expertise in frontend development (React, Flutter), UI/UX design, and a foundational understanding of backend systems, I'm committed to building intuitive, user-friendly applications. I love exploring how users interact with technology and am always eager to learn and grow.
                  </p>
                </div>
              </div>
            </Card>

            {/* What I Do */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center hover:shadow-xl transition-all">
                <Code2 className="text-blue-500 mx-auto mb-3" size={32} />
                <h4 className="font-bold text-slate-800 mb-2">Web Frontend</h4>
                <p className="text-sm text-slate-600">React, responsive design</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-xl transition-all">
                <Zap className="text-cyan-500 mx-auto mb-3" size={32} />
                <h4 className="font-bold text-slate-800 mb-2">Mobile Apps</h4>
                <p className="text-sm text-slate-600">Flutter & React Native</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-xl transition-all">
                <Award className="text-purple-500 mx-auto mb-3" size={32} />
                <h4 className="font-bold text-slate-800 mb-2">UI/UX Design</h4>
                <p className="text-sm text-slate-600">Beautiful, intuitive interfaces</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-xl transition-all">
                <Target className="text-green-500 mx-auto mb-3" size={32} />
                <h4 className="font-bold text-slate-800 mb-2">Clean Code</h4>
                <p className="text-sm text-slate-600">Maintainable solutions</p>
              </Card>
            </div>
          </div>

          {/* Right Side - Skills */}
          <div className="space-y-6">
            <Card className="p-8 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl font-bold mb-8 text-slate-800">Technical Skills</h3>
              <div className="space-y-3">
                {coreSkills.map((skill) => (
                  <div key={skill.name} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg hover:from-blue-50 hover:to-cyan-50 transition-colors">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-slate-700 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-slate-50 to-slate-100">
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="primary" size="sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-4xl font-bold mb-8 text-slate-800">Experience</h3>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <Card 
                key={exp.id}
                className={`p-6 cursor-pointer transition-all duration-300 ${
                  expandedExp === index ? 'ring-2 ring-red-500' : ''
                }`}
                onClick={() => setExpandedExp(expandedExp === index ? null : index)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-grow">
                    <div className="flex items-center space-x-3 mb-2">
                      <Badge variant="primary" size="sm">
                        {exp.period}
                      </Badge>
                      <h4 className="font-bold text-lg text-slate-800">{exp.title}</h4>
                    </div>
                    <p className="text-red-600 font-semibold mb-2">{exp.company}</p>
                    {expandedExp === index && (
                      <p className="text-slate-600 leading-relaxed mt-4 animate-fade-in">
                        {exp.description}
                      </p>
                    )}
                  </div>
                  <div className={`text-slate-400 transition-transform duration-300 ${
                    expandedExp === index ? 'rotate-180' : ''
                  }`}>
                    ▼
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default About;