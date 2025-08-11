'use client';

import { createContext, useContext } from 'react';

import { useRouter } from 'next/navigation';

import { APIs } from '@data';
import {
  IDbServiceData,
  IExecuteWorkflow,
  IExecuteWorkflowNode,
  IExecuteWorkflowSlim,
  IGenericResponse,
  IGenericResponseError,
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
  alert: null,
  dbServiceData: [],
  executeId: '',
  id: '',
  loading: false,
  selectedExecutedWorkflow: null,
  selectedWorkflowNode: null,
  setAlert: NotImplemented,
  setDbServiceData: NotImplemented,
  setLoading: NotImplemented,
  setSelectedExecutedWorkflow: NotImplemented,
  setSelectedWorkflowNode: NotImplemented,
});

export const useAdminWorkflowIdExecuteIdContext = (): IAdminWorkflowExecuteIdContext =>
  useContext<IAdminWorkflowExecuteIdContext>(Context);

export const useAdminWorkflowIdExecuteHelper = (): IUseAdminWorkflowIdExecuteHelper => {
  const {
    alert,
    executeId,
    id,
    selectedExecutedWorkflow,
    setAlert,
    setDbServiceData,
    setLoading,
    setSelectedExecutedWorkflow,
  } = useAdminWorkflowIdExecuteIdContext();
  const { push } = useRouter();

  const getExecutedWorkflow = async (): Promise<void> => {
    setLoading(true);
    const { error, response } = await makeRequest<
      IGenericResponse<IExecuteWorkflow>,
      IGenericResponseError
    >(APIs.GetExecutedWorkflowId(id, executeId));
    if (error) {
      setAlert({
        children: error.message,
        severity: 'error',
      });
      setLoading(false);
      return;
    }
    setSelectedExecutedWorkflow(response.data);
    setLoading(false);
  };
  const getDatabaseData = async (): Promise<void> => {
    const { error, response } = await makeRequest<
      IGenericResponse<IDbServiceData[]>,
      IGenericResponseError
    >(APIs.GetDbServiceData());
    if (error) {
      setAlert({
        children: error.message,
        severity: 'error',
      });
      return;
    }
    setDbServiceData(response.data);
  };
  const dbServiceDelete = async (data: IDbServiceData): Promise<void> => {
    await makeRequest<unknown>(APIs.DeleteDbServiceData(data.id));
    await getDatabaseData();
  };
  const onAlertClose = (): void => {
    setAlert(null);
  };
  const deleteExecutedWorkflow = async (): Promise<void> => {
    if (selectedExecutedWorkflow) {
      await makeRequest<IGenericResponse<unknown>>(
        APIs.DeleteExecutedWorkflow(id, selectedExecutedWorkflow.id)
      );
      push(`/admin/workflows/${id}`);
    }
  };
  return {
    alert,
    dbServiceDelete,
    deleteExecutedWorkflow,
    getDatabaseData,
    getExecutedWorkflow,
    onAlertClose,
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
