import Box from '@mui/material/Box';

import { ListItem } from '@component';
import { IListViewRender, IViewData } from '@types';

import { IViewDataProps } from './ViewData';

const ViewDataItem: React.FC<IListViewRender<IViewData>> = ({ data }) => {
  if (!data.hidden) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>{data.label}</Box>
        <Box>{data.value}</Box>
      </Box>
    );
  }
};

export const ViewData: React.FC<IViewDataProps> = ({ data }) => (
  <Box sx={{ display: 'flex', flex: '1', flexDirection: 'column', gap: 2 }}>
    <ListItem<IViewData> items={data} Render={ViewDataItem} />
  </Box>
);
