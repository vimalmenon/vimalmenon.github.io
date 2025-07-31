'use client';
import { createContext, useContext } from 'react';
import { NotImplemented } from '@utility';
import { IAdminLinksContext } from './AdminLinks';

export const Context = createContext<IAdminLinksContext>({
  linkGroups: [],
  setLinkGroups: NotImplemented,
});

export const useLinkContext = (): IAdminLinksContext => useContext<IAdminLinksContext>(Context);
