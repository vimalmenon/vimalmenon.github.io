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
}

export const Enums = {
  WorkflowNodeFields,
  WorkflowNodeStatus,
};
