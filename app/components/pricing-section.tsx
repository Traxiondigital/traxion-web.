'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, ArrowRight, Star, Megaphone, BarChart2, Users, Palette, FileBarChart } from 'lucide-react';

const planFeatures = [
  {
    icon: Megaphone,
    title: 'Campañas en Meta Ads',
    items: ['Configuración completa', 'Optimización semanal'],
  },
  {
    icon: BarChart2,
    title: 'Gestión publicitaria',
    items: ['Segmentación estratégica', 'Testing básico'],
  },
  {
    icon: Users,
    title: 'Generación de leads',
    items: ['Formularios en Meta', 'Integración a CRM (Privyr)'],
  },
  {
    icon: Palette,
    title: 'Creatividad',
    items: ['2 anuncios mensuales (copy + idea visual)', 'Estrategia visual diferenciada'],
    highlight: true,
  },
  {
    icon: FileBarChart,
    title: 'Reporte semanal',
    items: ['Leads generados', 'Costo por resultado', 'Recomendaciones'],
  },
];

export default function PricingSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="precios" className="py-20 sm:py-28 bg-[#0a0a0a]">
      <div ref={ref} className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Precios</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-4">
            Inversión que se <span className="text-gradient">paga sola</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Sin contratos largos. Mes a mes. Cancela cuando quieras.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative rounded-3xl bg-gradient-to-b from-blue-500/10 to-dark-700 border border-blue-500/30 p-8 sm:p-12 hover:shadow-2xl hover:shadow-blue-500/10 transition-all">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-blue-500 text-white text-sm font-bold rounded-full flex items-center gap-2 whitespace-nowrap">
              <Star size={14} className="fill-white" /> Plan Más Popular
            </div>

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">🚀</span>
                  <h3 className="text-2xl font-extrabold">PLAN BASE</h3>
                </div>
                <p className="text-blue-400 font-semibold text-lg">"Atracción & Leads"</p>
              </div>
              <div className="text-right">
                <div className="flex items-baseline gap-1 justify-end">
                  <span className="text-5xl font-extrabold text-white">$449.990</span>
                </div>
                <p className="text-gray-400 text-sm">mensual · IVA incluido</p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10 mb-8" />

            {/* Feature Groups */}
            <div className="space-y-6 mb-10">
              {planFeatures.map((group, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className={`rounded-2xl p-5 ${group.highlight ? 'bg-blue-500/10 border border-blue-500/30' : 'bg-white/3 border border-white/5'}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <group.icon size={18} className={group.highlight ? 'text-blue-400' : 'text-gray-400'} />
                    <h4 className={`text-sm font-bold uppercase tracking-wide ${group.highlight ? 'text-blue-300' : 'text-gray-300'}`}>
                      🔹 {group.title}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {group.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
                          <Check size={10} />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#formulario"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/30"
            >
              Quiero empezar ahora
              <ArrowRight size={20} />
            </a>

            <p className="text-xs text-gray-500 text-center mt-4">
              Sin permanencia. Cancela cuando quieras. Garantía 30 días.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
