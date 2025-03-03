import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import type { Metadata } from 'next';
import { Footer, Header, ThemeWrapper } from '@common';
import { AppContext } from '@context';
import { IReactChildren } from '@types';

export const metadata: Metadata = {
  description: 'This is Vimal Menon personal website',
  title: 'Vimal Menon',
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
                marginY: 1,
                minHeight: 'calc(100vh - 160px)',
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
