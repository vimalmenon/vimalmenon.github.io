'use client';

import React, { JSX } from 'react';

import { Check, Moon, Palette, Sun } from 'lucide-react';
import * as motion from 'motion/react-client';

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
} from '@components';
import { useTheme } from '@contexts';
import { colorModeOptions, colorThemeOptions } from '@data';

export function ThemeToggle(): JSX.Element {
  const { actualMode, colorTheme, mode, setColorTheme, setMode } = useTheme();

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
        {colorModeOptions.map((modeOption) => (
          <DropdownMenuItem
            key={modeOption.value}
            onClick={() => setMode(modeOption.value)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <modeOption.Icon className="h-4 w-4" />
            <span>{modeOption.name}</span>
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
                onClick={() => setColorTheme(themeOption.value)}
                className="flex items-center gap-3 cursor-pointer"
              >
                <div className={`w-4 h-4 rounded-full ${themeOption.color} border`} />
                <span>{themeOption.name}</span>
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
export function SimpleModeToggle(): JSX.Element {
  const { actualMode, mode, setMode } = useTheme();

  const handleToggle = (): void => {
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

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium">Colors:</span>
      <div className="flex gap-1">
        {colorThemeOptions.map((option) => (
          <Button
            key={option.value}
            variant="ghost"
            size="icon"
            className={`w-8 h-8 p-0 rounded-full border-2 transition-all ${
              colorTheme === option.value
                ? 'border-primary scale-110'
                : 'border-transparent hover:border-muted-foreground'
            }`}
            onClick={() => setColorTheme(option.value)}
            title={option.name}
          >
            <div className={`w-5 h-5 rounded-full ${option.color}`} />
          </Button>
        ))}
      </div>
    </div>
  );
}
