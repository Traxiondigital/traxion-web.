'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LeadForm from './lead-form';

export default function BriefingFormSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="formulario" className="py-20 sm:py-28 bg-[#0a0a0a]">
      <div ref={ref} className="max-w-[800px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Diagnóstico Express</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-4">
            Diagnóstico Express: Descubre por qué tu alojamiento <span className="text-gradient">no se llena</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            En solo 60 segundos, identifica los puntos ciegos en tu estrategia de captación de reservas y recibe un análisis preliminar gratuito.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-dark-700 border border-white/5 rounded-3xl p-8 sm:p-12 shadow-xl"
        >
          <LeadForm />
        </motion.div>
      </div>
    </section>
  );
}
