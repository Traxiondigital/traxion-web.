'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Facebook, MessageCircle, Brain, Database } from 'lucide-react';
import Image from 'next/image';

const techs = [
  {
    icon: Facebook,
    name: 'Meta Ads',
    desc: 'Socio integrado de Meta. Campañas optimizadas en Facebook e Instagram para máximo alcance.',
    image: 'https://cdn.abacus.ai/images/d3cde9fa-920a-4757-a7c6-31e6e5740812.png',
  },
  {
    icon: Database,
    name: 'Privyr CRM',
    desc: 'Gestión inteligente de leads. Cada contacto se organiza y se le da seguimiento automatizado.',
    image: null,
  },
  {
    icon: MessageCircle,
    name: 'WhatsApp Business',
    desc: 'Automatización de mensajes para contactar leads al instante y aumentar la tasa de conversión.',
    image: 'https://cdn.abacus.ai/images/4b8745d8-e849-416c-a191-a61ac56df4a0.png',
  },
  {
    icon: Brain,
    name: 'Inteligencia Artificial',
    desc: 'Segmentación avanzada con IA para encontrar a tu cliente ideal con máxima precisión.',
    image: 'https://cdn.abacus.ai/images/d3301c03-cd18-42b8-988e-c6509f13b43a.png',
  },
];

export default function TechSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="tecnologia" className="py-20 sm:py-28 bg-dark-800">
      <div ref={ref} className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Tecnología</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-4">
            Herramientas de <span className="text-gradient">última generación</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Usamos la mejor tecnología disponible para maximizar cada peso invertido en publicidad.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techs.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl bg-dark-700 hover:bg-dark-600 transition-all hover:shadow-lg overflow-hidden"
            >
              {t.image && (
                <div className="relative aspect-[4/3] bg-dark-600">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-700 to-transparent" />
                </div>
              )}
              <div className="p-5">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 inline-flex mb-3">
                  <t.icon size={22} />
                </div>
                <h3 className="font-bold mb-2">{t.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
