
import React from 'react';

export enum SkillCategory {
  CLOUD = 'Cloud & Hosting',
  IAC = 'Infrastructure as Code',
  CICD = 'CI/CD',
  CONTAINER = 'Containers & Orchestration',
  MONITORING = 'Monitoring & Logging',
  SCRIPTING = 'Scripting & Languages',
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  sourceLink?: string;
  liveLink?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface ChatMessage {
    sender: 'user' | 'ai';
    text: string;
}
