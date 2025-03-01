'use client';

import { createContext, useContext } from 'react';
import { IAppReducer, IAppAction, IAppContext, DispatchType } from './AppContext';
import { NotImplemented } from '@utility';
import { teal } from '@mui/material/colors';
import { AnyType } from '@types';

export const reducer = (state: IAppReducer, action: IAppAction): IAppReducer => {
  const { type, payload } = action;

  if (type === 'TOGGLE_MODE') {
    const theme = state.theme === 'dark' ? 'light' : 'dark';
    return {
      ...state,
      theme,
    };
  }
  if (type === 'TOGGLE_DRAWER') {
    const showDrawer = !state.showDrawer;
    return {
      ...state,
      showDrawer,
    };
  }
  if (type === 'CHANGE_THEME') {
    const { theme } = payload as AnyType;
    return {
      ...state,
      primaryTheme: theme,
    };
  }
  return state;
};

export const initialState: IAppReducer = {
  theme: 'light',
  showDrawer: false,
  primaryTheme: teal[500],
  secondaryTheme: teal[500],
  tertiaryTheme: teal[500],
};

export enum ActionType {
  TOGGLE_MODE = 'TOGGLE_MODE',
  TOGGLE_DRAWER = 'TOGGLE_DRAWER',
  CHANGE_THEME = 'CHANGE_THEME',
}

export const Context = createContext<IAppContext>({
  ...initialState,
  toggleMode: NotImplemented,
  toggleDrawer: NotImplemented,
  changeTheme: NotImplemented,
});

export const toggleMode = (dispatch: DispatchType): void => {
  dispatch({ type: ActionType.TOGGLE_MODE });
};

export const toggleDrawer = (dispatch: DispatchType): void => {
  dispatch({ type: ActionType.TOGGLE_DRAWER });
};

export const changeTheme = (dispatch: DispatchType, payload: string): void => {
  dispatch({ type: ActionType.CHANGE_THEME }, payload);
};

export const useAppContext = (): IAppContext => {
  return useContext<IAppContext>(Context);
};
