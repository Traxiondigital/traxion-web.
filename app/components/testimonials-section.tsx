'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, TrendingUp, PlayCircle } from 'lucide-react';

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
            Resultados que hablan por sí solos: <span className="text-gradient">Historias de éxito</span> en el sector turístico
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Sabemos que la credibilidad es clave. Aunque estamos expandiendo activamente nuestro portafolio en el sector turístico, ya contamos con casos de éxito que demuestran la efectividad de nuestro sistema.
          </p>
        </motion.div>

        {/* Video Testimonial Vertical (Reel Format) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col lg:flex-row gap-12 items-center justify-center"
        >
          {/* Video Vertical */}
          <div className="w-full lg:w-auto flex justify-center">
            <div className="relative w-full max-w-sm lg:max-w-none lg:w-80 aspect-[9/16] rounded-[32px] overflow-hidden border-8 border-dark-700 shadow-2xl bg-dark-700 group">
              <video 
                className="w-full h-full object-cover"
                poster="/images/traxion-marketing-agency-cover.png"
                controls
                controlsList="nodownload"
              >
                <source src="/testimonio-katherine-gonzalez.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity bg-dark-900/20">
                <PlayCircle className="text-blue-400 w-16 h-16 drop-shadow-lg" />
              </div>
            </div>
          </div>

          {/* Contenido de Reseña */}
          <div className="w-full lg:w-auto lg:max-w-md">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={20} className="fill-blue-500 text-blue-500" />
              ))}
            </div>
            
            <Quote className="text-blue-500/20 mb-4" size={48} />
            
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 leading-tight">
              "Logramos aumentar nuestras atenciones e ingresos de forma directa."
            </h3>
            
            <p className="text-gray-400 text-lg mb-8 italic leading-relaxed">
              "Antes de Traxion Digital, teníamos baja visibilidad y pocos pacientes. Gracias a su trato personalizado y soluciones rápidas, hoy tenemos un flujo constante de usuarios en nuestro centro de salud mental. ¡Recomendado 100%!"
            </p>
            
            <div className="flex items-center gap-4 p-6 rounded-2xl bg-dark-700/50 border border-white/5">
              <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-lg flex-shrink-0">
                KG
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Katherine González</h4>
                <p className="text-sm text-gray-500">Directora del Centro de Psicología y Arte</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonios de Texto */}
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
