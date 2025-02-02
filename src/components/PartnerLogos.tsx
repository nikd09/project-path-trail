import React from 'react';

interface PartnerLogoProps {
  name: string;
  className?: string;
}

export function PartnerLogo({ name, className = "h-12" }: PartnerLogoProps) {
  // Adjust color for dark mode compatibility
  const darkModeClass = name === 'Coracle' ? 'dark:brightness-0 dark:invert' : '';
  
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src={`/partners/${name.toLowerCase().replace(/\s+/g, '-')}-logo.svg`}
        alt={name}
        className={`h-full w-auto object-contain transition-all duration-300 ${darkModeClass}`}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          target.nextElementSibling?.classList.remove('hidden');
        }}
      />
      <div className="hidden text-xl font-bold text-gray-900 dark:text-white">
        {name}
      </div>
    </div>
  );
} 