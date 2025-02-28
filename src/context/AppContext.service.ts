'use client';

import { createContext, useContext } from 'react';
import { IAppReducer, IAppAction, IAppContext, DispatchType } from './AppContext';
import { NotImplemented } from '@utility';

export const reducer = (state: IAppReducer, action: IAppAction): IAppReducer => {
  const { type } = action;

  if (type === 'TOGGLE_THEME') {
    const theme = state.theme === 'dark' ? 'light' : 'dark';
    return {
      ...state,
      theme,
    };
  }
  return state;
};

export const initialState: IAppReducer = {
  theme: 'light',
  showDrawer: false,
};

export enum ActionType {
  TOGGLE_THEME = 'TOGGLE_THEME',
  TOGGLE_DRAWER = 'TOGGLE_DRAWER',
}

export const Context = createContext<IAppContext>({
  ...initialState,
  toggleTheme: NotImplemented,
  toggleDrawer: NotImplemented,
});

export const toggleTheme = (dispatch: DispatchType): void => {
  dispatch({ type: ActionType.TOGGLE_THEME });
};

export const toggleDrawer = (dispatch: DispatchType): void => {
  dispatch({ type: ActionType.TOGGLE_DRAWER });
};

export const useAppContext = (): IAppContext => {
  return useContext<IAppContext>(Context);
};
