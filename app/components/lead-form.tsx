'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';

interface FormData {
  serviceType: string;
  location: string;
  units: string;
  pricePerNight: string;
  clientSources: string[];
  hasEmptyDates: string;
  monthlyBudget: string;
  interested: string;
  name?: string;
  phone?: string;
  email?: string;
}

const steps = [
  {
    id: 1,
    title: '¿Qué tipo de servicio turístico ofreces?',
    type: 'select',
    field: 'serviceType',
    options: ['Cabañas', 'Hotel', 'Lodge', 'Departamento', 'Otro'],
  },
  {
    id: 2,
    title: '¿Dónde se encuentra tu alojamiento?',
    type: 'text',
    field: 'location',
    placeholder: 'Ej: Puerto Varas, Los Lagos',
  },
  {
    id: 3,
    title: '¿Cuántas unidades tienes disponibles?',
    type: 'number',
    field: 'units',
    placeholder: 'Ej: 5',
  },
  {
    id: 4,
    title: '¿Cuánto vale una reserva promedio por noche?',
    type: 'currency',
    field: 'pricePerNight',
    placeholder: 'Ej: $150.000',
  },
  {
    id: 5,
    title: '¿Cómo consigues clientes hoy?',
    type: 'checkbox',
    field: 'clientSources',
    options: ['Instagram', 'Booking', 'Referidos', 'Facebook Ads', 'Google', 'Otro'],
  },
  {
    id: 6,
    title: '¿Tienes fechas donde te cuesta llenar?',
    type: 'select',
    field: 'hasEmptyDates',
    options: ['Sí, constantemente', 'Sí, en temporada baja', 'No, estoy siempre lleno'],
  },
  {
    id: 7,
    title: '¿Cuánto estás dispuesto a invertir mensualmente en publicidad?',
    type: 'select',
    field: 'monthlyBudget',
    options: ['Menos de $100.000', '$100.000 – $300.000', '$300.000 – $600.000', 'Más de $600.000'],
  },
  {
    id: 8,
    title: '¿Te interesaría implementar una estrategia para llenar tus alojamientos de forma constante?',
    type: 'select',
    field: 'interested',
    options: ['Sí, quiero aumentar mis reservas', 'Tal vez, quiero saber más', 'No, no me interesa'],
  },
];

export default function LeadForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    serviceType: '',
    location: '',
    units: '',
    pricePerNight: '',
    clientSources: [],
    hasEmptyDates: '',
    monthlyBudget: '',
    interested: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const step = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, [step.field]: value });
  };

  const handleTextChange = (value: string) => {
    setFormData({ ...formData, [step.field]: value });
  };

  const handleCheckboxChange = (value: string) => {
    const sources = formData.clientSources;
    if (sources.includes(value)) {
      setFormData({
        ...formData,
        clientSources: sources.filter((s) => s !== value),
      });
    } else {
      setFormData({
        ...formData,
        clientSources: [...sources, value],
      });
    }
  };

  const handleCurrencyChange = (value: string) => {
    // Remove non-numeric characters except dots and commas
    const cleaned = value.replace(/[^\d.,]/g, '');
    setFormData({ ...formData, [step.field]: cleaned });
  };

  const isStepValid = () => {
    if (step.type === 'checkbox') {
      return formData.clientSources.length > 0;
    }
    const fieldValue = formData[step.field as keyof FormData];
    if (Array.isArray(fieldValue)) {
      return fieldValue.length > 0;
    }
    return fieldValue !== '' && fieldValue !== undefined;
  };

  const handleNext = () => {
    if (isStepValid()) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 mb-6">
          <Check size={32} className="text-green-400" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">¡Perfecto!</h3>
        <p className="text-gray-400 max-w-md mx-auto text-lg mb-6">
          Si calificas, te mostraremos una estrategia personalizada para aumentar tus reservas.
        </p>
        <p className="text-sm text-gray-500">
          Pronto nos pondremos en contacto contigo por WhatsApp o teléfono.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="h-1 bg-dark-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-blue-400"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Paso {currentStep + 1} de {steps.length}
        </p>
      </div>

      {/* Question Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-white">
            {step.title}
          </h2>

          {/* Select Options */}
          {step.type === 'select' && (
            <div className="space-y-3">
              {step.options?.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelectChange(option)}
                  className={`w-full p-4 rounded-xl text-left font-medium transition-all ${
                    formData[step.field as keyof FormData] === option
                      ? 'bg-blue-500 text-white border border-blue-400'
                      : 'bg-dark-700 text-gray-300 border border-dark-600 hover:border-blue-500/50 hover:bg-dark-600'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          {/* Text Input */}
          {step.type === 'text' && (
            <input
              type="text"
              placeholder={step.placeholder}
              value={formData[step.field as keyof FormData] as string}
              onChange={(e) => handleTextChange(e.target.value)}
              className="w-full px-4 py-4 rounded-xl bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all"
              autoFocus
            />
          )}

          {/* Number Input */}
          {step.type === 'number' && (
            <input
              type="number"
              placeholder={step.placeholder}
              value={formData[step.field as keyof FormData] as string}
              onChange={(e) => handleTextChange(e.target.value)}
              className="w-full px-4 py-4 rounded-xl bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all"
              autoFocus
              inputMode="numeric"
            />
          )}

          {/* Currency Input */}
          {step.type === 'currency' && (
            <div className="relative">
              <span className="absolute left-4 top-4 text-gray-500 font-medium">$</span>
              <input
                type="text"
                placeholder={step.placeholder}
                value={formData[step.field as keyof FormData] as string}
                onChange={(e) => handleCurrencyChange(e.target.value)}
                className="w-full px-4 py-4 pl-8 rounded-xl bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition-all"
                autoFocus
                inputMode="numeric"
              />
            </div>
          )}

          {/* Checkbox Options */}
          {step.type === 'checkbox' && (
            <div className="space-y-3">
              {step.options?.map((option) => (
                <label
                  key={option}
                  className={`flex items-center p-4 rounded-xl cursor-pointer transition-all ${
                    formData.clientSources.includes(option)
                      ? 'bg-blue-500/10 border border-blue-500/30'
                      : 'bg-dark-700 border border-dark-600 hover:border-blue-500/50 hover:bg-dark-600'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.clientSources.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                    className="w-5 h-5 rounded accent-blue-500 cursor-pointer"
                  />
                  <span className="ml-3 font-medium text-gray-300">{option}</span>
                </label>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex gap-3 mt-8">
        <button
          onClick={handlePrev}
          disabled={currentStep === 0}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-dark-700 text-gray-300 font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-dark-600"
        >
          <ChevronLeft size={18} />
          Atrás
        </button>

        <button
          onClick={handleNext}
          disabled={!isStepValid() || loading}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Enviando...
            </>
          ) : currentStep === steps.length - 1 ? (
            <>
              Quiero llenar mis alojamientos
              <Check size={18} />
            </>
          ) : (
            <>
              Siguiente
              <ChevronRight size={18} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
