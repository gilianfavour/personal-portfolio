import React from 'react';
import { motion } from 'framer-motion';
import { MdFiberManualRecord } from 'react-icons/md';

const experiences = [
  {
    id: 1,
    role: "Full Stack Software Engineer",
    company: "Kendall Kitchen (Official Platform)",
    period: "2026",
    type: "Client's Project",
    points: [
      "Architected and built a decoupled full-stack online food ordering, corporate feeding subscription, and catering reservation system",
      "Engineered responsive customer frontend using Next.js, TypeScript, React, and Tailwind CSS with real-time menu browsing and checkout",
      "Developed a robust Laravel REST API backend with Sanctum authentication, Spatie permissions, and custom business logic",
      "Integrated Filament v5 administrative management dashboard for real-time inventory tracking and automated daily financial reconciliation",
    ],
    tags: ["Next.js", "Laravel", "TypeScript", "Tailwind CSS", "Filament v5", "MySQL", "REST API"],
    color: "#9b7daa",
  },
  {
    id: 2,
    role: "Junior Flutter Developer & ERPNext Engineer",
    company: "TECHWISE SOLUTIONS",
    period: "2026 – Present",
    type: "Full-Time",
    points: [
      "Worked hands-on in building, feature expansion, and continuous maintenance of cross-platform Flutter mobile applications",
      "Developed, customized, and maintained ERPNext & Frappe framework modules, building custom DocTypes, Python server scripts, workflows, and webhooks",
      "Created custom Frappe REST APIs to seamlessly integrate ERPNext backend data with mobile apps and third-party systems",
      "Collaborated closely with cross-functional teams to debug, optimize, and maintain live enterprise production software",
    ],
    tags: ["Flutter", "ERPNext", "Frappe", "Dart", "Python", "REST API", "MySQL"],
    color: "#7e5e8f",
    current: true,
  },
  {
    id: 3,
    role: "Backend Developer",
    company: "WNETF (WestNile Education Trust Fund)",
    period: "2025",
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
    id: 4,
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
    id: 5,
    role: "Founder & Software Engineer",
    company: "Farmer's Companion",
    period: "2026 – Present",
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
    id: 6,
    role: "UI/UX Designer & Frontend Developer",
    company: "PRESTO",
    period: "2026",
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
    id: 7,
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
