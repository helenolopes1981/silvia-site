import { motion } from 'motion/react';
import { MessageCircle, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 glass rounded-full text-xs font-bold tracking-widest uppercase text-brand-red">
            Música de Alta Performance
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-extrabold mb-6 tracking-tight leading-tight">
            Sílvia & Companhia: <br />
            <span className="text-brand-red">O Show Perfeito </span> para Seu Evento.
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Mais de 35 anos de trajetória dedicados à música, criando apresentações que emocionam e transformam cada evento em uma experiência única.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contato" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto justify-center">
              <MessageCircle size={20} />
              Solicitar Orçamento
            </a>
            <a href="#projetos" className="btn-glass text-lg px-8 py-4 w-full sm:w-auto justify-center">
              <Play size={20} fill="white" />
              Ver Projetos
            </a>
          </div>
        </motion.div>
      </div>

      {/* Hero Image Placeholder / Visual Element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 md:h-96 glass rounded-t-[100px] border-b-0 opacity-20 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent"></div>
      </motion.div>
    </section>
  );
}
