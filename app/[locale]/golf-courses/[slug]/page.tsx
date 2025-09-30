import { Locale, getLocalizedValue } from '@/lib/i18n';
import { golfCourses } from '@/data/courses';
import { notFound } from 'next/navigation';
import HeroBlock from '@/components/blocks/HeroBlock';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { generateMetadata as genMeta } from '@/lib/seo';

export async function generateStaticParams() {
  const params = [];
  for (const locale of ['en', 'es']) {
    for (const course of golfCourses) {
      params.push({ locale, slug: course.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: { locale: Locale; slug: string } }) {
  const { locale, slug } = params;
  const course = golfCourses.find((c) => c.slug === slug);

  if (!course) {
    return {};
  }

  const typeText = course.type === 'links' ? (locale === 'en' ? 'Links' : 'Links') :
                   course.type === 'parkland' ? (locale === 'en' ? 'Parkland' : 'Parkland') :
                   (locale === 'en' ? 'Championship' : 'Campeonato');

  return genMeta({
    title: locale === 'en'
      ? `${course.name} Golf Course | ${typeText} ${course.greenFee} | Near Adare Manor`
      : `Campo de Golf ${course.name} | ${typeText} ${course.greenFee} | Cerca Adare Manor`,
    description: locale === 'en'
      ? `Play ${course.name} - ${typeText} golf course in ${course.location}, County ${course.county}. Green fee ${course.greenFee}. ${course.distanceFromAdare} from Adare Manor & Ryder Cup 2027 venue.`
      : `Juega ${course.name} - Campo de golf ${typeText} en ${course.location}, condado de ${course.county}. Tarifa ${course.greenFee}. ${course.distanceFromAdare} desde Adare Manor y sede Ryder Cup 2027.`,
    keywords: [course.name.toLowerCase(), `${course.location.toLowerCase()} golf`, `${course.county.toLowerCase()} golf course`, `${course.type} golf ireland`, course.designer.toLowerCase()],
    locale,
    canonicalUrl: `https://www.adarelimerickgolf.com/${locale}/golf-courses/${slug}`,
  });
}

export default function CourseDetailPage({ params }: { params: { locale: Locale; slug: string } }) {
  const { locale, slug } = params;
  const course = golfCourses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <Breadcrumb
        locale={locale}
        items={[
          {
            label: locale === 'en' ? 'Golf Courses' : 'Campos de Golf',
            href: `/${locale}/golf/courses-near/adare`,
          },
          {
            label: course.name,
          },
        ]}
      />
      <HeroBlock
        title={course.name}
        subtitle={`${course.location}, ${course.county}`}
        description={getLocalizedValue(course.description, locale)}
        backgroundImage={course.imageUrl}
        keyFacts={[
          { label: locale === 'en' ? 'Green Fee' : 'Tarifa', value: course.greenFee },
          { label: locale === 'en' ? 'Designer' : 'Diseñador', value: course.designer },
          { label: locale === 'en' ? 'Type' : 'Tipo', value: course.type },
          { label: locale === 'en' ? 'From Adare' : 'Desde Adare', value: course.distanceFromAdare },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-6">
            {locale === 'en' ? 'Course Highlights' : 'Destacados del Campo'}
          </h2>
          <ul className="space-y-3">
            {getLocalizedValue(course.highlights, locale).map((highlight, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-emerald-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700">{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 bg-cream-100 rounded-lg p-6">
            <h3 className="font-heading font-bold text-xl text-navy-600 mb-3">
              {locale === 'en' ? 'Getting There' : 'Cómo Llegar'}
            </h3>
            <p className="text-gray-700 mb-2">
              <strong>{locale === 'en' ? 'From Adare Manor:' : 'Desde Adare Manor:'}</strong> {course.distanceFromAdare} ({course.distanceKm}km)
            </p>
            <p className="text-gray-700">
              <strong>{locale === 'en' ? 'Location:' : 'Ubicación:'}</strong> {course.location}, County {course.county}
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link href={`/${locale}/golf/courses-near/adare`} className="btn-outline">
              {locale === 'en' ? '← Back to All Courses' : '← Volver a Todos los Campos'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
