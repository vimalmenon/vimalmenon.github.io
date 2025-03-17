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

export interface IAPI<T = unknown> {
  url: string;
  method: 'GET' | 'DELETE' | 'POST' | 'PUT';
  body?: T;
}

export interface IGenericResponse<T> {
  data: T;
}

export interface IWorkflowSlim {
  name: string;
}

export interface INodeSlim {
  name: string;
}

export interface INode extends INodeSlim {
  id: string;
  prompt: string;
  type: string;
  llm: string;
  tools: string[];
}

export interface IWorkflow extends IWorkflowSlim {
  id: string;
  detail: string;
  connections: Record<string, string[]>;
  nodes: Record<string, INode>;
  complete: boolean;
}

export interface IMakeRequest<T> {
  response: T;
  error?: string;
}

export interface ILLM {
  name: string;
  model: string;
  supported: boolean;
}

export type VoidFunction = () => void;

export type FormMode = 'VIEW' | 'UPDATE' | 'CREATE';
