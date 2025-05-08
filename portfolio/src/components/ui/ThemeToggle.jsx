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
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all ${className}`}
      aria-label={`Change color theme, current theme is ${paletteNames[palette]}`}
    >
      <Palette className="h-6 w-6" />
      <span className="sr-only">Toggle theme palette</span>
    </button>
  );
};

export default ThemeToggle;