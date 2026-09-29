import React from 'react';

interface SarmientoLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  showSubtitle?: boolean;
}

export const SarmientoLogo: React.FC<SarmientoLogoProps> = ({
  className = 'h-10',
  variant = 'auto',
  showSubtitle = true,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto aspect-square shrink-0"
        aria-label="Logo Oficial Pinturería Sarmiento"
      >
        <defs>
          <linearGradient id="sarmientoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="35%" stopColor="#EA580C" />
            <stop offset="70%" stopColor="#E11D48" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          <filter id="glowDrop" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#E11D48" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Shield / Base */}
        <rect x="4" y="4" width="64" height="64" rx="18" fill="#090D16" stroke="#334155" strokeWidth="2" />
        
        {/* Dynamic Stylized "S" & Ribbon */}
        <path
          d="M48 20 C42 16, 26 16, 22 26 C19 33, 26 38, 36 40 C48 42, 53 47, 50 54 C46 62, 30 63, 22 56"
          stroke="url(#sarmientoGrad1)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glowDrop)"
        />
        
        {/* Swirling Color Splashes */}
        <circle cx="24" cy="23" r="3.5" fill="#FBBF24" />
        <circle cx="48" cy="53" r="3.5" fill="#38BDF8" />
        
        {/* Brush Tip */}
        <path
          d="M46 16 L53 10 C54 9, 56 10, 56 11 L53 18 Z"
          fill="url(#sarmientoGrad1)"
        />
      </svg>

      <div className="flex flex-col justify-center leading-tight">
        <span
          className={`text-[10px] font-bold uppercase tracking-[0.25em] ${
            variant === 'dark' ? 'text-slate-600' : 'text-rose-400'
          }`}
        >
          Pinturería
        </span>
        <span
          className={`text-lg sm:text-xl font-extrabold tracking-tight uppercase ${
            variant === 'dark' ? 'text-slate-900' : 'text-white'
          }`}
        >
          Sarmiento
        </span>
        {showSubtitle && (
          <span
            className={`text-[10px] font-medium tracking-wide ${
              variant === 'dark' ? 'text-slate-500' : 'text-slate-400'
            }`}
          >
            Sucursal Salta · Concordia
          </span>
        )}
      </div>
    </div>
  );
};
