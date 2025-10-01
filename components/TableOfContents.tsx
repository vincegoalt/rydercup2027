'use client';

import { useState, useEffect } from 'react';
import { Locale } from '@/lib/i18n';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  locale: Locale;
  className?: string;
}

export default function TableOfContents({ locale, className = '' }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Get all h2 and h3 headings from the page
    const elements = Array.from(document.querySelectorAll('h2[id], h3[id]'));
    const items: TOCItem[] = elements.map((element) => ({
      id: element.id,
      text: element.textContent || '',
      level: parseInt(element.tagName.substring(1)),
    }));
    setHeadings(items);

    // Intersection Observer to track active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -66%',
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className={`bg-cream-50 rounded-lg p-6 sticky top-24 ${className}`}>
      <h4 className="font-heading font-bold text-lg text-navy-600 mb-4">
        {locale === 'en' ? 'Table of Contents' : 'Tabla de Contenidos'}
      </h4>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={heading.level === 3 ? 'ml-4' : ''}
          >
            <button
              onClick={() => handleClick(heading.id)}
              className={`text-left w-full text-sm transition-colors hover:text-emerald-600 ${
                activeId === heading.id
                  ? 'text-emerald-600 font-semibold'
                  : 'text-gray-700'
              }`}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
