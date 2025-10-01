import { Locale } from '@/lib/i18n';
import HeroBlock from '@/components/blocks/HeroBlock';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function FutureVenuesPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  const venues = [
    { year: 2025, course: 'Bethpage Black', location: 'New York, USA', team: 'USA' },
    { year: 2027, course: 'Adare Manor', location: 'Limerick, Ireland', team: 'Europe' },
    { year: 2029, course: 'Hazeltine', location: 'Minnesota, USA', team: 'USA' },
    { year: 2031, course: 'Camiral', location: 'Costa Brava, Spain', team: 'Europe' },
    { year: 2033, course: 'The Olympic Club', location: 'California, USA', team: 'USA' },
    { year: 2035, course: 'TBA', location: 'Europe', team: 'Europe' },
    { year: 2037, course: 'Congressional', location: 'Maryland, USA', team: 'USA' },
  ];

  return (
    <>
      <div className="container-custom">
        <Breadcrumbs
          items={[
            {
              label: locale === 'en' ? 'Future Venues' : 'Sedes Futuras',
            },
          ]}
          locale={locale}
        />
      </div>

      <HeroBlock
        title={locale === 'en' ? 'Future Ryder Cup Venues — 2025 to 2037' : 'Sedes Futuras Ryder Cup — 2025 a 2037'}
        subtitle={locale === 'en' ? 'Upcoming Venues' : 'Próximas Sedes'}
        description={locale === 'en'
          ? 'See where the Ryder Cup is headed next: Bethpage (2025), Adare Manor (2027), Hazeltine (2029), Camiral (2031), Olympic Club (2033), and Congressional (2037).'
          : 'Mira dónde se dirige la Ryder Cup: Bethpage (2025), Adare Manor (2027), Hazeltine (2029), Camiral (2031), Olympic Club (2033) y Congressional (2037).'}
        backgroundImage="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1600"
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="space-y-6">
            {venues.map((venue) => (
              <div
                key={venue.year}
                className={`rounded-xl p-6 ${venue.year === 2027 ? 'bg-emerald-50 border-2 border-emerald-600' : 'bg-cream-100'}`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl font-heading font-bold text-navy-600">{venue.year}</span>
                      {venue.year === 2027 && (
                        <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                          {locale === 'en' ? 'Next in Europe' : 'Próxima en Europa'}
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-navy-600 mb-1">{venue.course}</h3>
                    <p className="text-gray-600">{venue.location}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span
                      className={`inline-block px-4 py-2 rounded-lg font-semibold ${
                        venue.team === 'Europe'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {locale === 'en' ? 'Host:' : 'Anfitrión:'} {venue.team}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
