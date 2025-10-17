
import React from 'react';
import { SKILLS } from '../constants';
import type { SkillCategory } from '../types';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.entries(SKILLS).map(([category, skills]) => (
            <div key={category} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-cyan-400 mb-6">{category as SkillCategory}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-2 text-gray-300 w-24">
                    <div className="text-cyan-400 transition-transform duration-300 hover:scale-110">
                      {skill.icon}
                    </div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
