import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ShineBorder from './ShineBorder';

interface Props {
  offerUrl: string;
  priceMonthly?: string;
  priceYearly?: string;
  color?: string; // e.g. "martial-red", "amber-500", etc.
}

const StickyCTA: React.FC<Props> = ({ 
  offerUrl, 
  priceMonthly = "4,90€", 
  priceYearly = "49€",
  color = "martial-red"
}) => {
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
            <div className="relative bg-martial-deep-black text-white p-6 md:px-10 md:py-5 rounded-[2.5rem] shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-6 backdrop-blur-md bg-opacity-95">
              <ShineBorder 
                borderWidth={1} 
                duration={14} 
                shineColor={["#E31B23", "#FFFFFF"]} 
              />
              <div className="hidden lg:block text-center lg:text-left flex-1">
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-none">Tout le programme <br /> pour</h3>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-10 w-full lg:w-auto flex-shrink-0">
                <div className="flex flex-col gap-2 w-full md:w-60">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/10 border border-white/10 p-3 rounded-xl text-center">
                      <p className="text-xl font-black text-white leading-none">{priceMonthly}</p>
                      <p className="text-[8px] text-gray-400 uppercase font-bold mt-1 tracking-widest">/ mois</p>
                    </div>
                    <div className="bg-white/5 border border-white/5 p-3 rounded-xl text-center opacity-60">
                      <p className="text-xl font-black text-white leading-none">{priceYearly}</p>
                      <p className="text-[8px] text-gray-400 uppercase font-bold mt-1 tracking-widest">/ an</p>
                    </div>
                  </div>
                  <p className={`hidden md:block text-[9px] text-${color} font-black uppercase tracking-[0.15em] text-center animate-pulse leading-none`}>
                    1 semaine d'essai gratuit
                  </p>
                </div>

                <div className="flex flex-col gap-3 w-full md:w-auto items-center">
                  <a 
                    href={offerUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`btn-primary !bg-${color} !text-white !px-12 !py-4 md:!py-3 w-full md:w-auto text-center shadow-2xl shadow-${color}/40 hover:scale-105 transition-transform text-xs font-black uppercase tracking-[0.15em] whitespace-nowrap`}
                  >
                    Commencez l'essai
                  </a>
                  <p className={`md:hidden text-[9px] text-${color} font-black uppercase tracking-[0.15em] text-center animate-pulse leading-none`}>
                    1 semaine d'essai gratuit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
