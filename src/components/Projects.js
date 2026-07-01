import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdStar, MdSearch, MdLightbulbOutline, MdCheckCircleOutline } from 'react-icons/md';
import Barolls from '../Assets/barolls.PNG';
import portfolio from '../Assets/portfolio.PNG';
import WNETF from '../Assets/WNETF.png';
import FarmersCompanion from '../Assets/farmers-companion.jpg';
import Agora from '../Assets/agora.jpeg';
import Presto from '../Assets/presto.jpeg';

const projects = [
  {
    id: 1,
    title: "Farmer's Companion",
    description:
      "An AI-powered multilingual farming assistant that works through smartphones, voice and USSD. Helps smallholder farmers access localized agricultural advice, weather, pest diagnosis and market prices — even without a smartphone.",
    problem: 'Smallholder farmers lack access to reliable agricultural information because most digital platforms require smartphones and English literacy.',
    solution: 'Designed an AI-powered multilingual farming assistant that works through smartphones, voice and USSD to provide localized agricultural advice.',
    outcome: 'Prototype supporting multilingual farming assistance, offline accessibility via feature phones and voice interaction.',
    image: FarmersCompanion,
    url: '#',
    techStack: ['Next.js', 'Django', 'Flutter', 'OpenAI', 'PostgreSQL', 'USSD'],
    tags: ['AI', 'Mobile', 'Web', 'USSD'],
    featured: true,
  },
  {
    id: 2,
    title: 'SACCO Management System',
    description:
      'A full-stack SACCO management platform with a Laravel backend and Flutter mobile app. Manages member registration, loan applications, savings tracking, reporting and admin dashboards.',
    problem: 'SACCOs were managing members, loans and savings manually, causing errors and delays.',
    solution: 'Built a full-stack system with role-based access, automated loan calculation, savings tracking and mobile-friendly experience.',
    outcome: 'Streamlined SACCO operations with real-time reporting and mobile accessibility for members.',
    image: Agora,
    url: '#',
    techStack: ['Laravel', 'Flutter', 'MySQL', 'REST API'],
    tags: ['Mobile', 'Web', 'Backend'],
    featured: true,
  },
  {
    id: 3,
    title: 'WNETF Management System',
    description:
      'A Django-powered beneficiary management system for WestNile Education Trust Fund. Manages over 5,000 beneficiary records with role-based access control, document uploads and REST API integrations.',
    problem: 'Beneficiary data was scattered and hard to track, making reports slow and inaccurate.',
    solution: 'Built a centralized Django system with 20+ REST API endpoints supporting authentication, reporting and document management.',
    outcome: 'Managing 5,000+ beneficiary records with role-based access and real-time dashboard reporting.',
    image: WNETF,
    url: 'https://wnetf.com/',
    techStack: ['Django', 'Django REST', 'MySQL', 'cPanel'],
    tags: ['Web', 'Backend'],
    featured: true,
  },
  {
    id: 4,
    title: 'Barolls Restaurant Website',
    description:
      'A fully functional fast food website for Barolls Arua Limited with online ordering, delivery integration and an admin panel. Built with React frontend and Python Flask backend.',
    problem: 'The restaurant had no online presence and was losing customers who preferred ordering digitally.',
    solution: 'Built a full-stack restaurant website with real-time ordering, delivery tracking and kitchen admin panel.',
    outcome: 'Live production website serving customers in Arua with online orders.',
    image: Barolls,
    url: 'https://www.barollsltd.com/',
    techStack: ['React', 'Node.js', 'Bootstrap', 'Python (Flask)', 'MySQL'],
    tags: ['Web', 'Backend'],
    featured: false,
  },
  {
    id: 5,
    title: 'PRESTO Corporate Website',
    description:
      'UI/UX design and development of a modern corporate website. Designed landing pages, product pages, admin dashboard mockups and customer-facing responsive layouts using Figma.',
    problem: 'The company needed a professional digital presence with modern UX.',
    solution: 'Designed and built a responsive, product-focused corporate website from Figma wireframes to production.',
    outcome: 'Delivered a modern, responsive corporate website aligned to brand identity.',
    image: Presto,
    url: '#',
    techStack: ['Next.js', 'Figma', 'Tailwind CSS'],
    tags: ['Web', 'UI/UX'],
    featured: false,
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description:
      'This portfolio — showcasing skills, projects and experience with smooth Framer Motion animations, skill badges and project case studies.',
    problem: 'Needed a modern, fast and visually striking developer portfolio.',
    solution: 'Built with React, Framer Motion animations, responsive design and structured project case studies.',
    outcome: 'Live portfolio that accurately represents skills and projects.',
    image: portfolio,
    url: 'https://personal-portfolio-six-khaki.vercel.app/',
    techStack: ['React', 'Framer Motion', 'Bootstrap', 'CSS'],
    tags: ['Web', 'UI/UX'],
    featured: false,
  },
];

