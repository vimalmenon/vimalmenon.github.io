'use client';

import { useState } from 'react';
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

export enum fields {
  LLM = 'LLM',
  Prompt = 'Prompt',
  Tools = 'Tools',
  Input = 'Input',
  Tool = 'Tool',
  Service = 'Service',
  Next = 'Next',
  IsStart = 'IsStart',
}

export const nodeType = (type?: string): string[] => {
  if (type === 'Agent') {
    return [fields.LLM, fields.Prompt, fields.Tools, fields.Next, fields.IsStart];
  }
  if (type === 'HumanInput') {
    return [fields.Input, fields.Next, fields.IsStart];
  }
  if (type === 'Tool') {
    return [fields.Tool, fields.Next, fields.IsStart];
  }
  if (type === 'LLM') {
    return [fields.Prompt, fields.Next, fields.IsStart];
  }
  if (type === 'Service') {
    return [fields.Service, fields.IsStart];
  }
  return [];
};

export const cleanData = (data: INode): INode => {
  const { input, llm, prompt, tool, type, ...rest } = data;
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
  if (input) {
    result.input = input;
  }
  if (tool) {
    result.tool = tool;
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
  const [tools, setTools] = useState<string[]>(data?.tools ?? []);
  const [input, setInput] = useState<string>(data?.input ?? '');
  const [next, setNext] = useState<string[]>(data?.next ?? []);
  const [tool, setTool] = useState<string>(data?.tool ?? '');
  const [isStart, setIsStart] = useState<boolean>(data?.is_start ?? false);

  const { workflow } = useWorkflowContext();
  const onInputUpdate: InputChangeType = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'input') {
      setInput(value);
    }
    if (name === 'prompt') {
      setPrompt(value);
    }
  };

  const onSwitchUpdate: SwitchChangeType = (event) => {
    const { checked, name } = event.target;

    if (name === 'isStart') {
      setIsStart(checked);
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
    if (name === 'type') {
      setType(value);
      setPrompt('');
      setLlm('');
      setTools([]);
      setInput('');
      setNext([]);
      setTool('');
      setIsStart(false);
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
    if (name === 'next') {
      setNext(values);
    }
  };
  const onSelectClear = (input: string): void => {
    if (input === 'next') {
      setNext([]);
    }
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
    id: data?.id ?? '',
    input,
    is_start: isStart,
    llm,
    name,
    next,
    onInputUpdate,
    onMultiSelectUpdate,
    onSelectClear,
    onSelectUpdate,
    onSwitchUpdate,
    prompt,
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
