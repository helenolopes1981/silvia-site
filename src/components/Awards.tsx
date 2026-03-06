import { motion } from 'motion/react';
import { Award, Star, Users } from 'lucide-react';

const recognitions = [
  {
    icon: <Award className="text-brand-red" size={32} />,
    title: 'Melhor Performance Regional',
    description: 'Premiada como a banda de maior destaque em eventos corporativos de 2023 pela Associação Comercial.'
  },
  {
    icon: <Users className="text-brand-red" size={32} />,
    title: 'Satisfação Garantida',
    description: 'Mais de 500 eventos realizados com 100% de feedback positivo de empreendedores e marcas.'
  },
  {
    icon: <Star className="text-brand-red" size={32} />,
    title: 'Referência em Versatilidade',
    description: 'Reconhecida pela crítica musical pela transição impecável entre gêneros musicais distintos.'
  }
];

const testimonials = [
  {
    name: 'Ricardo Santos',
    role: 'CEO da TechFlow',
    content: 'A Sílvia Banda Enigma transformou nosso lançamento de produto. A energia e o profissionalismo foram fundamentais para o sucesso do evento.'
  },
  {
    name: 'Mariana Lima',
    role: 'Fundadora da Bloom Eventos',
    content: 'Contratar a Sílvia é garantia de tranquilidade. Ela entende o público e adapta o repertório de forma magistral.'
  }
];

export default function Awards() {
  return (
    <section id="premios" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Reconhecimento de Uma <span className="text-brand-red">Trajetória Brilhante</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {recognitions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl hover:border-brand-red/30 transition-colors group"
            >
              <div className="mb-6 p-4 bg-brand-red/10 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-white/60 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-red p-8 rounded-3xl relative"
            >
              <p className="text-lg italic text-white/90 mb-6">"{t.content}"</p>
              <div>
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-sm text-brand-red font-medium">{t.role}</p>
              </div>
              <Star className="absolute top-8 right-8 text-brand-red/20" size={48} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
