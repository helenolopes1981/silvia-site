import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Instagram, Facebook, Youtube, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'corporativo',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `*Orçamento*
    
*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*E-mail:* ${formData.email}
*Tipo de Evento:* ${formData.eventType}
*Mensagem:* ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/5531982284101?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

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
                A música transforma momentos em memórias inesquecíveis.<br />
                Vamos criar juntos algo perfeito para o seu evento.<br />
                Entre em contato e receba um orçamento personalizado.
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
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white/60">Nome</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
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
                      value={formData.phone}
                      onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-red transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="eventType" className="text-sm font-medium text-white/60">Tipo de Evento</label>
                  <select 
                    id="eventType" 
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-red transition-colors appearance-none text-white"
                  >
                    <option value="corporativo" className="bg-brand-black text-white">Festa de 15 Anos</option>
                    <option value="casamento" className="bg-brand-black text-white">Casamento</option>
                    <option value="aniversario" className="bg-brand-black text-white">Aniversário</option>
                    <option value="outro" className="bg-brand-black text-white">Outro</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/60">Mensagem</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-red transition-colors resize-none"
                    placeholder="Conte-nos sobre seu evento..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full justify-center py-4 text-lg">
                  <Send size={20} />
                  Enviar Pedido via WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
