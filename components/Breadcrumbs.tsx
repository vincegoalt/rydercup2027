import Link from 'next/link';
import { Locale } from '@/lib/i18n';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  locale: Locale;
}

export default function Breadcrumbs({ items, locale }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link
            href={`/${locale}`}
            className="text-gray-600 hover:text-emerald-600 transition-colors"
          >
            {locale === 'en' ? 'Home' : 'Inicio'}
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="text-gray-400">/</span>
            {item.href ? (
              <Link
                href={item.href}
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-navy-600 font-semibold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
