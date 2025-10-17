
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center">
      <div className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
          <span className="text-gray-200">{PERSONAL_INFO.name}</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400">
          {PERSONAL_INFO.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          {PERSONAL_INFO.tagline}
        </p>
        <div className="pt-4">
          <a
            href="#contact"
            className="inline-block bg-cyan-500 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
