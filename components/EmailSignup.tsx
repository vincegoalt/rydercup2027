'use client';

import { useState } from 'react';
import { Locale } from '@/lib/i18n';

interface EmailSignupProps {
  locale: Locale;
  variant?: 'default' | 'inline' | 'hero';
  className?: string;
}

export default function EmailSignup({ locale, variant = 'default', className = '' }: EmailSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          locale,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setStatus('success');
      setMessage(data.message);
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage(
        locale === 'en'
          ? 'Oops! Something went wrong. Please try again.'
          : '¡Ups! Algo salió mal. Por favor intenta de nuevo.'
      );
    }
  };

  const content = {
    heading: locale === 'en' ? 'Get Ryder Cup 2027 Updates' : 'Recibe Actualizaciones Ryder Cup 2027',
    description:
      locale === 'en'
        ? 'Ticket info, accommodation tips, and Ireland golf travel guides delivered to your inbox.'
        : 'Información de entradas, consejos de alojamiento y guías de viaje de golf en Irlanda.',
    placeholder: locale === 'en' ? 'Your email address' : 'Tu correo electrónico',
    button: locale === 'en' ? 'Sign Up' : 'Inscribirse',
    privacy: locale === 'en' ? 'No spam. Unsubscribe anytime.' : 'Sin spam. Cancela cuando quieras.',
  };

  if (variant === 'inline') {
    return (
      <div className={`bg-emerald-50 border-2 border-emerald-200 rounded-lg p-6 ${className}`}>
        <h3 className="font-heading font-bold text-lg text-navy-600 mb-2">{content.heading}</h3>
        <p className="text-sm text-gray-700 mb-4">{content.description}</p>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={content.placeholder}
            required
            disabled={status === 'loading'}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-100"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-2 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors disabled:bg-gray-400 whitespace-nowrap"
          >
            {status === 'loading' ? '...' : content.button}
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-3 text-sm text-emerald-700 font-semibold">{message}</p>
        )}
        {status === 'error' && (
          <p className="mt-3 text-sm text-red-600">{message}</p>
        )}
        {status === 'idle' && (
          <p className="mt-2 text-xs text-gray-500">{content.privacy}</p>
        )}
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className={`text-center ${className}`}>
        <h2 className="text-3xl font-heading font-bold text-navy-600 mb-3">{content.heading}</h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">{content.description}</p>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={content.placeholder}
              required
              disabled={status === 'loading'}
              className="flex-1 px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-100 text-lg"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors disabled:bg-gray-400 text-lg whitespace-nowrap"
            >
              {status === 'loading' ? '...' : content.button}
            </button>
          </div>

          {status === 'success' && (
            <p className="mt-4 text-emerald-700 font-semibold">{message}</p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-red-600">{message}</p>
          )}
          {status === 'idle' && (
            <p className="mt-3 text-sm text-gray-600">{content.privacy}</p>
          )}
        </form>
      </div>
    );
  }

  // Default variant - full card
  return (
    <div className={`bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-xl p-8 shadow-xl ${className}`}>
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-heading font-bold mb-3">{content.heading}</h2>
        <p className="text-emerald-50 mb-6">{content.description}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={content.placeholder}
            required
            disabled={status === 'loading'}
            className="w-full px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-gray-900 disabled:bg-gray-200"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full px-6 py-3 bg-white text-emerald-600 font-bold rounded-lg hover:bg-gray-100 transition-colors disabled:bg-gray-300"
          >
            {status === 'loading' ? (locale === 'en' ? 'Signing up...' : 'Inscribiendo...') : content.button}
          </button>

          {status === 'success' && (
            <p className="text-white font-semibold">{message}</p>
          )}
          {status === 'error' && (
            <p className="text-red-200">{message}</p>
          )}
          {status === 'idle' && (
            <p className="text-sm text-emerald-100">{content.privacy}</p>
          )}
        </form>
      </div>
    </div>
  );
}
