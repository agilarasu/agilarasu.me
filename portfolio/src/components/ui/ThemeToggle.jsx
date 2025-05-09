import React from 'react';
import { Palette } from 'lucide-react';
import { useTheme } from '../../theme-provider';

const ThemeToggle = ({ className = '' }) => {
  const { palette, cyclePalette } = useTheme();
  
  // Map of palettes and their display names
  const paletteNames = {
    'lavender': 'Lavender',
    'sunset': 'Sunset',
    'midnight': 'Midnight',
    'sage': 'Sage',
  };

  return (
    <button
      onClick={cyclePalette}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all flex items-center group overflow-hidden ${className}`}
      aria-label={`Change color theme, current theme is ${paletteNames[palette]}`}
    >
      <span className="max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:mr-2 whitespace-nowrap transition-all duration-300 overflow-hidden">Magic</span>
      <Palette className="h-6 w-6 flex-shrink-0" />
      <span className="sr-only">Toggle theme palette</span>
    </button>
  );
};

export default ThemeToggle;