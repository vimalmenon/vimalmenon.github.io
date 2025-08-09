'use client';

import { createContext, useContext } from 'react';

import { useRouter } from 'next/navigation';

import { useAdminContext } from '@context';
import { APIs } from '@data';
import {
  FormMode,
  IExecuteWorkflow,
  IExecuteWorkflowSlim,
  IGenericResponse,
  IGenericResponseError,
  INode,
  INodeFull,
  INodeSlim,
  IWorkflow,
} from '@types';
import { makeRequest, NotImplemented } from '@utility';

import {
  IContext,
  INodeTab,
  IUseExecuteWorkflowHelper,
  IUseTabHelper,
  IUseWorkflowDataHelper,
  IUseWorkflowFormHelper,
} from './AdminWorkflowId';

export const Context = createContext<IContext>({
  alert: null,
  id: '0',
  isStart: false,
  loading: false,
  nodeFormMode: 'UPDATE',
  nodeTabs: [],
  setAlert: NotImplemented,
  setIsStart: NotImplemented,
  setLoading: NotImplemented,
  setNodeFormMode: NotImplemented,
  setNodeTabs: NotImplemented,
  setShowCreate: NotImplemented,
  setWorkflow: NotImplemented,
  setWorkflowFormMode: NotImplemented,
  setWorkflowLoading: NotImplemented,
  showCreate: false,
  workflow: null,
  workflowFormMode: 'VIEW',
  workflowLoading: false,
});

export const useWorkflowContext = (): IContext => useContext(Context);
const processNode = (data: INode, names: string[], nodeMap: Record<string, INode>): INodeTab[] => {
  names.splice(names.indexOf(data.id), 1);
  if (data.next) {
    return [
      {
        isBroken: false,
        label: data.name,
        mode: 'VIEW',
        name: data.id,
        selected: false,
      },
      ...processNode(nodeMap[data.next], names, nodeMap),
    ];
  }
  return [
    {
      isBroken: false,
      label: data.name,
      mode: 'VIEW',
      name: data.id,
      selected: false,
    },
    ...names.map<INodeTab>((name) => ({
      isBroken: true,
      label: nodeMap[name].name,
      mode: 'VIEW',
      name: name,
      selected: false,
    })),
  ];
};

export const createNodeTab = (names: string[], nodeMap: Record<string, INode>): INodeTab[] => {
  const firstNode = names.find((name) => nodeMap[name].isStart);
  if (firstNode) {
    return processNode(nodeMap[firstNode], names, nodeMap);
  }
  return names.map<INodeTab>((value) => ({
    isBroken: true,
    label: nodeMap[value].name,
    mode: 'VIEW',
    name: value,
    selected: false,
  }));
};

export const useWorkflowDataHelper = (): IUseWorkflowDataHelper => {
  const {
    id,
    setAlert,
    setIsStart,
    setLoading,
    setNodeFormMode,
    setNodeTabs,
    setWorkflow,
    setWorkflowFormMode,
    setWorkflowLoading,
  } = useWorkflowContext();
  const { getLLMs, getServices, getStructuredOutputTypes, getTools, getWorkflowTypes } =
    useAdminContext();

  const getAllData = async (): Promise<void> => {
    setWorkflowLoading(true);
    await Promise.all([
      getServices(),
      getLLMs(),
      getTools(),
      getWorkflowTypes(),
      getWorkFlow(false),
      getStructuredOutputTypes(),
    ]);
    setWorkflowLoading(false);
  };
  const getWorkFlow = async (skipLoading: boolean = true): Promise<void> => {
    if (skipLoading) {
      setWorkflowLoading(true);
    }
    const { response } = await makeRequest<IGenericResponse<IWorkflow>>(APIs.GetWorkflowById(id));
    const workflow = response.data;
    setNodeTabs(createNodeTab(Object.keys(workflow.nodes), workflow.nodes));
    Object.keys(workflow.nodes).forEach((node) => {
      if (workflow.nodes[node].isStart) {
        setIsStart(true);
      }
    });
    setWorkflow(workflow);
    if (skipLoading) {
      setWorkflowLoading(false);
    }
  };
  const updateWorkflow = async (data: IWorkflow): Promise<void> => {
    setLoading(true);
    const { error, response } = await makeRequest<
      IGenericResponse<IWorkflow>,
      IGenericResponseError
    >(
      APIs.UpdateWorkflow(id, {
        complete: data.complete,
        detail: data.detail,
        name: data.name,
      })
    );
    if (error) {
      setAlert({
        children: error.message,
        severity: 'error',
      });
      setWorkflowFormMode('VIEW');
      setLoading(false);
      return;
    }
    const workflow = response.data;
    setNodeTabs(createNodeTab(Object.keys(workflow.nodes), workflow.nodes));
    Object.keys(workflow.nodes).forEach((node) => {
      if (workflow.nodes[node].isStart) {
        setIsStart(true);
      }
    });
    setWorkflow(workflow);
    setWorkflowFormMode('VIEW');
    setLoading(false);
  };
  const deleteNodeConfirm = async (data?: INodeFull): Promise<void> => {
    if (data) {
      await makeRequest(APIs.DeleteWorkflowNode(id, data.id));
      await getWorkFlow();
    }
  };
  const updateNode = async (nodeId: string, data: INode): Promise<void> => {
    const { response } = await makeRequest<IGenericResponse<IWorkflow>>(
      APIs.UpdateWorkflowNode(id, nodeId, data)
    );
    const workflow = response.data;
    setNodeTabs(createNodeTab(Object.keys(workflow.nodes), workflow.nodes));
    Object.keys(workflow.nodes).forEach((node) => {
      if (workflow.nodes[node].isStart) {
        setIsStart(true);
      }
    });
    setWorkflow(workflow);
  };
  const createNode = async (data: INodeSlim): Promise<void> => {
    const { response } = await makeRequest<IGenericResponse<IWorkflow>>(
      APIs.CreateWorkflowNode(id, data)
    );
    const workflow = response.data;
    setNodeTabs(createNodeTab(Object.keys(workflow.nodes), workflow.nodes));
    Object.keys(workflow.nodes).forEach((node) => {
      if (workflow.nodes[node].isStart) {
        setIsStart(true);
      }
    });
    setWorkflow(workflow);
    setWorkflowFormMode('VIEW');
    setNodeFormMode('UPDATE');
  };
  const deleteExecutedWorkflow = async (executedWorkflows: IExecuteWorkflow): Promise<void> => {
    setLoading(true);

    await makeRequest<IGenericResponse<unknown>>(
      APIs.DeleteExecutedWorkflow(id, executedWorkflows.id)
    );
    await getWorkFlow();
    setLoading(false);
  };
  const onAlertClose = (): void => {
    setAlert(null);
  };
  return {
    createNode,
    deleteExecutedWorkflow,
    deleteNodeConfirm,
    getAllData,
    getWorkFlow,
    id,
    onAlertClose,
    updateNode,
    updateWorkflow,
  };
};

