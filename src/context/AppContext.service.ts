import { createContext } from 'react';
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
};

export const Context = createContext<IAppContext>({
  theme: 'dark',
  toggleTheme: NotImplemented,
});

export const toggleTheme = (dispatch: DispatchType): void => {
  dispatch({ type: 'TOGGLE_THEME' });
};
