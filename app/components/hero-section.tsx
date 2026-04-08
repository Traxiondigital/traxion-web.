'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://cdn.abacus.ai/images/471b3135-2178-47c9-b3c2-7581902fbc26.png"
          alt="Espacio de trabajo de marketing digital con dashboards de analítica"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/80 to-[#0a0a0a]" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Zap size={16} />
            Agencia de Marketing Digital Especializada
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            No vendemos "likes", construimos{' '}
            <span className="text-gradient">sistemas de ventas predecibles</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Atraemos clientes cualificados, los filtramos y los enviamos directamente a tu WhatsApp o CRM. 
            <strong className="text-white block mt-2">Creatividad estratégica + Tecnología = Resultados medibles.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#formulario"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-xl transition-all hover:shadow-xl hover:shadow-blue-500/25 hover:scale-[1.02]"
            >
              Llenar mi agenda
              <ArrowRight size={20} />
            </a>
            <a
              href="#precios"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-lg rounded-xl transition-all"
            >
              Ver planes y precios
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 sm:gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2 bg-dark-800/50 px-4 py-2 rounded-lg border border-white/5">
              <Target size={16} className="text-blue-400" />
              Segmentación Estratégica
            </div>
            <div className="flex items-center gap-2 bg-dark-800/50 px-4 py-2 rounded-lg border border-white/5">
              <TrendingUp size={16} className="text-green-400" />
              Optimización Semanal
            </div>
            <div className="flex items-center gap-2 bg-dark-800/50 px-4 py-2 rounded-lg border border-white/5">
              <Zap size={16} className="text-yellow-400" />
              Integración CRM
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
