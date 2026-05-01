import React from 'react';
import { motion } from 'framer-motion';

const NoveltySection = () => {
  return (
    <section id="katas-superieurs" className="py-24 bg-[#FAFAFA] dark:bg-white/5 transition-colors">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=1000" 
                alt="Nouveautés Karaté" 
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-martial-red text-white p-8 rounded-3xl shadow-xl max-w-xs">
              <p className="text-sm font-black uppercase tracking-widest mb-2">Dernière Mise à jour</p>
              <p className="text-lg font-bold leading-tight">Nouveau module sur le timing et la distance en combat.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-none dark:text-white">
              Toujours à la <br />
              <span className="text-martial-red">Pointe</span> du Progrès
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-medium mb-10 leading-relaxed">
              Nous enrichissons régulièrement notre catalogue pour vous offrir le meilleur de l'enseignement martial. Chaque module est conçu pour être clair, précis et immédiatement applicable.
            </p>
            
            <div className="space-y-6">
              {[
                "Vidéos en résolution 4K pour une clarté totale",
                "Analyses détaillées sous plusieurs angles",
                "Fiches récapitulatives téléchargeables",
                "Suivi de progression personnalisé"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-martial-red/10 dark:bg-martial-red/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-martial-red" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-bold text-martial-black dark:text-white uppercase text-sm tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NoveltySection;
