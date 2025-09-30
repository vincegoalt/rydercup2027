import Link from 'next/link';
import { Locale } from '@/lib/i18n';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  locale: Locale;
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ locale, items }: BreadcrumbProps) {
  const homeLabel = locale === 'en' ? 'Home' : 'Inicio';

  return (
    <section className="bg-cream-100 py-4">
      <div className="container-custom">
        <nav className="flex text-sm text-gray-600" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href={`/${locale}`} className="hover:text-emerald-600 transition-colors">
                {homeLabel}
              </Link>
            </li>
            {items.map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="mx-2">/</span>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-emerald-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-900 font-medium">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
