import { INode as INodeData } from '@types';

export interface INode {
  data: INodeData;
  nodes: INodeData[];
  deleteNode: () => Promise<void>;
  updateNode: (data: INodeData) => Promise<void>;
}
