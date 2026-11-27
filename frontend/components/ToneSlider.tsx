"use client";
import React, { useState } from 'react';

export default function ToneSlider() {
  const [toneValue, setToneValue] = useState(1); 
  
  const toneLabels = ["Polite", "Professional", "Firm", "Aggressive"];

  const handleToneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setToneValue(newValue);
    
    // Later, this will trigger an API call to rewrite the draft
    console.log(`Requesting AI to rewrite draft with tone: ${toneLabels[newValue]}`);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 mt-4">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Draft Tone: <span className="text-blue-600">{toneLabels[toneValue]}</span>
      </label>
      
      <input 
        type="range" 
        min="0" 
        max="3" 
        step="1"
        value={toneValue} 
        onChange={handleToneChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
      />
      
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span>Polite</span>
        <span>Aggressive</span>
      </div>
    </div>
  );
}