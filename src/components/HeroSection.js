import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { MdWork } from 'react-icons/md';
import myprofphotoImage from '../Assets/myprofphoto.png';

function Hero() {
  const jobTitles = [
    'Software Engineer',
    'Full Stack Developer',
    'AI Solutions Builder',
    'Mobile App Developer',
    'Problem Solver',
  ];

  return (
    <section id="hero" className="hero-section">

      <motion.div
        className="hero-text"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 70, delay: 0.3 }}
      >
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <MdWork size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
          Available for Work
        </motion.div>

        <h1 className="hero-name">Hello, I'm Favour</h1>
        <h2 className="hero-tagline">
          I am a{' '}
          <span className="lavender-text">
            <Typewriter
              words={jobTitles}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>
        <p className="hero-subtitle">
          Building scalable web, mobile and AI-powered solutions that solve real-world problems —
          making technology accessible to everyone.
        </p>

        <motion.div
          className="hero-currently"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <span className="currently-dot"></span>
          Currently building <strong>Farmer's Companion</strong> — an AI-powered multilingual farming assistant for African smallholder farmers
        </motion.div>

        <motion.div
          className="hero-buttons d-flex gap-3 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.a
            href="#projects"
            className="btn hero-btn"
            whileHover={{ scale: 1.07, boxShadow: '0 0 20px #b497bd' }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>

          <motion.a
            href="/FAVOUR_GILIAN_CV.pdf"
            download="FAVOUR_GILIAN_CV.pdf"
            className="btn hero-btn hero-btn-outline"
            whileHover={{ scale: 1.07, boxShadow: '0 0 20px #b497bd' }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>

          <motion.a
            href="#contact"
            className="btn hero-btn hero-btn-ghost"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Tech stack quick badges */}
        <motion.div
          className="hero-tech-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          {['React', 'Django', 'Laravel', 'Flutter', 'Next.js', 'OpenAI'].map((t) => (
            <span key={t} className="hero-tech-badge">{t}</span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-image-wrapper"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 70, delay: 0.6 }}
        style={{ position: 'relative', display: 'inline-block' }}
      >
        <motion.img
          src={myprofphotoImage}
          alt="Favour Gilian"
          className="hero-image"
          animate={{ scale: [1, 1.04, 1], rotate: [0, 1.5, -1.5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Floating orbs */}
        <motion.div
          className="hero-orb hero-orb-top"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="hero-orb hero-orb-bottom"
          animate={{ x: [0, 15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Floating shapes */}
      <div className="floating-shapes" aria-hidden="true">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        <div className="shape shape4"></div>
      </div>

      {/* Bottom Wave Divider */}
      <motion.div
        className="hero-divider"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="wave-svg"
        >
          <path
            fill="#b497bd"
            fillOpacity="0.8"
            d="M0,64L48,85.3C96,107,192,149,288,138.7C384,128,480,64,576,53.3C672,43,768,85,864,117.3C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,150L1392,150C1344,150,1248,150,1152,150C1056,150,960,150,864,150C768,150,672,150,576,150C480,150,384,150,288,150C192,150,96,150,48,150L0,150Z"
          />
        </svg>
      </motion.div>

    </section>
  );
}

export default Hero;
