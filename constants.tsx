import React from 'react';
import type { Skill, Project, ExperienceItem, SkillCategory } from './types';
import { SkillCategory as SC } from './types';


// Generic Icon components
const AwsIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current"><title>Amazon AWS</title><path d="M13.436 3.429c-.742-1.77-2.95-1.807-3.738-.052L6.49 9.07l-2.83 5.485c0 .01.01.01.01.01l-2.11 3.553-.33 1.34s.13.42.54.4c.32-.01 1.48-.11 1.48-.11l.33-1.34 1.25-2.09h1.7l1.09 2.05.3 1.39s.14.42.55.4c.32-.02 1.48-.12 1.48-.12l.31-1.39-1.28-2.31c.09-.05 2.19-1.29 3.1-1.22 1.46.1 2.53.53 3.13 1.22l-1.28 2.31.3 1.39s.15.42.55.4c.32-.02 1.48-.12 1.48-.12l.3-1.39 1.1-2.05h1.7l1.25 2.09.33 1.34s.13.42.54.4c.32-.01 1.48-.11 1.48-.11l-.33-1.34-2.11-3.553 0-.01-2.83-5.485-3.21-5.69zm-1.74 3.738c.68 0 1.23.55 1.23 1.24s-.55 1.24-1.23 1.24-1.24-.55-1.24-1.24S11.026 7.167 11.7 7.167zm-2.26 6.039c-.31.3-.78.4-1.18.29-.63-.18-.94-.85-.75-1.48.18-.63.85-.94 1.48-.75.63.18.94.85.75 1.48a1.2 1.2 0 01-.3.46zm4.84.46c-.3.3-.78.4-1.18.29-.63-.18-.94-.85-.75-1.48.18-.63.85-.94 1.48-.75.63.18.94.85.75 1.48a1.17 1.17 0 01-.3.46zM22.65 24H1.35C.6 24 0 23.4 0 22.65V1.35C0 .6.6 0 1.35 0h21.3C23.4 0 24 .6 24 1.35v21.3c0 .75-.6 1.35-1.35 1.35z"/></svg>;
const GcpIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current"><title>Google Cloud</title><path d="M12.11 15.394c-2.28.02-4.22-.88-5.6-2.58-1.31-1.6-1.9-3.6-1.89-5.61.01-2.07.71-4.11 2.14-5.61 1.39-1.42 3.3-2.22 5.29-2.22 1.78 0 3.44.59 4.77 1.73 1.36 1.11 2.29 2.76 2.53 4.61h-2.59c-.29-1.3-1.11-2.4-2.2-2.9-1.1-.5-2.4-.4-3.4.1-1.1.5-1.9 1.4-2.3 2.5s-.3 2.4.2 3.5c.5 1 1.4 1.8 2.5 2.2 1.1.4 2.3.4 3.4-.1s1.9-1.4 2.3-2.5h2.52c-.27 1.9-1.21 3.5-2.59 4.6-1.39 1.2-3.1 1.8-4.89 1.8zM21.2 18.004H8.4v-2.2h10.4c-1.3-1.2-2.4-2.7-2.9-4.3H8.4v-2.2h7.9c.1-1.1.1-2.1 0-3.2H8.4V4.004H6.2v16H21.2v-2z"/></svg>;
const DockerIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current"><title>Docker</title><path d="M22.992 7.154c-1.146-.43-2.12-.972-3.264-1.284-.6-.18-1.02-.72-1.02-1.38V2.838c0-.9-.72-1.62-1.62-1.62H6.912c-.9 0-1.62.72-1.62 1.62v1.656c0 .66-.42 1.2-1.02 1.38-1.144.312-2.118.854-3.264 1.284C.012 7.554 0 8.514 0 8.694v6.612c0 .18.012.96.996 1.44 1.146.43 2.12.972 3.264 1.284.6.18 1.02.72 1.02 1.38v1.656c0 .9.72 1.62 1.62 1.62h10.2c.9 0 1.62-.72 1.62-1.62V19.41c0-.66.42-1.2 1.02-1.38 1.144-.312 2.118-.854 3.264-1.284.994-.48.994-1.26.994-1.44V8.694c0-.18-.012-1.14-.996-1.54zM8.352 14.13v-3.72h2.82v3.72H8.352zm3.78-3.72h2.82v3.72h-2.82v-3.72zm-3.78-4.68h2.82v3.72H8.352V5.73zm7.56 8.4h-3.78v-3.72h3.78v3.72zm0-4.68h-3.78v-3.72h3.78v3.72zm-3.78-4.68h2.82v3.72h-2.82V5.73zm-3.78 0h2.82v3.72h-2.82V5.73z"/></svg>;
const K8sIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current"><title>Kubernetes</title><path d="M12.112.023c-2.408 0-4.526.89-6.315 2.585-.143.14-.143.282-.143.496l.07 1.832c0 .21.07.355.215.496l1.36 1.282c.215.212.43.142.572-.07L9.23 4.97c1.072-.96 2.36-1.492 3.86-1.492 2.86 0 5.218 2.202 5.218 5.043 0 1.21-.43 2.345-1.144 3.27l-4.36 5.545c-.214.283-.286.567-.286.852v3.27c0 .283.072.497.215.64l1.36 1.28c.142.142.285.213.5.213h2.36c.214 0 .357-.07.5-.214l1.43-1.28c.143-.142.214-.355.214-.64v-3.13c0-1.21.358-2.274 1.072-3.2l4.36-5.614c.286-.283.286-.566.286-.85V8.89c0-.213-.072-.355-.215-.497l-1.43-1.282c-.143-.142-.286-.213-.5-.213H19.95c-.214 0-.357.07-.5.213l-1.287 1.282c-.143.142-.214.355-.214.64l.07 1.562c-1.287-2.7-3.86-4.406-6.83-4.406h-.07zm-.21 6.817c-.428 0-.786.355-.786.782s.358.782.787.782.786-.355.786-.782-.357-.782-.786-.782zM3.86.305c-.214 0-.357.07-.5.213l-1.43 1.282c-.143.142-.214.355-.214.64v2.06c0 .214.07.355.215.497l4.36 5.614c.715.926 1.072 1.99 1.072 3.2v3.13c0 .283.07.497.214.64l1.43 1.28c.143.142.286.213.5.213h2.358c.214 0 .357-.07.5-.213l1.36-1.28c.143-.142.214-.355.214-.64v-3.27c0-.285-.072-.57-.286-.852l-4.36-5.545C6.718 8.01 6.288 6.874 6.288 5.664c0-2.84 2.358-5.043 5.22-5.043.214 0 .428-.07.643-.213l1.358-1.282c.143-.142.215-.355.215-.64l-.072-1.832c0-.21-.072-.355-.143-.496C11.643 1.075 10.076.305 8.36.305H3.86z"/></svg>;
const TerraformIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current"><title>Terraform</title><path d="M2.381 3.476h7.238V10.74l-7.238-4.178V3.476zm.114 13.048L9.619 20.7V13.5l-7.124-4.114v6.934zM10.714 2.2l-8.428 4.867v10.01l8.428 4.866 8.429-4.866V7.067L10.714 2.2zM21.619 10.74V3.476h-7.238l-2.45 1.414v7.262l9.688-5.602zm-1.143 2.762l-7.286 4.207v-7.238l2.424 1.398 4.862-2.809v4.442z"/></svg>;
const AnsibleIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current"><title>Ansible</title><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm.01 4.82A6.416 6.416 0 0 1 12 4.819c3.084 0 5.688 2.227 6.29 5.152l-3.355-.42c-.225-.97-.995-1.74-1.964-1.964l-.42-3.355A6.452 6.452 0 0 1 12.01 4.82zm-1.34 3.737c1.32.41 2.302 1.392 2.712 2.712l-1.356 1.356-1.356-1.356 1.356-1.356-1.356-1.356zm7.252 2.713c-.602 2.924-3.206 5.152-6.29 5.152a6.416 6.416 0 0 1-.562-.032l-.42 3.355c.32.025.642.032.972.032 3.084 0 5.688-2.228 6.29-5.152l-3.355-.42c-.225.97-.995 1.74-1.964 1.964l-1.31-1.31 3.585-3.585zM6.1 12.72c.602-2.925 3.206-5.152 6.29-5.152.203 0 .402.013.6.032l.42-3.355c-.34-.025-.68-.032-1.02-.032-3.084 0-5.688 2.227-6.29 5.152l3.355.42c.225-.97.995-1.74 1.964-1.964l-1.802 1.802zm9.14 2.868l-3.585 3.585 1.31 1.31c.97-.225 1.74-.995 1.964-1.964l3.355.42c-.602 2.924-3.206 5.152-6.29 5.152-.33 0-.652-.007-.972-.032l-.42 3.355c.32.025.642.032.972.032 3.084 0 5.688-2.228 6.29-5.152z"/></svg>;
const JenkinsIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current"><title>Jenkins</title><path d="M12.012 2C6.543 2 2.11 6.413 2.11 11.857c0 .285.023.559.055.832l.011-.003c.532-2.193 2.1-4.148 4.234-5.32l.14-.075.093-.05c2.446-1.31 5.313-1.12 7.55.518l.05.037.1.075c2.094 1.514 3.39 3.86 3.63 6.418l.01.12v.05c.01.16.02.308.02.469 0 5.445-4.433 9.857-9.902 9.857-5.46 0-9.9-4.412-9.9-9.857C2.11 6.413 6.543 2 12.012 2zm-.258 11.23c-.947 0-1.72-.77-1.72-1.714 0-.945.773-1.715 1.72-1.715.945 0 1.71.77 1.71 1.715 0 .944-.765 1.714-1.71 1.714z"/><path d="M12.012 0C5.39 0 0 5.373 0 11.98c0 .248.01.495.04.74l-.008.003C.61 5.92 4.625 2.01 9.53 2.01c2.446 0 4.7.94 6.4 2.51l.08.07c2.096 1.8 3.25 4.35 3.25 7.15 0 5.51-4.49 9.98-10 9.98S.01 17.49.01 11.98c0 .248.01.495.04.74l-.008.003c.58-6.804 6.248-12.053 13.09-12.053 2.445 0 4.7.83 6.4 2.21l.08.07c2.095 1.73 3.25 4.1 3.25 6.75 0 5.51-4.49 9.98-10 9.98S.01 17.49.01 11.98c0 5.51 4.49 9.98 10 9.98s10-4.47 10-9.98c0-6.608-5.39-11.98-12-11.98z"/></svg>;
const GithubActionsIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current"><title>GitHub Actions</title><path d="M12.93 2.64a2.5 2.5 0 0 0-1.85-.79h-.16a2.5 2.5 0 0 0-1.85.79L2.23 9.47a2.5 2.5 0 0 0 0 3.54l1.41 1.41-2.46 2.46a1.25 1.25 0 0 0 1.77 1.77l2.46-2.46 1.41 1.41a2.5 2.5 0 0 0 3.54 0l6.84-6.84a2.5 2.5 0 0 0 0-3.54L12.93 2.64zm-.88 9.19a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zM22.88 18.3a2.5 2.5 0 0 1-3.54 0l-2.12-2.12 1.77-1.77 2.12 2.12a2.5 2.5 0 0 1 0 3.54c-.98.98-2.56.98-3.54 0l-2.12-2.12 1.77-1.77 2.12 2.12c.2.2.51.2.71 0l-3.32-3.32-1.41 1.41a1.25 1.25 0 0 1-1.77 0l-1.41-1.41L4.8 17.5a1.25 1.25 0 0 1-1.77 0l-.71-.71a1.25 1.25 0 0 1 0-1.77L9.47 7.88l1.06 1.06-6.18 6.18a1.25 1.25 0 0 0 1.77 1.77l6.18-6.18 1.06 1.06-3.32 3.32 1.41 1.41c.49.49 1.28.49 1.77 0l1.41-1.41 3.32 3.32c-.2.2-.2.51 0 .71z"/></svg>;
const PrometheusIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current"><title>Prometheus</title><path d="M12 0C7.77 0 4.16 2.37 2.05 5.86l.5 3.16c1.3-2.03 3.4-3.4 5.83-3.66l-.66 4.14-4.22.68.85 5.37 4.1-3.23.67 4.2 6.03 2.45V2.3C15.91.89 14.06 0 12 0zm-2.91 9.38 1.03-6.42 2.92.46-.73 4.59-3.22 1.37z"/></svg>;
const GrafanaIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current"><title>Grafana</title><path d="M12 3.818C7.483 3.818 3.818 7.483 3.818 12c0 4.517 3.665 8.182 8.182 8.182 4.517 0 8.182-3.665 8.182-8.182 0-4.517-3.665-8.182-8.182-8.182zm-3.57 5.41a.818.818 0 110-1.636h8.182a.818.818 0 110 1.636H8.43zm0 3.272a.818.818 0 110-1.636h8.182a.818.818 0 110 1.636H8.43zm-1.638 3.273a.818.818 0 110-1.637h4.908a.818.818 0 110 1.637H6.792zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/></svg>;
const PythonIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current"><title>Python</title><path d="M11.24.062c-2.82 0-4.256 1.34-4.256 3.87v2.338c0 .34-.06.68-.182.998H4.65c-2.51 0-3.91 1.4-3.91 3.818v1.377c0 .282.06.564.18.822H0v2.34c0 2.51 1.4 3.91 3.818 3.91h2.278c.34 0 .68.06.998.18v2.153c0 2.53 1.43 3.872 3.87 3.872h1.138v-2.34c0-.34.06-.68.18-.998h2.154c2.53 0 3.872-1.43 3.872-3.87v-1.138h2.34c.34 0 .68-.06.998-.18V12.76h.68c2.51 0 3.872-1.43 3.872-3.872v-2.28c0-.34-.06-.68-.18-.998H19.35c-2.51 0-3.91-1.4-3.91-3.818V.68c-.282-.398-.564-.598-.94-.598h-3.258zm-4.37 1.496c.62 0 .94.318.94.94v2.094c0 .62-.318.94-.94.94H4.768c-.62 0-.94-.318-.94-.94V4.5c0-.62.318-.94.94-.94h2.102zm10.74 10.74c-.62 0-.94-.318-.94-.94v-2.102c0-.62.318-.94.94-.94h2.094c.62 0 .94.318.94.94v2.102c0 .62-.318.94-.94.94h-2.094z"/></svg>;
const BashIcon = () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current"><title>GNU Bash</title><path d="M0 0v24h24V0H0zm22.45 22.45H1.55V1.55h20.9v20.9zM7.53 5.48H6.17l-1.8 4.75h-.03L6.11 5.47H4.74v7.05h1.2V8.04h.03l-1.6 4.48h1.22l-1.6-4.48h.02l1.73 4.48h1.21V5.47zm5.53 4.31c0 .92-.37 1.57-1.13 1.94v.03c.58.21.9.72.98 1.46.09.72-.25 1.34-1.02 1.34-.84 0-1.22-.68-1.22-1.78v-5.2h1.16v2.11c0 .4.06.7.17.87.12.18.3.27.55.27.36 0 .54-.2.54-.58V9.8h1.23zm-.96 2.1c0-.4-.2-.6-.53-.6-.35 0-.54.2-.54.6v.05h1.07v-.05zm4.84-6.42h-2.91v7.05h2.95v-1.1h-1.8v-1.6h1.76v-1.1h-1.76v-1.75h1.8V5.47z"/></svg>;


