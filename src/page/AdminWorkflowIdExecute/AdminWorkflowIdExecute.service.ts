'use client';

import { createContext, useContext } from 'react';
import { APIs, Enums } from '@data';
import {
  IExecuteWorkflow,
  IExecuteWorkflowNode,
  IExecuteWorkflowSlim,
  IGenericResponse,
  IReactFlowNode,
  IWorkflowExecuteParams,
  ReactFlowType,
} from '@types';
import { makeRequest, NotImplemented } from '@utility';
import {
  IAdminWorkflowIdExecuteContext,
  IUseWorkflowExecuteHelper,
  IUseWorkflowNodeDetailHelper,
} from './AdminWorkflowIdExecute';

export const Context = createContext<IAdminWorkflowIdExecuteContext>({
  dbServiceData: [],
  id: '',
  loading: false,
  selectedWorkflow: null,
  selectedWorkflowNode: null,
  setDbServiceData: NotImplemented,
  setLoading: NotImplemented,
  setSelectedWorkflow: NotImplemented,
  setSelectedWorkflowNode: NotImplemented,
  setShowCreate: NotImplemented,
  setWorkFlows: NotImplemented,
  showCreate: false,
  workflows: [],
});

export const useAdminWorkflowIdExecuteContext = (): IAdminWorkflowIdExecuteContext =>
  useContext<IAdminWorkflowIdExecuteContext>(Context);

export const useWorkflowExecuteHelper = (): IUseWorkflowExecuteHelper => {
  const {
    id,
    selectedWorkflow,
    setLoading,
    setSelectedWorkflow,
    setSelectedWorkflowNode,
    setShowCreate,
    setWorkFlows,
  } = useAdminWorkflowIdExecuteContext();
  const getExecutedWorkflow = async (handle: boolean = true): Promise<void> => {
    if (handle) {
      setLoading(true);
    }
    const { response } = await makeRequest<IGenericResponse<IExecuteWorkflow[]>>(
      APIs.GetExecutedWorkflow(id)
    );
    setWorkFlows(response.data);
    if (handle) {
      setLoading(false);
    }
  };
  const executeWorkflow = async (data: IExecuteWorkflowSlim): Promise<void> => {
    setLoading(true);
    await makeRequest<IGenericResponse<unknown>>(APIs.ExecuteWorkflow(id, data));
    await getExecutedWorkflow(false);
    setLoading(false);
    setShowCreate(false);
  };
  const deleteExecutedWorkflow = async (eId: string): Promise<void> => {
    setLoading(true);
    await makeRequest<IGenericResponse<unknown>>(APIs.DeleteExecutedWorkflow(id, eId));
    await getExecutedWorkflow(false);
    setLoading(false);
  };
  const onExecuteWorkflowNode = async (data: IWorkflowExecuteParams): Promise<void> => {
    if (selectedWorkflow) {
      const { response } = await makeRequest<IGenericResponse<IExecuteWorkflow>>(
        APIs.ExecuteWorkflowNode(id, selectedWorkflow.id, data)
      );
      setSelectedWorkflow(response.data);
    }
  };
  const onSelectedWorkflowNode = (data: IExecuteWorkflowNode): void => {
    setSelectedWorkflowNode(data);
  };
  const getNodeType = (node: IExecuteWorkflowNode): ReactFlowType => {
    if (node.status === 'COMPLETED') {
      return 'Completed';
    }
    switch (node.node.type) {
      case 'HumanInput':
        return Enums.WorkflowNodeType.HumanInput;
      case Enums.WorkflowNodeType.LLM:
        return Enums.WorkflowNodeType.LLM;
      case 'Service':
        return Enums.WorkflowNodeType.Service;
      default:
        return 'Execute';
    }
  };
  const convertNodesToReactFlow = (nodes: IExecuteWorkflowNode[]): IReactFlowNode[] =>
    nodes.map<IReactFlowNode>((node, index) => ({
      data: {
        data: node.content,
        id: node.id,
        label: node.node.name,
        node: node,
        onExecute: onExecuteWorkflowNode,
        onSelect: onSelectedWorkflowNode,
        status: node.status,
        type: node.node.type ?? '',
      },
      id: node.id,
      position: { x: 0, y: index * 200 },
      type: getNodeType(node),
    }));

  return {
    convertNodesToReactFlow,
    deleteExecutedWorkflow,
    executeWorkflow,
    getExecutedWorkflow,
    onSelectedWorkflowNode,
    setSelectedWorkflow,
  };
};

export const useWorkflowNodeDetailHelper = (): IUseWorkflowNodeDetailHelper => {
  const { selectedWorkflowNode, setSelectedWorkflowNode } = useAdminWorkflowIdExecuteContext();
  const closeSelectedWorkflow = (): void => {
    setSelectedWorkflowNode(null);
  };
  return {
    closeSelectedWorkflow,
    selectedWorkflowNode,
  };
};
