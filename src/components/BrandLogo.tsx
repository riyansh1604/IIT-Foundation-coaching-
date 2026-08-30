import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'mark-only' | 'badge';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  darkTheme?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'compact',
  className = '',
  size = 'md',
  darkTheme = false,
}) => {
  // SVG Icon representing the authentic IIT Foundation red mark
  const LogoMarkSvg = ({ markClassName = "w-full h-full" }: { markClassName?: string }) => (
    <svg
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={markClassName}
    >
      {/* Outer Red Rounded Badge Frame */}
      <rect
        x="6"
        y="6"
        width="98"
        height="88"
        rx="20"
        fill="none"
        stroke="#E61E2B"
        strokeWidth="11"
      />

      {/* TM Symbol */}
      <text
        x="105"
        y="12"
        fill={darkTheme ? "#FFFFFF" : "#E61E2B"}
        fontSize="10"
        fontWeight="bold"
        fontFamily="system-ui, sans-serif"
      >
        TM
      </text>

      {/* First 'i' white square dot */}
      <rect x="24" y="32" width="9" height="9" fill="#FFFFFF" rx="1" />
      {/* First 'i' red stem */}
      <rect x="24" y="46" width="9" height="26" fill="#E61E2B" rx="1" />

      {/* Second 'i' white square dot */}
      <rect x="38" y="32" width="9" height="9" fill="#FFFFFF" rx="1" />
      {/* Second 'i' red stem */}
      <rect x="38" y="46" width="9" height="26" fill="#E61E2B" rx="1" />

      {/* Capital 'T' horizontal bar */}
      <rect x="52" y="24" width="40" height="10" fill="#E61E2B" rx="1.5" />
      {/* Capital 'T' vertical stem */}
      <rect x="67" y="34" width="10" height="38" fill="#E61E2B" rx="1.5" />
    </svg>
  );

  // Full stacked logo on navy background (matching the official image card)
  if (variant === 'full') {
    return (
      <div
        className={`bg-[#0A192F] rounded-xl p-3 sm:p-4 text-center inline-flex flex-col items-center justify-center border border-[#1E3A5F] shadow-md select-none ${className}`}
      >
        <div className="w-16 sm:w-20 h-14 sm:h-16 mb-1.5 flex items-center justify-center">
          <LogoMarkSvg />
        </div>
        <div className="text-white font-black tracking-wider text-sm sm:text-base font-sans uppercase leading-none">
          FOUNDATION
        </div>
        <div className="text-[8px] sm:text-[9px] text-slate-200 tracking-widest uppercase font-serif mt-1 font-medium italic">
          INSPIRING INBORN TALENT
        </div>
      </div>
    );
  }

  // Badge mark only (used in square icon slots)
  if (variant === 'mark-only') {
    const sizeClasses = {
      sm: 'w-8 h-8 p-0.5',
      md: 'w-10 h-10 p-1',
      lg: 'w-12 h-12 p-1.5',
      xl: 'w-16 h-16 p-2',
    }[size];

    return (
      <div
        className={`bg-[#0A192F] rounded-xl flex items-center justify-center border border-[#1E3A5F] shadow-xs select-none ${sizeClasses} ${className}`}
      >
        <LogoMarkSvg markClassName="w-full h-full object-contain" />
      </div>
    );
  }

  // Header and Navigation Compact variant: Logo Mark + IIT Foundation Name + Tagline
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Logo Mark Container */}
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0A192F] p-1 border-2 border-[#18181B] shadow-[2px_2px_0px_0px_#18181B] flex items-center justify-center shrink-0">
        <LogoMarkSvg markClassName="w-full h-full object-contain" />
      </div>

      {/* Brand Text Details */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="text-base sm:text-lg font-black tracking-tight text-[#18181B] font-sans">
            IIT <span className="text-[#E61E2B]">FOUNDATION</span>
          </span>
        </div>
        <p className="text-[10px] sm:text-[11px] text-slate-600 font-medium tracking-wide">
          Inspiring Inborn Talent • Talegaon
        </p>
      </div>
    </div>
  );
};
