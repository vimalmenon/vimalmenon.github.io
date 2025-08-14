'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type ColorTheme = 'default' | 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'pink';
type Mode = 'light' | 'dark' | 'system';

type ThemeConfig = {
  colorTheme: ColorTheme;
  mode: Mode;
};

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: string | ThemeConfig;
  storageKey?: string;
};

type ThemeProviderState = {
  colorTheme: ColorTheme;
  mode: Mode;
  actualMode: 'light' | 'dark';
  setColorTheme: (theme: ColorTheme) => void;
  setMode: (mode: Mode) => void;
  setTheme: (config: ThemeConfig) => void;
  mounted: boolean;
};

const initialState: ThemeProviderState = {
  actualMode: 'light',
  colorTheme: 'default',
  mode: 'system',
  mounted: false,
  setColorTheme: () => null,
  setMode: () => null,
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

const defaultThemeConfig: ThemeConfig = {
  colorTheme: 'default',
  mode: 'system',
};

export function ThemeProvider({
  children,
  defaultTheme = defaultThemeConfig,
  storageKey = 'vimal-menon-theme',
}: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  // Handle legacy string format and new object format
  const normalizedDefaultTheme: ThemeConfig =
    typeof defaultTheme === 'string'
      ? { colorTheme: 'default', mode: defaultTheme as Mode }
      : defaultTheme;

  const [themeConfig, setThemeConfig] = useState<ThemeConfig>(normalizedDefaultTheme);
  const [actualMode, setActualMode] = useState<'light' | 'dark'>('light');

  // Initialize theme from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const parsedTheme = JSON.parse(stored);
        // Handle migration from old theme format
        if (typeof parsedTheme === 'string') {
          setThemeConfig({ colorTheme: 'default', mode: parsedTheme as Mode });
        } else if (parsedTheme && typeof parsedTheme === 'object') {
          setThemeConfig({
            colorTheme: parsedTheme.colorTheme || 'default',
            mode: parsedTheme.mode || 'system',
          });
        }
      }
    } catch (error) {
      console.warn('Failed to load theme from localStorage:', error);
    }
    setMounted(true);
  }, [storageKey]);

  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateMode = () => {
      let resolvedMode: 'light' | 'dark';

      if (themeConfig.mode === 'system') {
        resolvedMode = mediaQuery.matches ? 'dark' : 'light';
      } else {
        resolvedMode = themeConfig.mode;
      }

      setActualMode(resolvedMode);

      // Remove all theme classes
      root.classList.remove('light', 'dark');
      root.classList.remove(
        'theme-default',
        'theme-blue',
        'theme-green',
        'theme-purple',
        'theme-orange',
        'theme-red',
        'theme-pink'
      );

      // Add current theme classes
      root.classList.add(resolvedMode);
      root.classList.add(`theme-${themeConfig.colorTheme}`);

      // Set data attributes for additional styling hooks
      root.setAttribute('data-mode', resolvedMode);
      root.setAttribute('data-color-theme', themeConfig.colorTheme);
      root.setAttribute('data-theme', `${themeConfig.colorTheme}-${resolvedMode}`);
    };

    updateMode();

    // Listen for system theme changes
    const handleMediaChange = () => {
      if (themeConfig.mode === 'system') {
        updateMode();
      }
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, [themeConfig, mounted]);

  const saveTheme = (config: ThemeConfig) => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(config));
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error);
    }
    setThemeConfig(config);
  };

  const value: ThemeProviderState = {
    actualMode,
    colorTheme: themeConfig.colorTheme,
    mode: themeConfig.mode,
    mounted,
    setColorTheme: (colorTheme: ColorTheme) => {
      saveTheme({ ...themeConfig, colorTheme });
    },
    setMode: (mode: Mode) => {
      saveTheme({ ...themeConfig, mode });
    },
    setTheme: (config: ThemeConfig) => {
      saveTheme(config);
    },
  };

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>;
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};

// Color theme definitions for easy access
export const colorThemes: Record<ColorTheme, { name: string; description: string }> = {
  blue: { description: 'Professional blue theme', name: 'Blue' },
  default: { description: 'Classic neutral theme', name: 'Default' },
  green: { description: 'Natural green theme', name: 'Green' },
  orange: { description: 'Energetic orange theme', name: 'Orange' },
  pink: { description: 'Vibrant pink theme', name: 'Pink' },
  purple: { description: 'Creative purple theme', name: 'Purple' },
  red: { description: 'Bold red theme', name: 'Red' },
};

export const modes: Record<Mode, { name: string; description: string }> = {
  dark: { description: 'Dark mode', name: 'Dark' },
  light: { description: 'Light mode', name: 'Light' },
  system: { description: 'Follow system preference', name: 'System' },
};
