import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass p-2">
              <img 
                src="https://ialets.com/wp-content/uploads/2025/12/42A3717.webp" 
                alt="Sílvia Banda Enigma Portrait" 
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-red p-6 rounded-2xl max-w-[200px]">
              <p className="text-3xl font-bold text-brand-red">35+</p>
              <p className="text-sm font-medium text-white/80">Anos de trajetória musical profissional</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              A História por Trás da Música: <br />
              <span className="text-brand-red">Sílvia Banda Enigma</span>
            </h2>
            
            <article className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                Filha do renomado músico Joaquim do Mato Véio, Sílvia respira música desde o berço. Sua jornada começou aos 6 anos, e aos 18 já dominava o contra-baixo, realizando seu primeiro show profissional aos 18.
              </p>
              <p>
                Ao lado de seus irmãos Edmar e Edson, fundou a <span className="text-white font-semibold">Banda Enigma</span>, um projeto que se tornou referência em versatilidade e qualidade técnica em toda a região.
              </p>
              <blockquote className="border-l-4 border-brand-red pl-6 py-2 italic text-white text-xl font-medium">
                "Não saberia fazer outra coisa além de cantar. A música não é apenas minha profissão, é minha essência."
              </blockquote>
              <p>
                Com mais de Três décadas de estrada, Sílvia consolidou uma carreira brilhante, marcada pela capacidade de transitar entre gêneros e emocionar públicos diversos, desde eventos corporativos sofisticados até grandes celebrações populares.
              </p>
            </article>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
