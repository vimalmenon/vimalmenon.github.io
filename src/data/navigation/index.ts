import { INavigation } from '@types';

const ReleaseNote: INavigation = {
  name: 'Release Notes',
  title: 'Release Notes | Vimal Menon',
  description: "This is Vimal Menon's personal website",
  link: '/release-notes',
  breadcrumbs: [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Release Notes',
      link: '/release-notes',
    },
  ],
};

const Home: INavigation = {
  name: 'Vimal Menon',
  title: 'Vimal Menon',
  description: "This is Vimal Menon's personal website",
  link: '/',
  breadcrumbs: [
    {
      name: 'Home',
      link: '/',
    },
  ],
};

const NotFound: INavigation = {
  name: 'Not Found',
  title: 'Not Found | Vimal Menon',
  description: 'This is Vimal Menon personal website',
  link: '/*',
  breadcrumbs: [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Not Found',
      link: '/*',
    },
  ],
};

const Blogs: INavigation = {
  name: 'Blogs',
  title: 'Blogs | Vimal Menon',
  description: 'This is Vimal Menon personal website',
  link: '/blogs',
  breadcrumbs: [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Blogs',
      link: '/blogs',
    },
  ],
};

export const Navigation = {
  Home,
  ReleaseNote,
  NotFound,
  Blogs,
};
