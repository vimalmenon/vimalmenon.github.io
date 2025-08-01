'use client';
import { createContext, useContext } from 'react';
import { APIs } from '@data';
import { IGenericResponse, ILinkGroup } from '@types';
import { makeRequest, NotImplemented } from '@utility';
import { IAdminLinksContext, IUseLinkHelper } from './AdminLinks';

export const Context = createContext<IAdminLinksContext>({
  alert: null,
  linkGroups: [],
  setAlert: NotImplemented,
  setLinkGroups: NotImplemented,
});

export const useLinkContext = (): IAdminLinksContext => useContext<IAdminLinksContext>(Context);

export const useLinkHelper = (): IUseLinkHelper => {
  const { setLinkGroups } = useLinkContext();
  const getLinks = async (): Promise<void> => {
    const { response } = await makeRequest<IGenericResponse<ILinkGroup[]>>(APIs.GetLinkGroup());
    setLinkGroups(response.data);
  };
  const createLinkGroup = async (name: string): Promise<void> => {
    const { response } = await makeRequest<IGenericResponse<ILinkGroup[]>>(
      APIs.CreateLinkGroup(name)
    );
    setLinkGroups(response.data);
  };
  const createLink = async (
    id: string,
    name: string,
    link: string,
    reference: string
  ): Promise<void> => {
    const { response } = await makeRequest<IGenericResponse<ILinkGroup[]>>(
      APIs.CreateLink(id, {
        link,
        name,
        reference,
      })
    );
    setLinkGroups(response.data);
  };
  const deleteLink = async (gpId: string, id: string): Promise<void> => {
    await makeRequest<IGenericResponse<ILinkGroup[]>>(APIs.DeleteLink(gpId, id));
    await getLinks();
  };
  return {
    createLink,
    createLinkGroup,
    deleteLink,
    getLinks,
  };
};
