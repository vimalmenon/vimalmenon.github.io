import Box from '@mui/material/Box';
import { IViewData } from './ViewData';

export const ViewData: React.FC<IViewData> = ({ data, title }) => (
  <Box>
    <Box>{title}</Box>
    <Box>
      {data.map((item, index) => {
        if (!item.hidden) {
          return (
            <Box key={index}>
              <Box>{item.label}</Box>
              <Box>{item.value}</Box>
            </Box>
          );
        }
        return null;
      })}
    </Box>
  </Box>
);
