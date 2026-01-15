import React from 'react';

interface PoliciesProps {
  importantInfo: string[];
}

const Policies: React.FC<PoliciesProps> = ({ importantInfo }) => {
  return (
    <section className="mb-12 bg-amber-50 p-8 rounded-2xl border border-amber-100">
      <h2 className="text-xl font-bold mb-6 text-amber-900 flex items-center gap-2">
        <span className="w-8 h-8 bg-amber-200 text-amber-700 rounded-full flex items-center justify-center text-sm">ℹ️</span>
        Important Information
      </h2>
      <ul className="space-y-4">
        {importantInfo.map((info, index) => (
          <li key={index} className="flex items-start gap-3 text-amber-800 text-sm leading-relaxed">
            <span className="text-amber-500 mt-1">•</span>
            {info}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Policies;
