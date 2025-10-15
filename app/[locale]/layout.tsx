import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { Locale, getTranslations, locales } from '@/lib/i18n';
import { generateLocalBusinessSchema } from '@/lib/seo';

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
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang={params.locale}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0B6B3A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        <Header locale={params.locale} translations={translations} />
        <main className="min-h-screen">{children}</main>
        <Footer locale={params.locale} translations={translations} />
        <ScrollToTop />
      </body>
    </html>
  );
}
