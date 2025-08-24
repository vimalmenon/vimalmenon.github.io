'use client';

import { JSX } from 'react';

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
        {colorModeOptions.map((colorMode) => (
          <DropdownMenuItem
            key={colorMode.value}
            onClick={() => setMode(colorMode.value)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <colorMode.Icon className="h-4 w-4" />
            <span>{colorMode.name}</span>
            {mode === colorMode.value && (
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
