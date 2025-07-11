'use client';

import { createContext, useContext } from 'react';
import { useAdminContext } from '@context';
import { APIs } from '@data';
import {
  FormMode,
  IGenericResponse,
  IGenericResponseError,
  INode,
  INodeSlim,
  IWorkflow,
} from '@types';
import { makeRequest, NotImplemented } from '@utility';
import {
  IContext,
  INodeTab,
  IUseTabHelper,
  IUseWorkflowDataHelper,
  IUseWorkflowFormHelper,
} from './AdminWorkflowId';

export const Context = createContext<IContext>({
  error: null,
  id: '0',
  isStart: false,
  loading: false,
  nodeFormMode: 'UPDATE',
  nodeTabs: [],
  selectedNode: null,
  setError: NotImplemented,
  setIsStart: NotImplemented,
  setLoading: NotImplemented,
  setNodeFormMode: NotImplemented,
  setNodeTabs: NotImplemented,
  setSelectedNode: NotImplemented,
  setWorkflow: NotImplemented,
  setWorkflowFormMode: NotImplemented,
  setWorkflowLoading: NotImplemented,
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
    selectedNode,
    setError,
    setIsStart,
    setLoading,
    setNodeFormMode,
    setNodeTabs,
    setSelectedNode,
    setWorkflow,
    setWorkflowFormMode,
    setWorkflowLoading,
    workflow,
  } = useWorkflowContext();
  const { getLLMs, getServices, getTools, getWorkflowTypes } = useAdminContext();

  const getAllData = async (): Promise<void> => {
    setWorkflowLoading(true);
    await Promise.all([
      getServices(),
      getLLMs(),
      getTools(),
      getWorkflowTypes(),
      getWorkFlow(false),
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
    >(APIs.UpdateWorkflow(id, data));
    if (error) {
      setError(error.detail);
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
  const getNodeByID = (nodeId: string): INode | null => workflow?.nodes?.[nodeId] ?? null;
  const deleteNode = async (nodeId: string): Promise<void> => {
    setSelectedNode(getNodeByID(nodeId));
  };
  const deleteNodeConfirm = async (): Promise<void> => {
    if (selectedNode) {
      await makeRequest(APIs.DeleteWorkflowNode(id, selectedNode.id));
      await getWorkFlow();
      setSelectedNode(null);
    }
  };
  const deleteNodeCancel = (): void => {
    setSelectedNode(null);
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

  return {
    createNode,
    deleteNode,
    deleteNodeCancel,
    deleteNodeConfirm,
    getAllData,
    id,
    updateNode,
    updateWorkflow,
  };
};

export const useWorkflowFormHelper = (): IUseWorkflowFormHelper => {
  const { setWorkflowFormMode, workflowFormMode } = useWorkflowContext();
  const editWorkflowFormMode = (): void => {
    setWorkflowFormMode('UPDATE');
  };
  const viewWorkflowFormMode = (): void => {
    setWorkflowFormMode('VIEW');
  };
  return {
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
