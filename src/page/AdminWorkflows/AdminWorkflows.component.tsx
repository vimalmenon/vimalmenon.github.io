'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useAdminWorkflows } from './AdminWorkflows.services';
import { LLM } from './LLM';
import { Workflows } from './Workflows';

export const AdminWorkflows: React.FC = () => {
  const { createUUID, uuid } = useAdminWorkflows();
  const [tab, setTab] = useState<number>(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number): void => {
    setTab(newValue);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Tabs value={tab} onChange={handleChange}>
        <Tab label="Workflows" />
        <Tab label="LLM" />
        <Tab label="UUID" />
      </Tabs>
      {tab === 0 ? <Workflows /> : null}
      {tab === 1 ? <LLM /> : null}
      {tab === 2 ? (
        <Box>
          <TextField required label="UUID" value={uuid} size="small" disabled={true} />
          <Button variant="outlined" onClick={createUUID}>
            Create
          </Button>
        </Box>
      ) : null}
    </Box>
  );
};
