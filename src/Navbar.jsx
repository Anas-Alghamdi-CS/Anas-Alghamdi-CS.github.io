import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/experience">Experience</NavLink>
      <NavLink to="/skills">Skills</NavLink>
      <NavLink to="/education">Education</NavLink>
    </motion.nav>
  );
}
