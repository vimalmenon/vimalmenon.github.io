import React from 'react';

import { Check, Monitor, Moon, Palette, Sun } from 'lucide-react';
import { motion } from 'motion/react';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@component';

import { colorThemes, modes, useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { actualMode, colorTheme, mode, setColorTheme, setMode } = useTheme();

  const modeOptions = [
    { icon: Sun, value: 'light' as const },
    { icon: Moon, value: 'dark' as const },
    { icon: Monitor, value: 'system' as const },
  ];

  const colorThemeOptions = [
    { color: 'bg-slate-500', value: 'default' },
    { color: 'bg-blue-500', value: 'blue' },
    { color: 'bg-green-500', value: 'green' },
    { color: 'bg-purple-500', value: 'purple' },
    { color: 'bg-orange-500', value: 'orange' },
    { color: 'bg-red-500', value: 'red' },
    { color: 'bg-pink-500', value: 'pink' },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <motion.div
            key={actualMode}
            initial={{ rotate: -90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: 90, scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            {actualMode === 'light' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </motion.div>
          <span className="sr-only">Theme settings</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Theme Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {/* Mode Selection */}
        <DropdownMenuLabel className="text-xs text-muted-foreground uppercase tracking-wider">
          Appearance
        </DropdownMenuLabel>
        {modeOptions.map((modeOption) => (
          <DropdownMenuItem
            key={modeOption.value}
            onClick={() => setMode(modeOption.value)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <modeOption.icon className="h-4 w-4" />
            <span>{modes[modeOption.value].name}</span>
            {mode === modeOption.value && (
              <motion.div
                className="ml-auto"
                layoutId="mode-indicator"
                transition={{ damping: 30, stiffness: 300, type: 'spring' }}
              >
                <Check className="h-4 w-4 text-primary" />
              </motion.div>
            )}
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        {/* Color Theme Selection */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            <span>Color Theme</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-48">
            <DropdownMenuLabel className="text-xs text-muted-foreground uppercase tracking-wider">
              Color Themes
            </DropdownMenuLabel>
            {colorThemeOptions.map((themeOption) => (
              <DropdownMenuItem
                key={themeOption.value}
                onClick={() => setColorTheme(themeOption.value as any)}
                className="flex items-center gap-3 cursor-pointer"
              >
                <div className={`w-4 h-4 rounded-full ${themeOption.color} border`} />
                <span>{colorThemes[themeOption.value as keyof typeof colorThemes].name}</span>
                {colorTheme === themeOption.value && (
                  <motion.div
                    className="ml-auto"
                    layoutId="color-indicator"
                    transition={{ damping: 30, stiffness: 300, type: 'spring' }}
                  >
                    <Check className="h-4 w-4 text-primary" />
                  </motion.div>
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Simple mode toggle for mobile or minimal interfaces
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

// Color theme selector component
export function ColorThemeSelector() {
  const { colorTheme, setColorTheme } = useTheme();

  const colorOptions = [
    { color: 'bg-slate-500', label: 'Default', value: 'default' },
    { color: 'bg-blue-500', label: 'Blue', value: 'blue' },
    { color: 'bg-green-500', label: 'Green', value: 'green' },
    { color: 'bg-purple-500', label: 'Purple', value: 'purple' },
    { color: 'bg-orange-500', label: 'Orange', value: 'orange' },
    { color: 'bg-red-500', label: 'Red', value: 'red' },
    { color: 'bg-pink-500', label: 'Pink', value: 'pink' },
  ];

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium">Colors:</span>
      <div className="flex gap-1">
        {colorOptions.map((option) => (
          <Button
            key={option.value}
            variant="ghost"
            size="icon"
            className={`w-8 h-8 p-0 rounded-full border-2 transition-all ${
              colorTheme === option.value
                ? 'border-primary scale-110'
                : 'border-transparent hover:border-muted-foreground'
            }`}
            onClick={() => setColorTheme(option.value as any)}
            title={option.label}
          >
            <div className={`w-5 h-5 rounded-full ${option.color}`} />
          </Button>
        ))}
      </div>
    </div>
  );
}
