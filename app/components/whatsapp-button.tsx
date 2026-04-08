'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const whatsappUrl = 'https://wa.me/56931018919?text=Hola%20TRAXION%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20sus%20servicios%20de%20marketing%20digital';

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-lg shadow-green-500/25 transition-all hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={22} />
      <span className="hidden sm:inline">WhatsApp</span>
    </motion.a>
  );
}
