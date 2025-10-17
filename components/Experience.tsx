
import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Work Experience</h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-16"></div>
        
        <div className="relative border-l-2 border-gray-700">
          {EXPERIENCE.map((item, index) => (
            <div key={index} className="mb-12 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-cyan-500 rounded-full -left-3 ring-8 ring-gray-900">
                <svg className="w-2.5 h-2.5 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z"/>
                </svg>
              </span>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-100">{item.role}</h3>
                  <time className="text-sm font-normal text-gray-400">{item.duration}</time>
                </div>
                <p className="text-cyan-400 mb-4">{item.company}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
