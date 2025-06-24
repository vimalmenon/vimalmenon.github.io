interface IExecuteParams {
  id: string;
  data?: string;
}

interface INodeTypeData {
  id: string;
  label: string;
  onExecute: (data: IExecuteParams) => void;
  status: string;
  type: string;
}

export interface INodeType {
  data: INodeTypeData;
}
