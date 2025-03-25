'use client';

import { SelectChangeEvent } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { IMultiSelectOption, INode, ITool } from '@types';

export enum fields {
  LLM = 'LLM',
  Prompt = 'Prompt',
  Tools = 'Tools',
  Input = 'Input',
  Tool = 'Tool',
}

export const nodeType = (type: string): string[] => {
  if (type === 'agent') {
    return [fields.LLM, fields.Prompt, fields.Tools];
  }
  if (type === 'humanInput') {
    return [fields.Input];
  }
  if (type === 'tool') {
    return [fields.Tool];
  }
  return [];
};

export const convertToolsToOption = (tools: ITool[]): IMultiSelectOption[] => {
  return tools.map((tool) => ({
    label: tool.name,
    value: tool.id,
  }));
};

export const convertNodeToOption = (nodes: INode[]): IMultiSelectOption[] => {
  return nodes.map((node) => ({
    label: node.name,
    value: node.id,
  }));
};
export const useNodeForm = (data: INode) => {
  const [name, setName] = useState<string>(data?.name ?? '');
  const [type, setType] = useState<string>(data?.type ?? '');
  const [llm, setLlm] = useState<string>(data?.llm ?? '');
  const [prompt, setPrompt] = useState<string>(data?.prompt ?? '');
  const [tools, setTools] = useState<string[]>(data?.tools ?? []);
  const [input, setInput] = useState<string>(data?.input ?? '');
  const [next, setNext] = useState<string | undefined>(data?.next);
  const [tool, setTool] = useState<string>(data?.tool ?? '');

  const onInputUpdate = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
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
  const onSelectUpdate = (event: SelectChangeEvent<string>): void => {
    const { name, value } = event.target;
    if (name === 'llm') {
      setLlm(value);
    }
    if (name === 'next') {
      setNext(value);
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
    }
  };
  const onMultiSelectUpdate = (value: string[]): void => {
    setTools(value);
  };
  return {
    input,
    llm,
    name,
    next,
    onInputUpdate,
    onMultiSelectUpdate,
    onSelectUpdate,
    prompt,
    tool,
    tools,
    type,
  };
};
