import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const lessons = [
  {
    number: 1,
    title: "Introduction",
    description: "Présentation de l'histoire du Karaté Shotokan, la tenue, le cérémonial, l'échauffement, le déroulé d'un entraînement, les différents niveaux etc. (Formation ceinture jaune)"
  },
  {
    number: 2,
    title: "Les Positions",
    description: "Présentation des différentes positions à maîtriser pour chaque passage de grade, en fonction de la couleur de la ceinture à obtenir"
  },
  {
    number: 3,
    title: "Les Déplacements",
    description: "Présentation des différents déplacements à maîtriser pour chaque passage de grade, en fonction de la couleur de la ceinture à obtenir"
  },
  {
    number: 4,
    title: "Les Techniques",
    description: "Présentation des différentes techniques, de défense et d'attaque, à maîtriser pour chaque passage de grade, en fonction de la couleur de la ceinture à obtenir"
  },
  {
    number: 5,
    title: "Le Kihon",
    description: "Présentation des différents exercices de Kihon (mises en application des positions, déplacements et techniques) à pratiquer pour chaque passage de grade, en fonction de la couleur de la ceinture à obtenir"
  },
  {
    number: 6,
    title: "Le Kata",
    description: "Présentation des différents katas à maîtriser pour chaque passage de grade, en fonction de la couleur de la ceinture à obtenir, en vue d'ensemble, en décomposition pas-à-pas, et en mise en application (Bunkai)"
  },
  {
    number: 7,
    title: "Le Kumite",
    description: "Exemples de kumite (exercices à pratiquer seul ou en binôme), en fonction de la couleur de la ceinture à obtenir"
  },
  {
    number: 8,
    title: "Conclusion",
    description: "Synthèse de la formation"
  }
];

const LessonCard = ({ lesson, index }: { lesson: typeof lessons[0], index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`group rounded-3xl p-6 transition-all duration-300 border border-transparent ${
        isOpen 
          ? 'bg-white dark:bg-white/10 shadow-xl shadow-black/5 border-gray-100 dark:border-white/10' 
          : 'bg-martial-gray dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 hover:shadow-lg'
      }`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex items-center justify-between gap-4"
      >
        <div className="flex items-center gap-4">
          <span className="flex-shrink-0 w-8 h-8 bg-white dark:bg-martial-black text-martial-red font-black text-[10px] flex items-center justify-center rounded-full shadow-sm">
            {lesson.number}
          </span>
          <h3 className="text-lg font-black uppercase tracking-tight text-martial-black dark:text-white group-hover:text-martial-red transition-colors">
            {lesson.title}
          </h3>
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-martial-red text-white rotate-180' : 'bg-white dark:bg-white/10 text-gray-400 dark:text-gray-500 group-hover:text-martial-red'}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-4 pb-2">
              <div className="w-8 h-1 bg-martial-red/20 rounded-full mb-4"></div>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed">
                {lesson.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const CourseStructure = () => {
  return (
    <section className="py-24 bg-white dark:bg-martial-black transition-colors overflow-hidden">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-martial-red leading-none mb-4">
              Structure <br /> <span className="text-martial-black dark:text-white transition-colors">des formations</span>
            </h2>
            <div className="w-20 h-2 bg-martial-red rounded-full mx-auto md:mx-0"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {lessons.map((lesson, index) => (
              <LessonCard key={index} lesson={lesson} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseStructure;
