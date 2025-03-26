import { FormMode, INode, VoidFunction } from '@types';

export interface INodeForm {
  data: INode;
  onCancel: VoidFunction;
  updateNode: (data: INode) => Promise<void>;
  mode: FormMode;
  nodes: INode[];
}
