enum fields {
  LLM = 'LLM',
  Prompt = 'Prompt',
  Tools = 'Tools',
}

export const nodeType = (type: string): string[] => {
  if (type === 'agent') {
    return [fields.LLM, fields.Prompt, fields.Tools];
  }
  return [];
};
