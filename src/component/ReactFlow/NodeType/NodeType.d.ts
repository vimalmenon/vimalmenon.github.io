interface INodeTypeData {
  label: string;
  onExecute: VoidFunction;
  status: string;
  type: string;
}

export interface INodeType {
  data: INodeTypeData;
}
