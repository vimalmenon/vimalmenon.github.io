import { SelectChangeEvent } from '@mui/material';
import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
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
  prompt?: string;
  type?: string;
  llm?: string;
  tools: string[];
  input?: string;
  next: string[];
  tool?: string;
  updated_at?: string;
  is_start: boolean;
}

export interface IWorkflow extends IWorkflowSlim {
  id: string;
  detail: string;
  connections: Record<string, string[]>;
  nodes: Record<string, INode>;
  complete: boolean;
  updated_at: string;
}

export interface IMakeRequest<T, E = string> {
  response: T;
  error?: E;
}

export interface ILLM {
  name: string;
  model: string;
  supported: boolean;
}

export interface IMultiSelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export type VoidFunction<T = void> = () => T;

export type FormMode = 'VIEW' | 'UPDATE' | 'CREATE';

export type InputChangeType = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
export type SwitchChangeType = (event: ChangeEvent<HTMLInputElement>) => void;

export type SelectChangeType<T> = (event: SelectChangeEvent<T>) => void;
