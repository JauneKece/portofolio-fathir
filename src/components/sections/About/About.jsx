// src/components/sections/About/About.jsx
import React from 'react';
import Card from '../../ui/Card/Card';
import { skills, experience } from '../../../data/skillsData';

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-slate-800">About Me</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-8 border-l-4 border-red-500">
              <h3 className="text-2xl font-bold mb-4 text-slate-800">My Story</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that blend vintage aesthetics with modern functionality. My journey started with a love for classic design principles and evolved into mastering cutting-edge technologies.
              </p>
              <p className="text-slate-600 leading-relaxed">
                I believe in creating experiences that are not just functional, but also emotionally engaging and visually stunning.
              </p>
            </Card>
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Skills & Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div key={skill} className="bg-white px-4 py-2 rounded-full text-center shadow-md hover:shadow-lg transition-shadow">
                    <span className="text-slate-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-600 to-slate-800 p-8 rounded-3xl shadow-2xl text-white">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Experience</h3>
                <div className="w-16 h-1 bg-red-500 rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.id} className={`border-l-2 border-${exp.color}-500 pl-4`}>
                    <h4 className="font-bold text-lg">{exp.title}</h4>
                    <p className="text-amber-200">{exp.company} • {exp.period}</p>
                    <p className="text-gray-300 text-sm mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-amber-300 rounded-full opacity-30 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;