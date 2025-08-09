'use client';

import { Fragment, useEffect } from 'react';

import TagManager from 'react-gtm-module';

import { IReactChildren } from '@types';

export const Google: React.FC<IReactChildren> = ({ children }) => {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'G-JSJYNELL2R',
    };
    TagManager.initialize(tagManagerArgs);
  }, []);
  return <Fragment>{children}</Fragment>;
};
