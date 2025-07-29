import { IReactFlowData } from '@types';

export interface INodeType {
  data: IReactFlowData;
}

export interface IBaseNodeType {
  data: IReactFlowData;
  disableExecute?: boolean;
}

export interface INodeStyled {
  isComplete: boolean;
  isReady: boolean;
  isRunning: boolean;
}
