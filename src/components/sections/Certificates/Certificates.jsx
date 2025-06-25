// src/components/sections/Certificates/Certificates.jsx
import React from 'react';
import { ExternalLink } from 'lucide-react';
import Card from '../../ui/Card/Card';
import { certificates } from '../../../data/certificatesData';

const Certificates = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-slate-800">Certificates</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-6 text-lg">Professional certifications and achievements</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <Card key={cert.id} className="group">
              <div className="relative">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {cert.date}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-red-600 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-slate-600 font-medium mb-4">{cert.issuer}</p>
                
                <div className="flex items-center justify-between">
                  <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    Verified
                  </span>
                  <button className="text-red-500 hover:text-red-700 font-medium text-sm flex items-center space-x-1">
                    <ExternalLink size={16} />
                    <span>View</span>
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-3xl shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-slate-800">Continuous Learning</h3>
            <p className="text-slate-600 mb-6">
              I'm committed to staying updated with the latest technologies and industry best practices. 
              Currently pursuing additional certifications in cloud architecture and AI/ML.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="bg-white px-4 py-2 rounded-full shadow-md">
                <span className="text-slate-700 font-medium">🎯 Next: AI/ML Certification</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow-md">
                <span className="text-slate-700 font-medium">📚 Learning: Kubernetes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;