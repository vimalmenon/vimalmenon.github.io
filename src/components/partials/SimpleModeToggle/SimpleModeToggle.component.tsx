'use client';

import { Moon, Sun } from 'lucide-react';
import * as motion from 'motion/react-client';

import { Button } from '@components';
import { useTheme } from '@contexts';

export function SimpleModeToggle() {
  const { actualMode, mode, setMode } = useTheme();

  const handleToggle = () => {
    if (mode === 'light') {
      setMode('dark');
    } else if (mode === 'dark') {
      setMode('system');
    } else {
      setMode('light');
    }
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleToggle} className="relative">
      <motion.div
        key={actualMode}
        initial={{ rotate: -90, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        exit={{ rotate: 90, scale: 0 }}
        transition={{ duration: 0.2 }}
      >
        {actualMode === 'light' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </motion.div>
      <span className="sr-only">{mode === 'system' ? 'System theme' : `${mode} theme`}</span>
    </Button>
  );
}
