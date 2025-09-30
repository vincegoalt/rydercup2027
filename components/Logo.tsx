interface LogoProps {
  variant?: 'light' | 'dark';
  showText?: boolean;
  className?: string;
}

export default function Logo({ variant = 'light', showText = true, className = '' }: LogoProps) {
  const strokeColor = variant === 'light' ? '#0B6B3A' : '#C3E6CE';
  const textColor = variant === 'light' ? '#1F2937' : '#E5E7EB';
  const lineColor = variant === 'light' ? '#1F2937' : '#E5E7EB';

  if (showText) {
    return (
      <svg
        viewBox="0 0 320 120"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Adare Limerick Golf"
        className={className}
      >
        <g transform="translate(20,10)">
          {/* A - Golf Tee */}
          <path
            d="M16 100 L48 12 L80 100"
            stroke={strokeColor}
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="48" cy="8" r="6" fill="#C69C2E"/>

          {/* L - Line */}
          <path
            d="M104 72 h44"
            stroke={lineColor}
            strokeWidth="12"
            strokeLinecap="round"
          />

          {/* G - Curved */}
          <path
            d="M180 100 c24 0 36-14 36-28 s-12-28-36-28"
            stroke={strokeColor}
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        <text
          x="160"
          y="115"
          textAnchor="middle"
          fontSize="16"
          fontWeight="800"
          fill={textColor}
          fontFamily="Inter, sans-serif"
        >
          ADARE LIMERICK GOLF
        </text>
      </svg>
    );
  }

  // Icon only (for favicon, mobile)
  return (
    <svg
      viewBox="0 0 100 110"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ALG"
      className={className}
    >
      <g transform="translate(4,10)">
        {/* A - Golf Tee */}
        <path
          d="M16 100 L48 12 L80 100"
          stroke={strokeColor}
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="48" cy="8" r="6" fill="#C69C2E"/>
      </g>
    </svg>
  );
}
