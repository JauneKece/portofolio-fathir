// src/components/ui/Card/Card.jsx
import React from 'react';

const Card = ({ children, className = '', hover = true, ...props }) => {
  const baseClasses = 'bg-white rounded-3xl shadow-xl overflow-hidden';
  const hoverClasses = hover ? 'hover:shadow-2xl transform hover:scale-105 transition-all duration-500' : '';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;