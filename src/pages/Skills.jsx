import React from 'react';
import { motion } from 'framer-motion';
import profileData from '../profile_data.json';

export default function Skills() {
  const { skills, tools, programming_languages } = profileData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200 } }
  };

  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      className="container"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <section className="glass-card">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Technical Skills
        </motion.h2>
        
        <h3 style={{fontSize: '1.4rem', marginTop: '1rem', color: 'var(--accent)'}}>Core Competencies</h3>
        <motion.div className="skills-grid" variants={containerVariants} initial="hidden" animate="visible">
          {skills.map((skill, i) => (
            <motion.span 
              className="skill-badge" 
              key={i} 
              variants={badgeVariants}
              whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: '#fff', rotate: 3, boxShadow: '0 5px 15px rgba(63,114,175,0.4)' }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
        
        <h3 style={{fontSize: '1.4rem', marginTop: '2rem', color: 'var(--accent)'}}>Programming Languages</h3>
        <motion.div className="skills-grid" variants={containerVariants} initial="hidden" animate="visible">
          {programming_languages.map((lang, i) => (
            <motion.span 
              className="skill-badge" 
              key={i} 
              variants={badgeVariants}
              whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: '#fff', rotate: -3, boxShadow: '0 5px 15px rgba(63,114,175,0.4)' }}
            >
              {lang}
            </motion.span>
          ))}
        </motion.div>

        <h3 style={{fontSize: '1.4rem', marginTop: '2rem', color: 'var(--accent)'}}>Tools & Technologies</h3>
        <motion.div className="skills-grid" variants={containerVariants} initial="hidden" animate="visible">
          {tools.map((tool, i) => (
            <motion.span 
              className="skill-badge" 
              key={i} 
              variants={badgeVariants}
              whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: '#fff', rotate: 3, boxShadow: '0 5px 15px rgba(63,114,175,0.4)' }}
            >
              {tool}
            </motion.span>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
}
