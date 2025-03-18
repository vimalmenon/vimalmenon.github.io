'use client';

import { useReducer } from 'react';
import { ILLM, IReactChildren } from '@types';
import { addLlms, Context, initialState, reducer } from './AdminContext.service';

export const AdminContext: React.FC<IReactChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider
      value={{
        ...state,
        addLlms: (llms: ILLM[]) => addLlms(dispatch, llms),
      }}
    >
      {children}
    </Context.Provider>
  );
};
