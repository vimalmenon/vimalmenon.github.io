'use client';

import { useReducer } from 'react';
import { IReactChildren } from '@types';
import { Context, getLLMs, getTools, initialState, reducer } from './AdminContext.service';

export const AdminContext: React.FC<IReactChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider
      value={{
        ...state,
        getLLMs: async () => {
          await getLLMs(dispatch);
        },
        getTools: async () => {
          await getTools(dispatch);
        },
      }}
    >
      {children}
    </Context.Provider>
  );
};
