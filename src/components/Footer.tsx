import { motion } from 'motion/react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-display font-extrabold tracking-tighter mb-6">
              SÍLVIA <span className="text-brand-red">BANDA ENIGMA</span>
            </h2>
            <p className="text-white/50 max-w-sm leading-relaxed">
              Performance vocal profissional, pensada para emocionar e criar conexões reais com o público.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-red mb-6">Navegação</h3>
            <ul className="space-y-4">
              {['Home', 'Projetos', 'Sobre', 'Contato'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/60 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-red mb-6">Redes Sociais</h3>
            <div className="flex gap-4">
              {[
                { icon: <Instagram size={20} />, href: 'https://www.instagram.com/silviabandaenigma' },
                { icon: <Facebook size={20} />, href: '#' },
                { icon: <Youtube size={20} />, href: '#' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass rounded-lg hover:bg-brand-red hover:text-white transition-all"
                  aria-label="Social link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-white/40">
              silviabandaenigma.com.br/bio
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            Copyright © {currentYear} Sílvia Banda Enigma. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-xs text-white/30">
            <a href="#" className="hover:text-white">Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
