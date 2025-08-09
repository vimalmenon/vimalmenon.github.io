import type { Metadata } from 'next';

import { AcceptCookie, Footer, Google, Header, ThemeWrapper } from '@common';
import { AppContext } from '@context';
import { StyledBox, StyledMain } from '@style';
import { IReactChildren } from '@types';

export const metadata: Metadata = {
  description: 'This is Vimal Menon personal website',
  title: 'Vimal Menon',
};

const RootLayout: React.FC<IReactChildren> = ({ children }) => (
  <html lang="en">
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <body style={{ height: '100dvh' }}>
      <Google>
        <AppContext>
          <ThemeWrapper>
            <StyledBox>
              <Header />
              <StyledMain>
                {children}
                <AcceptCookie />
              </StyledMain>
              <Footer />
            </StyledBox>
          </ThemeWrapper>
        </AppContext>
      </Google>
    </body>
  </html>
);

export default RootLayout;
