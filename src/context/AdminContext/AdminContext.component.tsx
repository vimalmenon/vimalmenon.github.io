'use client';

import { useReducer } from 'react';
import { IReactChildren } from '@types';
import {
  Context,
  getLLMs,
  getServices,
  getTools,
  getWorkflowTypes,
  initialState,
  reducer,
} from './AdminContext.service';

export const AdminContext: React.FC<IReactChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider
      value={{
        ...state,
        getLLMs: async () => {
          await getLLMs(dispatch);
        },
        getServices: async () => {
          await getServices(dispatch);
        },
        getTools: async () => {
          await getTools(dispatch);
        },
        getWorkflowTypes: async () => {
          await getWorkflowTypes(dispatch);
        },
      }}
    >
      {children}
    </Context.Provider>
  );
};
