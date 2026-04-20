'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, PenTool, Rocket, BarChart2, TrendingUp } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Diagnóstico Gratuito',
    desc: 'Analizamos tu situación actual y detectamos oportunidades de crecimiento para tu alojamiento.',
    color: 'blue',
  },
  {
    num: '02',
    icon: PenTool,
    title: 'Diseño de Estrategia',
    desc: 'Creamos un plan a medida para tu alojamiento, enfocado en atraer y convertir huéspedes.',
    color: 'purple',
  },
  {
    num: '03',
    icon: Rocket,
    title: 'Implementación y Lanzamiento',
    desc: 'Ponemos en marcha las campañas y el sistema de captación de reservas.',
    color: 'cyan',
  },
  {
    num: '04',
    icon: TrendingUp,
    title: 'Optimización Continua',
    desc: 'Ajustamos y escalamos para asegurar un flujo constante de huéspedes y maximizar tu ocupación.',
    color: 'green',
  },
];

const colorMap: Record<string, string> = {
  blue: 'from-blue-500/20 to-blue-500/5 text-blue-400 border-blue-500/20',
  purple: 'from-purple-500/20 to-purple-500/5 text-purple-400 border-purple-500/20',
  cyan: 'from-cyan-500/20 to-cyan-500/5 text-cyan-400 border-cyan-500/20',
  green: 'from-green-500/20 to-green-500/5 text-green-400 border-green-500/20',
  orange: 'from-orange-500/20 to-orange-500/5 text-orange-400 border-orange-500/20',
};

const iconBgMap: Record<string, string> = {
  blue: 'bg-blue-500/10 text-blue-400',
  purple: 'bg-purple-500/10 text-purple-400',
  cyan: 'bg-cyan-500/10 text-cyan-400',
  green: 'bg-green-500/10 text-green-400',
  orange: 'bg-orange-500/10 text-orange-400',
};

export default function MethodologySection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="metodologia" className="py-20 sm:py-28 bg-[#0a0a0a]">
      <div ref={ref} className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Cómo Funciona</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-4">
            Nuestro <span className="text-gradient">sistema de reservas</span> en 4 pasos
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Un proceso claro y eficiente diseñado para maximizar la ocupación de tu alojamiento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative p-6 rounded-2xl bg-gradient-to-b ${colorMap[step.color] ?? ''} border hover:scale-[1.02] transition-all group ${
                i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2.5 rounded-xl ${iconBgMap[step.color] ?? ''}`}>
                  <step.icon size={22} />
                </div>
                <span className="text-2xl font-extrabold text-white/10 group-hover:text-white/20 transition-colors">
                  {step.num}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
