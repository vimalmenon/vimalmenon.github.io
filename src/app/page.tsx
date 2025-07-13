import { MainLayout } from '@component';
import { Home } from '@page';
import { StyledPage } from '@style';

const Page: React.FC = () => (
  <MainLayout>
    <StyledPage>
      <Home />
    </StyledPage>
  </MainLayout>
);
export default Page;
