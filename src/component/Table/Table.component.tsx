import Paper from '@mui/material/Paper';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { ReactElement } from 'react';
import { ITable } from './Table';

export function Table<T>({ items, RenderBody, RenderHead }: ITable<T>): ReactElement {
  return (
    <TableContainer component={Paper}>
      <MuiTable size="small">
        <TableHead>
          <RenderHead />
        </TableHead>
        <TableBody>
          {items.map((item, index) => (
            <RenderBody data={item} index={index} key={index} />
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}
