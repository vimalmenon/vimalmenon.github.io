'use client';

import { useState } from 'react';

import { storageKey } from '@data';
import { ILocalStorageKey } from '@types';

export const localStorageHook = () => {
  const [storedValue, setStoredValue] = useState<ILocalStorageKey | null>(() => {
    if (typeof window === 'undefined') return null;
    return JSON.parse(window.localStorage.getItem(storageKey) || 'null');
  });

  const setValue = (value: ILocalStorageKey | null) => {
    setStoredValue(value);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(storageKey, JSON.stringify(value));
    }
  };

  return [storedValue, setValue] as const;
};
