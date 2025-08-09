import { ReactElement } from 'react';

import LinearProgress from '@mui/material/LinearProgress';
import Paper from '@mui/material/Paper';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';

import { ITable } from './Table';

export function Table<T>({
  items,
  loading = false,
  RenderBody,
  RenderHead,
  size = 'small',
}: ITable<T>): ReactElement {
  return (
    <TableContainer component={Paper}>
      {loading ? (
        <LinearProgress />
      ) : (
        <MuiTable size={size}>
          <TableHead>
            <RenderHead />
          </TableHead>
          <TableBody>
            {items.map((item, index) => (
              <RenderBody data={item} index={index} key={index} />
            ))}
          </TableBody>
        </MuiTable>
      )}
    </TableContainer>
  );
}