const allTags = ['All', 'Web', 'Mobile', 'Backend', 'AI', 'UI/UX', 'USSD'];

function Projects() {
  const [activeTag, setActiveTag] = useState('All');
  const [expandedId, setExpandedId] = useState(null);

  const filtered =
    activeTag === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <section id="projects" className="projects-section">

      <motion.div
        className="projects-top-divider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
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

      <h2 className="section-title text-center mb-2" style={{ color: '#7e5e8f' }}>Featured Projects</h2>
      <p className="projects-subtitle text-center">Real solutions built for real problems</p>

      {/* Filter tags */}
      <div className="projects-filter">
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`filter-btn ${activeTag === tag ? 'active' : ''}`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="row g-4">
        <AnimatePresence>
          {filtered.map(({ id, title, description, image, url, techStack, featured, problem, solution, outcome }) => (
            <motion.div
              key={id}
              className="col-md-6 col-lg-4"
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`project-card ${featured ? 'project-card--featured' : ''}`}>
                {featured && (
                  <div className="featured-badge">
                    <MdStar size={13} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
                    Featured
                  </div>
                )}

                <div
                  className="project-image"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />

                <div className="project-body">
                  <h5 className="project-title">{title}</h5>
                  <p className="project-desc">{description}</p>

                  <div className="tech-stack mb-3">
                    {techStack.map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>

                  {/* Case study toggle */}
                  <button
                    className="case-study-toggle"
                    onClick={() => setExpandedId(expandedId === id ? null : id)}
                    aria-expanded={expandedId === id}
                  >
                    {expandedId === id ? 'Hide Case Study ▲' : 'View Case Study ▼'}
                  </button>

                  <AnimatePresence>
                    {expandedId === id && (
                      <motion.div
                        className="case-study"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="case-item">
                          <strong><MdSearch size={14} style={{ marginRight: '5px', verticalAlign: 'middle' }} />Problem</strong>
                          <p>{problem}</p>
                        </div>
                        <div className="case-item">
                          <strong><MdLightbulbOutline size={14} style={{ marginRight: '5px', verticalAlign: 'middle' }} />Solution</strong>
                          <p>{solution}</p>
                        </div>
                        <div className="case-item">
                          <strong><MdCheckCircleOutline size={14} style={{ marginRight: '5px', verticalAlign: 'middle' }} />Outcome</strong>
                          <p>{outcome}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {url !== '#' && (
                    <motion.a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-project mt-3"
                      whileHover={{ scale: 1.05, boxShadow: '0 0 10px #b497bd' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Live →
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Bottom wave */}
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
            fill="#fff"
            d="M0,64L48,85.3C96,107,192,149,288,138.7C384,128,480,64,576,53.3C672,43,768,85,864,117.3C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,150L1392,150C1344,150,1248,150,1152,150C1056,150,960,150,864,150C768,150,672,150,576,150C480,150,384,150,288,150C192,150,96,150,48,150L0,150Z"
          />
        </svg>
      </motion.div>
    </section>
  );
}

export default Projects;
