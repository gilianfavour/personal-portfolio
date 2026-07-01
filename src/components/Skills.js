import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiHtml5, SiCss3, SiBootstrap, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiDjango, SiLaravel,
  SiFlutter, SiDart,
  SiPython, SiPhp,
  SiPostgresql, SiMysql, SiSqlite,
  SiGit, SiGithub, SiDocker, SiPostman, SiFigma,
  SiOpenai,
} from 'react-icons/si';

const skillGroups = [
  {
    label: 'Languages',
    skills: [
      { name: 'JavaScript', icon: <SiJavascript color="#f0db4f" size={30} /> },
      { name: 'TypeScript', icon: <SiTypescript color="#3178c6" size={30} /> },
      { name: 'PHP', icon: <SiPhp color="#777bb4" size={30} /> },
      { name: 'Python', icon: <SiPython color="#306998" size={30} /> },
      { name: 'Dart', icon: <SiDart color="#0175c2" size={30} /> },
    ],
  },
  {
    label: 'Frontend',
    skills: [
      { name: 'React', icon: <SiReact color="#61dafb" size={30} /> },
      { name: 'Next.js', icon: <SiNextdotjs color="#000" size={30} /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06b6d4" size={30} /> },
      { name: 'Bootstrap', icon: <SiBootstrap color="#7952b3" size={30} /> },
      { name: 'HTML', icon: <SiHtml5 color="#e34c26" size={30} /> },
      { name: 'CSS', icon: <SiCss3 color="#2965f1" size={30} /> },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Laravel', icon: <SiLaravel color="#ff2d20" size={30} /> },
      { name: 'Django', icon: <SiDjango color="#092e20" size={30} /> },
      { name: 'Django REST', icon: <SiDjango color="#44b78b" size={30} /> },
      { name: 'Node.js', icon: <SiNodedotjs color="#3c873a" size={30} /> },
      { name: 'Express', icon: <SiExpress color="#888" size={30} /> },
    ],
  },
  {
    label: 'Mobile',
    skills: [
      { name: 'Flutter', icon: <SiFlutter color="#54c5f8" size={30} /> },
      { name: 'Dart', icon: <SiDart color="#0175c2" size={30} /> },
    ],
  },
  {
    label: 'Database',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" size={30} /> },
      { name: 'MySQL', icon: <SiMysql color="#4479a1" size={30} /> },
      { name: 'SQLite', icon: <SiSqlite color="#003b57" size={30} /> },
    ],
  },
  {
    label: 'AI & Tools',
    skills: [
      { name: 'OpenAI', icon: <SiOpenai color="#000" size={30} /> },
      { name: 'Git', icon: <SiGit color="#f05032" size={30} /> },
      { name: 'GitHub', icon: <SiGithub color="#171515" size={30} /> },
      { name: 'Docker', icon: <SiDocker color="#2496ed" size={30} /> },
      { name: 'Postman', icon: <SiPostman color="#ef5b25" size={30} /> },
      { name: 'Figma', icon: <SiFigma color="#f24e1e" size={30} /> },
    ],
  },
];

function Skills() {
  const [activeGroup, setActiveGroup] = useState('All');

  const tabs = ['All', ...skillGroups.map((g) => g.label)];

  const visibleGroups =
    activeGroup === 'All'
      ? skillGroups
      : skillGroups.filter((g) => g.label === activeGroup);

  return (
    <section id="skills" className="skills-section">
      <motion.h2
        className="section-title text-center mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Skills & Technologies
      </motion.h2>
      <p className="skills-subtitle text-center">Technologies I work with daily</p>

      {/* Filter tabs */}
      <div className="skills-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`skills-tab ${activeGroup === tab ? 'active' : ''}`}
            onClick={() => setActiveGroup(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="skills-groups-container">
        {visibleGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            className="skill-group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: gi * 0.1 }}
          >
            <h4 className="skill-group-label">{group.label}</h4>
            <div className="skill-badges">
              {group.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="skill-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  whileHover={{ y: -4, boxShadow: '0 8px 20px rgba(180,151,189,0.4)' }}
                >
                  <div className="skill-badge-icon">{skill.icon}</div>
                  <span className="skill-badge-name">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
