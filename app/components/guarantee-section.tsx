'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

const guaranteePoints = [
  'Sin contratos de permanencia',
  'Cancela cuando quieras, sin penalidades',
  'Reembolso total si no hay resultados en 30 días',
  'Transparencia total en cada peso invertido',
];

export default function GuaranteeSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="garantia" className="py-20 sm:py-28 bg-dark-800">
      <div ref={ref} className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto text-center"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-green-500/5 rounded-3xl blur-3xl" />

          <div className="relative bg-dark-700 border border-green-500/20 rounded-3xl p-10 sm:p-14">
            <div className="inline-flex p-4 rounded-2xl bg-green-500/10 text-green-400 mb-6">
              <ShieldCheck size={48} />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
              O <span className="text-green-400">funciona</span>,{' '}
              o <span className="text-green-400">no pagas</span>
            </h2>

            <p className="text-gray-300 text-lg sm:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
              Trabajamos con una garantía real porque confiamos en nuestro sistema. Si en <strong className="text-white">30 días no obtienes resultados medibles</strong>, te devolvemos el 100% de tus honorarios. Sin preguntas, sin letra chica, sin excusas.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-10 text-left">
              {guaranteePoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 bg-green-500/5 border border-green-500/10 rounded-xl px-4 py-3"
                >
                  <CheckCircle2 size={18} className="text-green-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{point}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="#formulario"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-xl transition-all hover:shadow-lg hover:shadow-green-500/25"
            >
              Quiero empezar sin riesgo
              <ArrowRight size={20} />
            </a>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-sm mx-auto">
              {[
                { val: '30', label: 'días de garantía' },
                { val: '100%', label: 'reembolso' },
                { val: '0', label: 'riesgo' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                >
                  <div className="text-3xl font-extrabold text-green-400">{stat.val}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
