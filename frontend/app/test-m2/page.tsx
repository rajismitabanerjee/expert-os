"use client";
import ToneSlider from '@/components/ToneSlider';
import ELI5Tooltip from '@/components/ELI5Tooltip';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-bold mb-6">Member 2 Component Testing</h1>
      
      <div className="max-w-md">
        <ToneSlider />
        
        <div className="mt-10 p-6 bg-white rounded-lg border">
          <h2 className="text-xl font-bold mb-4">ELI5 Tooltip Test</h2>
          {/* Changed <p> to <div> here */}
          <div className="text-gray-700">
            The patient was denied coverage for procedure <ELI5Tooltip text="CPT 99213" definition="A standard office visit for an established patient, usually taking 15 minutes." /> because the insurance company claimed it was not medically necessary.
          </div>
        </div>
      </div>
    </div>
  );
}