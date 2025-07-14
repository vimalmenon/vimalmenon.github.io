'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Icons } from '@data';
import { useAdminWorkflows } from '../../AdminWorkflows.services';
import { ICreateWorkflow } from './CreateWorkflow';

export const CreateWorkflow: React.FC<ICreateWorkflow> = ({ cancelWorkflow, loading }) => {
  const [name, setName] = useState<string>('');
  const { createWorkflow } = useAdminWorkflows();
  return (
    <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', gap: 2 }}>
      <Card component={Paper}>
        <CardHeader title="Create Workflow" />
        <Divider />
        <CardContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <FormControl variant="outlined" fullWidth required>
              <TextField
                required
                label="Name"
                size="small"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
              />
            </FormControl>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                variant="outlined"
                endIcon={<Icons.Close />}
                disabled={loading}
                onClick={cancelWorkflow}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={() => createWorkflow(name)}
                startIcon={<Icons.Save />}
                loadingPosition="start"
                loading={loading}
              >
                Create
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
