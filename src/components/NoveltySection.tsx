import React from 'react';
import { motion } from 'framer-motion';

const NoveltySection = () => {
  return (
    <section id="katas-superieurs" className="py-24 bg-martial-gray">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] p-8 md:p-16 shadow-2xl shadow-black/5 flex flex-col lg:flex-row items-center gap-12 border border-gray-100"
        >
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-6 -left-6 bg-martial-red text-white font-black px-6 py-2 rounded-full z-10 animate-pulse text-sm uppercase tracking-widest">
              Nouveauté
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video bg-gray-900 flex items-center justify-center relative group">
              <img 
                src="https://images.unsplash.com/photo-1552072805-2a9039d00e57?auto=format&fit=crop&q=80&w=1000" 
                alt="Katas Supérieurs" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 group-hover:bg-martial-red transition-colors">
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9]">
              Les Katas <br /> <span className="text-martial-red">Supérieurs</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Poussez votre pratique au niveau supérieur avec notre nouveau programme dédié aux Katas avancés. 
              Une décomposition pas-à-pas, les points de vigilance et les bunkaïs secrets révélés.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              {['6 Katas Avancés', 'Vues Multi-Angles', 'Bunkaï Détaillés', 'Accès Illimité'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-bold uppercase tracking-tight">
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
              className="inline-flex items-center gap-4 text-xl font-black uppercase tracking-tighter group"
            >
              Découvrir le programme
              <span className="w-12 h-12 bg-martial-black text-white rounded-full flex items-center justify-center group-hover:bg-martial-red transition-colors">
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
