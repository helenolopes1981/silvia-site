import { motion } from 'motion/react';
import { Mail, Phone, Instagram, Facebook, Youtube, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-brand-black/80">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Vamos Criar Momentos <br />
                <span className="text-brand-red">Inesquecíveis Juntos!</span>
              </h2>
              <p className="text-white/60 text-lg mb-10">
                Pronta para elevar o nível do seu próximo evento? Entre em contato para uma consultoria musical personalizada e orçamento sem compromisso.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 glass rounded-xl group-hover:bg-brand-red/20 transition-colors">
                    <Mail className="text-brand-red" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase font-bold tracking-widest">E-mail</p>
                    <p className="text-white font-medium">contato@silviabandaenigma.com.br</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="p-3 glass rounded-xl group-hover:bg-brand-red/20 transition-colors">
                    <Phone className="text-brand-red" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase font-bold tracking-widest">Telefone / WhatsApp</p>
                    <p className="text-white font-medium">+55 (31) 98228-4101</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
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
                    className="p-3 glass rounded-full hover:bg-brand-red hover:text-white transition-all duration-300"
                    aria-label="Social link"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/60">Nome</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-red transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-white/60">Telefone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-red transition-colors"
                      placeholder="(31) 98228-4101"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/60">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-red transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="eventType" className="text-sm font-medium text-white/60">Tipo de Evento</label>
                  <select 
                    id="eventType" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-red transition-colors appearance-none"
                  >
                    <option value="corporativo">Corporativo</option>
                    <option value="casamento">Casamento</option>
                    <option value="aniversario">Aniversário</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/60">Mensagem</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-red transition-colors resize-none"
                    placeholder="Conte-nos sobre seu evento..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full justify-center py-4 text-lg">
                  <Send size={20} />
                  Enviar Pedido de Orçamento
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
