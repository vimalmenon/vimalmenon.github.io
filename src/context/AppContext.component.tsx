'use client';

import { IReactChildren } from '@types';
import { useReducer } from 'react';
import { reducer, initialState, Context, toggleTheme, toggleDrawer } from './AppContext.service';

export const AppContext: React.FC<IReactChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider
      value={{
        ...state,
        toggleTheme: () => toggleTheme(dispatch),
        toggleDrawer: () => toggleDrawer(dispatch),
      }}
    >
      {children}
    </Context.Provider>
  );
};
