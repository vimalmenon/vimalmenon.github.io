import Box from '@mui/material/Box';
import type { Metadata } from 'next';
import { Footer, Header, ThemeWrapper } from '@common';
import { AppContext } from '@context';
import { StyledBody, StyledBodyContainer } from '@style';
import { IReactChildren } from '@types';
import { Google } from './Google';

export const metadata: Metadata = {
  description: 'This is Vimal Menon personal website',
  title: 'Vimal Menon',
};

const RootLayout: React.FC<IReactChildren> = ({ children }) => {
  return (
    <html lang="en">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <body>
        <Google>
          <AppContext>
            <ThemeWrapper>
              <Header />
              <StyledBody>
                <StyledBodyContainer maxWidth="xl">
                  <Box sx={{ display: 'flex', flex: '100%' }}>{children}</Box>
                </StyledBodyContainer>
              </StyledBody>

              <Footer />
            </ThemeWrapper>
          </AppContext>
        </Google>
      </body>
    </html>
  );
};

export default RootLayout;
