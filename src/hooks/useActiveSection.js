// src/hooks/useActiveSection.js
import { useState } from 'react';

export const useActiveSection = (defaultSection = 'home') => {
  const [activeSection, setActiveSection] = useState(defaultSection);
  
  return { activeSection, setActiveSection };
};