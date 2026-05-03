import React from 'react';
import { motion } from 'framer-motion';
import ShineBorder from './ShineBorder';

const belts = [
  { color: 'Jaune', hex: '#FFD700', slug: '/ceinture-jaune', price: 'Premium', desc: 'Les bases fondamentales et l\'esprit du Shotokan.' },
  { color: 'Orange', hex: '#FF8C00', slug: '/ceinture-orange', price: 'Premium', desc: 'Développez votre puissance et vos déplacements.' },
  { color: 'Verte', hex: '#228B22', slug: '/ceinture-verte', price: 'Premium', desc: 'Maîtrisez la fluidité et les enchaînements complexes.' },
  { color: 'Bleue', hex: '#0000FF', slug: '/ceinture-bleue', price: 'Premium', desc: 'Précision technique et anticipation du combat.' },
  { color: 'Marron', hex: '#8B4513', slug: '/ceinture-marron', price: 'Premium', desc: 'Vers l\'excellence et la maîtrise du Kihon.' },
  { color: 'Noire', hex: '#050505', slug: '/ceinture-noire', price: 'Elite', desc: 'Le début du véritable chemin vers le Grade FFK.' },
];

const PricingGrid = () => {
  return (
    <section id="programmes" className="py-24 bg-martial-white">
      <div className="container-custom text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 dark:text-white">
          Formations par <span className="text-martial-red">Niveaux</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-medium">
          Une progression structurée du débutant au confirmé. Sélectionnez votre prochain grade pour découvrir le programme complet.
        </p>
      </div>

      <div className="container-custom">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {belts.map((belt) => (
            <motion.a
              key={belt.color}
              href={belt.slug}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-martial-gray rounded-3xl p-10 flex flex-col items-center text-center transition-all hover:bg-white dark:hover:bg-white/5 hover:shadow-xl hover:shadow-black/5 overflow-hidden border border-gray-100 dark:border-white/5"
            >
              <ShineBorder 
                borderWidth={2} 
                duration={10} 
                shineColor={belt.color === 'Noire' ? ["#E31B23", "#FFD700", "#FFFFFF"] : belt.hex}
                className="opacity-40 group-hover:opacity-100 transition-opacity"
              />
              {/* Belt Visual */}
              <div 
                className="w-full h-4 mb-8 rounded-full shadow-inner"
                style={{ backgroundColor: belt.hex }}
              />
              
              <h3 className="text-2xl font-black uppercase mb-4 dark:text-white group-hover:text-martial-red transition-colors">
                Ceinture {belt.color}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-8 leading-relaxed">
                {belt.desc}
              </p>
              
              <div className="mt-auto pt-6 w-full border-t border-gray-200 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-martial-red">{belt.price}</span>
                <span className="font-black text-sm uppercase tracking-tighter flex items-center gap-2 dark:text-white group-hover:text-martial-red">
                  Détails
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingGrid;
