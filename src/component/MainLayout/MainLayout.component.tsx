import Box from '@mui/material/Box';

import { StyledMainContainer } from '@style';
import { IReactChildren } from '@types';

export const MainLayout: React.FC<IReactChildren> = ({ children }) => (
  <StyledMainContainer maxWidth="xl">
    <Box sx={{ display: 'flex', flex: '1 1 100%' }}>{children}</Box>
  </StyledMainContainer>
);
