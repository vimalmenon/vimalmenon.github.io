import Box from '@mui/material/Box';
import { IViewData } from './ViewData';

export const ViewData: React.FC<IViewData> = ({ data, title }) => (
  <Box>
    <Box>{title}</Box>
    <Box>
      {data.map((item, index) => (
        <Box key={index}>{item.label}</Box>
      ))}
    </Box>
  </Box>
);
