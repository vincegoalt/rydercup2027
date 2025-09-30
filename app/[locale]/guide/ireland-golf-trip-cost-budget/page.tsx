import { Locale } from '@/lib/i18n';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  return {
    title:
      locale === 'en'
        ? 'Ireland Golf Trip Cost 2027: Complete Budget Guide for Ryder Cup'
        : 'Costo Viaje Golf Irlanda 2027: Guía Presupuesto Completa Ryder Cup',
    description:
      locale === 'en'
        ? 'How much does an Ireland golf trip cost? Detailed breakdown of green fees, hotels, flights, car rental for Ryder Cup 2027. Budget, mid-range, and luxury options.'
        : '¿Cuánto cuesta un viaje de golf a Irlanda? Desglose detallado de green fees, hoteles, vuelos, alquiler de autos para Ryder Cup 2027. Opciones económicas, rango medio y lujo.',
    keywords: 'ireland golf trip cost, ryder cup 2027 budget, adare manor cost, ireland golf packages, golf vacation cost',
    alternates: {
      canonical: `https://www.adarelimerickgolf.com/${locale}/guide/ireland-golf-trip-cost-budget`,
      languages: {
        en: 'https://www.adarelimerickgolf.com/en/guide/ireland-golf-trip-cost-budget',
        es: 'https://www.adarelimerickgolf.com/es/guide/ireland-golf-trip-cost-budget',
      },
    },
  };
}

