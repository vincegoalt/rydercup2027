import Link from 'next/link';
import Image from 'next/image';

interface HeroBlockProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage: string;
  ctaButtons?: { text: string; href: string; primary?: boolean }[];
  keyFacts?: { label: string; value: string }[];
}

export default function HeroBlock({
  title,
  subtitle,
  description,
  backgroundImage,
  ctaButtons,
  keyFacts,
}: HeroBlockProps) {
  return (
    <div className="relative bg-navy-600 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-600/90 to-navy-600/60"></div>
      </div>

      <div className="relative container-custom py-20 md:py-28">
        <div className="max-w-4xl">
          {subtitle && <p className="text-gold-400 font-semibold text-sm uppercase tracking-wide mb-3">{subtitle}</p>}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-white">{title}</h1>
          {description && <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">{description}</p>}

          {ctaButtons && ctaButtons.length > 0 && (
            <div className="flex flex-wrap gap-4 mb-8">
              {ctaButtons.map((btn, idx) => (
                <Link
                  key={idx}
                  href={btn.href}
                  className={
                    btn.primary
                      ? 'btn-primary'
                      : 'btn-outline border-white text-white hover:bg-white hover:text-navy-600'
                  }
                >
                  {btn.text}
                </Link>
              ))}
            </div>
          )}

          {keyFacts && keyFacts.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {keyFacts.map((fact, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-gold-400 text-xs font-semibold uppercase tracking-wide mb-1">{fact.label}</div>
                  <div className="text-white font-heading font-bold text-lg">{fact.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
