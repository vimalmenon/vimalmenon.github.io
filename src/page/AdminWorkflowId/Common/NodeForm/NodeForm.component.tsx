'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { TextInput } from '..';
import { AsyncButton, MultiSelect } from '@component';
import { useAdminContext } from '@context';
import { Icons } from '@data';
import {
  convertNodeToOption,
  convertToolsToOption,
  fields,
  nodeType,
  useNodeForm,
} from '../../Node/Node.service';
import { INodeForm } from './NodeForm';

export const NodeForm: React.FC<INodeForm> = ({
  createNode,
  data,
  loading,
  mode,
  nodes = [],
  onCancel,
  updateNode,
}) => {
  const {
    input,
    llm,
    name,
    next,
    onInputUpdate,
    onMultiSelectUpdate,
    onSelectClear,
    onSelectUpdate,
    prompt,
    tool,
    tools,
    type,
  } = useNodeForm(data);

  const value = nodeType(type);
  const { llms, tools: toolsList, workflowTypes } = useAdminContext();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {mode === 'UPDATE' && data ? (
        <TextInput placeholder="ID" name="id" label="ID" defaultValue={data.id} disabled />
      ) : null}
      <TextInput
        value={name}
        label="Name"
        placeholder="Name"
        name="name"
        onChange={onInputUpdate}
        disabled={loading}
      />
      {mode === 'UPDATE' ? (
        <FormControl fullWidth required size="small">
          <InputLabel id="node-type">Type</InputLabel>
          <Select
            value={type}
            labelId="node-type"
            label="Type"
            name="type"
            onChange={onSelectUpdate}
            disabled={loading}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {workflowTypes.map((node) => (
              <MenuItem value={node} key={node}>
                {node}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : null}
      {mode === 'UPDATE' && value.includes(fields.LLM) ? (
        <FormControl fullWidth required size="small">
          <InputLabel id="node-type">LLM</InputLabel>
          <Select
            value={llm}
            labelId="node-type"
            label="LLM"
            name="llm"
            onChange={onSelectUpdate}
            disabled={loading}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {llms.map((node) => (
              <MenuItem value={node.name} key={node.name}>
                {node.name} {node.model}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : null}
      {mode === 'UPDATE' && value.includes(fields.Prompt) ? (
        <FormControl variant="outlined" fullWidth required>
          <TextField
            label="Prompt"
            variant="outlined"
            size="small"
            required
            multiline
            rows={5}
            value={prompt}
            name="prompt"
            onChange={onInputUpdate}
            disabled={loading}
          />
        </FormControl>
      ) : null}
      {mode === 'UPDATE' && value.includes(fields.Tools) ? (
        <MultiSelect
          options={convertToolsToOption(toolsList)}
          value={tools}
          label={'Tools'}
          id={'Tools'}
          onChange={onMultiSelectUpdate}
          name={'tools'}
          onClear={() => onSelectClear('tools')}
          disabled={loading}
        />
      ) : null}
      {mode === 'UPDATE' && value.includes(fields.Input) ? (
        <FormControl variant="outlined" fullWidth required>
          <TextField
            label="Input"
            variant="outlined"
            size="small"
            required
            value={input}
            name="input"
            onChange={onInputUpdate}
            disabled={loading}
          />
        </FormControl>
      ) : null}
      {mode === 'UPDATE' && value.includes(fields.Tool) ? (
        <FormControl fullWidth required size="small">
          <InputLabel id="node-type">Tool</InputLabel>
          <Select
            value={tool}
            labelId="node-type"
            label="Tool"
            name="tool"
            onChange={onSelectUpdate}
            disabled={loading}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {convertToolsToOption(toolsList).map((node) => (
              <MenuItem value={node.value} key={node.value}>
                {node.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : null}
      {mode === 'UPDATE' && value.includes(fields.Next) ? (
        <MultiSelect
          options={convertNodeToOption(nodes)}
          value={next ?? []}
          label={'Next'}
          id={'next'}
          name={'next'}
          onChange={onMultiSelectUpdate}
          onClear={() => onSelectClear('next')}
          disabled={loading}
        />
      ) : null}
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          variant="outlined"
          onClick={onCancel}
          endIcon={<Icons.Close />}
          disabled={loading}
          // loading={loading}
          // loadingPosition="end"
        >
          Cancel
        </Button>
        {mode === 'UPDATE' && updateNode ? (
          <AsyncButton
            variant="contained"
            startIcon={<Icons.Save />}
            loadingPosition="start"
            onClick={() =>
              updateNode({
                id: data?.id ?? '',
                input,
                llm,
                name,
                next,
                prompt,
                tools,
                type,
              })
            }
          >
            Update
          </AsyncButton>
        ) : null}
        {mode === 'CREATE' && createNode ? (
          <AsyncButton
            variant="contained"
            startIcon={<Icons.Save />}
            loadingPosition="start"
            onClick={() =>
              createNode({
                name,
              })
            }
          >
            Create
          </AsyncButton>
        ) : null}
      </Box>
    </Box>
  );
};
