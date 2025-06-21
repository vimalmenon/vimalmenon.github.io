import Box from '@mui/material/Box';
import { IViewData } from './ViewData';

export const ViewData: React.FC<IViewData> = ({ data }) => (
  <Box sx={{ display: 'flex', flex: '1 1 100%', flexDirection: 'column', gap: 2 }}>
    {data.map((item, index) => {
      if (!item.hidden) {
        return (
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }} key={index}>
            <Box>{item.label}</Box>
            <Box>{item.value}</Box>
          </Box>
        );
      }
      return null;
    })}
  </Box>
);
