import Box from '@mui/material/Box';
import type { Metadata } from 'next';
import { Footer, Google, Header, ThemeWrapper } from '@common';
import { AppContext } from '@context';
import { StyledBox, StyledMain, StyledMainContainer } from '@style';
import { IReactChildren } from '@types';

export const metadata: Metadata = {
  description: 'This is Vimal Menon personal website',
  title: 'Vimal Menon',
};

const RootLayout: React.FC<IReactChildren> = ({ children }) => {
  return (
    <html lang="en">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <body style={{ height: '100vh' }}>
        <Google>
          <AppContext>
            <ThemeWrapper>
              <StyledBox>
                <Header />
                <StyledMain>
                  <StyledMainContainer maxWidth="xl">
                    <Box sx={{ display: 'flex', flex: '1 1 100%' }}>{children}</Box>
                  </StyledMainContainer>
                </StyledMain>
                <Footer />
              </StyledBox>
            </ThemeWrapper>
          </AppContext>
        </Google>
      </body>
    </html>
  );
};

export default RootLayout;
