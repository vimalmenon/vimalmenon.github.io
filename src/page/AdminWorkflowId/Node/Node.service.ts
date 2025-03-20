export enum fields {
  LLM = 'LLM',
  Prompt = 'Prompt',
  Tools = 'Tools',
  Input = 'Input',
}

export const nodeType = (type: string): string[] => {
  if (type === 'agent') {
    return [fields.LLM, fields.Prompt, fields.Tools];
  }
  if (type === 'humanInput') {
    return [fields.Input];
  }
  return [];
};
