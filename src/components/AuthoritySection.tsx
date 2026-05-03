import React from 'react';
import { motion } from 'framer-motion';

interface AuthoritySectionProps {
  imageSrc?: string;
}

const AuthoritySection = ({ imageSrc }: AuthoritySectionProps) => {
  return (
    <section id="authority" className="py-24 bg-martial-deep-black text-white overflow-hidden relative">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none grayscale contrast-150">
        <img 
          src="https://images.unsplash.com/photo-1549413203-049830c25a07?auto=format&fit=crop&q=80&w=2000" 
          alt="" 
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative inline-block mb-12">
              <div className="absolute -inset-4 border border-martial-red rounded-2xl rotate-3 opacity-30"></div>
              <img 
                src={imageSrc || "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=800"} 
                alt="Philippe Bouvier" 
                className="rounded-xl w-full h-[600px] object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-martial-red font-bold text-sm uppercase tracking-[0.4em] mb-6 block">
                Maîtrise & Lignage
              </span>
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                Philippe Bouvier <br /> 
                <span className="text-gray-700 dark:text-gray-300">7e Dan FFK</span>
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-200 mb-10 leading-relaxed font-light italic">
                "Transmettre l'essence du Shotokan telle que Sensei Taiji Kase me l'a confiée : une pratique puissante, enracinée et en constante évolution."
              </p>
              
              <div className="space-y-8">
                {[
                  { title: "Contenu Certifié", desc: "Programmes conformes au référentiel officiel de la Fédération Française de Karaté." },
                  { title: "Lignée Historique", desc: "Une pratique héritée directement de Gichin Funakoshi et Taiji Kase." },
                  { title: "Progression Libre", desc: "Apprenez à votre rythme, sans engagement, sur tous vos écrans." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-martial-red/30 flex items-center justify-center text-martial-red font-black">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg uppercase tracking-wide mb-1">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
