import React, { Dispatch, SetStateAction } from 'react';

export interface IReactChildren {
  children: React.ReactNode;
}

export interface IBreadcrumbs {
  name: string;
  link: string;
}
export interface INavigation {
  name: string;
  title: string;
  description: string;
  link: string;
  breadcrumbs: IBreadcrumbs[];
}
export type ReactSetState<T> = Dispatch<SetStateAction<T>>;
