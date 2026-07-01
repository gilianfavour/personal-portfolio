import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineWeb, MdOutlineSettingsEthernet, MdOutlinePhoneAndroid, MdOutlineSatelliteAlt } from 'react-icons/md';
import { TbBrain } from 'react-icons/tb';
import { IoColorPaletteOutline } from 'react-icons/io5';
import AboutImage from '../Assets/new_about.png';

const services = [
  {
    icon: MdOutlineWeb,
    title: 'Web Development',
    desc: 'Modern websites and web applications using React, Next.js, Laravel and Django.',
  },
  {
    icon: MdOutlineSettingsEthernet,
    title: 'Backend Development',
    desc: 'REST APIs, authentication, databases, business logic and integrations.',
  },
  {
    icon: MdOutlinePhoneAndroid,
    title: 'Mobile Development',
    desc: 'Flutter cross-platform mobile applications for Android and iOS.',
  },
  {
    icon: TbBrain,
    title: 'AI Integration',
    desc: 'Chatbots, voice assistants, OpenAI integrations, document intelligence and language translation.',
  },
  {
    icon: IoColorPaletteOutline,
    title: 'UI/UX Design',
    desc: 'Figma designs, responsive layouts, dashboard design and user research.',
  },
  {
    icon: MdOutlineSatelliteAlt,
    title: 'USSD / 2G Solutions',
    desc: 'Offline-first applications accessible to users on feature phones with no internet.',
  },
];

function About() {
  return (
    <section id="about" className="about-section">

      {/* Top inverted wave divider */}
      <motion.div
        className="about-divider"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="wave-svg"
          style={{ transform: 'rotate(180deg)' }}
        >
          <path
            fill="#b497bd"
            fillOpacity="0.8"
            d="M0,64L48,85.3C96,107,192,149,288,138.7C384,128,480,64,576,53.3C672,43,768,85,864,117.3C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,150L1392,150C1344,150,1248,150,1152,150C1056,150,960,150,864,150C768,150,672,150,576,150C480,150,384,150,288,150C192,150,96,150,48,150L0,150Z"
          />
        </svg>
      </motion.div>

      {/* About content */}
      <div className="container about-container">
        <motion.div
          className="about-text"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          <p>
            I'm a Full Stack Software Developer based in Uganda with experience building modern web
            applications, mobile apps, AI-powered systems and enterprise management platforms.
          </p>
          <p>
            Over the past few years I've worked with <strong>Laravel, Django, Flutter, React, Next.js</strong> and
            modern cloud technologies to develop solutions in agriculture, SACCO management,
            renewable energy, education and nonprofit organizations.
          </p>
          <p>
            My passion lies in solving African problems using practical technology that works for
            everyone — including users without smartphones. I believe the best software is the kind
            that actually reaches people.
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">6+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Real Clients</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-image-wrapper"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img src={AboutImage} alt="Favour Gilian" className="about-image" />
        </motion.div>
      </div>

      {/* What I Do section */}
      <div className="services-section container">
        <motion.h3
          className="services-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          What I Do
        </motion.h3>
        <div className="services-grid">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(180,151,189,0.3)' }}
            >
              <div className="service-icon">
                <s.icon size={28} color="#b497bd" />
              </div>
              <h4 className="service-title">{s.title}</h4>
              <p className="service-desc">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default About;
