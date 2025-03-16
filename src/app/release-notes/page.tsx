import type { Metadata } from 'next';
import { Breadcrumbs } from '@common';
import { Navigation } from '@data';
import { StyledPage } from '@style';

export const metadata: Metadata = {
  description: "This is Vimal Menon's personal website",
  title: 'Release Notes | Vimal Menon',
};

const Page: React.FC = () => {
  return (
    <StyledPage>
      <Breadcrumbs navigation={Navigation.ReleaseNote} />
      <div>
        <div>0.0.15</div>
        <ul>Fix the height bug</ul>
        <ul>Workflow and nodes</ul>
      </div>
      <div>
        <div>[0.0.15 - 0.0.0]</div>
        <ul>
          <li>Env Set up</li>
          <li>Limited Access to admin</li>
          <ul>Adapt Height to Mobile</ul>
          <li>Create tag & release</li>
          <li>Download Resume</li>
          <li>
            [Pages]
            <ul>
              <li>Release Notes</li>
              <li>About</li>
            </ul>
          </li>
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
  );
};

export default Page;
