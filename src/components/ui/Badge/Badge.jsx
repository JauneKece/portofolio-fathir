// src/components/ui/Badge/Badge.jsx
import React from 'react';

const Badge = ({ children, variant = 'primary', size = 'md', className = '' }) => {
  const baseClasses = 'inline-block font-semibold rounded-full';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-red-500 to-orange-500 text-white',
    secondary: 'bg-gradient-to-r from-red-100 to-orange-100 text-red-700',
    dark: 'bg-slate-800 text-white',
    outline: 'border-2 border-red-500 text-red-500'
  };

  const sizeClasses = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
