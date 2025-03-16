import { INode, VoidFunction } from '@types';

export interface IViewNode {
  data: INode;
  onEdit: VoidFunction;
}
