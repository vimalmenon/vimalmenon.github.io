import { IReactFlowEdge, IReactFlowNode } from '@types';

export interface IReactFlow {
  nodes: IReactFlowNode[];
  edges: IReactFlowEdge[];
}