export default function IrelandGolfCostPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;

  return (
    <>
      <Breadcrumb
        locale={locale}
        items={[
          {
            label: locale === 'en' ? 'Golf Guides' : 'Guías de Golf',
            href: `/${locale}/ireland-golf-trip-itineraries`,
          },
          {
            label: locale === 'en' ? 'Cost & Budget Guide' : 'Guía de Costos y Presupuesto',
          },
        ]}
      />

      {/* Hero */}
      <section className="section-padding bg-emerald-600 text-white">
        <div className="container-custom max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            {locale === 'en'
              ? 'How Much Does an Ireland Golf Trip Cost?'
              : '¿Cuánto Cuesta un Viaje de Golf a Irlanda?'}
          </h1>
          <p className="text-xl text-emerald-50 mb-6">
            {locale === 'en'
              ? 'Complete 2027 budget guide for Ryder Cup week and year-round golf trips'
              : 'Guía de presupuesto completa 2027 para semana de Ryder Cup y viajes de golf todo el año'}
          </p>
          <p className="text-2xl font-bold text-gold-400">
            {locale === 'en'
              ? '€2,500 - €8,000+ per person (7 days, 4-5 rounds)'
              : '€2,500 - €8,000+ por persona (7 días, 4-5 rondas)'}
          </p>
        </div>
      </section>

      {/* Quick Cost Summary */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-8 text-center">
            {locale === 'en' ? 'Cost Breakdown (7-Day Trip)' : 'Desglose de Costos (Viaje 7 Días)'}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Budget */}
            <div className="bg-cream-50 rounded-xl p-8 border-2 border-emerald-200">
              <h3 className="text-2xl font-heading font-bold text-emerald-700 mb-4">
                💰 {locale === 'en' ? 'Budget' : 'Económico'}
              </h3>
              <p className="text-3xl font-bold text-navy-600 mb-6">€2,500-3,500</p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex justify-between">
                  <span>{locale === 'en' ? 'Flights' : 'Vuelos'}:</span>
                  <strong>€400-600</strong>
                </li>
                <li className="flex justify-between">
                  <span>{locale === 'en' ? 'Hotels (7 nights)' : 'Hoteles (7 noches)'}:</span>
                  <strong>€700-1,050</strong>
                </li>
                <li className="flex justify-between">
                  <span>{locale === 'en' ? 'Green fees (4 rounds)' : 'Green fees (4 rondas)'}:</span>
                  <strong>€400-600</strong>
                </li>
                <li className="flex justify-between">
                  <span>{locale === 'en' ? 'Car rental' : 'Alquiler auto'}:</span>
                  <strong>€300-400</strong>
                </li>
                <li className="flex justify-between">
                  <span>{locale === 'en' ? 'Food & misc' : 'Comida y varios'}:</span>
                  <strong>€500-700</strong>
                </li>
              </ul>
              <p className="text-xs text-gray-600 mt-4">
                {locale === 'en'
                  ? '*Municipal courses, B&Bs, economy car'
                  : '*Campos municipales, B&Bs, auto económico'}
              </p>
            </div>

            {/* Mid-Range */}
            <div className="bg-gold-50 rounded-xl p-8 border-4 border-gold-400 shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold-400 text-white px-4 py-1 rounded-full text-sm font-bold">
                {locale === 'en' ? 'Most Popular' : 'Más Popular'}
              </div>
              <h3 className="text-2xl font-heading font-bold text-gold-700 mb-4">
                ⭐ {locale === 'en' ? 'Mid-Range' : 'Rango Medio'}
              </h3>
              <p className="text-3xl font-bold text-navy-600 mb-6">€4,500-6,000</p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex justify-between">
                  <span>{locale === 'en' ? 'Flights' : 'Vuelos'}:</span>
                  <strong>€600-800</strong>
                </li>
                <li className="flex justify-between">
                  <span>{locale === 'en' ? 'Hotels (7 nights)' : 'Hoteles (7 noches)'}:</span>
                  <strong>€1,400-2,100</strong>
                </li>
                <li className="flex justify-between">
                  <span>{locale === 'en' ? 'Green fees (5 rounds)' : 'Green fees (5 rondas)'}:</span>
                  <strong>€800-1,200</strong>
                </li>
                <li className="flex justify-between">
                  <span>{locale === 'en' ? 'Car rental' : 'Alquiler auto'}:</span>
                  <strong>€400-600</strong>
                </li>
                <li className="flex justify-between">
                  <span>{locale === 'en' ? 'Food & caddies' : 'Comida y caddies'}:</span>
                  <strong>€900-1,200</strong>
                </li>
              </ul>
              <p className="text-xs text-gray-600 mt-4">
                {locale === 'en'
                  ? '*Top links courses, 3-4 star hotels, SUV rental'
                  : '*Campos links top, hoteles 3-4 estrellas, SUV alquiler'}
              </p>
            </div>

            {/* Luxury */}
            <div className="bg-navy-50 rounded-xl p-8 border-2 border-navy-400">
              <h3 className="text-2xl font-heading font-bold text-navy-700 mb-4">
                💎 {locale === 'en' ? 'Luxury' : 'Lujo'}
              </h3>
              <p className="text-3xl font-bold text-navy-600 mb-6">€8,000+</p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex justify-between">
                  <span>{locale === 'en' ? 'Flights (Business)' : 'Vuelos (Business)'}:</span>
                  <strong>€2,000-3,000</strong>
                </li>
                <li className="flex justify-between">
                  <span>{locale === 'en' ? 'Hotels (7 nights)' : 'Hoteles (7 noches)'}:</span>
                  <strong>€3,500-5,000</strong>
                </li>
                <li className="flex justify-between">
                  <span>{locale === 'en' ? 'Green fees (5 rounds)' : 'Green fees (5 rondas)'}:</span>
                  <strong>€1,500-2,500</strong>
                </li>
                <li className="flex justify-between">
                  <span>{locale === 'en' ? 'Private driver' : 'Conductor privado'}:</span>
                  <strong>€1,000-1,500</strong>
                </li>
                <li className="flex justify-between">
                  <span>{locale === 'en' ? 'Caddies & dining' : 'Caddies y cenas'}:</span>
                  <strong>€1,500-2,000</strong>
                </li>
              </ul>
              <p className="text-xs text-gray-600 mt-4">
                {locale === 'en'
                  ? '*Adare Manor, all top courses, premium service'
                  : '*Adare Manor, todos campos top, servicio premium'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Breakdowns */}
      <section className="section-padding bg-cream-100">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-8">
            {locale === 'en' ? 'Detailed Cost Categories' : 'Categorías de Costos Detalladas'}
          </h2>

          <div className="space-y-6">
            {/* Flights */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-heading font-bold text-emerald-700 mb-4">
                ✈️ {locale === 'en' ? 'Flights' : 'Vuelos'}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-navy-600 mb-2">
                    {locale === 'en' ? 'From USA' : 'Desde EE.UU.'}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>{locale === 'en' ? 'East Coast' : 'Costa Este'}:</strong> €400-800 (NYC, Boston)</li>
                    <li><strong>{locale === 'en' ? 'Midwest' : 'Centro'}:</strong> €600-1,000 (Chicago, Dallas)</li>
                    <li><strong>{locale === 'en' ? 'West Coast' : 'Costa Oeste'}:</strong> €800-1,200 (LA, SF)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-600 mb-2">
                    {locale === 'en' ? 'Tips' : 'Consejos'}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• {locale === 'en' ? 'Book 3-6 months ahead for best rates' : 'Reserve 3-6 meses antes para mejores tarifas'}</li>
                    <li>• {locale === 'en' ? 'Fly into Shannon (SNN) vs Dublin for Adare' : 'Vuele a Shannon (SNN) vs Dublín para Adare'}</li>
                    <li>• {locale === 'en' ? 'Ryder Cup week will have premium pricing' : 'Semana Ryder Cup tendrá precios premium'}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Green Fees */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-heading font-bold text-emerald-700 mb-4">
                ⛳ {locale === 'en' ? 'Green Fees' : 'Green Fees'}
              </h3>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm">
                  <thead className="bg-emerald-100">
                    <tr>
                      <th className="p-3 text-left">{locale === 'en' ? 'Course Tier' : 'Nivel Campo'}</th>
                      <th className="p-3 text-left">{locale === 'en' ? 'Per Round' : 'Por Ronda'}</th>
                      <th className="p-3 text-left">{locale === 'en' ? 'Examples' : 'Ejemplos'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-3 font-semibold">{locale === 'en' ? 'Premium' : 'Premium'}</td>
                      <td className="p-3">€400-550</td>
                      <td className="p-3 text-xs">Adare Manor</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">{locale === 'en' ? 'Championship Links' : 'Links Campeonato'}</td>
                      <td className="p-3">€200-300</td>
                      <td className="p-3 text-xs">Ballybunion, Lahinch, Tralee</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">{locale === 'en' ? 'Quality Parkland' : 'Parkland Calidad'}</td>
                      <td className="p-3">€100-200</td>
                      <td className="p-3 text-xs">Dromoland, Killarney</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">{locale === 'en' ? 'Municipal/Local' : 'Municipal/Local'}</td>
                      <td className="p-3">€50-100</td>
                      <td className="p-3 text-xs">Limerick Golf Club</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600">
                💡 {locale === 'en'
                  ? 'Tip: Mix premium and mid-tier courses to balance budget. Book tee times 6-12 months ahead for popular courses.'
                  : 'Consejo: Mezcle campos premium y rango medio para balancear presupuesto. Reserve horarios 6-12 meses antes para campos populares.'}
              </p>
            </div>

            {/* Accommodation */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-heading font-bold text-emerald-700 mb-4">
                🏨 {locale === 'en' ? 'Accommodation' : 'Alojamiento'}
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-3">
                  <div>
                    <h4 className="font-semibold text-navy-600">
                      {locale === 'en' ? 'Luxury Hotels/Castles' : 'Hoteles Lujo/Castillos'}
                    </h4>
                    <p className="text-xs text-gray-600">Adare Manor, Dromoland Castle</p>
                  </div>
                  <span className="text-lg font-bold text-navy-600">€400-700/night</span>
                </div>
                <div className="flex justify-between items-center border-b pb-3">
                  <div>
                    <h4 className="font-semibold text-navy-600">
                      {locale === 'en' ? '4-Star Hotels' : 'Hoteles 4 Estrellas'}
                    </h4>
                    <p className="text-xs text-gray-600">Fitzgerald's, Castletroy Park</p>
                  </div>
                  <span className="text-lg font-bold text-navy-600">€150-300/night</span>
                </div>
                <div className="flex justify-between items-center border-b pb-3">
                  <div>
                    <h4 className="font-semibold text-navy-600">
                      {locale === 'en' ? '3-Star Hotels/B&Bs' : 'Hoteles 3 Estrellas/B&Bs'}
                    </h4>
                    <p className="text-xs text-gray-600">Local guesthouses</p>
                  </div>
                  <span className="text-lg font-bold text-navy-600">€80-150/night</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-navy-600">
                      {locale === 'en' ? 'Budget Hostels/Inns' : 'Hostales/Posadas Económicas'}
                    </h4>
                    <p className="text-xs text-gray-600">Shared or basic rooms</p>
                  </div>
                  <span className="text-lg font-bold text-navy-600">€40-80/night</span>
                </div>
              </div>
              <div className="mt-6 bg-gold-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-gold-800">
                  ⚠️ {locale === 'en' ? 'Ryder Cup Week Pricing' : 'Precios Semana Ryder Cup'}
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  {locale === 'en'
                    ? 'Expect 2-3x normal rates during September 28 - October 3, 2027. Many hotels have 3-4 night minimums. Book NOW!'
                    : 'Espere tarifas 2-3x normales durante 28 sept - 3 oct 2027. Muchos hoteles tienen mínimos de 3-4 noches. ¡Reserve AHORA!'}
                </p>
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-heading font-bold text-emerald-700 mb-4">
                🚗 {locale === 'en' ? 'Transportation' : 'Transporte'}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-navy-600 mb-3">
                    {locale === 'en' ? 'Car Rental (per day)' : 'Alquiler Auto (por día)'}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex justify-between">
                      <span>{locale === 'en' ? 'Economy' : 'Económico'}:</span>
                      <strong>€35-50</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>{locale === 'en' ? 'Mid-size/SUV' : 'Mediano/SUV'}:</span>
                      <strong>€60-90</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>{locale === 'en' ? 'Luxury' : 'Lujo'}:</span>
                      <strong>€100-150</strong>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-600 mb-3">
                    {locale === 'en' ? 'Other Costs' : 'Otros Costos'}
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex justify-between">
                      <span>{locale === 'en' ? 'Fuel (per day)' : 'Combustible (por día)'}:</span>
                      <strong>€20-30</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>{locale === 'en' ? 'Insurance' : 'Seguro'}:</span>
                      <strong>€15-25/day</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>{locale === 'en' ? 'Parking' : 'Estacionamiento'}:</span>
                      <strong>{locale === 'en' ? 'Usually free' : 'Usualmente gratis'}</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Itineraries with Costs */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-navy-600 mb-8 text-center">
            {locale === 'en' ? 'Sample 7-Day Itinerary Costs' : 'Costos Itinerario Muestra 7 Días'}
          </h2>

          <div className="bg-emerald-50 border-2 border-emerald-400 rounded-xl p-8">
            <h3 className="text-2xl font-heading font-bold text-emerald-700 mb-6">
              {locale === 'en' ? '"Southwest Ireland Links Tour"' : '"Tour Links Suroeste Irlanda"'}
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-700">
                <span><strong>{locale === 'en' ? 'Day 1:' : 'Día 1:'}</strong> {locale === 'en' ? 'Arrive Shannon, Limerick Golf Club' : 'Llegar Shannon, Limerick Golf Club'}</span>
                <span>€350</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span><strong>{locale === 'en' ? 'Day 2:' : 'Día 2:'}</strong> {locale === 'en' ? 'Ballybunion Old Course' : 'Ballybunion Old Course'}</span>
                <span>€480</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span><strong>{locale === 'en' ? 'Day 3:' : 'Día 3:'}</strong> {locale === 'en' ? 'Lahinch Golf Club' : 'Lahinch Golf Club'}</span>
                <span>€420</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span><strong>{locale === 'en' ? 'Day 4:' : 'Día 4:'}</strong> {locale === 'en' ? 'Tralee Golf Club' : 'Tralee Golf Club'}</span>
                <span>€380</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span><strong>{locale === 'en' ? 'Day 5:' : 'Día 5:'}</strong> {locale === 'en' ? 'Doonbeg (Trump International)' : 'Doonbeg (Trump International)'}</span>
                <span>€520</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span><strong>{locale === 'en' ? 'Day 6:' : 'Día 6:'}</strong> {locale === 'en' ? 'Adare Manor (optional)' : 'Adare Manor (opcional)'}</span>
                <span>€750</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span><strong>{locale === 'en' ? 'Day 7:' : 'Día 7:'}</strong> {locale === 'en' ? 'Depart Shannon' : 'Salir Shannon'}</span>
                <span>€100</span>
              </div>
            </div>

            <div className="border-t-2 border-emerald-400 pt-4">
              <div className="flex justify-between text-xl font-bold text-navy-600">
                <span>{locale === 'en' ? 'Total (per person, sharing double room):' : 'Total (por persona, habitación doble compartida):'}</span>
                <span>€5,200</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {locale === 'en'
                  ? '*Includes: flights €700, hotels €1,600, green fees €1,800, car rental €500, food/misc €600'
                  : '*Incluye: vuelos €700, hoteles €1,600, green fees €1,800, alquiler auto €500, comida/varios €600'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Money-Saving Tips */}
      <section className="section-padding bg-navy-600 text-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center text-white">
            {locale === 'en' ? 'Money-Saving Tips' : 'Consejos para Ahorrar'}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-navy-700 rounded-xl p-6">
              <h3 className="font-heading font-bold text-emerald-400 mb-3">
                💡 {locale === 'en' ? 'Book Early' : 'Reserve Temprano'}
              </h3>
              <p className="text-gray-100">
                {locale === 'en'
                  ? 'Green fees and hotels for Ryder Cup week are already filling up. Booking 12-18 months ahead locks in better rates.'
                  : 'Green fees y hoteles para semana Ryder Cup ya se están llenando. Reservar 12-18 meses antes asegura mejores tarifas.'}
              </p>
            </div>

            <div className="bg-navy-700 rounded-xl p-6">
              <h3 className="font-heading font-bold text-emerald-400 mb-3">
                🌤️ {locale === 'en' ? 'Travel Shoulder Season' : 'Viajar Temporada Baja'}
              </h3>
              <p className="text-gray-100">
                {locale === 'en'
                  ? 'April-May or October offer 20-30% lower rates than peak summer, with still-playable conditions.'
                  : 'Abril-mayo u octubre ofrecen tarifas 20-30% más bajas que verano, con condiciones aún jugables.'}
              </p>
            </div>

            <div className="bg-navy-700 rounded-xl p-6">
              <h3 className="font-heading font-bold text-emerald-400 mb-3">
                ⛳ {locale === 'en' ? 'Mix Course Tiers' : 'Mezclar Niveles'}
              </h3>
              <p className="text-gray-100">
                {locale === 'en'
                  ? 'Play 1-2 bucket-list courses (Ballybunion, Adare), then add quality mid-tier courses (Limerick, Killarney).'
                  : 'Juegue 1-2 campos lista de deseos (Ballybunion, Adare), luego agregue campos rango medio de calidad (Limerick, Killarney).'}
              </p>
            </div>

            <div className="bg-navy-700 rounded-xl p-6">
              <h3 className="font-heading font-bold text-emerald-400 mb-3">
                🏨 {locale === 'en' ? 'Stay Strategic' : 'Hospedaje Estratégico'}
              </h3>
              <p className="text-gray-100">
                {locale === 'en'
                  ? 'Base in Limerick City or Adare Village for central access. Avoid changing hotels to save on packing/unpacking.'
                  : 'Establézcase en Limerick City o Adare Village para acceso central. Evite cambiar hoteles para ahorrar en empacar/desempacar.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-emerald-600 text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            {locale === 'en' ? 'Ready to Start Planning?' : '¿Listo Para Comenzar a Planificar?'}
          </h2>
          <p className="text-xl mb-8 text-emerald-50">
            {locale === 'en'
              ? 'Explore detailed itineraries, golf courses, and accommodation options for your 2027 Ireland golf trip.'
              : 'Explore itinerarios detallados, campos de golf y opciones de alojamiento para su viaje de golf a Irlanda 2027.'}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href={`/${locale}/ireland-golf-trip-itineraries`} className="btn-primary bg-white text-emerald-600 hover:bg-gray-100">
              {locale === 'en' ? 'View Itineraries' : 'Ver Itinerarios'}
            </Link>
            <Link href={`/${locale}/golf-courses-near-adare`} className="btn-outline border-white text-white hover:bg-white hover:text-emerald-600">
              {locale === 'en' ? 'Browse Golf Courses' : 'Explorar Campos'}
            </Link>
            <Link href={`/${locale}/hotels-near-adare-manor`} className="btn-outline border-white text-white hover:bg-white hover:text-emerald-600">
              {locale === 'en' ? 'Find Hotels' : 'Buscar Hoteles'}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
