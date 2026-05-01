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
    <footer className="bg-martial-black text-white pt-24 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 flex items-center justify-center">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-xl tracking-tight uppercase">
                Karaté <span className="text-martial-red">Shotokan</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Apprendre le Karaté Shotokan selon l'enseignement traditionnel de Sensei Taiji Kase. 
              Une progression certifiée, accessible partout, 24/7.
            </p>
            <div className="flex gap-4">
              <a 
                href="http://facebook.com/KarateShotokanFr" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-martial-red transition-colors"
                aria-label="Suivez-nous sur Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a 
                href="http://instagram.com/KarateShotokanFr" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-martial-red transition-colors"
                aria-label="Suivez-nous sur Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-lg mb-6 uppercase tracking-wider">{section.title}</h3>
              <ul className="flex flex-col gap-4">
                {section.links.map((link) => {
                  const isExternal = link.href.startsWith('http') || link.href.startsWith('mailto:');
                  return (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="text-gray-400 hover:text-martial-red transition-colors text-sm font-medium"
                      >
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-12 border-t border-gray-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-xs">
            © {currentYear} Karaté Shotokan. Tous droits réservés.
          </p>
          <div className="flex items-center gap-2 grayscale opacity-50">
            <span className="text-[10px] uppercase font-bold tracking-tighter">Propulsé par</span>
            <a href="https://webomatik.fr" target="_blank" rel="noopener noreferrer" className="font-black text-sm">Webomatik.fr</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
