// src/components/sections/Portfolio/Portfolio.jsx
import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import Card from '../../ui/Card/Card';
import Badge from '../../ui/Badge/Badge';
import { portfolioItems } from '../../../data/portfolioData';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-slate-800">My Portfolio</h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in web development, mobile apps, and creative solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${selectedCategory === category
                  ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg scale-105'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:scale-105'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card 
                className="group h-full flex flex-col cursor-pointer" 
                hover={true}
                onClick={() => setSelectedProject(item)}
              >
                <div className="relative overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 sm:h-48 md:h-56 object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 sm:gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto z-10">
                    {item.demoUrl && item.demoUrl !== '#' && (
                      <a 
                        href={item.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white/90 backdrop-blur-sm hover:bg-white text-slate-800 p-2 sm:p-3 rounded-full transition-all transform hover:scale-110 shadow-lg"
                        title="View Demo"
                      >
                        <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                      </a>
                    )}
                    {item.githubUrl && item.githubUrl !== '#' && (
                      <a 
                        href={item.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white/90 backdrop-blur-sm hover:bg-white text-slate-800 p-2 sm:p-3 rounded-full transition-all transform hover:scale-110 shadow-lg"
                        title="GitHub Repository"
                      >
                        <Github size={18} className="sm:w-5 sm:h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-4 sm:p-6 flex-grow flex flex-col">
                  <Badge variant="secondary" size="sm" className="mb-2 sm:mb-3 w-fit">
                    {item.category}
                  </Badge>

                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-slate-800 group-hover:text-red-500 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="bg-gradient-to-r from-amber-50 to-orange-50 text-red-600 px-2 sm:px-3 py-1 rounded-full text-xs font-medium border border-orange-200">
                        {tech}
                      </span>
                    ))}
                    {item.tech.length > 3 && (
                      <span className="text-slate-500 text-xs px-2 sm:px-3 py-1">+{item.tech.length - 3}</span>
                    )}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(item);
                    }}
                    className="mt-4 text-red-500 hover:text-red-600 font-semibold text-sm flex items-center space-x-1 transition-colors"
                  >
                    <span>View Details</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Modal for Project Details */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors z-10 bg-white/80 p-1.5 rounded-full shadow-md"
              >
                <X size={24} />
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-80 object-cover"
              />

              <div className="p-8">
                <Badge variant="primary" size="md" className="mb-4">
                  {selectedProject.category}
                </Badge>

                <h2 className="text-4xl font-bold mb-4 text-slate-800">
                  {selectedProject.title}
                </h2>

                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h3 className="font-bold text-slate-800 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  {selectedProject.demoUrl && selectedProject.demoUrl !== '#' && (
                    <a 
                      href={selectedProject.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity duration-300 flex items-center justify-center space-x-2 shadow-lg"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {selectedProject.githubUrl && selectedProject.githubUrl !== '#' && (
                    <a 
                      href={selectedProject.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 border-2 border-red-500 text-red-500 px-6 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <Github size={18} />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;