export const useWorkflowFormHelper = (): IUseWorkflowFormHelper => {
  const { setWorkflowFormMode, workflow, workflowFormMode } = useWorkflowContext();
  const { push } = useRouter();
  const editWorkflowFormMode = (): void => {
    setWorkflowFormMode('UPDATE');
  };
  const viewWorkflowFormMode = (): void => {
    setWorkflowFormMode('VIEW');
  };
  const deleteWorkflow = async (): Promise<void> => {
    if (workflow) {
      await makeRequest<IGenericResponse<string[]>>(APIs.DeleteWorkflow(workflow.id));
      push('/admin/workflows/');
    }
  };
  return {
    deleteWorkflow,
    editWorkflowFormMode,
    viewWorkflowFormMode,
    workflowFormMode,
  };
};

export const useTabHelper = (): IUseTabHelper => {
  const { nodeFormMode, nodeTabs, setNodeFormMode, setNodeTabs } = useWorkflowContext();
  const onTabChange = (event: React.SyntheticEvent, value: number): void => {
    setNodeTabs((nodeTabs) =>
      nodeTabs.map((node, index) => {
        if (index === value) {
          node.selected = true;
        } else {
          node.selected = false;
        }
        node.mode = 'VIEW';
        return node;
      })
    );
    setNodeFormMode('UPDATE');
  };
  const onAddNodeTab = (): void => {
    setNodeFormMode('CREATE');
  };
  const onAddNodeCancel = (): void => {
    setNodeFormMode('UPDATE');
  };
  const selectedTab = nodeTabs.findIndex((node) => node.selected);
  const setNodeMode = (index: number, mode: FormMode): void => {
    setNodeTabs((nodeTabs) =>
      nodeTabs.map<INodeTab>((node, indexValue) => {
        if (indexValue === index) {
          node.mode = mode;
        }
        return node;
      })
    );
  };
  return {
    nodeFormMode,
    onAddNodeCancel,
    onAddNodeTab,
    onTabChange,
    selectedTab: selectedTab === -1 ? 0 : selectedTab,
    setNodeMode,
  };
};

export const useExecuteWorkflowHelper = (): IUseExecuteWorkflowHelper => {
  const { id, setLoading, setShowCreate } = useWorkflowContext();
  const { getWorkFlow } = useWorkflowDataHelper();
  const executeWorkflow = async (data: IExecuteWorkflowSlim): Promise<void> => {
    if (id) {
      setLoading(true);
      await makeRequest<IGenericResponse<unknown>>(APIs.ExecuteWorkflow(id, data));
      await getWorkFlow(false);
      setLoading(false);
      setShowCreate(false);
    }
  };
  return {
    executeWorkflow,
    id,
    setShowCreate,
  };
};
