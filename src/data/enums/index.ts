enum WorkflowNodeStatus {
  NEW = 'NEW',
  READY = 'READY',
  RUNNING = 'RUNNING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  CANCELLED = 'CANCELLED',
}

export enum WorkflowNodeFields {
  LLM = 'LLM',
  Prompt = 'Prompt',
  Message = 'Message',
  Tools = 'Tools',
  Tool = 'Tool',
  Service = 'Service',
  Next = 'Next',
  IsStart = 'IsStart',
  StructuredOutput = 'StructuredOutput',
}

export enum WorkflowNodeType {
  Agent = 'Agent',
  LLM = 'LLM',
  Service = 'Service',
}

export enum WorkflowPage {
  Workflow = 'Workflow',
  WorkflowExecutedId = 'WorkflowExecutedId',
  WorkflowId = 'WorkflowId',
}

export enum WorkflowNodeService {
  GetFromDB = 'GetFromDB',
  GetFromS3 = 'GetFromS3',
  SaveToDB = 'SaveToDB',
  SaveToS3 = 'SaveToS3',
  InternetSearch = 'InternetSearch',
  HumanInput = 'HumanInput',
  ManualConfirmation = 'ManualConfirmation',
}

export const Enums = {
  WorkflowNodeFields,
  WorkflowNodeService,
  WorkflowNodeStatus,
  WorkflowNodeType,
  WorkflowPage,
};
