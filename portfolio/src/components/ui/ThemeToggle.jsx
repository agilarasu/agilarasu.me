// components/ui/ThemeToggle.jsx
import React from 'react';
import { Moon, Sun } from 'lucide-react'; // Using Lucide icons for dark/light indicators
import { useTheme } from '../../theme-provider'; // Adjust path as needed

const ThemeToggle = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-200'}
        ${className || ''}
      `}
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      {/* Track Icons */}
      <span className={`absolute inset-0 flex items-center justify-between px-1 pointer-events-none text-xs transition-opacity duration-200 ${theme === 'dark' ? 'opacity-50' : 'opacity-100'}`}>
         <Sun className="h-3 w-3 text-yellow-500" /> {/* Light icon */}
      </span>
      <span className={`absolute inset-0 flex items-center justify-between px-1 pointer-events-none text-xs transition-opacity duration-200 ${theme === 'dark' ? 'opacity-100' : 'opacity-50'}`}>
         <Moon className="h-3 w-3 text-gray-300" /> {/* Dark icon */}
      </span>


      {/* Slider Handle */}
      <span
        className={`
          inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition-transform duration-200 ease-in-out
          ${theme === 'dark' ? 'translate-x-6' : 'translate-x-1'}
        `}
      />
    </button>
  );
};

export default ThemeToggle;