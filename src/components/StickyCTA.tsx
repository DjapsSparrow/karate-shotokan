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
          <div className="max-w-4xl mx-auto pointer-events-auto w-full">
            <div className="bg-martial-black text-white p-8 md:p-10 rounded-[3rem] shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10 border border-white/10 backdrop-blur-md bg-opacity-95">
              <div className="text-center lg:text-left flex-1">
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-[0.85]">Tout le programme <br /> pour</h3>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 w-full lg:w-auto flex-shrink-0">
                <div className="flex flex-col gap-3 w-full md:w-64">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/10 border border-white/10 p-4 rounded-2xl text-center">
                      <p className="text-2xl font-black text-white leading-none">4,90€</p>
                      <p className="text-[9px] text-gray-400 uppercase font-bold mt-2 tracking-widest">/ mois</p>
                    </div>
                    <div className="bg-white/5 border border-white/5 p-4 rounded-2xl text-center opacity-60">
                      <p className="text-2xl font-black text-white leading-none">49€</p>
                      <p className="text-[9px] text-gray-400 uppercase font-bold mt-2 tracking-widest">/ an</p>
                    </div>
                  </div>
                  <p className="text-[10px] text-martial-red font-black uppercase tracking-[0.2em] text-center animate-pulse">
                    1 semaine d'essai gratuit
                  </p>
                </div>

                <a 
                  href={offerUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary !bg-martial-red !text-white !px-12 !py-5 w-full md:w-auto text-center shadow-2xl shadow-martial-red/40 hover:scale-105 transition-transform text-xs font-black uppercase tracking-[0.15em] whitespace-nowrap"
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
