'use client';

import { useState } from 'react';
import { IAlert, ILinkGroup, IReactChildren } from '@types';
import { Context } from './AdminLinks.service';

export const AdminLinksContext: React.FC<IReactChildren> = ({ children }) => {
  const [linkGroups, setLinkGroups] = useState<ILinkGroup[]>([]);
  const [alert, setAlert] = useState<IAlert | null>(null);

  return (
    <Context.Provider value={{ alert, linkGroups, setAlert, setLinkGroups }}>
      {children}
    </Context.Provider>
  );
};
