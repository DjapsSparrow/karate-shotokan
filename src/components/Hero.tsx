import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="#050505" d="M44.7,-76.4C58.3,-69.2,70.1,-57.4,77.6,-43.8C85.1,-30.2,88.3,-15.1,87.6,-0.4C86.9,14.3,82.4,28.6,74.9,41.2C67.4,53.8,56.9,64.7,44.3,72.4C31.7,80.1,17.1,84.5,1.9,81.3C-13.3,78.1,-29.1,67.3,-41.7,56.3C-54.3,45.3,-63.7,34.1,-71.4,20.8C-79.1,7.5,-85.1,-7.9,-83.4,-22.6C-81.7,-37.3,-72.3,-51.3,-59.8,-59C-47.3,-66.7,-31.7,-68.1,-17.8,-75.6C-3.9,-83.1,8.3,-96.7,21.5,-96.6C34.7,-96.5,48.9,-82.7,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container-custom">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block bg-martial-red/10 text-martial-red font-bold text-xs uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8">
              Enseignement Traditionnel
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] mb-8 tracking-tighter">
              Apprendre le Karaté <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-martial-black to-martial-red/70">Shotokan</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl font-light leading-relaxed">
              Maîtrisez la discipline selon l'enseignement de <span className="font-semibold text-martial-black">Sensei Taiji Kase</span>. Accès 24/7, contenu certifié FFK et progression sans engagement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#programmes" 
                className="btn-primary"
              >
                Découvrir les Programmes
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: '#050505', color: '#fff' }}
                whileTap={{ scale: 0.95 }}
                href="https://fudoshin.schoolmaker.co/" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Accéder à mon Espace
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-20 flex items-center gap-12 border-t border-gray-100 pt-10 grayscale opacity-40"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-black">7e Dan</span>
              <span className="text-xs uppercase tracking-widest font-bold">Grade FFK</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black">+180</span>
              <span className="text-xs uppercase tracking-widest font-bold">Vidéos HD</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black">24/7</span>
              <span className="text-xs uppercase tracking-widest font-bold">Accès Libre</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
