import React from 'react';

interface HighlightsProps {
  highlights: string[];
}

const Highlights: React.FC<HighlightsProps> = ({ highlights }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm">✨</span>
        Tour Highlights
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {highlights.map((item, index) => (
          <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
            <span className="text-orange-500 mt-1">✓</span>
            <p className="text-gray-700 font-medium">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
