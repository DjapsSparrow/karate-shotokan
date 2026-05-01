import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  offerUrl: string;
}

const StickyCTA: React.FC<Props> = ({ offerUrl }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const scrollPercent = (scrolled / scrollHeight) * 100;
      
      // Show after 15% scroll
      setIsVisible(scrollPercent > 15);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-8 left-0 right-0 z-50 px-4 pointer-events-none"
        >
          <div className="container-custom max-w-4xl mx-auto pointer-events-auto">
            <div className="bg-martial-black text-white p-6 md:p-8 rounded-[2.5rem] shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/10 backdrop-blur-md bg-opacity-95">
              <div className="text-center lg:text-left">
                <p className="text-martial-red font-black uppercase text-[10px] tracking-[0.3em] mb-1">Démarrer maintenant</p>
                <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight max-w-[300px]">L'intégralité du programme pour seulement</h3>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-6 w-full lg:w-auto">
                <div className="flex flex-col gap-3 w-full md:w-72">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/10 border border-white/10 p-3 rounded-xl text-center">
                      <p className="text-xl font-black text-white leading-none">4,90€</p>
                      <p className="text-[9px] text-gray-400 uppercase font-bold mt-1">/ mois</p>
                    </div>
                    <div className="bg-white/5 border border-white/5 p-3 rounded-xl text-center opacity-60">
                      <p className="text-xl font-black text-white leading-none">49€</p>
                      <p className="text-[9px] text-gray-400 uppercase font-bold mt-1">/ an</p>
                    </div>
                  </div>
                  <p className="text-[10px] text-martial-red font-black uppercase tracking-widest text-center animate-pulse">
                    1 semaine d'essai gratuit
                  </p>
                </div>

                <a 
                  href={offerUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary !bg-martial-red !text-white !px-10 !py-4 w-full md:w-auto text-center shadow-2xl shadow-martial-red/40 hover:scale-105 transition-transform text-sm font-black uppercase tracking-widest whitespace-nowrap"
                >
                  Commencez l'essai
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
