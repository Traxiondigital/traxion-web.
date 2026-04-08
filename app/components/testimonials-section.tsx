'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    name: 'Roberto Méndez',
    role: 'Dueño de Clínica Dental · Santiago',
    content: 'En el primer mes tuvimos 38 consultas agendadas desde Meta Ads. Antes dependíamos 100% del boca a boca. Ahora tenemos un flujo constante y predecible.',
    metric: '+38 leads en 30 días',
    rating: 5,
  },
  {
    name: 'Carolina Soto',
    role: 'Directora de Agencia Inmobiliaria · Providencia',
    content: 'Lo que más me sorprendió fue la calidad de los leads. No son contactos fríos, son personas que ya vieron el anuncio, llenaron el formulario y están listos para hablar.',
    metric: '3 cierres en el primer mes',
    rating: 5,
  },
  {
    name: 'Andrés Silva',
    role: 'Consultor de Negocios · Viña del Mar',
    content: 'El reporte semanal es clave. Sé exactamente cuánto me costó cada lead y qué se está optimizando. Esa transparencia es lo que me hizo renovar sin dudarlo.',
    metric: '$2.400 CLP costo por lead',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="testimonios" className="py-20 sm:py-28 bg-dark-800">
      <div ref={ref} className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Resultados reales</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-4">
            Lo que dicen quienes ya{' '}
            <span className="text-gradient">llenan su agenda</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Negocios chilenos que dejaron de depender del boca a boca y hoy tienen un sistema de captación que trabaja por ellos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative flex flex-col p-8 rounded-3xl bg-dark-700 border border-white/5 hover:border-blue-500/30 transition-all group"
            >
              <Quote className="absolute top-6 right-8 text-blue-500/10 group-hover:text-blue-500/20 transition-colors" size={48} />

              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={16} className="fill-blue-500 text-blue-500" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 relative z-10 italic flex-1">
                "{t.content}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="flex-1">
                  <h4 className="font-bold text-white text-sm">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
                <div className="flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
                  <TrendingUp size={12} />
                  {t.metric}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
