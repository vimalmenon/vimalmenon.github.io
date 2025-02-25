import type { Metadata } from 'next';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Footer, Header } from '@common';
import { IReactChildren } from '@types';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export const metadata: Metadata = {
  title: 'Vimal Menon',
  description: "This is Vimal Menon's personal website",
};

const RootLayout: React.FC<IReactChildren> = ({ children }) => {
  return (
    <html lang="en">
      <meta name="viewport" content="initial-scale=1, width=device-width" />

      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <CssBaseline />
          <Container
            maxWidth="xl"
            sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
          >
            <Header />
            <Box sx={{ display: 'flex', flex: '100%' }}>{children}</Box>

            <Footer />
          </Container>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
