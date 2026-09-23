import React from 'react';
import { motion } from 'framer-motion';
import profileData from '../profile_data.json';

export default function Home() {
  const { personal_info } = profileData;

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 }
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <motion.div 
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <section className="hero glass-card">
        <motion.h1 variants={itemVariants}>{personal_info.name}</motion.h1>
        <motion.p variants={itemVariants}>{personal_info.title} | {personal_info.location}</motion.p>
        
        <motion.div className="social-links" variants={itemVariants}>
          {personal_info.links.linkedin && (
            <motion.a 
              whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: '#fff', boxShadow: '0 10px 20px rgba(63, 114, 175, 0.4)' }} 
              whileTap={{ scale: 0.95 }}
              href={personal_info.links.linkedin} target="_blank" rel="noreferrer" className="social-btn"
            >
              LinkedIn
            </motion.a>
          )}
          {personal_info.links.github && (
            <motion.a 
              whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: '#fff', boxShadow: '0 10px 20px rgba(63, 114, 175, 0.4)' }} 
              whileTap={{ scale: 0.95 }}
              href={personal_info.links.github} target="_blank" rel="noreferrer" className="social-btn"
            >
              GitHub
            </motion.a>
          )}
          {personal_info.links.twitter_x && (
            <motion.a 
              whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)', color: '#fff', boxShadow: '0 10px 20px rgba(63, 114, 175, 0.4)' }} 
              whileTap={{ scale: 0.95 }}
              href={personal_info.links.twitter_x} target="_blank" rel="noreferrer" className="social-btn"
            >
              X (Twitter)
            </motion.a>
          )}
        </motion.div>
      </section>
    </motion.div>
  );
}
