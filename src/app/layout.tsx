import type { Metadata } from 'next';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Footer, Header, SubFooter } from '@common';
import { IReactChildren } from '@types';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@data';

export const metadata: Metadata = {
  title: 'Vimal Menon',
  description: 'This is Vimal Menon personal website',
};

const RootLayout: React.FC<IReactChildren> = ({ children }) => {
  return (
    <html lang="en">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <Container
              maxWidth="xl"
              sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
            >
              <Header />
              <Box sx={{ display: 'flex', flex: '100%' }}>{children}</Box>
              <SubFooter />
              <Footer />
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
