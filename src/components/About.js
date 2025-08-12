import React from 'react';
import { motion } from 'framer-motion';
import AboutImage from '../Assets/about.jpg'

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
          style={{ transform: 'rotate(180deg)' }} // flip vertically
        >
          <path
            fill="#b497bd"
            fillOpacity="0.8"
            d="M0,64L48,85.3C96,107,192,149,288,138.7C384,128,480,64,576,53.3C672,43,768,85,864,117.3C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,150L1392,150C1344,150,1248,150,1152,150C1056,150,960,150,864,150C768,150,672,150,576,150C480,150,384,150,288,150C192,150,96,150,48,150L0,150Z"
          />
        </svg>
      </motion.div>

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
            Hi! I'm Favour Gilian, a Year 2 Computer Science student at Women's Institute Of Technology Uganda (WITU). I’m passionate about programming and love exploring how technology can solve real-world problems.
          </p>
          <p>
            Currently, I’m learning foundational computer science topics including programming languages like Python and JavaScript, web development with React, Graphics, Fundamentals of Computer Hardware, and problem-solving through algorithms and data structures.
          </p>
          <p>
            Beyond academics, I enjoy building small projects that challenge me creatively and technically. I am fascinated by UI/UX design and how it shapes great user experiences.
          </p>
          <p>
            My goal is to develop skills that allow me to create impactful software solutions and contribute meaningfully to the tech community.
          </p>
        </motion.div>

        <motion.div
          className="about-image-wrapper"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src={AboutImage} 
            alt="Favour Gilian"
            className="about-image"
          />
        </motion.div>
      </div>

      
    </section>
  );
}

export default About;
