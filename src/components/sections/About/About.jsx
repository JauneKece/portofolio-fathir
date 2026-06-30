// src/components/sections/About/About.jsx
import React, { useState } from 'react';
import Card from '../../ui/Card/Card';
import AnimatedCounter from '../../ui/AnimatedCounter/AnimatedCounter';
import Badge from '../../ui/Badge/Badge';
import { skills, experience } from '../../../data/skillsData';
import { Code2, Zap, Award, Target } from 'lucide-react';

const About = () => {
  const [expandedExp, setExpandedExp] = useState(null);

  // Core Skills
  const coreSkills = [
    { name: 'Frontend Web', icon: '⚛️' },
    { name: 'Flutter & Mobile Dev', icon: '📱' },
    { name: 'UI/UX Design', icon: '🎨' },
    { name: 'Database & Backend Basics', icon: '💾' },
    { name: 'Git & Version Control', icon: '📦' }
  ];

  return (
    <div className="min-h-screen py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-6 text-slate-800">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-6 text-lg">Crafting digital experiences with passion and precision</p>
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
        <div className="mb-20">
          <h3 className="text-4xl font-bold mb-12 text-slate-800">Experience</h3>
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

        {/* Decorative Elements */}
        <div className="relative h-32">
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-red-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-orange-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
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