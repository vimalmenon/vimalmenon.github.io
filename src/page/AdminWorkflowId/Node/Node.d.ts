import { INode as INodeData, InputChangeType, SelectChangeType } from '@types';

export interface INode {
  data: INodeData;
  nodes: INodeData[];
  deleteNode: () => Promise<void>;
  updateNode: (data: INodeData) => Promise<void>;
}

export interface IUseNodeForm extends INodeData {
  onInputUpdate: InputChangeType;
  onMultiSelectUpdate: SelectChangeType<string[]>;
  onSelectClear: (input: string) => void;
  onSelectUpdate: SelectChangeType<string>;
}
