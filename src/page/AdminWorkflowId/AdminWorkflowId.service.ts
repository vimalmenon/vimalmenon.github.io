'use client';

import { createContext, useContext } from 'react';
import { useAdminContext } from '@context';
import { APIs } from '@data';
import { FormMode, IGenericResponse, INode, INodeSlim, ITool, IWorkflow } from '@types';
import { makeRequest, NotImplemented } from '@utility';
import {
  IContext,
  INodeTab,
  IUseNodeTabsHelper,
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
  nodeFormMode: 'UPDATE',
  nodes: [],
  nodeTabs: [],
  setLoading: NotImplemented,
  setNodeFormMode: NotImplemented,
  setNodes: NotImplemented,
  setNodeTabs: NotImplemented,
  setWorkflow: NotImplemented,
  setWorkflowFormMode: NotImplemented,
  setWorkflowLoading: NotImplemented,
  workflowFormMode: 'VIEW',
  workflowLoading: false,
});

export const useWorkflowContext = (): IContext => useContext(Context);

export const createNodeTab = (names: string[]): INodeTab[] => {
  return names.map<INodeTab>((name) => {
    return {
      disabled: false,
      mode: 'VIEW',
      name: name,
      selected: false,
    };
  });
};

export const useWorkflowDataHelper = (): IUseWorkflowDataHelper => {
  const {
    id,
    setLoading,
    setNodes,
    setNodeTabs,
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
    setWorkflowFormMode('VIEW');
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
  const { nodeFormMode, nodeTabs, setNodeFormMode, setNodeTabs } = useWorkflowContext();
  const onTabChange = (event: React.SyntheticEvent, value: number): void => {
    setNodeTabs(
      nodeTabs.map((node, index) => {
        if (index === value) {
          node.selected = true;
        } else {
          node.selected = false;
        }
        return node;
      })
    );
    setNodeFormMode('UPDATE');
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
    setNodeFormMode('CREATE');
  };
  const onAddNodeCancel = (): void => {
    setNodeFormMode('UPDATE');
  };
  const selectedTab = nodeTabs.findIndex((node) => {
    return node.selected;
  });

  return {
    nodeFormMode,
    onAddNodeCancel,
    onAddNodeTab,
    onTabChange,
    selectedTab: selectedTab === -1 ? 0 : selectedTab,
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

export const useNodeTabsHelper = (): IUseNodeTabsHelper => {
  const { nodeTabs, setNodeTabs } = useWorkflowContext();
  const setNodeMode = (index: number, mode: FormMode): void => {
    setNodeTabs(
      nodeTabs.map((node, indexValue) => {
        if (indexValue === index) {
          node.mode = mode;
          return node;
        }
        return node;
      })
    );
  };
  return {
    nodeTabs,
    setNodeMode,
  };
};
