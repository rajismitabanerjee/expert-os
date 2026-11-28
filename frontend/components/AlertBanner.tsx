"use client";
import React from 'react';

interface AlertBannerProps {
  show: boolean;
  onClose: () => void;
}

export default function AlertBanner({ show, onClose }: AlertBannerProps) {
  if (!show) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-gray-900 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-4 animate-slide-in">
      <div className="text-2xl">🚨</div>
      <div>
        <h3 className="font-bold text-sm">Manager Notified</h3>
        <p className="text-xs text-gray-300">High-value claim sent to mobile via Bitsbee Ops.</p>
      </div>
      <button onClick={onClose} className="ml-4 text-gray-400 hover:text-white">✕</button>
    </div>
  );
}