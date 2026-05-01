import React from 'react';
import { motion } from 'framer-motion';

const AuthoritySection = () => {
  return (
    <section className="py-24 bg-[#FAFAFA] dark:bg-white/5 transition-colors">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-none dark:text-white">
              L'Expertise d'un <br />
              <span className="text-martial-red">Maître</span>
            </h2>
            <div className="space-y-8">
              <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                Philippe Bouvier, 7e Dan FFK, dédie sa vie à l'enseignement du Karaté Shotokan. Son approche pédagogique, héritée des plus grands maîtres, allie tradition et modernité pour une efficacité maximale.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-white dark:bg-martial-black p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                  <p className="text-3xl font-black text-martial-red mb-1">40+</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Années de pratique</p>
                </div>
                <div className="bg-white dark:bg-martial-black p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                  <p className="text-3xl font-black text-martial-red mb-1">7e Dan</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Haut Grade FFK</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-martial-black transform -rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?auto=format&fit=crop&q=80&w=1000" 
                alt="Philippe Bouvier - Expert Karaté" 
                className="w-full aspect-square object-cover grayscale"
              />
            </div>
            {/* Stamp / Badge */}
            <div className="absolute -bottom-6 -left-6 bg-martial-black dark:bg-white text-white dark:text-martial-black w-32 h-32 rounded-full flex flex-col items-center justify-center text-center p-4 shadow-xl transform rotate-12">
              <span className="text-[10px] font-black uppercase tracking-widest mb-1">Expertise</span>
              <span className="text-sm font-bold uppercase leading-tight">Certifiée <br /> FFK</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
