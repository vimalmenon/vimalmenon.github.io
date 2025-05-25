import {
  FormMode,
  IMultiSelectOption,
  INode as INodeData,
  INodeSlim,
  InputChangeType,
  SelectChangeType,
  SwitchChangeType,
  VoidFunction,
} from '@types';

export interface INode {
  data?: INodeData;
  deleteNode?: () => Promise<void>;
  updateNode?: (data: INodeData) => Promise<void>;
  createNode?: (data: INodeSlim) => Promise<void>;
  cancelNode: VoidFunction;
  mode: FormMode;
  setMode?: (mode: FormMode) => void;
}

export interface IUseNodeForm extends INodeData {
  onInputUpdate: InputChangeType;
  onMultiSelectUpdate: SelectChangeType<string[]>;
  onSwitchUpdate: SwitchChangeType;
  onSelectClear: (input: string) => void;
  onSelectUpdate: SelectChangeType<string>;
  convertNodeToOptions: () => IMultiSelectOption[];
}
