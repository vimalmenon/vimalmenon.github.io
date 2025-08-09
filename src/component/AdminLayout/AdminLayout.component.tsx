import Box from '@mui/material/Box';

import { StyledMainContainer } from '@style';
import { IReactChildren } from '@types';

export const AdminLayout: React.FC<IReactChildren> = ({ children }) => (
  <StyledMainContainer disableGutters maxWidth={false}>
    <Box sx={{ display: 'flex', flex: '1 1 100%' }}>{children}</Box>
  </StyledMainContainer>
);
