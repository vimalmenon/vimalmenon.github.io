export interface IAdminWorkflowIdExecuteContext {
  id: string;
}

export interface IUseWorkflowExecuteHelper {
  getExecutedWorkflow: VoidFunction<Promise<void>>;
  executeWorkflow: (data: IExecuteWorkflow) => Promise<void>;
}
