import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const sections = [
    {
      title: "L'École",
      links: [
        { name: "L'Histoire", href: "/le-karate" },
        { name: "Le dojo", href: "/le-dojo" },
        { name: "Philippe Bouvier", href: "/#authority" },
      ]
    },
    {
      title: "Formations",
      links: [
        { name: "Ceinture Jaune", href: "/ceinture-jaune" },
        { name: "Ceinture Orange", href: "/ceinture-orange" },
        { name: "Ceinture Verte", href: "/ceinture-verte" },
        { name: "Ceinture Bleue", href: "/ceinture-bleue" },
        { name: "Ceinture Marron", href: "/ceinture-marron" },
        { name: "Ceinture Noire", href: "/ceinture-noire" },
        { name: "Katas Supérieurs", href: "/katas-superieurs" },
      ]
    },
    {
      title: "Le Club",
      links: [
        { name: "Les Cours", href: "/le-dojo#cours" },
        { name: "Les Horaires", href: "/le-dojo#horaires" },
        { name: "Accès & Plan", href: "/le-dojo#acces" },
      ]
    },
    {
      title: "Support & Légal",
      links: [
        { name: "Espace Élève", href: "https://fudoshin.schoolmaker.co/" },
        { name: "FAQ", href: "/#faq" },
        { name: "Mentions Légales", href: "/mentions-legales" },
        { name: "Contact", href: "mailto:contact@karate-shotokan.fr" },
      ]
    }
  ];

  return (
    <footer className="bg-martial-black dark:bg-[#020202] text-white pt-24 pb-12 transition-colors">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 flex items-center justify-center">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain invert" />
              </div>
              <span className="font-bold text-xl tracking-tight uppercase">
                Karaté <span className="text-martial-red">Shotokan</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Apprendre le Karaté Shotokan selon l'enseignement traditionnel de Sensei Taiji Kase. 
              Une progression certifiée, accessible partout, 24/7.
            </p>
          </div>

          {/* Links Cols */}
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-8">
              <h4 className="font-black uppercase tracking-[0.2em] text-xs text-martial-red">{section.title}</h4>
              <ul className="flex flex-col gap-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            © {currentYear} Karaté Shotokan. Tous droits réservés.
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-martial-red">Fudoshin Solutions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
