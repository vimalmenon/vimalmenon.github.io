import React, { Dispatch, SetStateAction } from 'react';

export interface IReactChildren {
  children: React.ReactNode;
}

export type ReactSetState<T> = Dispatch<SetStateAction<T>>;
