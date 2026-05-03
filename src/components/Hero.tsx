import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  imageSrc?: string;
}

const Hero = ({ imageSrc }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 -z-10 w-1/2 h-[80%] opacity-5 pointer-events-none flex justify-end items-center overflow-hidden">
        <img 
          src={imageSrc || "/src/assets/images/shotokan-tiger.jpg"} 
          alt="Shotokan Tiger" 
          className="h-full w-auto object-contain translate-x-1/4 dark:invert"
        />
      </div>

      <div className="container-custom">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="md:motion-safe:animate-none"
          >
            <span className="inline-block bg-martial-red/10 text-red-700 dark:text-martial-red font-bold text-xs uppercase tracking-[0.3em] px-4 py-2 rounded-full mb-8">
              Enseignement Traditionnel
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] mb-8 tracking-tighter dark:text-white">
              Apprendre le Karaté <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-martial-black to-martial-red/70 dark:from-white dark:to-martial-red">Shotokan</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
              Maîtrisez la discipline selon l'enseignement de <span className="font-semibold text-martial-black dark:text-white">Sensei Taiji Kase</span>. Accès 24/7, contenu certifié FFK et progression sans engagement.
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
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'currentColor' }}
                whileTap={{ scale: 0.95 }}
                href="https://fudoshin.schoolmaker.co/" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary dark:bg-white/5 dark:text-white dark:border-white/10"
              >
                Accéder à mon Espace
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-20 flex items-center gap-12 border-t border-gray-100 dark:border-white/10 pt-10 grayscale opacity-40 dark:text-white"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-black">7e Dan</span>
              <span className="text-xs uppercase tracking-widest font-bold opacity-60">Grade FFK</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black">+180</span>
              <span className="text-xs uppercase tracking-widest font-bold opacity-60">Vidéos HD</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-black">24/7</span>
              <span className="text-xs uppercase tracking-widest font-bold opacity-60">Accès Libre</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
