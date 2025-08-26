'use client';

import { useEffect, useState } from 'react';

import { localStorageHook } from '@hooks';
import { ColorTheme, IReactChildren } from '@types';
import { ThemeConfig, ThemeMode } from '@types';

import { IContext } from './ThemeContext';
import { Context, defaultThemeConfig } from './ThemeContext.service';

export const ThemeContext: React.FC<IReactChildren> = ({ children }) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [themeConfig, setThemeConfig] = useState<ThemeConfig>(defaultThemeConfig);
  const [actualMode, setActualMode] = useState<ThemeMode>('light');
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [storedValue, setStoredValue] = localStorageHook();
  useEffect(() => {
    if (storedValue) {
      setThemeConfig({
        colorTheme: storedValue?.colorTheme || 'default',
        mode: storedValue?.mode || 'system',
      });
    }
    setMounted(true);
  }, [storedValue]);
  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateMode = (): void => {
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
    const handleMediaChange = (): void => {
      if (themeConfig.mode === 'system') {
        updateMode();
      }
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, [themeConfig, mounted]);
  const saveTheme = (config: ThemeConfig): void => {
    setStoredValue(config);
    setThemeConfig(config);
  };
  const value: IContext = {
    actualMode,
    colorTheme: themeConfig.colorTheme,
    isDrawerOpen,
    mode: themeConfig.mode,
    mounted,
    setColorTheme: (colorTheme: ColorTheme) => {
      saveTheme({ ...themeConfig, colorTheme });
    },
    setIsDrawerOpen,
    setMode: (mode: ThemeMode) => {
      saveTheme({ ...themeConfig, mode });
    },
    setTheme: (config: ThemeConfig) => {
      saveTheme(config);
    },
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
