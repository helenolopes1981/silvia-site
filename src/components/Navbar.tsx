import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Diferenciais', href: '#premios' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl md:text-2xl font-display font-extrabold tracking-tighter text-white"
        >
          SÍLVIA <span className="text-brand-red">& COMPANHIA</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-brand-red transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contato" className="btn-primary py-2 text-sm">
            Orçamento
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 glass rounded-2xl p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-white/90"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contato" 
            className="btn-primary justify-center"
            onClick={() => setIsOpen(false)}
          >
            Orçamento
          </a>
        </motion.div>
      )}
    </nav>
  );
}
