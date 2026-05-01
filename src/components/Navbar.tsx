import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  beltColor?: string;
}

const Navbar: React.FC<NavbarProps> = ({ beltColor = "martial-red" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isProgrammesOpen, setIsProgrammesOpen] = useState(false);

  const navLinks = [
    { 
      name: 'Programmes', 
      href: '/#programmes',
      submenu: [
        { name: 'Ceinture Jaune', href: '/ceinture-jaune' },
        { name: 'Ceinture Orange', href: '/ceinture-orange' },
        { name: 'Ceinture Verte', href: '/ceinture-verte' },
        { name: 'Ceinture Bleue', href: '/ceinture-bleue' },
        { name: 'Ceinture Marron', href: '/ceinture-marron' },
        { name: 'Ceinture Noire', href: '/ceinture-noire' },
      ]
    },
    { name: 'Katas Supérieurs', href: '/katas-superieurs' },
    { name: 'Histoire', href: '/le-karate' },
    { name: 'Le Dojo', href: '/le-dojo' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 flex items-center justify-center transform group-hover:scale-110 transition-transform">
            <img src="/logo.png" alt="Logo Karaté Shotokan" className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-lg md:text-xl tracking-tight uppercase dark:text-white">
            Karaté <span className={`text-${beltColor}`}>Shotokan</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group py-2"
              onMouseEnter={() => link.submenu && setIsProgrammesOpen(true)}
              onMouseLeave={() => link.submenu && setIsProgrammesOpen(false)}
            >
              <a 
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-wider dark:text-white hover:text-${beltColor} transition-colors flex items-center gap-1`}
              >
                {link.name}
                {link.submenu && (
                  <svg className={`w-4 h-4 transition-transform duration-300 ${isProgrammesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>

              {/* Submenu Desktop */}
              {link.submenu && (
                <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${isProgrammesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                  <div className="w-60 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 p-2">
                    <div className="grid grid-cols-1 gap-1">
                      {link.submenu.map((sub) => (
                        <a 
                          key={sub.name}
                          href={sub.href}
                          className={`px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:bg-martial-gray dark:hover:bg-white/5 hover:text-${beltColor} transition-all`}
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          <a 
            href="https://fudoshin.schoolmaker.co/" 
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-martial-black text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-${beltColor} transition-all ml-4`}
          >
            Espace Élève
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-martial-black dark:text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-black border-t border-gray-100 dark:border-white/10 overflow-hidden"
          >
            <div className="container-custom py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <a 
                      href={link.href}
                      className="text-lg font-bold uppercase tracking-widest dark:text-white"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                    {link.submenu && (
                      <button 
                        onClick={() => setIsProgrammesOpen(!isProgrammesOpen)}
                        className={`w-10 h-10 rounded-full bg-martial-gray dark:bg-white/5 flex items-center justify-center transition-transform duration-300 ${isProgrammesOpen ? 'rotate-180' : ''}`}
                      >
                        <svg className="w-5 h-5 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>
                  
                  {link.submenu && (
                    <div className={`flex flex-col gap-2 pl-4 border-l-2 border-gray-100 dark:border-white/10 overflow-hidden transition-all duration-300 ${isProgrammesOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                      {link.submenu.map((sub) => (
                        <a 
                          key={sub.name}
                          href={sub.href}
                          className={`py-2 text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 hover:text-${beltColor}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a 
                href="https://fudoshin.schoolmaker.co/" 
                className={`bg-${beltColor} dark:bg-white dark:text-black text-white text-center py-4 rounded-xl font-bold uppercase mt-4`}
              >
                Espace Élève
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
