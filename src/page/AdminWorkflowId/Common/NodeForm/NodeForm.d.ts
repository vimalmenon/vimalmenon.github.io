import { FormMode, INode, INodeSlim, VoidFunction } from '@types';

export interface INodeForm {
  mode: FormMode;
  onCancel: VoidFunction;
  data?: INode;
  updateNode?: (data: INode) => Promise<void>;
  createNode?: (data: INodeSlim) => Promise<void>;
  loading: boolean;
  isStart: boolean;
}
