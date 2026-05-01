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

  const navLinks = [
    { name: 'Programmes', href: '/#programmes' },
    { name: 'Katas Supérieurs', href: '/katas-superieurs' },
    { name: 'Histoire', href: '/le-karate' },
    { name: 'Le Dojo', href: '/le-dojo' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 flex items-center justify-center transform group-hover:scale-110 transition-transform">
            <img src="/logo.png" alt="Logo Karaté Shotokan" className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-lg md:text-xl tracking-tight uppercase">
            Karaté <span className={`text-${beltColor}`}>Shotokan</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-semibold uppercase tracking-wider hover:text-${beltColor} transition-colors`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://fudoshin.schoolmaker.co/" 
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-martial-black text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-${beltColor} transition-all`}
          >
            Espace Élève
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-martial-black p-2"
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
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container-custom py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-bold uppercase tracking-widest"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://fudoshin.schoolmaker.co/" 
                className={`bg-${beltColor} text-white text-center py-4 rounded-xl font-bold uppercase`}
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
