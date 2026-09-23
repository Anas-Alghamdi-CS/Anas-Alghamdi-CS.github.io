import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profileData from './profile_data.json';
import './index.css';

// CV PDF path — served from public folder
const CV_PDF_PATH = '/Anas Alghamdi - Resume.pdf';

// Shared animation variants
const fadeUp = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12 } }
};

export default function App() {
  const [lang,  setLang]  = useState('ar');
  const [theme, setTheme] = useState('dark');

  const data = profileData[lang];
  const ui   = data.ui;

  // Apply theme & direction to document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.lang = lang;
  }, [theme, lang]);

  const toggleLang  = () => setLang(lang === 'en' ? 'ar' : 'en');
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Normalize description: always return array of strings
  const toArray = (desc) => {
    if (Array.isArray(desc)) return desc;
    if (typeof desc === 'string') return desc.split('. ').filter(Boolean).map(s => s.trim());
    return [];
  };

  return (
    <div className={`app-container ${lang === 'ar' ? 'font-arabic' : 'font-english'}`}>

      {/* ── Navbar ─────────────────────────────────────────────────────── */}
      <nav className="navbar">
        {/* Brand logo */}
        <button
          className="nav-logo"
          onClick={() => scrollTo('home')}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <div className="nav-logo-mark">AG</div>
          <span className="nav-logo-name">Anas Alghamdi</span>
        </button>

        {/* Nav links */}
        <div className="nav-links">
          <button onClick={() => scrollTo('home')}>      {ui.home}       </button>
          <button onClick={() => scrollTo('experience')}>{ui.experience} </button>
          <button onClick={() => scrollTo('projects')}>  {ui.projects}   </button>
          <button onClick={() => scrollTo('skills')}>    {ui.skills}     </button>
          <button onClick={() => scrollTo('education')}> {ui.education}  </button>
          <button onClick={() => scrollTo('certifications')}> {ui.certifications} </button>
        </div>

        {/* Controls: theme + language */}
        <div className="nav-controls">
          <button onClick={toggleTheme} className="control-btn theme-btn">
            {theme === 'dark' ? `☀️ ${ui.theme_light}` : `🌙 ${ui.theme_dark}`}
          </button>
          <button onClick={toggleLang} className="control-btn lang-btn">
            {ui.lang}
          </button>
        </div>
      </nav>

      <main>
        {/* ── Hero Section ──────────────────────────────────────────────── */}
        <section id="home" className="section-hero">
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.h1 variants={fadeUp}>{data.personal_info.name}</motion.h1>
            <motion.h2 variants={fadeUp}>{data.personal_info.title}</motion.h2>
            <motion.p variants={fadeUp} className="about-text">
              {data.personal_info.about}
            </motion.p>

            {/* Primary CTA: Download CV */}
            <motion.div className="hero-actions" variants={fadeUp}>
              <a
                href={CV_PDF_PATH}
                download="Anas Alghamdi - Resume.pdf"
                className="btn-primary"
              >
                ⬇ {ui.download_cv}
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div className="social-links" variants={fadeUp}>
              {Object.entries(data.personal_info.links).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                >
                  {key}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── Experience ────────────────────────────────────────────────── */}
        <section id="experience" className="section">
          <motion.h2
            className="section-title"
            initial="hidden" whileInView="visible"
            viewport={{ once: true }} variants={fadeUp}
          >
            {ui.experience}
          </motion.h2>

          <div className="timeline">
            {data.experience.map((exp, i) => (
              <motion.div
                key={i}
                className="timeline-item glass-card"
                initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
              >
                <div className="timeline-dot" />
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <span className="date">{exp.date}</span>
                <ul>
                  {toArray(exp.description).map((desc, j) => (
                    <li key={j}>{desc}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Projects ──────────────────────────────────────────────────── */}
        <section id="projects" className="section">
          <motion.h2
            className="section-title"
            initial="hidden" whileInView="visible"
            viewport={{ once: true }} variants={fadeUp}
          >
            {ui.projects}
          </motion.h2>

          <div className="projects-grid">
            {data.projects.map((proj, i) => (
              <motion.div
                key={i}
                className="project-card glass-card"
                initial="hidden" whileInView="visible"
                viewport={{ once: true }} variants={fadeUp}
                whileHover={{ y: -6 }}
              >
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <div className="tech-tags">
                  {proj.technologies.map((tech, j) => (
                    <span key={j} className="tech-tag">{tech}</span>
                  ))}
                </div>
                {proj.link && (
                  <div className="project-actions">
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline"
                    >
                      🔗 {ui.projects_btn_github}
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Skills ────────────────────────────────────────────────────── */}
        <section id="skills" className="section">
          <motion.h2
            className="section-title"
            initial="hidden" whileInView="visible"
            viewport={{ once: true }} variants={fadeUp}
          >
            {ui.skills}
          </motion.h2>

          <motion.div
            className="skills-container glass-card"
            initial="hidden" whileInView="visible"
            viewport={{ once: true }} variants={stagger}
          >
            {Object.entries(data.skills).map(([category, items], i) => (
              <motion.div key={i} className="skill-category" variants={fadeUp}>
                <h3 className="category-title">{ui[category] || category}</h3>
                <div className="skills-grid">
                  {items.map((skill, j) => (
                    <motion.span
                      key={j}
                      className="skill-badge"
                      whileHover={{ scale: 1.06 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Education ─────────────────────────────────────────────────── */}
        <section id="education" className="section">
          <motion.h2
            className="section-title"
            initial="hidden" whileInView="visible"
            viewport={{ once: true }} variants={fadeUp}
          >
            {ui.education}
          </motion.h2>

          <div className="education-container">
            {/* Degree card */}
            <motion.div
              className="glass-card"
              initial="hidden" whileInView="visible"
              viewport={{ once: true }} variants={fadeUp}
            >
              <h3>{data.education[0].degree}</h3>
              <p className="edu-details">
                {data.education[0].university} &nbsp;·&nbsp;
                GPA: {data.education[0].gpa} &nbsp;·&nbsp;
                {data.education[0].graduation_date}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Certifications ────────────────────────────────────────────── */}
        <section id="certifications" className="section">
          <motion.h2
            className="section-title"
            initial="hidden" whileInView="visible"
            viewport={{ once: true }} variants={fadeUp}
          >
            {ui.certifications}
          </motion.h2>

          <div className="education-container">
            {data.certifications && (
              <motion.div
                className="glass-card"
                initial="hidden" whileInView="visible"
                viewport={{ once: true }} variants={fadeUp}
              >
                <ul className="certs-list">
                  {data.certifications.map((cert, i) => (
                    <li key={i}>
                      <span className="cert-dot" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </section>

      </main>
    </div>
  );
}
