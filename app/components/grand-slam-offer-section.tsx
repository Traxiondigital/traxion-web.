
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Rocket, Gift, Zap, ChevronRight } from 'lucide-react';

export default function GrandSlamOfferSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const includedItems = [
    "Configuración de Campañas Meta Ads: Estrategias avanzadas en Facebook e Instagram para llegar a tu cliente ideal.",
    "Estrategia Comercial Adaptada: Un plan personalizado para tu tipo de alojamiento y ubicación.",
    "Lead Capture y Formularios Optimizados: Captura de datos de alta calidad para tus ventas.",
    "Seguimiento por WhatsApp: Automatización y scripts para convertir consultas en reservas.",
    "Optimización Semanal: Ajustes constantes para maximizar tu ROI.",
    "Acompañamiento Cercano: Soporte directo y estratégico para tu negocio.",
  ];

  const bonuses = [
    "Bono #1: Scripts de Respuesta por WhatsApp: Plantillas probadas para cerrar más ventas.",
    "Bono #2: Checklist para Temporada Baja: Estrategias para mantener tu ocupación alta todo el año.",
    "Bono #3: Mini Guía \"De Consulta a Reserva\": Técnicas avanzadas para tu equipo de ventas.",
  ];

  return (
    <section id="oferta-grand-slam" className="py-20 sm:py-28 bg-dark-900">
      <div ref={ref} className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">Oferta Exclusiva</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-4">
            <span className="text-gradient">Sistema de Reservas Predecibles</span> para Alojamientos Turísticos
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Nuestra propuesta de valor más potente para dueños de hospedajes que buscan resultados reales y garantizados.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-3xl bg-gradient-to-b from-red-500/10 to-dark-700 border border-red-500/30 p-8 sm:p-12 shadow-2xl shadow-red-500/10"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-red-500 text-white text-sm font-bold rounded-full flex items-center gap-2 whitespace-nowrap">
            <Zap size={14} className="fill-white" /> Garantía de Ocupación
          </div>

          <h3 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-6">
            Te ayudamos a llenar tus fechas disponibles con <span className="text-red-400">reservas reales en 14 días</span>, o no pagas nuestros honorarios.
          </h3>
          <p className="text-gray-300 text-center text-lg mb-10">
            Así de simple. Así de seguros estamos de nuestro sistema. Tu éxito es nuestro compromiso.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Rocket size={24} className="text-red-400" /> Qué Incluye
              </h4>
              <ul className="space-y-3">
                {includedItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <Check size={20} className="text-green-400 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Gift size={24} className="text-red-400" /> Bonos Exclusivos
              </h4>
              <ul className="space-y-3">
                {bonuses.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <Check size={20} className="text-green-400 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center bg-dark-800/50 p-6 rounded-xl border border-white/10 mb-10">
            <p className="text-lg font-bold text-white mb-3">
              Esta oferta exclusiva está disponible solo para <span className="text-red-400">5 nuevos alojamientos turísticos al mes</span> para asegurar la máxima dedicación y resultados. ¡No pierdas tu cupo!
            </p>
          </div>

          <div className="text-center">
            <a
              href="#formulario"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-red-500 hover:bg-red-600 text-white font-bold text-xl rounded-xl transition-all hover:shadow-xl hover:shadow-red-500/30"
            >
              Quiero Acceder a la Oferta Grand Slam
              <ChevronRight size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
