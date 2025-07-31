'use client';
import { createContext, useContext } from 'react';
import { APIs } from '@data';
import { IGenericResponse, ILinkGroup } from '@types';
import { makeRequest, NotImplemented } from '@utility';
import { IAdminLinksContext } from './AdminLinks';

export const Context = createContext<IAdminLinksContext>({
  linkGroups: [],
  setLinkGroups: NotImplemented,
});

export const useLinkContext = (): IAdminLinksContext => useContext<IAdminLinksContext>(Context);

export const useLinkHelper = () => {
  const { linkGroups, setLinkGroups } = useLinkContext();
  const getLinks = async (): Promise<void> => {
    const { response } = await makeRequest<IGenericResponse<ILinkGroup[]>>(APIs.GetLinkGroup());
    setLinkGroups(response.data);
  };
  return {
    getLinks,
    linkGroups,
  };
};
