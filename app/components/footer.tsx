'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Mail, Phone, Instagram, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Tecnología', href: '#tecnologia' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Precios', href: '#precios' },
  { label: 'Garantía', href: '#garantia' },
];

export default function Footer() {
  const [year, setYear] = useState(2026);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#050505] border-t border-white/5">
      {/* CTA Final */}
      <div className="py-16 border-b border-white/5">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            ¿Listo para llenar tu agenda de <span className="text-gradient">clientes cualificados</span>?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Empieza hoy con garantía de 30 días. Sin contratos, sin riesgo.
          </p>
          <a
            href="#formulario"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/25"
          >
            Comenzar ahora
            <ArrowRight size={20} />
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <Image
                src="/images/logo-traxion.png"
                alt="TRAXION logo"
                width={120}
                height={36}
                className="h-8 w-auto mb-4"
              />
              <p className="text-sm text-gray-500 leading-relaxed">
                Agencia de marketing digital especializada en generación de leads con Meta Ads, creatividad estratégica y automatización.
              </p>
            </div>

            {/* Nav */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Navegación</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Contacto</h4>
              <div className="space-y-3">
                <a
                  href="mailto:contacto@traxiondigital.cl"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
                >
                  <Mail size={16} className="text-blue-400" />
                  contacto@traxiondigital.cl
                </a>
                <a
                  href="https://wa.me/56931018919"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
                >
                  <Phone size={16} className="text-green-400" />
                  +569 3101 8919
                </a>
                <a
                  href="https://instagram.com/traxiondigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
                >
                  <Instagram size={16} className="text-pink-400" />
                  @traxiondigital
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 text-center text-xs text-gray-600">
            © {year} TRAXION Marketing Agency. Todos los derechos reservados. · Chile
          </div>
        </div>
      </div>
    </footer>
  );
}
