import { ActionDispatch } from 'react';

import { PaletteColorOptions } from '@mui/material/styles';

import { AnyType } from '@types';

export interface IAppReducer {
  mode: 'dark' | 'light';
  showDrawer: boolean;
  showAcceptCookie: boolean;
  primaryTheme: PaletteColorOptions;
  secondaryTheme: PaletteColorOptions;
  tertiaryTheme: PaletteColorOptions;
}

export type ActionType = 'TOGGLE_MODE' | 'TOGGLE_DRAWER' | 'CHANGE_THEME' | 'CLOSE_DRAWER';

export interface IAppAction<T = string> {
  type: ActionType;
  payload?: T;
}

export interface IAppContext extends IAppReducer {
  toggleMode: () => void;
  toggleDrawer: () => void;
  closeDrawer: () => void;
  changeTheme: (data: AnyType) => void;
}

export type DispatchType<T> = ActionDispatch<[action: IAppAction<T>]>;
