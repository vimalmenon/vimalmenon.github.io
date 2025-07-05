import { IReactFlowData } from '@types';

export interface INodeType {
  data: IReactFlowData;
}

export interface IBaseNodeType {
  data: IReactFlowData;
  onExecute: VoidFunction<Promise<void>>;
  disableExecute: boolean;
}

export interface INodeStyled {
  isComplete: boolean;
}
