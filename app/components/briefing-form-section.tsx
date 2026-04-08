'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Send,
  Loader2,
  CheckCircle2,
  FileText,
  Users,
  Target,
  Phone,
  DollarSign,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

const steps = [
  {
    id: 'negocio',
    title: 'Sobre tu negocio',
    icon: FileText,
    fields: [
      { name: 'productoServicio', label: '¿Qué producto o servicio quieres promocionar?', type: 'textarea', placeholder: 'Ej: Consultoría, tienda online, etc.', required: true },
      { name: 'diferenciador', label: '¿Qué te diferencia de tu competencia?', type: 'textarea', placeholder: 'Ej: 10 años de experiencia, garantía única...', required: true },
    ]
  },
  {
    id: 'cliente',
    title: 'Tu cliente ideal',
    icon: Users,
    fields: [
      { name: 'clienteIdeal', label: 'Describe a tu cliente ideal', type: 'textarea', placeholder: 'Edad, ubicación, intereses...', required: true },
      { name: 'valorPromedio', label: 'Valor promedio de tu servicio', type: 'text', placeholder: 'Ej: $50.000 CLP', required: true },
    ]
  },
  {
    id: 'objetivos',
    title: 'Objetivos y Presupuesto',
    icon: Target,
    fields: [
      { name: 'objetivoCampana', label: 'Objetivo principal', type: 'select', options: ['Captar leads', 'Vender online', 'Aumentar visibilidad', 'Otro'], required: true },
      { name: 'presupuestoMensual', label: 'Presupuesto mensual para publicidad', type: 'select', options: ['Menos de $100.000 CLP', '$100.000-$300.000 CLP', 'Más de $300.000 CLP'], required: true },
    ]
  },
  {
    id: 'contacto',
    title: 'Datos de contacto',
    icon: Phone,
    fields: [
      { name: 'nombre', label: 'Tu nombre', type: 'text', placeholder: 'Nombre completo', required: true },
      { name: 'whatsapp', label: 'WhatsApp de contacto', type: 'text', placeholder: '+569...', required: true },
    ]
  }
];

export default function BriefingFormSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState<any>({});

  const handleChange = (field: string, value: string) => {
    setForm((prev: any) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    const currentFields = steps[currentStep].fields;
    const isStepValid = currentFields.every(f => !f.required || form[f.name]);
    if (isStepValid) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    } else {
      setError('Por favor completa todos los campos obligatorios.');
      setTimeout(() => setError(''), 3000);
    }
  };

  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep !== steps.length - 1) return nextStep();
    
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Error al enviar');
      setSuccess(true);
    } catch (err: any) {
      setError('Error al enviar el formulario. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <section id="formulario" className="py-20 sm:py-28 bg-[#0a0a0a]">
        <div className="max-w-[600px] mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="p-10 rounded-3xl bg-dark-700 border border-green-500/20">
            <CheckCircle2 size={64} className="mx-auto text-green-400 mb-4" />
            <h3 className="text-2xl font-extrabold mb-3">¡Estrategia en camino!</h3>
            <p className="text-gray-400">Revisaremos tu información y te contactaremos por WhatsApp en menos de 24 horas.</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="formulario" className="py-20 sm:py-28 bg-[#0a0a0a]">
      <div ref={ref} className="max-w-[700px] mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-12">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Paso {currentStep + 1} de {steps.length}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-4">Diseñemos tu <span className="text-gradient">estrategia</span></h2>
        </motion.div>

        <div className="bg-dark-700 border border-white/5 rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="flex justify-between mb-8">
            {steps.map((s, i) => (
              <div key={i} className={`h-1.5 flex-1 rounded-full mx-1 transition-all ${i <= currentStep ? 'bg-blue-500' : 'bg-white/10'}`} />
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    {(() => { const Icon = steps[currentStep].icon; return <Icon size={24} />; })()}
                  </div>
                  <h3 className="text-xl font-bold">{steps[currentStep].title}</h3>
                </div>

                <div className="space-y-5">
                  {steps[currentStep].fields.map((f) => (
                    <div key={f.name}>
                      <label className="block text-sm font-semibold mb-2">{f.label} {f.required && <span className="text-red-400">*</span>}</label>
                      {f.type === 'textarea' ? (
                        <textarea
                          value={form[f.name] || ''}
                          onChange={(e) => handleChange(f.name, e.target.value)}
                          placeholder={f.placeholder}
                          className="form-input w-full"
                          rows={3}
                          required={f.required}
                        />
                      ) : f.type === 'select' ? (
                        <div className="flex flex-wrap gap-2">
                          {f.options?.map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => handleChange(f.name, opt)}
                              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${form[f.name] === opt ? 'bg-blue-500 text-white' : 'bg-dark-600 text-gray-400 hover:bg-dark-500'}`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <input
                          type="text"
                          value={form[f.name] || ''}
                          onChange={(e) => handleChange(f.name, e.target.value)}
                          placeholder={f.placeholder}
                          className="form-input w-full"
                          required={f.required}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {error && <div className="text-red-400 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">{error}</div>}

            <div className="flex gap-4 pt-4">
              {currentStep > 0 && (
                <button type="button" onClick={prevStep} className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all">
                  <ArrowLeft size={20} /> Atrás
                </button>
              )}
              <button type="submit" disabled={loading} className="flex-[2] flex items-center justify-center gap-2 px-6 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/25">
                {loading ? <Loader2 size={20} className="animate-spin" /> : currentStep === steps.length - 1 ? <><Send size={20} /> Enviar Estrategia</> : <><ArrowRight size={20} /> Siguiente</>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
