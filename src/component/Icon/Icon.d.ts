import React from 'react';
import { VoidFunction } from '@types';

export interface IIcon {
  onClick?: VoidFunction<Promise<void> | void>;
  toolTip: string;
  icon: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}
