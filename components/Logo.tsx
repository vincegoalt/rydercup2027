import Image from 'next/image';

interface LogoProps {
  variant?: 'light' | 'dark';
  showText?: boolean;
  className?: string;
}

export default function Logo({ variant = 'light', showText = true, className = '' }: LogoProps) {
  // The new logo is a circular badge that works on both light and dark backgrounds
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Adare Limerick Golf"
        width={showText ? 50 : 40}
        height={showText ? 50 : 40}
        className="object-contain"
        priority
      />
      {showText && (
        <div className="ml-3 flex flex-col">
          <span className={`font-heading font-bold text-lg leading-tight ${variant === 'light' ? 'text-navy-600' : 'text-white'}`}>
            Adare Limerick Golf
          </span>
          <span className={`text-xs font-medium ${variant === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
            Ryder Cup 2027
          </span>
        </div>
      )}
    </div>
  );
}
