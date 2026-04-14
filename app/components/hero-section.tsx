'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-dark-900">
      {/* Background con la portada de la agencia */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/traxion-marketing-agency-cover.png"
          alt="Traxion Marketing Agency - Generamos reservas para cabañas y alojamientos"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/95 via-dark-900/90 to-dark-900" />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 pt-24 pb-16 sm:pt-32 sm:pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
            <Zap size={16} />
            Agencia de Marketing Digital para Alojamientos
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-8">
            Llena tu cabaña con reservas todas las semanas sin depender solo de{' '}
            <span className="text-gradient">temporada alta</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed mx-auto">
            Generamos solicitudes de reserva de personas reales interesadas en alojarse en tu propiedad usando campañas en Instagram y Facebook.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#formulario"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-xl transition-all hover:shadow-xl hover:shadow-blue-500/25 hover:scale-[1.02]"
            >
              👉 Quiero más reservas
              <ArrowRight size={20} />
            </a>
            <a
              href="#precios"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-lg rounded-xl transition-all"
            >
              Ver planes y precios
            </a>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-gray-400 justify-center">
            <div className="flex items-center gap-2 bg-dark-800/50 px-4 py-2 rounded-lg border border-white/5">
              <Target size={16} className="text-blue-400" />
              Audiencia Cualificada
            </div>
            <div className="flex items-center gap-2 bg-dark-800/50 px-4 py-2 rounded-lg border border-white/5">
              <TrendingUp size={16} className="text-green-400" />
              Reservas Reales
            </div>
            <div className="flex items-center gap-2 bg-dark-800/50 px-4 py-2 rounded-lg border border-white/5">
              <Zap size={16} className="text-yellow-400" />
              Instagram & Facebook
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
