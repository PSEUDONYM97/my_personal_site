'use client';

import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function CornerLogo() {
  // Always keep the logo hidden
  const [isVisible, setIsVisible] = useState(false);

  // No scroll listener needed since we're not showing the logo
  
  return (
    <div 
      className={`fixed bottom-4 right-4 z-40 transition-all duration-500 opacity-0 translate-y-4`}
    >
      <div className="bg-[#0e0e0e]/80 backdrop-blur-sm p-2 rounded-lg shadow-lg shadow-black/20 border border-gray-800/30 hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
        <Logo size="small" />
      </div>
    </div>
  );
} 