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
      link: '',
      name: 'About',
    },
  ],
  description: 'This is Vimal Menon personal website',
  link: '/about/',
  name: 'About',
  title: 'About | Vimal Menon',
};

const Admin: INavigation = {
  breadcrumbs: [
    {
      link: '/',
      name: 'Home',
    },
    {
      link: '',
      name: 'Admin',
    },
  ],
  description: 'This is Vimal Menon personal website',
  link: '/admin/',
  name: 'Admin',
  title: 'Admin | Vimal Menon',
};

const Contact: INavigation = {
  breadcrumbs: [
    {
      link: '/',
      name: 'Home',
    },
    {
      link: '',
      name: 'Contact',
    },
  ],
  description: 'This is Vimal Menon personal website',
  link: '/contact/',
  name: 'Contact',
  title: 'contact | Vimal Menon',
};
export const FooterNavigation = [About, ReleaseNote];

export const HeaderNavigation = [Home, Blogs];

export const Navigation = {
  About,
  Admin,
  Blogs,
  Config,
  Contact,
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
    link: 'https://github.com/vimalmenon',
    name: 'GitHub',
  },
  {
    Icon: Icons.LinkedIn,
    link: 'https://www.linkedin.com/in/real-vimal-menon/',
    name: 'LinkedIn',
  },
];
