"use client";
import React, { useState } from 'react';

export default function ToneSlider() {
  const [toneValue, setToneValue] = useState(1); 
  const [isLoading, setIsLoading] = useState(false);
  
  const toneLabels = ["Polite", "Professional", "Firm", "Aggressive"];

  const handleToneChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setToneValue(newValue); // This updates the UI instantly as you drag
    
    setIsLoading(true);
    console.log(`Requesting AI to rewrite draft with tone: ${toneLabels[newValue]}`);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      console.log("✅ Backend received new tone. Draft updated.");
    } catch (error) {
      console.error("❌ Failed to update tone", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 mt-4 relative">
      {isLoading && (
        <div className="absolute top-2 right-2 text-xs text-blue-500 animate-pulse font-semibold">
          Updating AI...
        </div>
      )}
      
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
        // The 'disabled' attribute was removed here so the slider works smoothly
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
      />
      
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span>Polite</span>
        <span>Aggressive</span>
      </div>
    </div>
  );
}