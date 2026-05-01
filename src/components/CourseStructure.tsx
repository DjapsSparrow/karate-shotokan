import React from 'react';
import { motion } from 'framer-motion';

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

const CourseStructure = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-martial-red leading-none mb-4">
              Structure <br /> <span className="text-martial-black">des formations</span>
            </h2>
            <div className="w-20 h-2 bg-martial-red rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {lessons.map((lesson, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-martial-gray rounded-3xl p-8 hover:bg-white hover:shadow-2xl hover:shadow-black/5 border border-transparent hover:border-gray-100 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-martial-red font-black text-xs uppercase tracking-widest bg-white px-3 py-1 rounded-full shadow-sm">
                        Leçon {lesson.number}
                      </span>
                      <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-martial-black group-hover:text-martial-red transition-colors">
                        {lesson.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 font-medium leading-relaxed max-w-2xl">
                      {lesson.description}
                    </p>
                  </div>
                  <div className="hidden md:block">
                    <div className="w-12 h-1 bg-martial-red/20 group-hover:bg-martial-red rounded-full transition-colors"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseStructure;
