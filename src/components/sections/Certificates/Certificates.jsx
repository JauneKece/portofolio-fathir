// src/components/sections/Certificates/Certificates.jsx
import React from 'react';
import { ExternalLink, Award, TrendingUp, Zap } from 'lucide-react';
import Card from '../../ui/Card/Card';
import Badge from '../../ui/Badge/Badge';
import AnimatedCounter from '../../ui/AnimatedCounter/AnimatedCounter';
import { certificates } from '../../../data/certificatesData';

const Certificates = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-6xl font-bold mb-6 text-slate-800">Certifications & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-6 text-lg max-w-2xl mx-auto">
            Professional credentials demonstrating my expertise and commitment to continuous learning
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center">
            <Award className="mx-auto mb-4 text-red-500" size={32} />
            <AnimatedCounter end={certificates.length} label="Certifications" />
          </div>
          <div className="text-center">
            <TrendingUp className="mx-auto mb-4 text-orange-500" size={32} />
            <AnimatedCounter end={100} label="Completion Rate" suffix="%" />
          </div>
          <div className="text-center">
            <Zap className="mx-auto mb-4 text-yellow-500" size={32} />
            <AnimatedCounter end={15} label="Skills Verified" />
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card 
                className="group h-full flex flex-col cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-orange-500/0 group-hover:from-red-500/10 group-hover:to-orange-500/10 transition-all duration-500"></div>
                
                <div className="relative overflow-hidden flex-shrink-0">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                    {cert.date}
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col relative z-10">
                  <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-red-600 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-red-500 font-semibold mb-4 text-sm">{cert.issuer}</p>
                  
                  <p className="text-slate-600 text-sm mb-4 flex-grow">
                    Professional certification in {cert.title.toLowerCase()}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" size="sm">
                      ✓ Verified
                    </Badge>
                    <button className="text-red-500 hover:text-red-700 font-semibold text-sm flex items-center space-x-1 transition-colors">
                      <ExternalLink size={16} />
                      <span>View</span>
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Learning Path Section */}
        <Card className="p-12 bg-gradient-to-br from-slate-50 to-slate-100 mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                📚
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Currently Learning</h3>
              <p className="text-slate-600">Advanced Kubernetes & Cloud Architecture</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                🎯
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Next Goal</h3>
              <p className="text-slate-600">AI/ML Specialization Certification</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Commitment</h3>
              <p className="text-slate-600">Continuous professional development</p>
            </div>
          </div>
        </Card>

        {/* Skills Showcase */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">Technical Expertise</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg">
                <span className="text-red-500 font-bold">✓</span>
                <span className="text-slate-700">Full Stack Web Development</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <span className="text-blue-500 font-bold">✓</span>
                <span className="text-slate-700">Mobile App Development</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg">
                <span className="text-green-500 font-bold">✓</span>
                <span className="text-slate-700">Database Design & Optimization</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                <span className="text-yellow-600 font-bold">✓</span>
                <span className="text-slate-700">DevOps & Deployment</span>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">Professional Development</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <p className="font-semibold text-slate-800">Problem Solving</p>
                <p className="text-sm text-slate-600">Creative solutions to complex problems</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <p className="font-semibold text-slate-800">Team Collaboration</p>
                <p className="text-sm text-slate-600">Effective communication and leadership</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <p className="font-semibold text-slate-800">Innovation</p>
                <p className="text-sm text-slate-600">Staying ahead with latest technologies</p>
              </div>
              <div className="border-l-4 border-pink-500 pl-4 py-2">
                <p className="font-semibold text-slate-800">Code Quality</p>
                <p className="text-sm text-slate-600">Best practices and maintainable code</p>
              </div>
            </div>
          </Card>
        </div>
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

export default Certificates;