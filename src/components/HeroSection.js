import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import option3Image from '../Assets/option3.jpg'


function Hero() {
  const jobTitles = [
    'Full Stack Developer',
    'Problem Solver in training',
    'Passionate Programmer',
    'Code Enthusiast',
    'Passionate about UI/UX ',
  ];

  return (
    <section id="hero" className="hero-section">
        
      <motion.div
        className="hero-text"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 70, delay: 0.3 }}
      >
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
        <h5>Computer Science student. Eager to turn ideas into reality through coding and creative problem-solving.</h5>
        <motion.div
            className="hero-buttons d-flex gap-3 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            >
            <motion.a
                href="#projects"
                className="btn hero-btn"
                whileHover={{ scale: 1.1, boxShadow: '0 0 8px #b497bd' }}
                whileTap={{ scale: 0.95 }}
            >
                See My Work
            </motion.a>

            <motion.a
                href="/FAVOUR-GILIAN-Resume.pdf"
                download="FAVOUR-GILIAN-Resume.pdf"
                className="btn hero-btn hero-btn-outline"
                whileHover={{ scale: 1.1, boxShadow: '0 0 8px #b497bd' }}
                whileTap={{ scale: 0.95 }}
            >
                Download Resume
            </motion.a>
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
          src={option3Image}
          alt="Favour Gilian"
          className="hero-image"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 2, -2, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ borderRadius: '20px', boxShadow: '0 10px 25px rgba(197, 153, 232, 0.8)' }}
        />

        <motion.div
        style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: '#b497bd'
        }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={{
          position: 'absolute',
          bottom: '-20px',
          left: '-20px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: '#7e5e8f'
        }}
        animate={{ x: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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
