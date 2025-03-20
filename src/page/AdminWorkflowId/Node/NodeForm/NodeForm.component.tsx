'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useAdminContext } from '@context';
import { NodeType } from '@data';
import { fields, nodeType, useNodeForm } from '../Node.service';
import { INodeForm } from './NodeForm';

export const NodeForm: React.FC<INodeForm> = ({ data, mode, onCancel, updateNode }) => {
  const { input, llm, name, onInputUpdate, onSelectUpdate, prompt, tools, type } =
    useNodeForm(data);

  const value = nodeType(type);
  const { llms, tools: toolsList } = useAdminContext();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {mode === 'UPDATE' ? (
        <FormControl variant="outlined" fullWidth required>
          <TextField
            label="ID"
            variant="outlined"
            size="small"
            required
            defaultValue={data.id}
            disabled
          />
          {/* <FormHelperText>This is Error</FormHelperText> */}
        </FormControl>
      ) : null}
      <FormControl variant="outlined" fullWidth required>
        <TextField
          label="Name"
          variant="outlined"
          size="small"
          required
          name="name"
          value={name}
          onChange={onInputUpdate}
        />
        {/* <FormHelperText>This is Error</FormHelperText> */}
      </FormControl>
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
          {/* <FormHelperText>This is Error</FormHelperText> */}
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
          {/* <FormHelperText>This is Error</FormHelperText> */}
        </FormControl>
      ) : null}
      {mode === 'UPDATE' && value.includes(fields.Prompt) ? (
        <FormControl variant="outlined" fullWidth required>
          <TextField
            label="Prompt"
            variant="outlined"
            size="small"
            required
            value={prompt}
            name="prompt"
            onChange={onInputUpdate}
          />
          {/* <FormHelperText>This is Error</FormHelperText> */}
        </FormControl>
      ) : null}
      {mode === 'UPDATE' && value.includes(fields.Tools) ? (
        <FormControl fullWidth required size="small">
          <InputLabel id="node-type">Tools</InputLabel>
          <Select
            value={tools.join(',')}
            labelId="node-type"
            label="Tools"
            name="tools"
            onChange={onSelectUpdate}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {toolsList.map((node) => {
              return (
                <MenuItem value={node.name} key={node.name}>
                  {node.name} {node.tool_name}
                </MenuItem>
              );
            })}
          </Select>
          {/* <FormHelperText>This is Error</FormHelperText> */}
        </FormControl>
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
          {/* <FormHelperText>This is Error</FormHelperText> */}
        </FormControl>
      ) : null}
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outlined" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            updateNode({
              id: data.id,
              input,
              llm,
              name,
              prompt,
              tools,
              type,
            })
          }
        >
          Update
        </Button>
      </Box>
    </Box>
  );
};
