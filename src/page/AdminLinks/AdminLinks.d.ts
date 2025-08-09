import { IAlert, ILinkGroup, ReactSetState } from '@types';

export interface IAdminLinksContext {
  linkGroups: ILinkGroup[];
  setLinkGroups: ReactSetState<ILinkGroup[]>;
  alert: IAlert | null;
  setAlert: ReactSetState<IAlert | null>;
  loading: boolean;
  setLoading: ReactSetState<boolean>;
  showCreate: boolean;
  setShowCreate: ReactSetState<boolean>;
}

export interface IUseLinkHelper {
  createLink: (id: string, name: string, link: string, reference: string) => Promise<void>;
  createLinkGroup: (name: string) => Promise<void>;
  deleteLink: (gpId: string, id: string) => Promise<void>;
  getLinks: VoidFunction<Promise<void>>;
  deleteLinkGroup: (id: string) => Promise<void>;
}
