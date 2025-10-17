
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
        <p className="text-lg text-gray-300 leading-relaxed">
          {PERSONAL_INFO.about}
        </p>
      </div>
    </section>
  );
};

export default About;
