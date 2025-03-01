import { AnyType } from '@types';
import { PaletteColorOptions } from '@mui/material/styles';
export interface IAppReducer {
  mode: 'dark' | 'light';
  showDrawer: boolean;
  primaryTheme: PaletteColorOptions;
  secondaryTheme: PaletteColorOptions;
  tertiaryTheme: PaletteColorOptions;
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
