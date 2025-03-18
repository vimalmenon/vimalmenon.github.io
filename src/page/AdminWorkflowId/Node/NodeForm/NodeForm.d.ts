import { FormMode, INode, VoidFunction } from '@types';

export interface INodeForm {
  data: INode;
  onCancel: VoidFunction;
  updateNode: (data: INodeData) => Promise<void>;
  mode: FormMode;
}
