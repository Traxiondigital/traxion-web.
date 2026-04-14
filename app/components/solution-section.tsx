'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Users, TrendingUp, Calendar } from 'lucide-react';
import Image from 'next/image';

const solutions = [
  {
    icon: Zap,
    title: 'Campañas en Instagram y Facebook',
    desc: 'Mostramos tu hospedaje a personas que ya están buscando alojamiento. Ellos nos encuentran, no nosotros a ellos.',
  },
  {
    icon: Users,
    title: 'Formulario de reserva integrado',
    desc: 'Los interesados dejan sus datos en un formulario simple. Recibes los datos directamente en tu WhatsApp o email.',
  },
  {
    icon: TrendingUp,
    title: 'Clientes potenciales todos los días',
    desc: 'No dependerás de temporada alta. Tendrás un flujo constante de personas interesadas en tu propiedad.',
  },
  {
    icon: Calendar,
    title: 'Ocupa tus fechas vacías',
    desc: 'Llena esos días entre semana y temporada baja que antes dejabas sin ingresos. Cada reserva es dinero en tu bolsillo.',
  },
];

export default function SolutionSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 sm:py-28 bg-dark-800">
      <div ref={ref} className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">La solución</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-6">
              Creamos un sistema que te trae{' '}
              <span className="text-gradient">potenciales clientes todos los días</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              A través de campañas en redes sociales, mostramos tu hospedaje a personas que ya están buscando dónde alojar, y las llevamos a un formulario donde dejan sus datos para reservar.
            </p>

            <div className="space-y-4">
              {solutions.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-dark-700/50 hover:bg-dark-700 border border-transparent hover:border-blue-500/20 transition-all"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 flex-shrink-0">
                    <s.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{s.title}</h3>
                    <p className="text-sm text-gray-400">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3]"
          >
            <Image
              src="https://cdn.abacus.ai/images/72ad64c5-1837-435a-97e8-570ec6b42538.png"
              alt="Sistema de reservas de Traxion Digital mostrando crecimiento de ocupación en hospedajes"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-800/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-dark-700/80 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <p className="text-sm text-gray-400 mb-1">Resultado promedio de nuestros clientes</p>
                <p className="text-2xl font-extrabold text-white">+35 reservas <span className="text-blue-400">en el primer mes</span></p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
