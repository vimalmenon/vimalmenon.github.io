import { INode as INodeData } from '@types';

export interface INode {
  data: INodeData;
  deleteNode: () => Promise<void>;
  updateNode: (data: INodeData) => Promise<void>;
}
