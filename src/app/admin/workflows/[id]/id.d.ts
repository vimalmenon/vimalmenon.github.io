export interface IWorkflowId {
  id: string;
}

export interface IPage {
  params: Promise<IWorkflowId>;
}
