import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 'silvia-cia',
    title: 'Sílvia & Companhia',
    description: 'Um show sofisticado e versátil para eventos corporativos e casamentos, com repertório personalizado.',
    image: 'https://ialets.com/wp-content/uploads/2025/12/42A8248.jpg',
    category: 'Corporativo & Social'
  },
  {
    id: 'forrogode',
    title: 'ForróGODE',
    description: 'A fusão perfeita entre o ritmo do Nordeste e o balanço do pagode. Energia pura para festas.',
    image: 'https://ialets.com/wp-content/uploads/2025/12/01png-scaled.png',
    category: 'Festa & Show'
  },
  {
    id: 'pagonejo',
    title: 'PagoNEJO',
    description: 'Os maiores sucessos do sertanejo com a batida contagiante do pagode. O queridinho dos eventos.',
    image: 'https://ialets.com/wp-content/uploads/2026/04/chapeu.png',
    category: 'Popular'
  },
  {
    id: 'rocknejo',
    title: 'RockNEJO',
    description: 'Uma proposta inovadora que une a atitude do rock com o sentimento do sertanejo universitário.',
    image: 'https://ialets.com/wp-content/uploads/2025/12/42A9523.jpg',
    category: 'Inovação'
  }
];

export default function Projects() {
  return (
    <section id="projetos" className="py-24 bg-brand-black/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Nossos Projetos: <span className="text-brand-red">Versatilidade</span>
          </motion.h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Exploramos diferentes vertentes musicais para entregar a performance perfeita para o seu público e objetivo de marca.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden glass border-white/5 ${
                index === 1 ? 'lg:row-span-2' : ''
              } ${index === 3 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-bold text-brand-red uppercase tracking-widest mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-display font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-white/60 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
                <a 
                  href={`https://wa.me/5531982284101?text=Olá, gostaria de saber mais sobre o projeto ${project.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-white hover:text-brand-red transition-colors"
                >
                  Ver Detalhes <ExternalLink size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
