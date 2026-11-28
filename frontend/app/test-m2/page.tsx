"use client";
import { useState } from 'react';
import ToneSlider from '@/components/ToneSlider';
import ELI5Tooltip from '@/components/ELI5Tooltip';
import AlertBanner from '@/components/AlertBanner';

export default function TestPage() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <AlertBanner show={showAlert} onClose={() => setShowAlert(false)} />
      
      <h1 className="text-3xl font-bold mb-6">Member 2 Component Testing</h1>
      
      <button 
        onClick={() => setShowAlert(true)}
        className="mb-6 bg-blue-600 text-white px-4 py-2 rounded font-bold"
      >
        Simulate High-Risk Claim Alert
      </button>

      <div className="max-w-md">
        <ToneSlider />
        <div className="mt-10 p-6 bg-white rounded-lg border text-gray-700">
          The patient was denied coverage for procedure <ELI5Tooltip text="CPT 99213" definition="A standard office visit for an established patient." /> because it was not medically necessary.
        </div>
      </div>
    </div>
  );
}