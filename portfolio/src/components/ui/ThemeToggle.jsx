import React from 'react';
import { Palette } from 'lucide-react';
import { useTheme } from '../../theme-provider';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const { cyclePalette } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cyclePalette}
      aria-label="Cycle color palette"
    >
      <Palette className="h-5 w-5" />
    </Button>
  );
};

export default ThemeToggle;