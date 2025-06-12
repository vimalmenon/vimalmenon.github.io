'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import { AsyncButton, MultiSelect, TextInput } from '@component';
import { useAdminContext } from '@context';
import { Icons } from '@data';
import { convertToolsToOption, fields, nodeType, useNodeForm } from '../../Node/Node.service';
import { INodeForm } from './NodeForm';

export const NodeForm: React.FC<INodeForm> = ({
  createNode,
  data,
  isStart: isStartProps,
  loading,
  mode,
  onCancel,
  updateNode,
}) => {
  const {
    convertNodeToOptions,
    input,
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
  } = useNodeForm(data);

  const value = nodeType(type);
  const { llms, services, tools: toolsList, workflowTypes } = useAdminContext();
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
            rows={3}
            value={prompt}
            name="prompt"
            onChange={onInputUpdate}
            disabled={loading}
          />
        </FormControl>
      ) : null}
      {mode === 'UPDATE' && value.includes(fields.Message) ? (
        <FormControl variant="outlined" fullWidth required>
          <TextField
            label="Message"
            variant="outlined"
            size="small"
            required
            multiline
            rows={5}
            value={message}
            name="message"
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
          <InputLabel id="tool">Tool</InputLabel>
          <Select
            value={tool}
            labelId="tool"
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
      {mode === 'UPDATE' && value.includes(fields.Service) ? (
        <FormControl fullWidth required size="small">
          <InputLabel id="service">Service</InputLabel>
          <Select
            value={service}
            labelId="service"
            label="Service"
            name="service"
            onChange={onSelectUpdate}
            disabled={loading}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {convertToolsToOption(services).map((node) => (
              <MenuItem value={node.value} key={node.value}>
                {node.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : null}
      {mode === 'UPDATE' && value.includes(fields.Next) ? (
        <FormControl fullWidth required size="small">
          <InputLabel id="next">Next</InputLabel>
          <Select
            value={next}
            labelId="Next"
            label="Next"
            name="next"
            onChange={onSelectUpdate}
            disabled={loading}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {convertNodeToOptions().map((node) => (
              <MenuItem value={node.value} key={node.value}>
                {node.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : null}
      {mode === 'UPDATE' && value.includes(fields.IsStart) ? (
        <FormControlLabel
          control={
            <Switch
              checked={isStartProps}
              name="isStart"
              onChange={onSwitchUpdate}
              disabled={isStart && !isStartProps}
            />
          }
          label="Is Start"
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
                isStart,
                llm,
                message,
                name,
                next,
                prompt,
                service,
                tool,
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
