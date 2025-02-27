import type { Metadata } from 'next';
import { Footer, Header, ThemeWrapper } from '@common';
import { IReactChildren } from '@types';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export const metadata: Metadata = {
  title: 'Vimal Menon',
  description: 'This is Vimal Menon personal website',
};

const RootLayout: React.FC<IReactChildren> = ({ children }) => {
  return (
    <html lang="en">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <body>
        <ThemeWrapper>
          <Header />
          <Container
            maxWidth="xl"
            sx={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 180px)' }}
          >
            <Box sx={{ display: 'flex', flex: '100%' }}>{children}</Box>
          </Container>
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
