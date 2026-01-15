'use client';
import React, { useState } from 'react';

interface ItineraryItem {
  day: string;
  title: string;
  desc: string;
}

interface ItineraryProps {
  itinerary: ItineraryItem[];
}

const Itinerary: React.FC<ItineraryProps> = ({ itinerary }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">📅</span>
        Day-wise Itinerary
      </h2>
      <div className="space-y-4">
        {itinerary.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {item.day}
                </span>
                <h3 className="font-bold text-gray-800">{item.title}</h3>
              </div>
              <span className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {openIndex === index && (
              <div className="p-5 pt-0 text-gray-600 border-t border-gray-100 mt-2 leading-relaxed">
                {item.desc}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Itinerary;
