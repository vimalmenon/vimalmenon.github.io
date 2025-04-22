import { FormMode, INode as INodeData, INodeSlim, InputChangeType, SelectChangeType } from '@types';

export interface INode {
  data?: INodeData;
  nodes?: INodeData[];
  deleteNode?: () => Promise<void>;
  updateNode?: (data: INodeData) => Promise<void>;
  createNode?: (data: INodeSlim) => Promise<void>;
  mode: FormMode;
}

export interface IUseNodeForm extends INodeData {
  onInputUpdate: InputChangeType;
  onMultiSelectUpdate: SelectChangeType<string[]>;
  onSelectClear: (input: string) => void;
  onSelectUpdate: SelectChangeType<string>;
}
