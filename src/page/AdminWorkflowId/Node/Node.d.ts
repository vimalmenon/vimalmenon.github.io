import {
  FormMode,
  IMultiSelectOption,
  INode as INodeData,
  INodeFull,
  INodeSlim,
  InputChangeType,
  SelectChangeType,
  SwitchChangeType,
  VoidFunction,
} from '@types';

export interface INode {
  data?: INodeFull;
  deleteNode?: (data: INodeFull | undefined) => Promise<void>;
  updateNode?: (data: INodeData) => Promise<void>;
  createNode?: (data: INodeSlim) => Promise<void>;
  cancelNode: VoidFunction;
  mode: FormMode;
  setMode?: (mode: FormMode) => void;
  isStart: boolean;
  complete: boolean;
}

export interface IUseNodeForm extends INodeData {
  onInputUpdate: InputChangeType;
  onMultiSelectUpdate: SelectChangeType<string[]>;
  onSwitchUpdate: SwitchChangeType;
  onSelectClear: (input: string) => void;
  onSelectUpdate: SelectChangeType<string>;
  convertNodeToOptions: () => IMultiSelectOption[];
}
