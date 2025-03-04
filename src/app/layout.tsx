import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import type { Metadata } from 'next';
import { Footer, Header, ThemeWrapper } from '@common';
import { AppContext } from '@context';
import { StyledBody } from '@style';
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
                <Container
                  maxWidth="xl"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginY: 1,
                    minHeight: 'calc(100vh - 160px)',
                  }}
                >
                  <Box sx={{ display: 'flex', flex: '100%' }}>{children}</Box>
                </Container>
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
