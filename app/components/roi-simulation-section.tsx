
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DollarSign, TrendingUp } from 'lucide-react';

export default function RoiSimulationSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="roi-simulation" className="py-20 sm:py-28 bg-[#0a0a0a]">
      <div ref={ref} className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Rentabilidad Comprobada</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-4">
            ¿Cuántas reservas necesitas para <span className="text-gradient">recuperar tu inversión</span>? La matemática es simple.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Descubre cómo una pequeña inversión puede generar un gran impacto en tu ocupación y ganancias.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-dark-700 border border-white/5 rounded-3xl p-8 sm:p-12 shadow-xl text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <DollarSign size={48} className="text-green-400" />
            <p className="text-4xl sm:text-5xl font-extrabold text-white">
              Ticket Promedio: <span className="text-green-400">$75.000 CLP</span>
            </p>
          </div>

          <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
            Considerando un ticket promedio de **$75.000 CLP por noche** en tu alojamiento:
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-dark-800 p-6 rounded-xl border border-green-500/20">
              <h3 className="text-2xl font-bold text-white mb-3">Recupera tu Inversión</h3>
              <p className="text-green-400 text-5xl font-extrabold mb-3">4</p>
              <p className="text-gray-300 text-lg">reservas adicionales al mes para cubrir nuestros honorarios.</p>
            </div>
            <div className="bg-dark-800 p-6 rounded-xl border border-green-500/20">
              <h3 className="text-2xl font-bold text-white mb-3">Ganancia Neta</h3>
              <p className="text-green-400 text-5xl font-extrabold mb-3">+5</p>
              <p className="text-gray-300 text-lg">reservas y todo es margen puro para tu negocio.</p>
            </div>
          </div>

          <p className="text-gray-500 text-sm max-w-3xl mx-auto">
            Esta es una simulación referencial basada en promedios de mercado. Los resultados reales pueden variar según tu tipo de alojamiento, ubicación y capacidad, pero nuestro enfoque es siempre maximizar tu retorno.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
