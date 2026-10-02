import React from 'react';

interface DiamantLogoProps {
  variant?: 'default' | 'gold' | 'compact' | 'white';
  className?: string;
  showSubtitle?: boolean;
}

export const DiamantLogo: React.FC<DiamantLogoProps> = ({
  variant = 'default',
  className = '',
  showSubtitle = true,
}) => {
  if (variant === 'gold') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {/* Gold Diamond with Laurels Icon */}
        <div className="relative w-11 h-11 shrink-0 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            {/* Laurel Wreath */}
            <path
              d="M20 70 C15 50 25 25 50 18 C75 25 85 50 80 70"
              stroke="#D4AF37"
              strokeWidth="2.5"
              strokeDasharray="2 3"
              strokeLinecap="round"
            />
            {/* Laurel leaves left */}
            <path d="M22 62 Q16 58 18 52 Q24 55 22 62Z" fill="#D4AF37" />
            <path d="M26 48 Q20 44 23 38 Q29 42 26 48Z" fill="#D4AF37" />
            <path d="M34 35 Q28 30 32 25 Q37 30 34 35Z" fill="#D4AF37" />
            {/* Laurel leaves right */}
            <path d="M78 62 Q84 58 82 52 Q76 55 78 62Z" fill="#D4AF37" />
            <path d="M74 48 Q80 44 77 38 Q71 42 74 48Z" fill="#D4AF37" />
            <path d="M66 35 Q72 30 68 25 Q63 30 66 35Z" fill="#D4AF37" />
            {/* Faceted Gold Diamond */}
            <polygon points="50,30 66,42 50,75 34,42" fill="#E5C07B" fillOpacity="0.3" stroke="#D4AF37" strokeWidth="2" />
            <polygon points="34,42 50,30 42,42" fill="#F3E5AB" stroke="#D4AF37" strokeWidth="1" />
            <polygon points="66,42 50,30 58,42" fill="#D4AF37" stroke="#D4AF37" strokeWidth="1" />
            <polygon points="42,42 50,30 58,42" fill="#FFF2BF" stroke="#D4AF37" strokeWidth="1" />
            <polygon points="34,42 42,42 50,75" fill="#B89028" stroke="#D4AF37" strokeWidth="1" />
            <polygon points="58,42 66,42 50,75" fill="#996515" stroke="#D4AF37" strokeWidth="1" />
            <polygon points="42,42 58,42 50,75" fill="#D4AF37" stroke="#D4AF37" strokeWidth="1" />
          </svg>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-sm md:text-base font-bold tracking-wider text-[#F3E5AB] font-display">
            DIAMANT SERVICES
          </span>
          {showSubtitle && (
            <span className="text-[10px] text-[#D4AF37] tracking-wider uppercase">
              Service de commande automobile • Dakar
            </span>
          )}
        </div>
      </div>
    );
  }

  // Standard or Compact or White version
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Blue Diamond with Sparkles matching Image 1 */}
      <div className="relative w-9 h-9 shrink-0 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          {/* Sparkle top right (red/gold) */}
          <path d="M78 14 L80 8 L82 14 L88 16 L82 18 L80 24 L78 18 L72 16 Z" fill="#E63946" />
          <path d="M88 28 L89 25 L90 28 L93 29 L90 30 L89 33 L88 30 L85 29 Z" fill="#38BDF8" />
          {/* Diamond body */}
          <polygon points="50,22 78,38 50,86 22,38" fill="#1E60D5" fillOpacity="0.25" stroke="#38BDF8" strokeWidth="3" />
          {/* Upper facets */}
          <polygon points="22,38 34,22 50,22 38,38" fill="#38BDF8" fillOpacity="0.5" stroke="#38BDF8" strokeWidth="1.5" />
          <polygon points="50,22 66,22 78,38 62,38" fill="#60A5FA" fillOpacity="0.6" stroke="#38BDF8" strokeWidth="1.5" />
          <polygon points="38,38 50,22 62,38" fill="#BAE6FD" fillOpacity="0.8" stroke="#38BDF8" strokeWidth="1.5" />
          {/* Lower facets */}
          <polygon points="22,38 38,38 50,86" fill="#1D4ED8" fillOpacity="0.7" stroke="#38BDF8" strokeWidth="1.5" />
          <polygon points="62,38 78,38 50,86" fill="#1E40AF" fillOpacity="0.7" stroke="#38BDF8" strokeWidth="1.5" />
          <polygon points="38,38 62,38 50,86" fill="#2563EB" fillOpacity="0.9" stroke="#38BDF8" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="flex flex-col text-left leading-none">
        <div className="flex items-center gap-1 font-display tracking-tight text-base md:text-lg font-bold">
          <span className="text-[#38BDF8]">DIAMANT</span>
          <span className="text-[#E63946]">SERVICES</span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] tracking-wider font-semibold text-white/80 uppercase mt-0.5">
            AUTOMOBILE <span className="text-[#E63946]">·</span> DAKAR
          </span>
        )}
      </div>
    </div>
  );
};
