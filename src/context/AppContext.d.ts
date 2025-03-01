import { AnyType } from '@types';
export interface IAppReducer {
  theme: 'dark' | 'light';
  showDrawer: boolean;
  primaryTheme: string;
  secondaryTheme: string;
  tertiaryTheme: string;
}

export type ActionType = 'TOGGLE_MODE' | 'TOGGLE_DRAWER' | 'CHANGE_THEME';

export interface IAppAction<T = string> {
  type: ActionType;
  payload?: T;
}

export interface IAppContext extends IAppReducer {
  toggleMode: () => void;
  toggleDrawer: () => void;
  changeTheme: (data: AnyType) => void;
}

export type DispatchType = ActionDispatch<[action: IAppAction]>;
