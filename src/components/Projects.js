import React from 'react';
import { motion } from 'framer-motion';
import Barolls from '../Assets/barolls.PNG';
import portfolio from '../Assets/portfolio.PNG';
import API from '../Assets/api.PNG';
import Book from '../Assets/bookmgt.PNG';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A modern portfolio website showcasing my skills and projects.',
    image: portfolio,
    url: 'https://github.com/gilianfavour/personal-portfolio.git',
    techStack: ['React', 'Bootstrap', 'CSS', 'HTML'],
  },
  {
    id: 2,
    title: 'Resturant Website For Barolls Arua Limited',
    description: 'A fully functional fast food website with order and delivery intergration. Both the front and backend.',
    image: Barolls,
    Link: 'https://www.barollsltd.com/',
    url: 'https://github.com/gilianfavour/Barolls-Front-End.git',
    techStack: ['React', 'Node.js', 'BootStrap', 'Python(Flask)', 'MySQL', 'HTML', 'CSS'],
  },
  {
    id: 3,
    title: 'Authors API',
    description: 'A Authors backend to track there daily activites.',
    image: API,
    url: 'https://github.com/gilianfavour/Flask_Author_API.git',
    techStack: ['Flask(Python)', 'MySQL', 'Postman', 'Xammp'],
  },
  ,
  {
    id: 4,
    title: 'Book Management System',
    description: 'A Book management System to keep your personal books organized.(Collaborated using git hub)',
    image: Book,
    url: 'https://github.com/MargretDaniela/BOOK-MGT-SYSTEM.git',
    techStack: ['Vanilla Js', 'HTML', 'CSS', 'BootStrap'],
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section" style={{ backgroundColor: '#f8f4fb', padding: '5rem 6vw' }}>

        <motion.div
            className="projects-top-divider"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', overflow: 'hidden', lineHeight: 0, zIndex: 2 }}
            >
            <svg
                viewBox="0 0 1440 150"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: 'block', width: '100%', height: '75px' }}
            >
                <path
                fill="#b497bd"
                fillOpacity="0.8"
                d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,138.7C672,128,768,128,864,117.3C960,107,1056,85,1152,69.3C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                />
            </svg>
        </motion.div>


      <h2 className="section-title text-center mb-5" style={{ color: '#7e5e8f' }}>My Projects</h2>

      <div className="row g-4">
        {projects.map(({ id, title, description, image, url, techStack }) => (
          <motion.div
            key={id}
            className="col-md-6 col-lg-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: id * 0.2 }}
          >
            <div
              className="card shadow-sm project-card"
              style={{ borderRadius: '16px', cursor: 'pointer', overflow: 'hidden' }}
              onClick={() => window.open(url, '_blank')}
            >
              <div
                className="project-image"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '220px',
                  transition: 'transform 0.3s ease',
                }}
              ></div>

              <div className="card-body">
                <h5 className="card-title" style={{ color: '#b497bd' }}>{title}</h5>
                <p className="card-text" style={{ color: '#333' }}>{description}</p>
                <div className="tech-stack mb-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="badge bg-lavender me-2"
                      style={{
                        backgroundColor: '#b497bd',
                        color: 'white',
                        fontWeight: '600',
                        fontSize: '0.8rem',
                        padding: '0.3rem 0.6rem',
                        borderRadius: '12px',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-lavender"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 10px #b497bd' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    borderColor: '#b497bd',
                    color: '#7e5e8f',
                    fontWeight: '600',
                  }}
                >
                  View Project
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

       {/* Bottom wave divider to transition into Skills */}
      <motion.div
        className="projects-divider"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', overflow: 'hidden', lineHeight: 0 }}
      >
        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block', width: '100%', height: '100px' }}
        >
          <path
            fill="#fff" // Matches Skills section background
            d="M0,64L48,85.3C96,107,192,149,288,138.7C384,128,480,64,576,53.3C672,43,768,85,864,117.3C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,150L1392,150C1344,150,1248,150,1152,150C1056,150,960,150,864,150C768,150,672,150,576,150C480,150,384,150,288,150C192,150,96,150,48,150L0,150Z"
          />
        </svg>
      </motion.div>
    </section>
  );
}

export default Projects;
