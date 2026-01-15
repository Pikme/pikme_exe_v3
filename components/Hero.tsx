import React from 'react';

interface HeroProps {
  title: string;
  location: string;
  price: string;
  duration: string;
}

const Hero: React.FC<HeroProps> = ({ title, location, price, duration }) => {
  return (
    <section className="relative bg-gray-900 text-white py-16 px-6 rounded-2xl overflow-hidden mb-8">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
      <div className="relative z-20 max-w-4xl">
        <div className="flex items-center space-x-2 text-sm mb-4 text-orange-400 font-medium">
          <span>{location}</span>
          <span>•</span>
          <span>{duration}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{title}</h1>
        <div className="flex flex-wrap items-center gap-6">
          <div>
            <p className="text-gray-400 text-sm uppercase tracking-wider">Starting from</p>
            <p className="text-3xl font-bold text-white">{price}</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Book Now
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-full font-semibold transition-colors border border-white/20">
              Enquire
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
