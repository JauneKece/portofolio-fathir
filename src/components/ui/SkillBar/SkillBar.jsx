// src/components/ui/SkillBar/SkillBar.jsx
import React, { useState, useEffect, useRef } from 'react';

const SkillBar = ({ name, percentage, color = 'bg-red-500' }) => {
  const [displayPercentage, setDisplayPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let current = 0;
    const timer = setInterval(() => {
      if (current < percentage) {
        current += Math.random() * 20;
        setDisplayPercentage(Math.min(current, percentage));
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [isVisible, percentage]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-slate-700">{name}</span>
        <span className={`text-sm font-bold ${color.replace('bg-', 'text-')}`}>
          {Math.round(displayPercentage)}%
        </span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden shadow-inner">
        <div
          className={`h-full ${color} transition-all duration-300 ease-out rounded-full shadow-lg`}
          style={{ width: `${displayPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
