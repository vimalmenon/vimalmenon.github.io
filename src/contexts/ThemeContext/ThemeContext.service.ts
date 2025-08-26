'use client';

import { createContext, useContext } from 'react';

import { ThemeConfig } from '@types';
import { notImplemented } from '@utilities';

import { IContext } from './ThemeContext';

const initialState: IContext = {
  actualMode: 'light',
  colorTheme: 'default',
  isDrawerOpen: false,
  mode: 'system',
  mounted: false,
  setColorTheme: notImplemented,
  setIsDrawerOpen: notImplemented,
  setMode: notImplemented,
  setTheme: notImplemented,
};

export const Context = createContext<IContext>(initialState);

export const defaultThemeConfig: ThemeConfig = {
  colorTheme: 'default',
  mode: 'system',
};

export const useTheme = (): IContext => useContext<IContext>(Context);
