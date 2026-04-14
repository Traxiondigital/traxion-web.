'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AlertTriangle, Calendar, MessageCircle, TrendingDown } from 'lucide-react';
import Image from 'next/image';

const problems = [
  {
    icon: Calendar,
    title: 'Dependes de fines de semana y temporada alta',
    desc: 'Tu ocupación sube y baja drásticamente. Entre semana o en temporada baja, tu hospedaje está vacía y pierdes dinero potencial.',
  },
  {
    icon: TrendingDown,
    title: 'Tienes fechas vacías que podrías estar facturando',
    desc: 'Hay semanas completas sin reservas. No tienes un sistema constante que te traiga clientes durante todo el año.',
  },
  {
    icon: MessageCircle,
    title: 'Te escriben, pero no concretan reservas',
    desc: 'Recibes consultas, pero muchas se pierden o los interesados se van con la competencia. No tienes un follow-up efectivo.',
  },
  {
    icon: AlertTriangle,
    title: 'No tienes un sistema constante de clientes',
    desc: 'Dependes del boca a boca o de plataformas de terceros que cobran comisión. Necesitas tu propio canal de adquisición.',
  },
];

export default function ProblemSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 sm:py-28 bg-[#0a0a0a]">
      <div ref={ref} className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">Me está pasando esto</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-4">
            Si tienes una hospedaje o alojamiento turístico,{' '}
            <span className="text-red-400">probablemente te pasa esto:</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Estos son los problemas que resolvemos cada día para nuestros clientes. Si te identificas con alguno, estás en el lugar correcto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-dark-700 hover:bg-dark-600 border border-transparent hover:border-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/5"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-red-500/10 text-red-400 flex-shrink-0 group-hover:bg-red-500/20 transition-colors">
                  <p.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">❌ {p.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 relative rounded-2xl overflow-hidden aspect-[21/9]"
        >
          <Image
            src="https://cdn.abacus.ai/images/a83dff90-151d-4111-9f28-d6ac930296b3.jpg"
            alt="Dueño de hospedaje preocupado por fechas vacías y falta de reservas - Traxion Digital"
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-white text-xl sm:text-2xl font-bold max-w-xl">
              "El 80% de las hospedajes que no generan ingresos constantes no tienen un sistema de marketing activo."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
