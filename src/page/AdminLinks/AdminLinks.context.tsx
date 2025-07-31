'use client';

import { useState } from 'react';
import { ILinkGroup, IReactChildren } from '@types';
import { Context } from './AdminLinks.service';

export const AdminLinksContext: React.FC<IReactChildren> = ({ children }) => {
  const [linkGroups, setLinkGroups] = useState<ILinkGroup[]>([]);
  return <Context.Provider value={{ linkGroups, setLinkGroups }}>{children}</Context.Provider>;
};
