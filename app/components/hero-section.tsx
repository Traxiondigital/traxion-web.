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
          alt="Traxion Marketing Agency - Captamos clientes cualificados para tu negocio"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/90 via-dark-900/80 to-dark-900" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Contenido de Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
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

            <div className="mt-12 flex flex-wrap gap-4 sm:gap-6 text-sm text-gray-400">
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

          {/* Foto del Fundador */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative w-full aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl group">
              <Image
                src="/images/fundador-traxion-digital.png"
                alt="Fundador de Traxion Digital - Especialista en captación de clientes"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-dark-800/80 backdrop-blur-md rounded-2xl border border-white/10">
                <p className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-1">Estrategia Real</p>
                <p className="text-white text-lg font-medium">"Captamos clientes cualificados para tu negocio"</p>
              </div>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
