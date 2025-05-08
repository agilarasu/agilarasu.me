import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../theme-provider'; // Adjust path as needed

const ModeToggle = ({ className = '' }) => {
  const { mode, toggleMode } = useTheme();
  const isDark = mode === 'dark';

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMode();
    }
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggleMode}
      onKeyDown={handleKeyDown}
      className={`relative inline-flex items-center h-6 w-12 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
        ${isDark ? 'bg-slate-700 focus:ring-offset-slate-900' : 'bg-slate-200 focus:ring-offset-white'}
        ${className}`}
    >
      <span className="sr-only">Toggle theme</span>

      {/* Slider Handle with Icon */}
      <span
        className={`flex items-center justify-center h-5 w-5 transform bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out
          ${isDark ? 'translate-x-7' : 'translate-x-1'}`}
      >
        {isDark ? (
          <Moon className="h-3 w-3 text-gray-500" aria-hidden="true" />
        ) : (
          <Sun className="h-3 w-3 text-yellow-400" aria-hidden="true" />
        )}
      </span>
    </button>
  );
};

export default ModeToggle;