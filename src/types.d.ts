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

interface IReactFlowData {
  id: string;
  label: string;
  onExecute: (data: IWorkflowExecuteParams) => Promise<void>;
  onSelect: (data: IExecuteWorkflowNode) => void;
  status: string;
  type: string;
  data: string;
  node: IExecuteWorkflowNode;
}

export type ReactSetState<T> = Dispatch<SetStateAction<T>>;

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export type AnyType = any;

export interface IApi<T = unknown> {
  url: string;
  method: 'GET' | 'DELETE' | 'POST' | 'PUT';
  body?: T;
}

export interface IGenericResponse<T> {
  data: T;
}

export interface IGenericResponseError {
  detail: string;
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
  message?: string;
  type?: string;
  llm?: string;
  tools: string[];
  next?: string;
  tool?: string;
  service?: string;
  isStart: boolean;
  dataFromPreviousNode?: boolean;
  structuredOutput?: string;
}

export interface INodeFull extends INode {
  requestAtRunTime: boolean;
  updatedAt: string;
}

export interface IWorkflowUpdate extends IWorkflowSlim {
  detail: string;
  complete: boolean;
}

export interface IWorkflow extends IWorkflowSlim {
  id: string;
  detail: string;
  connections: Record<string, string[]>;
  nodes: Record<string, INodeFull>;
  complete: boolean;
  updatedAt: string;
  executedWorkflows: IExecuteWorkflow[];
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

export interface IExecuteWorkflowSlim {
  name: string;
}

export interface IExecuteWorkflowNode {
  id: 'NEW' | 'RUNNING' | 'COMPLETED' | 'FAILED' | 'CANCELLED';
  status: string;
  startedAt: string;
  completedAt?: string;
  content: string;
  node: INode;
}

export interface IExecuteWorkflow extends IExecuteWorkflowSlim {
  id: string;
  status: string;
  createdAt: string;
  completedAt?: string;
  nodes: IExecuteWorkflowNode[];
}

export interface IAdminWorkflowIdPage {
  id: string;
}

export interface IViewData {
  label: string;
  value: string;
  hidden?: boolean;
}

export interface IReactFlowNode {
  data: IReactFlowData;
  id: string;
  position: { x: number; y: number };
  style?: React.CSSProperties;
  type?: ReactFlowType;
}

export type ReactFlowType = 'Completed' | 'Basic';

export interface IReactFlowEdge {
  id: string;
  source: string;
  target: string;
}

export interface IWorkflowExecuteParams {
  id: string;
  data?: string;
}

export interface IListViewRender<T> {
  readonly data: T;
  readonly index: number;
}

export interface IDbServiceData {
  id: string;
  data: string;
  createdDate: string;
}

export interface ICatchAll {
  page?: string[];
}

export interface ICatchAllParams {
  params: Promise<ICatchAll>;
}

export type VoidFunction<T = void> = () => T;

export type FormMode = 'VIEW' | 'UPDATE' | 'CREATE';

export type InputChangeType = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
export type SwitchChangeType = (event: ChangeEvent<HTMLInputElement>) => void;

export type SelectChangeType<T> = (event: SelectChangeEvent<T>) => void;
