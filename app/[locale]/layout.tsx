import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Locale, getTranslations, locales } from '@/lib/i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const translations = getTranslations(params.locale);

  return (
    <html lang={params.locale}>
      <body>
        <Header locale={params.locale} translations={translations} />
        <main className="min-h-screen">{children}</main>
        <Footer locale={params.locale} translations={translations} />
      </body>
    </html>
  );
}
