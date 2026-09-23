import React from 'react';
import { motion } from 'framer-motion';
import profileData from '../profile_data.json';

export default function Education() {
  const { education, courses } = profileData;

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: 'spring' } }
  };

  const pageVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 1.05, transition: { duration: 0.3 } }
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
          Education & Certifications
        </motion.h2>
        
        <motion.div 
          className="timeline-item" 
          style={{borderLeft: 'none', paddingLeft: 0, marginBottom: '2rem'}}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 style={{color: 'var(--accent)', fontSize: '1.8rem'}}>{education[0].degree}</h3>
          <span className="date" style={{fontSize: '1rem', marginTop: '0.5rem'}}>{education[0].university} | Expected: {education[0].graduation_date} | GPA: {education[0].gpa}</span>
        </motion.div>

        <motion.h3 
          style={{fontSize: '1.4rem', marginTop: '2.5rem', color: 'var(--accent)', marginBottom: '1rem'}}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Courses & Trainings
        </motion.h3>
        
        <motion.ul 
          style={{paddingLeft: '1.2rem', color: '#444', lineHeight: '2', listStyleType: 'square'}}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.5 } }
          }}
        >
          {courses.map((course, i) => (
            <motion.li 
              style={{marginBottom: '1rem', fontSize: '1.2rem', fontWeight: '600', cursor: 'default'}} 
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.02, color: 'var(--accent)', x: 10 }}
            >
              {course}
            </motion.li>
          ))}
        </motion.ul>
      </section>
    </motion.div>
  );
}
