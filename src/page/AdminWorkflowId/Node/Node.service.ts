'use client';

import { useState } from 'react';
import { Enums } from '@data';
import {
  FormMode,
  IMultiSelectOption,
  INode,
  InputChangeType,
  SelectChangeType,
  SwitchChangeType,
} from '@types';
import { useWorkflowContext } from '../AdminWorkflowId.service';
import { IUseNodeForm } from './Node';

export const nodeType = (type?: string): string[] => {
  if (type === Enums.WorkflowNodeType.Agent) {
    return [
      Enums.WorkflowNodeFields.LLM,
      Enums.WorkflowNodeFields.Prompt,
      Enums.WorkflowNodeFields.Message,
      Enums.WorkflowNodeFields.Tools,
      Enums.WorkflowNodeFields.Next,
      Enums.WorkflowNodeFields.IsStart,
    ];
  }
  if (type === Enums.WorkflowNodeType.HumanInput) {
    return [Enums.WorkflowNodeFields.Next, Enums.WorkflowNodeFields.IsStart];
  }
  if (type === Enums.WorkflowNodeType.LLM) {
    return [
      Enums.WorkflowNodeFields.LLM,
      Enums.WorkflowNodeFields.Prompt,
      Enums.WorkflowNodeFields.Message,
      Enums.WorkflowNodeFields.Next,
      Enums.WorkflowNodeFields.IsStart,
    ];
  }
  if (type === Enums.WorkflowNodeType.Service) {
    return [
      Enums.WorkflowNodeFields.Service,
      Enums.WorkflowNodeFields.Next,
      Enums.WorkflowNodeFields.IsStart,
    ];
  }
  return [];
};

export const cleanData = (data: INode): INode => {
  const { llm, message, next, prompt, service, tool, type, ...rest } = data;
  const result: INode = { ...rest };
  if (llm) {
    result.llm = llm;
  }
  if (type) {
    result.type = type;
  }
  if (prompt) {
    result.prompt = prompt;
  }
  if (tool) {
    result.tool = tool;
  }
  if (service) {
    result.service = service;
  }
  if (next) {
    result.next = next;
  }
  if (message) {
    result.message = message;
  }
  return result;
};
export const convertToolsToOption = (tools: string[]): IMultiSelectOption[] =>
  tools.map((tool) => ({
    label: tool,
    value: tool,
  }));

export const useNodeForm = (data?: INode): IUseNodeForm => {
  const [name, setName] = useState<string>(data?.name ?? '');
  const [type, setType] = useState<string>(data?.type ?? '');
  const [llm, setLlm] = useState<string | undefined>(data?.llm);
  const [prompt, setPrompt] = useState<string>(data?.prompt ?? '');
  const [message, setMessage] = useState<string>(data?.message ?? '');
  const [tools, setTools] = useState<string[]>(data?.tools ?? []);
  const [next, setNext] = useState<string>(data?.next ?? '');
  const [tool, setTool] = useState<string>(data?.tool ?? '');
  const [service, setService] = useState<string>(data?.service ?? '');
  const [isStart, setIsStart] = useState<boolean>(data?.isStart ?? false);
  const [dataFromPreviousNode, setDataFromPreviousNode] = useState<boolean>(
    data?.dataFromPreviousNode ?? false
  );

  const { workflow } = useWorkflowContext();
  const onInputUpdate: InputChangeType = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'prompt') {
      setPrompt(value);
    }
    if (name === 'message') {
      setMessage(value);
    }
  };

  const onSwitchUpdate: SwitchChangeType = (event) => {
    const { checked, name } = event.target;

    if (name === 'isStart') {
      setIsStart(checked);
    }
    if (name === 'dataFromPreviousNode') {
      setDataFromPreviousNode(checked);
    }
  };
  const onSelectUpdate: SelectChangeType<string> = (event): void => {
    const { name, value } = event.target;
    if (name === 'llm') {
      setLlm(value);
    }
    if (name === 'tool') {
      setTool(value);
    }
    if (name === 'service') {
      setService(value);
    }
    if (name === 'next') {
      setNext(value);
    }
    if (name === 'type') {
      setType(value);
      setPrompt('');
      setLlm('');
      setTools([]);
      setNext('');
      setTool('');
      setIsStart(false);
      setService('');
      setDataFromPreviousNode(false);
    }
  };
  const onMultiSelectUpdate: SelectChangeType<string[]> = (event): void => {
    const {
      target: { name, value },
    } = event;
    const values = typeof value === 'string' ? value.split(',') : value;
    if (name === 'tools') {
      setTools(values);
    }
  };
  const onSelectClear = (input: string): void => {
    if (input === 'tools') {
      setTools([]);
    }
  };
  const convertNodeToOptions = (): IMultiSelectOption[] => {
    const nodes = workflow?.nodes ?? {};

    return Object.keys(nodes)
      .filter((node) => node !== data?.id)
      .map<IMultiSelectOption>((node) => ({
        label: `${nodes[node].name} (${nodes[node].id})`,
        value: node,
      }));
  };
  return {
    convertNodeToOptions,
    dataFromPreviousNode,
    id: data?.id ?? '',
    isStart,
    llm,
    message,
    name,
    next,
    onInputUpdate,
    onMultiSelectUpdate,
    onSelectClear,
    onSelectUpdate,
    onSwitchUpdate,
    prompt,
    service,
    tool,
    tools,
    type,
  };
};

export const getTitleFromMode = (mode: FormMode): string => {
  if (mode === 'VIEW') {
    return 'Node';
  }
  if (mode === 'CREATE') {
    return 'New Node';
  }
  return 'Edit Node';
};
