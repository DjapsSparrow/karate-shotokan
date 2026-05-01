import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white dark:bg-martial-black transition-colors">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-martial-gray dark:bg-white/5 -skew-x-12 translate-x-20 z-0" />
      
      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-martial-red/10 dark:bg-martial-red/20 text-martial-red mb-8">
            <span className="w-2 h-2 rounded-full bg-martial-red animate-pulse" />
            <span className="text-xs font-black uppercase tracking-widest">Formation 100% en ligne</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8 dark:text-white">
            Maîtrisez le <br />
            <span className="text-martial-red">Karaté</span> <br />
            Shotokan
          </h1>
          
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-lg font-medium leading-relaxed">
            Apprenez l'excellence martiale avec Philippe Bouvier, 7e Dan FFK. Une progression structurée, de la ceinture blanche à la ceinture noire.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#programmes" className="btn-primary w-full sm:w-auto shadow-2xl shadow-martial-red/40">
              Découvrir les programmes
            </a>
            <a href="/le-karate" className="btn-secondary w-full sm:w-auto dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-martial-black">
              Notre histoire
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl transform rotate-3">
            <img 
              src="https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?auto=format&fit=crop&q=80&w=1000" 
              alt="Pratique du Karaté Shotokan" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-martial-black/60 to-transparent" />
          </div>
          {/* Decorative shapes */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-martial-red/10 dark:bg-martial-red/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-martial-black/5 dark:bg-white/5 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
