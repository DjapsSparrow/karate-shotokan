import React from 'react';
import { motion } from 'framer-motion';
import ShineBorder from './ShineBorder';

interface NoveltySectionProps {
  imageSrc?: string;
}

const NoveltySection = ({ imageSrc }: NoveltySectionProps) => {
  return (
    <section id="katas-superieurs" className="py-24 bg-martial-gray">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white dark:bg-black/20 rounded-[2rem] p-8 md:p-16 shadow-2xl shadow-black/5 flex flex-col lg:flex-row items-center gap-12"
        >
          <ShineBorder 
            borderWidth={2} 
            duration={10} 
            shineColor={["#E31B23", "#050505", "#FFFFFF"]} 
          />
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-6 -left-6 bg-martial-red text-white font-black px-6 py-2 rounded-full z-10 animate-pulse text-sm uppercase tracking-widest">
              Nouveauté
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video bg-gray-900 relative group border-4 border-white/10">
              <img 
                src={imageSrc || "https://images.unsplash.com/photo-1552072805-2a9039d00e57?auto=format&fit=crop&q=80&w=1000"} 
                alt="Katas Supérieurs" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] dark:text-white">
              Les Katas <br /> <span className="text-martial-red">Supérieurs</span>
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Poussez votre pratique au niveau supérieur avec notre nouveau programme dédié aux Katas avancés. 
              Une décomposition pas-à-pas, les points de vigilance et les bunkaïs secrets révélés.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              {['6 Katas Avancés', 'Vues Multi-Angles', 'Bunkaï Détaillés', 'Accès Illimité'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-bold uppercase tracking-tight text-gray-700 dark:text-gray-200">
                  <svg className="w-5 h-5 text-martial-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <motion.a 
              whileHover={{ x: 10 }}
              href="/katas-superieurs" 
              className="inline-flex items-center gap-4 text-xl font-black uppercase tracking-tighter group dark:text-white"
            >
              Découvrir le programme
              <span className="w-12 h-12 bg-martial-black dark:bg-martial-red text-white rounded-full flex items-center justify-center group-hover:bg-martial-red dark:group-hover:bg-white dark:group-hover:text-martial-red transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NoveltySection;
