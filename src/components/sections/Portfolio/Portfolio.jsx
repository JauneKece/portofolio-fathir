// src/components/sections/Portfolio/Portfolio.jsx
import React from 'react';
import { ExternalLink } from 'lucide-react';
import Card from '../../ui/Card/Card';
import Button from '../../ui/Button/Button';
import { portfolioItems } from '../../../data/portfolioData';

const Portfolio = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-slate-800">My Portfolio</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-6 text-lg">A collection of projects that showcase my skills and creativity</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="group">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <button className="bg-white text-slate-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-red-500 hover:text-white transition-colors flex items-center space-x-2">
                      <ExternalLink size={16} />
                      <span>View Project</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <span className="bg-gradient-to-r from-red-100 to-orange-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-800">{item.title}</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{item.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span key={tech} className="bg-slate-100 text-slate-700 px-2 py-1 rounded-md text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button>View All Projects</Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;