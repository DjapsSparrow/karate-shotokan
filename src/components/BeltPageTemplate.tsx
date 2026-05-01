import React from 'react';
import { motion } from 'framer-motion';

interface BeltPageProps {
  color: string;
  hex: string;
  title: string;
  description: string;
  curriculum: string[];
  ctaLink: string;
}

const BeltPageTemplate: React.FC<BeltPageProps> = ({ color, hex, title, description, curriculum, ctaLink }) => {
  return (
    <div className="pt-32 pb-24">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <div 
              className="w-32 h-3 mx-auto mb-8 rounded-full"
              style={{ backgroundColor: hex }}
            />
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
              Formation <br /> <span className="text-martial-red">Ceinture {color}</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-martial-gray rounded-[3rem] p-8 md:p-16 border border-gray-100 flex flex-col md:flex-row gap-16 items-center shadow-xl shadow-black/5">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-black uppercase mb-8 flex items-center gap-4">
                <span className="w-8 h-8 bg-martial-red text-white rounded-lg flex items-center justify-center text-sm">?</span>
                Au programme
              </h2>
              <ul className="space-y-4">
                {curriculum.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-2 h-2 bg-martial-red rounded-full mt-2" />
                    <p className="text-gray-700 font-medium">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:w-1/2 flex flex-col items-center">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 w-full mb-8">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-400">Contenu</span>
                  <span className="bg-martial-red/10 text-martial-red px-3 py-1 rounded-full text-[10px] font-bold uppercase">Certifié FFK</span>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Vidéos HD</span>
                    <span className="font-bold">20+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Accès</span>
                    <span className="font-bold">Illimité 24/7</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Engagement</span>
                    <span className="font-bold">Aucun</span>
                  </div>
                </div>
                <a 
                  href={ctaLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary !py-4 !text-base"
                >
                  S'inscrire maintenant
                </a>
              </div>
              <p className="text-xs text-gray-400 text-center uppercase tracking-widest font-bold">
                Paiement sécurisé via SchoolMaker
              </p>
            </div>
          </div>
          
          {/* SEO Content Placeholder */}
          <div className="mt-20 prose prose-lg max-w-none text-gray-600">
            <h3 className="text- martial-black font-black uppercase tracking-tight">Pourquoi passer sa ceinture {color} ?</h3>
            <p>
              Le passage de grade en Karaté Shotokan est une étape cruciale dans la vie du karatéka. 
              Pour la ceinture {color}, vous devrez démontrer une maîtrise des techniques de base (Kihon), 
              des positions traditionnelles et des Katas correspondants à ce niveau d'expertise.
            </p>
            <p>
              Notre formation vous donne toutes les clés pour réussir votre examen devant les juges de la Fédération, 
              avec une attention particulière portée aux détails techniques de la lignée Taiji Kase.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BeltPageTemplate;
