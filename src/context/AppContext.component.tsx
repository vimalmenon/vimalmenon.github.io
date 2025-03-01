'use client';

import { IReactChildren } from '@types';
import { useReducer } from 'react';
import {
  reducer,
  initialState,
  Context,
  toggleMode,
  toggleDrawer,
  changeTheme,
} from './AppContext.service';

export const AppContext: React.FC<IReactChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider
      value={{
        ...state,
        toggleMode: () => toggleMode(dispatch),
        toggleDrawer: () => toggleDrawer(dispatch),
        changeTheme: (data) => changeTheme(dispatch, data),
      }}
    >
      {children}
    </Context.Provider>
  );
};
