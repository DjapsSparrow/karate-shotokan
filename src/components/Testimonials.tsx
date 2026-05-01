import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  { 
    name: "Hervé Diebold", 
    role: "Ceinture Jaune", 
    content: "Je suis agréablement surpris par le support Web de Karaté qui est une source de savoir interactif que je consulte quand bon me semble. Un grand merci pour les développeurs et participants à cet outil ludique et convivial.",
    rating: 5
  },
  { 
    name: "Maurice Gonedec", 
    role: "Ceinture Noire Krav Maga", 
    content: "J’ai trouvé cette formation en ligne très intéressante, pragmatique, chacun pouvant évoluer à son rythme et revenir à tout moment sur des séquences précédentes… L'utilité se retrouve encore renforcée dans le contexte de pandémie… A goûter sans modération !",
    rating: 5
  },
  { 
    name: "Nicolas Decaillon", 
    role: "Ceinture Blanche", 
    content: "Avec mon rythme de vie actuel, ma présence aux cours au dojo n’est pas évidente, mais grâce à la formation en ligne je garde le lien et je ne perds pas le fil de mon enseignement.",
    rating: 5
  },
  { 
    name: "Guillaume Gras", 
    role: "Ceinture Noire 1er Dan", 
    content: "La formation m'a permis de réviser les fondamentaux hors dojo. C’est un très bon outil complémentaire à la formation avec le professeur.",
    rating: 5
  },
  { 
    name: "Véronique Poncet", 
    role: "Ceinture Blanche", 
    content: "Cette formation en ligne est un très bon programme d’accompagnement pour progresser rapidement. C’est une très bonne initiative, étant donné le contexte actuel. Je remercie Philippe et Yann ainsi que Thomas pour la réalisation de cette formation en ligne.",
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
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  // Display indices for "two by two"
  const getVisibleTestimonials = () => {
    const first = testimonials[index];
    const second = testimonials[(index + 1) % testimonials.length];
    return [first, second];
  };

  return (
    <section id="faq" className="py-24 bg-martial-gray overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Stats */}
          <div className="lg:w-1/4 grid grid-cols-2 gap-4 shrink-0">
            {stats.map((stat) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-3xl border border-gray-100 flex flex-col items-center justify-center text-center shadow-sm"
              >
                <span className="text-3xl font-black text-martial-black mb-1">{stat.value}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Testimonials Slider */}
          <div 
            className="lg:w-3/4 w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative h-[450px] md:h-[350px]">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full"
                >
                  {getVisibleTestimonials().map((t, i) => (
                    <div
                      key={`${t.name}-${i}`}
                      className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-black/5 relative flex flex-col h-full"
                    >
                      <div className="flex gap-1 mb-6">
                        {[...Array(t.rating)].map((_, starIdx) => (
                          <svg key={starIdx} className="w-4 h-4 text-martial-red" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-base text-martial-black font-medium leading-relaxed mb-auto italic">
                        "{t.content}"
                      </p>
                      <div className="flex items-center gap-4 mt-8">
                        <div className="w-12 h-12 bg-martial-gray rounded-full flex items-center justify-center text-martial-black font-bold border border-gray-100">
                          {t.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold text-xs uppercase tracking-wider">{t.name}</h4>
                          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">{t.role}</span>
                        </div>
                      </div>
                      <div className="absolute top-10 right-10 text-6xl text-gray-50 font-black pointer-events-none select-none">
                        "
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
              
              {/* Dots */}
              <div className="flex justify-center gap-2 mt-16">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${index === i ? 'bg-martial-black w-6' : 'bg-gray-200 hover:bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
