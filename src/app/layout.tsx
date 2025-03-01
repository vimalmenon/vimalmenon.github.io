import type { Metadata } from 'next';
import { Footer, Header, ThemeWrapper } from '@common';
import { IReactChildren } from '@types';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { AppContext } from '@context';

export const metadata: Metadata = {
  title: 'Vimal Menon',
  description: 'This is Vimal Menon personal website',
};

const RootLayout: React.FC<IReactChildren> = ({ children }) => {
  return (
    <html lang="en">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <body>
        <AppContext>
          <ThemeWrapper>
            <Header />
            <Container
              maxWidth="xl"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: 'calc(100vh - 180px)',
                marginY: 1,
              }}
            >
              <Box sx={{ display: 'flex', flex: '100%' }}>{children}</Box>
            </Container>
            <Footer />
          </ThemeWrapper>
        </AppContext>
      </body>
    </html>
  );
};

export default RootLayout;
