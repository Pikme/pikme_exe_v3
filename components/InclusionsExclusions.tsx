import React from 'react';

interface Props {
  inclusions: string[];
  exclusions: string[];
}

const InclusionsExclusions: React.FC<Props> = ({ inclusions, exclusions }) => {
  return (
    <section className="grid md:grid-cols-2 gap-8 mb-12">
      <div className="bg-green-50/50 p-6 rounded-2xl border border-green-100">
        <h2 className="text-xl font-bold mb-4 text-green-800 flex items-center gap-2">
          <span className="text-green-600">✓</span> Inclusions
        </h2>
        <ul className="space-y-3">
          {inclusions.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700 text-sm">
              <span className="text-green-500 mt-0.5">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100">
        <h2 className="text-xl font-bold mb-4 text-red-800 flex items-center gap-2">
          <span className="text-red-600">✕</span> Exclusions
        </h2>
        <ul className="space-y-3">
          {exclusions.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700 text-sm">
              <span className="text-red-400 mt-0.5">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default InclusionsExclusions;
