import React from 'react';
import { motion } from 'framer-motion';
import ShineBorder from './ShineBorder';

const VideoTrailer = () => {
  return (
    <section className="py-24 bg-martial-white overflow-hidden">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] bg-martial-black aspect-video group"
          >
            <ShineBorder 
              borderWidth={3} 
              duration={10} 
              shineColor={["#E31B23", "#000000", "#E31B23"]}
              className="z-10 opacity-50 group-hover:opacity-100 transition-opacity"
            />
            
            <video 
              className="w-full h-full object-cover relative z-0"
              controls
              playsInline
              preload="metadata"
              poster="/images/hero-apercu.jpg"
            >
              <source src="/video/trailer.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>

            {/* Dark gradient overlay for a more cinematic look when paused/hovered */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-5 group-hover:opacity-0 transition-opacity duration-500"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <span className="text-martial-red font-bold text-xs uppercase tracking-[0.5em] mb-3 block">
              Trailer Officiel
            </span>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter dark:text-white">
              L'essence de notre <span className="text-martial-red">enseignement</span>
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto font-medium">
              Plongez au cœur de la pratique avec Philippe Bouvier (7e Dan FFK) et découvrez la qualité de nos formations en ligne.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoTrailer;
