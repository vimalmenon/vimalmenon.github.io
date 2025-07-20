'use client';

import { createContext, useContext } from 'react';
import { APIs } from '@data';
import {
  IDbServiceData,
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
  IAdminWorkflowExecuteIdContext,
  IUseAdminWorkflowIdExecuteHelper,
  IUseWorkflowExecuteHelper,
  IUseWorkflowNodeDetailHelper,
} from './AdminWorkflowExecuteId';

export const Context = createContext<IAdminWorkflowExecuteIdContext>({
  dbServiceData: [],
  executeId: '',
  id: '',
  loading: false,
  selectedExecutedWorkflow: null,
  selectedWorkflowNode: null,
  setDbServiceData: NotImplemented,
  setLoading: NotImplemented,
  setSelectedExecutedWorkflow: NotImplemented,
  setSelectedWorkflowNode: NotImplemented,
});

export const useAdminWorkflowIdExecuteIdContext = (): IAdminWorkflowExecuteIdContext =>
  useContext<IAdminWorkflowExecuteIdContext>(Context);

export const useAdminWorkflowIdExecuteHelper = (): IUseAdminWorkflowIdExecuteHelper => {
  const { executeId, id, setDbServiceData, setSelectedExecutedWorkflow } =
    useAdminWorkflowIdExecuteIdContext();
  const getExecutedWorkflow = async (): Promise<void> => {
    const { response } = await makeRequest<IGenericResponse<IExecuteWorkflow>>(
      APIs.GetExecutedWorkflowId(id, executeId)
    );
    setSelectedExecutedWorkflow(response.data);
  };
  const getDatabaseData = async (): Promise<void> => {
    const { response } = await makeRequest<IGenericResponse<IDbServiceData[]>>(
      APIs.GetDbServiceData()
    );
    setDbServiceData(response.data);
  };
  const dbServiceDelete = async (data: IDbServiceData): Promise<void> => {
    await makeRequest<unknown>(APIs.DeleteDbServiceData(data.id));
    await getDatabaseData();
  };
  return {
    dbServiceDelete,
    getDatabaseData,
    getExecutedWorkflow,
  };
};

export const useWorkflowExecuteHelper = (): IUseWorkflowExecuteHelper => {
  const {
    id,
    selectedExecutedWorkflow,
    setLoading,
    setSelectedExecutedWorkflow,
    setSelectedWorkflowNode,
  } = useAdminWorkflowIdExecuteIdContext();
  const { getExecutedWorkflow } = useAdminWorkflowIdExecuteHelper();

  const executeWorkflow = async (data: IExecuteWorkflowSlim): Promise<void> => {
    setLoading(true);
    await makeRequest<IGenericResponse<unknown>>(APIs.ExecuteWorkflow(id, data));
    await getExecutedWorkflow();
    setLoading(false);
  };

  const onExecuteWorkflowNode = async (data: IWorkflowExecuteParams): Promise<void> => {
    if (selectedExecutedWorkflow) {
      const { response } = await makeRequest<IGenericResponse<IExecuteWorkflow>>(
        APIs.ExecuteWorkflowNode(id, selectedExecutedWorkflow.id, data)
      );
      setSelectedExecutedWorkflow(response.data);
    }
  };
  const onSelectedWorkflowNode = (data: IExecuteWorkflowNode): void => {
    setSelectedWorkflowNode(data);
  };

  const getNodeType = (node: IExecuteWorkflowNode): ReactFlowType => {
    if (node.status === 'COMPLETED') {
      return 'Completed';
    }
    return 'Basic';
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
    executeWorkflow,
    onSelectedWorkflowNode,
    setSelectedExecutedWorkflow,
  };
};

export const useWorkflowNodeDetailHelper = (): IUseWorkflowNodeDetailHelper => {
  const {
    executeId,
    id,
    selectedWorkflowNode,
    setSelectedExecutedWorkflow,
    setSelectedWorkflowNode,
  } = useAdminWorkflowIdExecuteIdContext();
  const closeSelectedWorkflow = (): void => {
    setSelectedWorkflowNode(null);
  };
  const onSelectedWorkflowNodeSubmit = async (data: IWorkflowExecuteParams): Promise<void> => {
    if (selectedWorkflowNode) {
      const { response } = await makeRequest<IGenericResponse<IExecuteWorkflow>>(
        APIs.ExecuteWorkflowNode(id, executeId, data)
      );
      setSelectedExecutedWorkflow(response.data);
      setSelectedWorkflowNode(null);
    }
  };

  return {
    closeSelectedWorkflow,
    onSelectedWorkflowNodeSubmit,
    selectedWorkflowNode,
  };
};
