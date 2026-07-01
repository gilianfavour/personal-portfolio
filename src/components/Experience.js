import React from 'react';
import { motion } from 'framer-motion';
import { MdFiberManualRecord } from 'react-icons/md';

const experiences = [
  {
    id: 1,
    role: "Backend Developer",
    company: "WNETF (WestNile Education Trust Fund)",
    period: "2024",
    type: "Contract",
    points: [
      "Built 20+ Django REST API endpoints for beneficiary management and reporting",
      "Implemented role-based authentication and authorization",
      "Integrated file upload and document management workflows",
      "Managed 5,000+ beneficiary records with MySQL on cPanel",
    ],
    tags: ["Django", "REST API", "MySQL", "cPanel"],
    color: "#b497bd",
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "SACCO Management System",
    period: "2024",
    type: "Freelance",
    points: [
      "Built a Laravel backend powering loan management, member registration and savings tracking",
      "Developed a Flutter mobile app for member self-service access",
      "Designed admin dashboard with role-based access and reporting",
      "Integrated automated loan calculation and approval workflows",
    ],
    tags: ["Laravel", "Flutter", "MySQL", "REST API"],
    color: "#9b7daa",
  },
  {
    id: 3,
    role: "Founder & Software Engineer",
    company: "Farmer's Companion",
    period: "2024 – Present",
    type: "Personal Project",
    points: [
      "Designing an AI-powered multilingual farming assistant for African smallholder farmers",
      "Integrating USSD to reach farmers on 2G feature phones with no internet",
      "Building voice interface for farmers who cannot read",
      "Implementing pest diagnosis, weather alerts and market prices via OpenAI APIs",
    ],
    tags: ["Next.js", "Django", "Flutter", "OpenAI", "USSD", "PostgreSQL"],
    color: "#7e5e8f",
    current: true,
  },
  {
    id: 4,
    role: "UI/UX Designer & Frontend Developer",
    company: "PRESTO",
    period: "2024",
    type: "Contract",
    points: [
      "Designed landing pages, product pages and admin dashboards in Figma",
      "Developed responsive, accessible layouts aligned to brand identity",
      "Delivered customer-facing pages optimized for conversion",
    ],
    tags: ["Figma", "Next.js", "Tailwind CSS"],
    color: "#c4a5d0",
  },
  {
    id: 5,
    role: "Full Stack Developer",
    company: "Barolls Arua Limited",
    period: "2023",
    type: "Freelance",
    points: [
      "Built the company's restaurant website with React frontend and Flask backend",
      "Integrated online ordering and delivery management",
      "Deployed to production — currently live at barollsltd.com",
    ],
    tags: ["React", "Flask", "MySQL", "Bootstrap"],
    color: "#b497bd",
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <motion.h2
        className="section-title text-center mb-2"
        style={{ color: '#7e5e8f' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Experience
      </motion.h2>
      <p className="experience-subtitle text-center">Where I've applied my skills</p>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            className={`timeline-item ${i % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
          >
            <div className="timeline-dot" style={{ backgroundColor: exp.color }} />
            <div className="timeline-card" whileHover={{ y: -4 }}>
              <div className="timeline-header">
                <div>
                  <h4 className="timeline-role">{exp.role}</h4>
                  <p className="timeline-company">{exp.company}</p>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-period">{exp.period}</span>
                  <span className={`timeline-type ${exp.current ? 'timeline-type--current' : ''}`}>
                    {exp.current && (
                      <MdFiberManualRecord size={10} style={{ marginRight: '4px', verticalAlign: 'middle', color: '#4caf50' }} />
                    )}
                    {exp.type}
                  </span>
                </div>
              </div>
              <ul className="timeline-points">
                {exp.points.map((pt, pi) => (
                  <li key={pi}>{pt}</li>
                ))}
              </ul>
              <div className="timeline-tags">
                {exp.tags.map((tag) => (
                  <span key={tag} className="timeline-tag">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Center line */}
        <div className="timeline-line" />
      </div>
    </section>
  );
}

export default Experience;
