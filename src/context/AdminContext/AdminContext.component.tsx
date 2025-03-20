'use client';

import { useReducer } from 'react';
import { ILLM, IReactChildren, ITool } from '@types';
import { addLlms, addTools, Context, initialState, reducer } from './AdminContext.service';

export const AdminContext: React.FC<IReactChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider
      value={{
        ...state,
        addLlms: (llms: ILLM[]) => addLlms(dispatch, llms),
        addTools: (tools: ITool[]) => addTools(dispatch, tools),
      }}
    >
      {children}
    </Context.Provider>
  );
};
