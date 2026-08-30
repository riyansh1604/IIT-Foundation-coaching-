import React from 'react';

export const StudentDeskIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-auto" }) => {
  return (
    <svg 
      viewBox="0 0 500 450" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Student studying at desk illustration"
    >
      {/* Background soft accent shapes */}
      <circle cx="360" cy="180" r="140" fill="#EBF4EC" />
      
      {/* Floating Paper / Formula Notes in Background */}
      <g stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="white">
        <rect x="70" y="140" width="55" height="75" rx="4" />
        <line x1="82" y1="158" x2="112" y2="158" />
        <line x1="82" y1="170" x2="112" y2="170" />
        <line x1="82" y1="182" x2="104" y2="182" />
        <line x1="82" y1="194" x2="98" y2="194" />
      </g>

      {/* Desk Surface */}
      <line x1="80" y1="340" x2="430" y2="340" stroke="#18181B" strokeWidth="3.5" strokeLinecap="round" />
      {/* Desk Legs */}
      <line x1="120" y1="340" x2="105" y2="420" stroke="#18181B" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="390" y1="340" x2="405" y2="420" stroke="#18181B" strokeWidth="3.5" strokeLinecap="round" />

      {/* Stool / Chair */}
      <ellipse cx="270" cy="380" rx="35" ry="8" fill="#18181B" />
      <line x1="250" y1="380" x2="245" y2="425" stroke="#18181B" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="290" y1="380" x2="295" y2="425" stroke="#18181B" strokeWidth="3.5" strokeLinecap="round" />

      {/* Student Character */}
      {/* Legs */}
      <path 
        d="M245 350 L240 390 L230 420" 
        stroke="#18181B" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M275 350 L275 390 L285 420" 
        stroke="#18181B" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* Body / Torso in dark green shirt */}
      <path 
        d="M230 240 C215 270 215 330 235 345 L285 345 C295 330 295 270 280 240 Z" 
        fill="#133E2B" 
        stroke="#18181B" 
        strokeWidth="3" 
        strokeLinejoin="round"
      />

      {/* Arms & Hands typing on Laptop */}
      <path 
        d="M235 260 C210 285 240 310 270 305" 
        stroke="#18181B" 
        strokeWidth="3" 
        strokeLinecap="round" 
        fill="none"
      />
      <path 
        d="M275 260 C300 285 285 305 310 305" 
        stroke="#18181B" 
        strokeWidth="3" 
        strokeLinecap="round" 
        fill="none"
      />

      {/* Neck & Head */}
      <rect x="250" y="210" width="14" height="20" fill="#FCE7D6" stroke="#18181B" strokeWidth="2.5" />
      <ellipse cx="258" cy="180" rx="22" ry="26" fill="#FCE7D6" stroke="#18181B" strokeWidth="3" />

      {/* Face features (Focused / Smiling) */}
      <circle cx="265" cy="178" r="2.5" fill="#18181B" />
      <path d="M260 188 Q267 194 272 188" stroke="#18181B" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M262 170 Q268 167 274 171" stroke="#18181B" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Distinctive Wavy Hair (Black ink style from video) */}
      <path 
        d="M240 180 C235 155 250 145 270 145 C290 145 295 160 285 185 C280 165 265 160 248 168 C240 172 238 180 240 180 Z" 
        fill="#18181B" 
        stroke="#18181B" 
        strokeWidth="3" 
        strokeLinejoin="round" 
      />
      <circle cx="250" cy="142" r="14" fill="#18181B" />

      {/* Laptop on Desk */}
      <path d="M280 330 L360 330 L350 285 L295 285 Z" fill="white" stroke="#18181B" strokeWidth="3" strokeLinejoin="round" />
      <line x1="270" y1="330" x2="370" y2="330" stroke="#18181B" strokeWidth="3" strokeLinecap="round" />
      {/* Screen Glow / Logo */}
      <path d="M320 302 L325 308 L330 302" stroke="#133E2B" strokeWidth="2" strokeLinecap="round" />

      {/* Pen Stand & Mug on Desk */}
      <rect x="380" y="310" width="18" height="25" rx="3" fill="#FAF8F5" stroke="#18181B" strokeWidth="2.5" />
      <line x1="385" y1="310" x2="382" y2="295" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="392" y1="310" x2="395" y2="292" stroke="#133E2B" strokeWidth="2.5" strokeLinecap="round" />

      {/* Small notebook */}
      <path d="M160 332 L200 332 L195 320 L155 320 Z" fill="#D8F3DC" stroke="#18181B" strokeWidth="2" />
    </svg>
  );
};

export const StudentSittingIllustration: React.FC<{ className?: string }> = ({ className = "w-full h-auto" }) => {
  return (
    <svg 
      viewBox="0 0 320 280" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Student studying with laptop"
    >
      <circle cx="160" cy="140" r="100" fill="#F4EFE6" />
      
      {/* Character sitting relaxed with laptop */}
      <ellipse cx="160" cy="220" rx="70" ry="12" fill="#E6DFC8" />
      
      {/* Legs crossed */}
      <path d="M120 180 C110 200 130 220 160 220 C190 220 210 200 200 180" stroke="#18181B" strokeWidth="3.5" strokeLinecap="round" fill="#133E2B" />
      
      {/* Body */}
      <path d="M140 130 C130 160 135 190 150 200 L170 200 C185 190 190 160 180 130 Z" fill="#18181B" stroke="#18181B" strokeWidth="3" />
      
      {/* Head & Hair */}
      <circle cx="160" cy="100" r="18" fill="#FCE7D6" stroke="#18181B" strokeWidth="2.5" />
      <path d="M145 95 C145 75 175 75 175 95 C175 105 170 115 160 115 C150 115 145 105 145 95 Z" fill="#18181B" />
      
      {/* Laptop in lap */}
      <path d="M135 175 L185 175 L180 145 L140 145 Z" fill="white" stroke="#18181B" strokeWidth="2.5" />
      <line x1="130" y1="175" x2="190" y2="175" stroke="#18181B" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
};
