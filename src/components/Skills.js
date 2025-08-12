import React from 'react';
import { motion } from 'framer-motion';

// Import icons from react-icons (feel free to swap icons for your skills)
import { 
  SiHtml5, 
  SiCss3, 
  SiBootstrap, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiGit, 
  SiMysql, 
  SiAdobephotoshop 
} from 'react-icons/si';

const skills = [
  { name: 'HTML', level: 90, icon: <SiHtml5 color="#e34c26" size={28} /> },
  { name: 'CSS', level: 85, icon: <SiCss3 color="#2965f1" size={28} /> },
  { name: 'Bootstrap', level: 80, icon: <SiBootstrap color="#7952b3" size={28} /> },
  { name: 'JavaScript', level: 90, icon: <SiJavascript color="#f0db4f" size={28} /> },
  { name: 'React', level: 85, icon: <SiReact color="#61dafb" size={28} /> },
  { name: 'Node.js', level: 80, icon: <SiNodedotjs color="#3c873a" size={28} /> },
  { name: 'Python', level: 85, icon: <SiPython color="#306998" size={28} /> },
  { name: 'Git & GitHub', level: 75, icon: <SiGit color="#171515" size={28} /> },
  { name: 'MySQL', level: 70, icon: <SiMysql color="#4479a1" size={28} /> },          // DBMS
  { name: 'Graphics', level: 65, icon: <SiAdobephotoshop color="#31a8ff" size={28} /> }, // Graphics software (Photoshop icon)
];

function Skills() {
  return (
    <section id="skills" className="skills-section" style={{ backgroundColor: '#fff', padding: '5rem 6vw', position: 'relative' }}>
      <motion.h2
        className="section-title text-center mb-5"
        style={{ color: '#7e5e8f' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        My Skills
      </motion.h2>

      <div className="skills-container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        {skills.map(({ name, level, icon }, index) => (
          <motion.div
            key={name}
            className="skill-bar"
            style={{ marginBottom: '1.5rem' }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
          >
            <div
              className="skill-header"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: '#5c4262',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                {icon}
                <span>{name}</span>
              </div>
              <span>{level}%</span>
            </div>

            <div
              className="skill-progress"
              style={{
                backgroundColor: '#eee',
                borderRadius: '10px',
                height: '14px',
                overflow: 'hidden',
              }}
            >
              <motion.div
                className="skill-fill"
                style={{
                  backgroundColor: '#b497bd',
                  height: '100%',
                  borderRadius: '10px',
                }}
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