export const SKILLS: { [key in SkillCategory]: Skill[] } = {
  [SC.CLOUD]: [
    { name: 'AWS', icon: <AwsIcon /> },
    { name: 'Google Cloud', icon: <GcpIcon /> },
  ],
  [SC.CONTAINER]: [
    { name: 'Docker', icon: <DockerIcon /> },
    { name: 'Kubernetes', icon: <K8sIcon /> },
  ],
  [SC.IAC]: [
    { name: 'Terraform', icon: <TerraformIcon /> },
    { name: 'Ansible', icon: <AnsibleIcon /> },
  ],
  [SC.CICD]: [
    { name: 'Jenkins', icon: <JenkinsIcon /> },
    { name: 'GitHub Actions', icon: <GithubActionsIcon /> },
  ],
  [SC.MONITORING]: [
    { name: 'Prometheus', icon: <PrometheusIcon /> },
    { name: 'Grafana', icon: <GrafanaIcon /> },
  ],
  [SC.SCRIPTING]: [
    { name: 'Python', icon: <PythonIcon /> },
    { name: 'Bash', icon: <BashIcon /> },
  ],
};

export const PROJECTS: Project[] = [
  {
    title: 'Automated CI/CD Pipeline for University Project',
    description: 'Implemented a CI/CD pipeline for a web application project using Jenkins and Docker, automating the build, test, and deployment process.',
    tags: ['Jenkins', 'Docker', 'Kubernetes', 'Groovy'],
    sourceLink: 'https://github.com/asadkhan/cicd-pipeline',
  },
  {
    title: 'Scalable Cloud Infrastructure for a Personal Blog',
    description: 'Provisioned and managed a scalable AWS infrastructure for a personal blog using Terraform, applying Infrastructure as Code principles.',
    tags: ['Terraform', 'AWS', 'IaC', 'VPC'],
    sourceLink: 'https://github.com/asadkhan/aws-terraform',
  },
  {
    title: 'Centralized Logging and Monitoring for a Web App',
    description: 'Set up a monitoring dashboard using Prometheus and Grafana for a university project to track application performance and system metrics.',
    tags: ['Prometheus', 'Grafana', 'ELK Stack', 'Alerting'],
  },
  {
    title: 'Exploring Kubernetes Security Concepts',
    description: 'Conducted a research project on Kubernetes security, implementing RBAC and network policies in a Minikube environment to understand container security.',
    tags: ['Kubernetes', 'Security', 'Minikube', 'RBAC'],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
    {
        role: 'DevOps Intern',
        company: 'Tech Forward Inc.',
        duration: 'Jun 2023 - Aug 2023',
        description: [
            'Assisted the DevOps team in maintaining CI/CD pipelines using Jenkins.',
            'Gained hands-on experience with Docker for containerizing applications.',
            'Wrote Bash scripts to automate routine tasks and server maintenance.',
            'Contributed to infrastructure-as-code scripts using Terraform under supervision.'
        ]
    },
    {
        role: 'Teaching Assistant - Cloud Computing',
        company: 'University of Technology',
        duration: 'Jan 2023 - May 2023',
        description: [
            'Assisted professor in a course covering cloud concepts and services (AWS, GCP).',
            'Led weekly lab sessions, guiding students through practical exercises.',
            'Graded assignments and provided constructive feedback on cloud architecture diagrams.',
        ]
    }
];

export const PERSONAL_INFO = {
    name: 'Asad Khan',
    title: 'Final Year Student',
    tagline: 'Aspiring Software Engineer with a passion for cloud and automation.',
    about: "I am a final year Computer Science student with a strong interest in DevOps principles, cloud computing, and software automation. I am passionate about learning new technologies and applying them to solve real-world problems. My goal is to leverage my skills in scripting, containerization, and CI/CD to build efficient and reliable systems.",
    email: 'asad.khan@email.com',
    linkedin: 'https://linkedin.com/in/asadkhan',
    github: 'https://github.com/asadkhan',
}