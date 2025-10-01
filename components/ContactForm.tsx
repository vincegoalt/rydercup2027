'use client';

import { useState } from 'react';
import { Locale } from '@/lib/i18n';

interface ContactFormProps {
  locale: Locale;
  variant?: 'default' | 'compact';
}

export default function ContactForm({ locale, variant = 'default' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          locale,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setStatusMessage(data.message);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
      setStatusMessage(
        locale === 'en'
          ? 'Sorry, something went wrong. Please try again or email us directly.'
          : 'Lo sentimos, algo salió mal. Por favor intenta de nuevo o envíanos un correo directamente.'
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const content = {
    heading: locale === 'en' ? 'Send Us a Message' : 'Envíanos un Mensaje',
    namePlaceholder: locale === 'en' ? 'Your name' : 'Tu nombre',
    emailPlaceholder: locale === 'en' ? 'Your email' : 'Tu correo electrónico',
    subjectLabel: locale === 'en' ? 'What are you interested in?' : '¿En qué estás interesado?',
    subjectOptions: {
      general: locale === 'en' ? 'General question' : 'Pregunta general',
      rydercup: locale === 'en' ? 'Ryder Cup 2027 planning' : 'Planificación Ryder Cup 2027',
      courses: locale === 'en' ? 'Golf course recommendations' : 'Recomendaciones de campos',
      accommodation: locale === 'en' ? 'Accommodation advice' : 'Consejos de alojamiento',
      itinerary: locale === 'en' ? 'Custom itinerary' : 'Itinerario personalizado',
      other: locale === 'en' ? 'Other' : 'Otro',
    },
    messagePlaceholder:
      locale === 'en'
        ? 'Tell us about your trip plans, dates, budget, or any questions you have...'
        : 'Cuéntanos sobre tus planes de viaje, fechas, presupuesto o cualquier pregunta que tengas...',
    submitButton: locale === 'en' ? 'Send Message' : 'Enviar Mensaje',
    submittingButton: locale === 'en' ? 'Sending...' : 'Enviando...',
  };

  return (
    <div className={variant === 'compact' ? 'bg-white rounded-lg p-6' : 'bg-cream-50 rounded-xl p-8 border-2 border-emerald-100'}>
      <h3 className="font-heading font-bold text-2xl text-navy-600 mb-6">{content.heading}</h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            {locale === 'en' ? 'Name' : 'Nombre'} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={content.namePlaceholder}
            required
            disabled={status === 'loading'}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-100"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            {locale === 'en' ? 'Email' : 'Correo Electrónico'} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={content.emailPlaceholder}
            required
            disabled={status === 'loading'}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-100"
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
            {content.subjectLabel} <span className="text-red-500">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-100"
          >
            <option value="">{locale === 'en' ? 'Select a topic...' : 'Selecciona un tema...'}</option>
            <option value="general">{content.subjectOptions.general}</option>
            <option value="rydercup">{content.subjectOptions.rydercup}</option>
            <option value="courses">{content.subjectOptions.courses}</option>
            <option value="accommodation">{content.subjectOptions.accommodation}</option>
            <option value="itinerary">{content.subjectOptions.itinerary}</option>
            <option value="other">{content.subjectOptions.other}</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            {locale === 'en' ? 'Message' : 'Mensaje'} <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={content.messagePlaceholder}
            required
            disabled={status === 'loading'}
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-100 resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full px-6 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors disabled:bg-gray-400"
        >
          {status === 'loading' ? content.submittingButton : content.submitButton}
        </button>

        {/* Status Messages */}
        {status === 'success' && (
          <div className="p-4 bg-emerald-50 border-2 border-emerald-200 rounded-lg">
            <p className="text-emerald-700 font-semibold">{statusMessage}</p>
          </div>
        )}
        {status === 'error' && (
          <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
            <p className="text-red-600 font-semibold">{statusMessage}</p>
          </div>
        )}
      </form>
    </div>
  );
}
