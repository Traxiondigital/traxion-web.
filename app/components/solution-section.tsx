'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, BarChart3, MessageSquare, Palette } from 'lucide-react';
import Image from 'next/image';

const solutions = [
  {
    icon: Target,
    title: 'Captación automatizada de principio a fin',
    desc: 'Anuncio → formulario → CRM → WhatsApp. Todo conectado para que ningún lead se pierda.',
  },
  {
    icon: Palette,
    title: 'Creatividad que convierte, no solo que se ve bonita',
    desc: 'Diseñamos anuncios con copy estratégico e ideas visuales que generan clics reales, no solo impresiones.',
  },
  {
    icon: MessageSquare,
    title: 'Seguimiento instantáneo por WhatsApp',
    desc: 'Cada lead que llega es contactado en segundos de forma automatizada. La velocidad de respuesta es clave para cerrar ventas.',
  },
  {
    icon: BarChart3,
    title: 'Reporte semanal con datos reales',
    desc: 'Sabrás exactamente cuántos leads llegaron, cuánto costó cada uno y qué optimizamos para la siguiente semana.',
  },
];

export default function SolutionSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 sm:py-28 bg-dark-800">
      <div ref={ref} className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">La solución</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-6">
              Un sistema que{' '}
              <span className="text-gradient">llena tu agenda</span> de forma predecible
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              En TRAXION combinamos <strong className="text-white">estrategia, creatividad y tecnología</strong> para construir un flujo constante de clientes cualificados que llegan directo a ti, sin que tengas que perseguirlos.
            </p>

            <div className="space-y-4">
              {solutions.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-dark-700/50 hover:bg-dark-700 border border-transparent hover:border-blue-500/20 transition-all"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 flex-shrink-0">
                    <s.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{s.title}</h3>
                    <p className="text-sm text-gray-400">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3]"
          >
            <Image
              src="https://cdn.abacus.ai/images/72ad64c5-1837-435a-97e8-570ec6b42538.png"
              alt="Dashboard de marketing digital mostrando resultados positivos y crecimiento de leads"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-800/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-dark-700/80 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <p className="text-sm text-gray-400 mb-1">Resultado promedio de nuestros clientes</p>
                <p className="text-2xl font-extrabold text-white">+47 leads <span className="text-blue-400">en el primer mes</span></p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
