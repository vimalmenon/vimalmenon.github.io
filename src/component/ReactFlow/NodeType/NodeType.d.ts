import { IWorkflowExecuteParams } from '@types';

interface INodeTypeData {
  id: string;
  label: string;
  onExecute: (data: IWorkflowExecuteParams) => void;
  status: string;
  type: string;
}

export interface INodeType {
  data: INodeTypeData;
}
