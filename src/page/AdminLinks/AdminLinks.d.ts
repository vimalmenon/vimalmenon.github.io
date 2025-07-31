import { IAlert, ILinkGroup, ReactSetState } from '@types';

export interface IAdminLinksContext {
  linkGroups: ILinkGroup[];
  setLinkGroups: ReactSetState<ILinkGroup[]>;
  alert: IAlert | null;
  setAlert: ReactSetState<IAlert | null>;
}
