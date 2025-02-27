'use client';

import { IReactChildren } from '@types';
import { Fragment } from 'react';

export const AppContext: React.FC<IReactChildren> = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};
