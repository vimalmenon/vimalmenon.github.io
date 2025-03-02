import { Icons } from '@data';
import { INavigation } from '@types';

const ReleaseNote: INavigation = {
  breadcrumbs: [
    {
      link: '/',
      name: 'Home',
    },
    {
      link: '/release-notes/',
      name: 'Release Notes',
    },
  ],
  description: "This is Vimal Menon's personal website",
  link: '/release-notes/',
  name: 'Release Notes',
  title: 'Release Notes | Vimal Menon',
};

const Home: INavigation = {
  breadcrumbs: [
    {
      link: '/',
      name: 'Home',
    },
  ],
  description: "This is Vimal Menon's personal website",
  link: '/',
  name: 'Home',
  title: 'Vimal Menon',
};

const NotFound: INavigation = {
  breadcrumbs: [
    {
      link: '/',
      name: 'Home',
    },
    {
      link: '/*',
      name: 'Not Found',
    },
  ],
  description: 'This is Vimal Menon personal website',
  link: '/*',
  name: 'Not Found',
  title: 'Not Found | Vimal Menon',
};

const Blogs: INavigation = {
  breadcrumbs: [
    {
      link: '/',
      name: 'Home',
    },
    {
      link: '/blogs/',
      name: 'Blogs',
    },
  ],
  description: 'This is Vimal Menon personal website',
  link: '/blogs/',
  name: 'Blogs',
  title: 'Blogs | Vimal Menon',
};

const Config: INavigation = {
  breadcrumbs: [
    {
      link: '/',
      name: 'Home',
    },
    {
      link: '/config/',
      name: 'Config',
    },
  ],
  description: 'This is Vimal Menon personal website',
  link: '/config/',
  name: 'Config',
  title: 'Config | Vimal Menon',
};

const About: INavigation = {
  breadcrumbs: [
    {
      link: '/',
      name: 'Home',
    },
    {
      link: '/about/',
      name: 'About',
    },
  ],
  description: 'This is Vimal Menon personal website',
  link: '/about/',
  name: 'About',
  title: 'About | Vimal Menon',
};

export const FooterNavigation = [Home, About, Config, ReleaseNote];

export const HeaderNavigation = [Home, Blogs];

export const Navigation = {
  About,
  Blogs,
  Config,
  Home,
  NotFound,
  ReleaseNote,
};

export const SocialMedias = [
  {
    Icon: Icons.YouTube,
    link: 'https://www.youtube.com/@real_vimal_menon',
    name: 'YouTube',
  },
  {
    Icon: Icons.GitHub,
    link: 'https://x.com',
    name: 'GitHub',
  },
  {
    Icon: Icons.LinkedIn,
    link: 'https://www.linkedin.com/in/vimal-menon-72ab931a/',
    name: 'LinkedIn',
  },
];
