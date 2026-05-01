import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { 
    name: "Hervé Diebold", 
    role: "Pratiquant Shotokan", 
    content: "Une plateforme exceptionnelle pour préparer ses grades. Les vidéos de Philippe sont d'une clarté incroyable. On progresse vraiment à son rythme.",
    rating: 5
  },
  { 
    name: "Marc L.", 
    role: "Ceinture Noire 1er Dan", 
    content: "Le contenu sur les Katas supérieurs m'a permis de comprendre des détails que je n'avais jamais vus en dojo classique. Indispensable.",
    rating: 5
  },
  { 
    name: "Sarah M.", 
    role: "Débutante", 
    content: "J'avais peur de commencer seule, mais la formation ceinture jaune est parfaite. Tout est décomposé, on ne se sent jamais perdue.",
    rating: 5
  }
];

const stats = [
  { label: "Formations", value: "6" },
  { label: "Vidéos HD", value: "182" },
  { label: "Katas", value: "6" },
  { label: "Élèves", value: "1000+" },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-martial-gray overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Stats */}
          <div className="lg:w-1/3 grid grid-cols-2 gap-8">
            {stats.map((stat) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col items-center justify-center text-center shadow-sm"
              >
                <span className="text-4xl font-black text-martial-black mb-2">{stat.value}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Testimonials Carrousel (Simplified for static view) */}
          <div className="lg:w-2/3">
            <div className="flex flex-col gap-8">
              {testimonials.slice(0, 2).map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-xl shadow-black/5 relative"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-martial-red" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xl text-martial-black font-medium leading-relaxed mb-8 italic">
                    "{t.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-martial-black rounded-full flex items-center justify-center text-white font-bold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider">{t.name}</h4>
                      <span className="text-xs text-gray-400 font-bold uppercase tracking-tighter">{t.role}</span>
                    </div>
                  </div>
                  <div className="absolute top-10 right-10 text-6xl text-gray-50 font-black pointer-events-none select-none">
                    "
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
