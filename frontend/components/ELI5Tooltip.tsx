"use client";
import React, { useState } from 'react';

interface ELI5TooltipProps {
  text: string;
  definition: string;
}

export default function ELI5Tooltip({ text, definition }: ELI5TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span className="relative inline-block">
      <span 
        className="border-b-2 border-dashed border-orange-400 cursor-help text-orange-600 font-medium"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {text}
      </span>

      {isVisible && (
        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-xl z-50 block text-left">
          <span className="font-bold text-orange-400 mb-1 block">ELI5 Translation:</span>
          {definition}
          {/* Little arrow pointing down */}
          <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900 block"></span>
        </span>
      )}
    </span>
  );
}