import { FormMode, INode, VoidFunction } from '@types';

export interface INodeForm {
  data: INode;
  onCancel: VoidFunction;
  mode: FormMode;
}
