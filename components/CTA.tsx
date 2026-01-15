import React from 'react';

const CTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/80 backdrop-blur-xl border border-gray-200 p-4 rounded-2xl shadow-2xl z-50 flex items-center justify-between gap-4 md:hidden">
      <div className="flex flex-col">
        <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Starting from</span>
        <span className="text-lg font-bold text-gray-900">₹12,500</span>
      </div>
      <div className="flex gap-2 flex-1">
        <button className="flex-1 bg-green-600 text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2">
          <span>WhatsApp</span>
        </button>
        <button className="flex-1 bg-black text-white py-3 rounded-xl font-bold text-sm">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default CTA;
