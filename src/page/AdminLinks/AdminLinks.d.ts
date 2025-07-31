import { ILinkGroup, ReactSetState } from '@types';

export interface IAdminLinksContext {
  linkGroups: ILinkGroup[];
  setLinkGroups: ReactSetState<ILinkGroup[]>;
}
