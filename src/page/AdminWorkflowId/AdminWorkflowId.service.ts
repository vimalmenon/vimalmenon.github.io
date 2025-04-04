'use client';

import { createContext, useContext } from 'react';
import { useAdminContext } from '@context';
import { APIs } from '@data';
import { IGenericResponse, INode, INodeSlim, ITool, IWorkflow } from '@types';
import { makeRequest, NotImplemented } from '@utility';
import {
  IContext,
  INodeTab,
  IUseTabHelper,
  IUseWorkflowDataHelper,
  IUseWorkflowFormHelper,
} from './AdminWorkflowId';

export const getNodeAsList = (node: Record<string, INode>): INode[] => {
  return Object.keys(node).map((key) => node[key]);
};

export const Context = createContext<IContext>({
  id: '0',
  loading: false,
  nodes: [],
  nodeTabs: [],
  selectedNode: '',
  setLoading: NotImplemented,
  setNodes: NotImplemented,
  setNodeTabs: NotImplemented,
  setSelectedNode: NotImplemented,
  setWorkflow: NotImplemented,
  setWorkflowFormMode: NotImplemented,
  setWorkflowLoading: NotImplemented,
  workflowFormMode: 'VIEW',
  workflowLoading: false,
});

export const useWorkflowContext = (): IContext => useContext(Context);

export const createNodeTab = (names: string[]): INodeTab[] => {
  return [
    {
      disabled: true,
      mode: 'CREATE',
      name: 'Create Node',
    },
    ...names.map<INodeTab>((name) => {
      return {
        disabled: false,
        mode: 'VIEW',
        name: name,
      };
    }),
  ];
};

export const useWorkflowDataHelper = (): IUseWorkflowDataHelper => {
  const {
    id,
    selectedNode,
    setLoading,
    setNodes,
    setNodeTabs,
    setSelectedNode,
    setWorkflow,
    setWorkflowFormMode,
    setWorkflowLoading,
  } = useWorkflowContext();
  const { getLLMs, getTools } = useAdminContext();
  const getWorkFlow = async (): Promise<void> => {
    setWorkflowLoading(true);
    const { response } = await makeRequest<IGenericResponse<IWorkflow>>(APIs.GetWorkflowById(id));
    const workflow = response.data;
    setNodes(Object.keys(workflow.nodes));
    setSelectedNode(selectedNode ?? Object.keys(workflow.nodes)[0] ?? '');
    setNodeTabs(createNodeTab(Object.keys(workflow.nodes)));
    setWorkflow(workflow);
    setWorkflowLoading(false);
  };
  const updateWorkflow = async (data: IWorkflow): Promise<void> => {
    setLoading(true);
    await makeRequest<IGenericResponse<unknown>>(APIs.UpdateWorkflow(id, data));
    await getWorkFlow();
    setWorkflowFormMode('VIEW');
    setLoading(false);
  };
  const deleteNode = async (nodeId: string): Promise<void> => {
    await makeRequest(APIs.DeleteWorkflowNode(id, nodeId));
    await getWorkFlow();
  };
  const updateNode = async (nodeId: string, data: INode): Promise<void> => {
    await makeRequest<IGenericResponse<ITool[]>>(APIs.UpdateWorkflowNode(id, nodeId, data));
    await getWorkFlow();
  };
  const createNode = async (data: INodeSlim): Promise<void> => {
    await makeRequest(APIs.CreateWorkflowNode(id, data));
    await getWorkFlow();
  };
  const executeWorkflow = async (): Promise<void> => {
    await makeRequest<IGenericResponse<unknown>>(APIs.ExecuteWorkflow(id));
  };
  return {
    createNode,
    deleteNode,
    executeWorkflow,
    getLLMs,
    getTools,
    getWorkFlow,
    id,
    updateNode,
    updateWorkflow,
  };
};

export const useTabHelper = (): IUseTabHelper => {
  const { nodeTabs, selectedNode, setNodeTabs, setSelectedNode } = useWorkflowContext();
  const onTabChange = (event: React.SyntheticEvent, value: number): void => {
    const selectedTab = nodeTabs[value];
    setSelectedNode(selectedTab.name ?? '');
  };
  const onAddNodeTab = (): void => {
    setNodeTabs(
      nodeTabs.map((node, index) => {
        if (index === 0) {
          node.disabled = false;
        } else {
          node.disabled = true;
        }
        return node;
      })
    );
    setSelectedNode('Create Node');
  };
  const selectedTab = nodeTabs.findIndex((node) => {
    return node.name === selectedNode;
  });
  return {
    onAddNodeTab,
    onTabChange,
    selectedTab: selectedTab === -1 ? 1 : selectedTab,
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
