'use client';

import { useReducer } from 'react';
import { IReactChildren } from '@types';
import {
  changeTheme,
  closeDrawer,
  Context,
  initialState,
  reducer,
  toggleDrawer,
  toggleMode,
} from './AppContext.service';

export const AppContext: React.FC<IReactChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider
      value={{
        ...state,
        changeTheme: (data) => changeTheme(dispatch, data),
        closeDrawer: () => closeDrawer(dispatch),
        toggleDrawer: () => toggleDrawer(dispatch),
        toggleMode: () => toggleMode(dispatch),
      }}
    >
      {children}
    </Context.Provider>
  );
};
