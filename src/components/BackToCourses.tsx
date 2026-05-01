import React from 'react';
import { motion } from 'framer-motion';

const BackToCourses = () => {
  return (
    <div className="container-custom mt-20 mb-12">
      <div className="flex justify-center">
        <motion.a
          href="/#programmes"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ x: -10 }}
          className="group flex items-center gap-4 text-martial-black/60 dark:text-gray-400 hover:text-martial-black dark:hover:text-white font-black uppercase tracking-widest text-xs transition-colors py-4 px-8 border border-gray-100 dark:border-white/10 rounded-full hover:bg-gray-50 dark:hover:bg-white/5 shadow-sm"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 transition-transform group-hover:-translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour aux formations
        </motion.a>
      </div>
    </div>
  );
};

export default BackToCourses;
