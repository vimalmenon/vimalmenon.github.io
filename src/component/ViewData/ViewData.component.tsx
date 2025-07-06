import Box from '@mui/material/Box';
import { ListItem } from '@component';
import { IViewData } from '@types';
import { IViewDataProps } from './ViewData';

export const ViewData: React.FC<IViewDataProps> = ({ data }) => (
  <Box sx={{ display: 'flex', flex: '1 1 100%', flexDirection: 'column', gap: 2 }}>
    <ListItem<IViewData>
      items={data}
      Render={({ data }) => {
        if (!data.hidden) {
          return (
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box>{data.label}</Box>
              <Box>{data.value}</Box>
            </Box>
          );
        }
        return null;
      }}
    />
  </Box>
);
