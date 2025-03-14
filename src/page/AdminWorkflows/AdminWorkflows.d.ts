export interface ILLM {
  name: string;
  model: string;
  supported: boolean;
}

export interface IWorkflow {
  id: string;
  name: string;
  detail: string;
  agents: [];
  connections: Record<string, string[]>;
}

export interface ITool {
  id: string;
  name: string;
  tool_name: string;
}
