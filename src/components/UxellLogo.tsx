import React from 'react';

interface UxellLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  showSubtitle?: boolean;
}

export const UxellLogo: React.FC<UxellLogoProps> = ({
  className = 'h-10',
  variant = 'auto',
  showSubtitle = true,
}) => {
  // Matches the official Üxell Pinturas branding from image_0.png
  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 320 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-full"
        aria-label="Üxell Pinturas Logo Oficial"
      >
        <defs>
          {/* Official vibrant gradient wave: deep purple -> magenta -> hot pink -> vivid orange -> golden yellow */}
          <linearGradient id="uxellWaveGradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#7E22CE" />
            <stop offset="25%" stopColor="#C026D3" />
            <stop offset="50%" stopColor="#E11D48" />
            <stop offset="75%" stopColor="#EA580C" />
            <stop offset="100%" stopColor="#FBBF24" />
          </linearGradient>

          <linearGradient id="uxellWaveGradientSecondary" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#581C87" />
            <stop offset="40%" stopColor="#9333EA" />
            <stop offset="70%" stopColor="#DB2777" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs>

        {/* Text "Üxell" */}
        <g className={variant === 'dark' ? 'fill-slate-900' : 'fill-white'}>
          {/* Ü letter dots (Umlaut) */}
          <circle cx="53" cy="22" r="6.5" />
          <circle cx="75" cy="22" r="6.5" />

          {/* Letter Ü */}
          <path
            d="M43 35 H55 V57 C55 62 58 65 64 65 C70 65 73 62 73 57 V35 H85 V57 C85 68 77 75 64 75 C51 75 43 68 43 57 Z"
          />

          {/* Letter x */}
          <path
            d="M93 42 H106 L118 57 L130 42 H143 L126 62 L144 82 H131 L118 66 L105 82 H92 L110 62 Z"
          />

          {/* Letter e */}
          <path
            d="M150 61 C150 49 159 41 172 41 C184 41 192 49 192 61 V64 H162 C163 70 167 74 174 74 C180 74 184 71 187 68 L193 74 C188 80 181 83 173 83 C159 83 150 74 150 61 Z M181 57 C181 52 177 48 171 48 C166 48 162 52 162 57 Z"
          />

          {/* Letter l (first) */}
          <rect x="200" y="35" width="12" height="47" rx="1.5" />

          {/* Letter l (second) */}
          <rect x="219" y="35" width="12" height="47" rx="1.5" />
        </g>

        {/* Text "P I N T U R A S" */}
        {showSubtitle && (
          <text
            x="137"
            y="96"
            textAnchor="middle"
            className={`font-semibold tracking-[0.42em] text-[11px] ${
              variant === 'dark' ? 'fill-slate-700' : 'fill-slate-200'
            }`}
            letterSpacing="0.42em"
          >
            PINTURAS
          </text>
        )}

        {/* Dynamic Curved Paint Wave (as in image_0.png) */}
        <g>
          {/* Main top wave ribbon */}
          <path
            d="M34 104 C70 98, 120 97, 160 102 C200 107, 240 114, 286 111 C260 117, 210 116, 170 111 C130 106, 80 105, 34 104 Z"
            fill="url(#uxellWaveGradient)"
          />
          {/* Secondary lower depth wave ribbon */}
          <path
            d="M48 107 C85 103, 130 103, 170 108 C210 113, 245 118, 280 115 C250 120, 205 119, 165 114 C125 109, 85 109, 48 107 Z"
            fill="url(#uxellWaveGradientSecondary)"
            opacity="0.9"
          />
        </g>
      </svg>
    </div>
  );
};
