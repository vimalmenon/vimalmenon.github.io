import type { Metadata } from 'next';
import './globals.css';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Footer, Header } from '@common';
import { IReactChildren } from '@types';

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
          <Header />
          {children}
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
