// src/components/sections/Certificates/Certificates.jsx
import React, { useState } from 'react';
import { ExternalLink, Award, TrendingUp, X } from 'lucide-react';
import Card from '../../ui/Card/Card';
import Badge from '../../ui/Badge/Badge';
import AnimatedCounter from '../../ui/AnimatedCounter/AnimatedCounter';
import { certificates } from '../../../data/certificatesData';

const Certificates = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [activeSide, setActiveSide] = useState('front');

  const openModal = (cert) => {
    setSelectedCertificate(cert);
    setActiveSide('front');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
    setActiveSide('front');
  };

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-3 sm:px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-slate-800">Certifications & Achievements</h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Professional credentials demonstrating my expertise and commitment to continuous learning
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
          <div className="text-center">
            <Award className="mx-auto mb-3 sm:mb-4 text-red-500" size={28} />
            <AnimatedCounter end={certificates.length} label="Certifications" />
          </div>
          <div className="text-center">
            <TrendingUp className="mx-auto mb-3 sm:mb-4 text-orange-500" size={28} />
            <AnimatedCounter end={10} label="Skills Developed" suffix="+" />
          </div>
        </div>

        {/* Helper to render certificate card */}
        {(() => {
          const renderCertificateCard = (cert, index, delayOffset = 0) => (
            <div
              key={cert.id}
              className="animate-fade-in"
              style={{ animationDelay: `${(index + delayOffset) * 0.1}s` }}
            >
              <Card 
                className="group h-full flex flex-col cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-orange-500/0 group-hover:from-red-500/10 group-hover:to-orange-500/10 transition-all duration-500"></div>
                
                <div className="relative overflow-hidden flex-shrink-0">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-40 sm:h-44 md:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                    {cert.date}
                  </div>
                </div>
                
                <div className="p-4 sm:p-6 flex-grow flex flex-col relative z-10">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-slate-800 group-hover:text-red-600 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-red-500 font-semibold mb-3 sm:mb-4 text-xs sm:text-sm">{cert.issuer}</p>
                  
                  <p className="text-slate-600 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow">
                    Professional certification in {cert.title.toLowerCase()}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" size="sm">
                      ✓ Verified
                    </Badge>
                    <button 
                      onClick={() => openModal(cert)}
                      className="text-red-500 hover:text-red-700 font-semibold text-sm flex items-center space-x-1 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>View</span>
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          );

          return (
            <>
              {/* Featured Certificates (Top 2, Centered) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto mb-6 sm:mb-8">
                {certificates.slice(0, 2).map((cert, index) => renderCertificateCard(cert, index, 0))}
              </div>

              {/* Remaining Certificates Grid (3 Columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
                {certificates.slice(2).map((cert, index) => renderCertificateCard(cert, index, 2))}
              </div>
            </>
          );
        })()}

        {/* Learning Path Section */}
        <Card className="p-12 bg-gradient-to-br from-slate-50 to-slate-100 mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                🚀
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Current Focus</h3>
              <p className="text-slate-600">Building strong fundamentals in web development</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Commitment</h3>
              <p className="text-slate-600">Continuous learning and skill improvement</p>
            </div>
          </div>
        </Card>

        {/* Skills Showcase */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">Core Competencies</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg">
                <span className="text-red-500 font-bold">✓</span>
                <span className="text-slate-700">Frontend Development (React)</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <span className="text-blue-500 font-bold">✓</span>
                <span className="text-slate-700">Backend Development (Laravel)</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg">
                <span className="text-green-500 font-bold">✓</span>
                <span className="text-slate-700">Database Design & SQL</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                <span className="text-yellow-600 font-bold">✓</span>
                <span className="text-slate-700">Version Control & Git</span>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">Professional Growth</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <p className="font-semibold text-slate-800">Problem Solving</p>
                <p className="text-sm text-slate-600">Logical thinking and debugging</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <p className="font-semibold text-slate-800">Collaboration</p>
                <p className="text-sm text-slate-600">Team communication skills</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <p className="font-semibold text-slate-800">Attention to Detail</p>
                <p className="text-sm text-slate-600">Writing clean, maintainable code</p>
              </div>
              <div className="border-l-4 border-pink-500 pl-4 py-2">
                <p className="font-semibold text-slate-800">Adaptability</p>
                <p className="text-sm text-slate-600">Quick learner, eager to grow</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto animate-fade-in relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-red-500 hover:bg-red-700 text-white rounded-full p-2 transition-colors z-10 shadow-lg"
            >
              <X size={24} />
            </button>

            {/* Modal Content */}
            <div className="p-8">
              <div className="mb-4">
                <h2 className="text-3xl font-bold text-slate-800 mb-2">
                  {selectedCertificate?.title}
                </h2>
                <p className="text-red-500 font-semibold text-lg">
                  {selectedCertificate?.issuer}
                </p>
                <p className="text-slate-600 mt-2">
                  {selectedCertificate?.date}
                </p>
              </div>

              {/* Front/Back Toggle if backImage exists */}
              {selectedCertificate?.backImage && (
                <div className="flex justify-center space-x-3 mb-6">
                  <button
                    onClick={() => setActiveSide('front')}
                    className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                      activeSide === 'front'
                        ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-md'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    Bagian Depan
                  </button>
                  <button
                    onClick={() => setActiveSide('back')}
                    className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                      activeSide === 'back'
                        ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-md'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    Bagian Belakang
                  </button>
                </div>
              )}

              {/* Certificate Image */}
              <div className="bg-slate-50 rounded-lg overflow-hidden flex items-center justify-center p-2 border border-slate-100">
                <img 
                  src={activeSide === 'back' ? selectedCertificate?.backImage : selectedCertificate?.image} 
                  alt={selectedCertificate?.title}
                  className="w-full max-h-[60vh] object-contain rounded-md"
                />
              </div>

              {/* Close Button at Bottom */}
              <button
                onClick={closeModal}
                className="mt-8 w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Close Certificate
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Certificates;