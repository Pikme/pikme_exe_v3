import React from 'react';

interface QuickHighlightsProps {
  data: {
    duration: string;
    hotel: string;
    meals: string;
    transport: string;
    groupType: string;
  };
}

const QuickHighlights: React.FC<QuickHighlightsProps> = ({ data }) => {
  const items = [
    { label: 'Duration', value: data.duration, icon: '🕒' },
    { label: 'Hotel', value: data.hotel, icon: '🏨' },
    { label: 'Meals', value: data.meals, icon: '🍴' },
    { label: 'Transport', value: data.transport, icon: '🚗' },
    { label: 'Group', value: data.groupType, icon: '👥' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
      {items.map((item, index) => (
        <div key={index} className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm flex flex-col items-center text-center">
          <span className="text-2xl mb-2">{item.icon}</span>
          <span className="text-xs text-gray-500 uppercase font-semibold tracking-wider">{item.label}</span>
          <span className="text-sm font-bold text-gray-800">{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default QuickHighlights;
