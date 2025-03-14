import React, { Dispatch, SetStateAction } from 'react';

export interface IReactChildren {
  children: React.ReactNode;
}

export interface INavigationSlim {
  name: string;
  link: string;
}

export interface INavigation extends INavigationSlim {
  title: string;
  description: string;
  breadcrumbs: INavigationSlim[];
  show: boolean;
  children: INavigationSlim[];
}
export type ReactSetState<T> = Dispatch<SetStateAction<T>>;

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export type AnyType = any;
