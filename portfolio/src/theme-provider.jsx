import React, { createContext, useContext, useState, useEffect } from 'react';

// Available themes/palettes from the CSS
const PALETTES = ['lavender', 'sunset', 'midnight', 'sage'];

const ThemeContext = createContext({
  mode: 'dark',
  palette: 'sage',
  setMode: () => {},
  setPalette: () => {},
  toggleMode: () => {},
  cyclePalette: () => {},
});

export function ThemeProvider({ children }) {
  // Split theme into mode (light/dark) and palette (lavender, sunset, etc.)
  const [mode, setMode] = useState(() => {
    const storedMode = localStorage.getItem('vite-ui-mode');
    return storedMode || 'dark'; // Default to 'dark' if nothing is stored
  });
  
  const [palette, setPalette] = useState(() => {
    const storedPalette = localStorage.getItem('vite-ui-palette');
    return storedPalette || 'sage'; // Default to 'lavender' if nothing is stored
  });

  useEffect(() => {
    // Remove previous mode classes
    document.documentElement.classList.remove('dark', 'light');
    // Add current mode class
    document.documentElement.classList.add(mode);
    // Save mode to localStorage
    localStorage.setItem('vite-ui-mode', mode);
  }, [mode]);

  useEffect(() => {
    // Remove previous palette classes
    PALETTES.forEach(p => document.documentElement.classList.remove(p));
    // Add current palette class
    document.documentElement.classList.add(palette);
    // Save palette to localStorage
    localStorage.setItem('vite-ui-palette', palette);
  }, [palette]);

  const toggleMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };
  
  const cyclePalette = () => {
    setPalette((prev) => {
      const currentIndex = PALETTES.indexOf(prev);
      const nextIndex = (currentIndex + 1) % PALETTES.length;
      return PALETTES[nextIndex];
    });
  };

  return (
    <ThemeContext.Provider 
      value={{ 
        mode, 
        palette, 
        setMode, 
        setPalette, 
        toggleMode, 
        cyclePalette 
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
