import React from 'react';
import { motion } from 'framer-motion';
import profileData from '../profile_data.json';

export default function Experience() {
  const { experience } = profileData;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: 50, transition: { duration: 0.3 } }
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
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Experience
        </motion.h2>
        
        <div className="timeline">
          {experience.map((exp, index) => (
            <motion.div 
              className="timeline-item" 
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3>{exp.role} @ {exp.company}</h3>
              <span className="date">{exp.date}</span>
              <ul>
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
