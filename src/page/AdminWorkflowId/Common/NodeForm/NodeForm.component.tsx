'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { TextInput } from '..';
import { MultiSelect } from '@component';
import { useAdminContext } from '@context';
import { NodeType } from '@data';
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
  mode,
  nodes,
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
  const { llms, tools: toolsList } = useAdminContext();

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
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {NodeType.map((node) => {
              return (
                <MenuItem value={node.value} key={node.value}>
                  {node.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      ) : null}
      {mode === 'UPDATE' && value.includes(fields.LLM) ? (
        <FormControl fullWidth required size="small">
          <InputLabel id="node-type">LLM</InputLabel>
          <Select value={llm} labelId="node-type" label="LLM" name="llm" onChange={onSelectUpdate}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {llms.map((node) => {
              return (
                <MenuItem value={node.name} key={node.name}>
                  {node.name} {node.model}
                </MenuItem>
              );
            })}
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
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {convertToolsToOption(toolsList).map((node) => {
              return (
                <MenuItem value={node.value} key={node.value}>
                  {node.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      ) : null}
      {mode === 'UPDATE' ? (
        <MultiSelect
          options={convertNodeToOption(nodes)}
          value={next}
          label={'Next'}
          id={'next'}
          name={'next'}
          onChange={onMultiSelectUpdate}
          onClear={() => onSelectClear('next')}
        />
      ) : null}
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outlined" onClick={onCancel}>
          Cancel
        </Button>
        {mode === 'UPDATE' && updateNode ? (
          <Button
            variant="contained"
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
          </Button>
        ) : null}
        {mode === 'CREATE' && createNode ? (
          <Button
            variant="contained"
            onClick={() =>
              createNode({
                name,
              })
            }
          >
            Create
          </Button>
        ) : null}
      </Box>
    </Box>
  );
};
