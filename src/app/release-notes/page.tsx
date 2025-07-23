import type { Metadata } from 'next';
import { Breadcrumbs } from '@common';
import { MainLayout } from '@component';
import { Navigation } from '@data';
import { StyledPage } from '@style';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'Release Notes | Vimal Menon',
};

const Page: React.FC = () => (
  <MainLayout>
    <StyledPage>
      <Breadcrumbs navigation={Navigation.ReleaseNote} />
      <div>
        <div>0.0.34</div>
        <ul>Enhance Workflow</ul>
      </div>
      <div>
        <div>[0.0.31 - 0.0.0]</div>
        <ul>
          <li>Execute workflow</li>
          <li>Set up ReactFlow</li>
          <li>Improve workflow UI</li>
          <li>Add Workflow and nodes</li>
          <li>Env Set up</li>
          <li>Limited Access to admin</li>
          <li>Create tag & release</li>
          <li>Download Resume</li>
          <li>
            [Pages]
            <ul>
              <li>Release Notes</li>
              <li>About</li>
              <li>Admin</li>
            </ul>
          </li>
          <li>Social media links</li>
          <li>Partial Google Analytics</li>
          <li>Set up CI & CD with GitHub Action</li>
          <li>Static Website</li>
          <li>Added Eslint</li>
          <li>Added Test</li>
          <li>Responsive UI</li>
          <li>Basic Layout</li>
          <li>NextJs</li>
        </ul>
      </div>
    </StyledPage>
  </MainLayout>
);

export default Page;
