import { INavigationItem } from '@types';

export const Home: INavigationItem = {
  breadcrumb: [],
  exact: true,
  icon: 'Home',
  name: 'Home',
  segments: ['/'],
  url: '/',
};

export const blogs: INavigationItem = {
  breadcrumb: [
    { icon: 'Home', name: 'Home', url: '/' },
    { icon: 'BookOpen', name: 'Blogs', url: '' },
  ],
  exact: false,
  icon: 'BookOpen',
  name: 'Blogs',
  segments: ['/blogs'],
  url: '/blogs',
};

export const Release: INavigationItem = {
  breadcrumb: [
    { icon: 'Home', name: 'Home', url: '/' },
    { icon: 'Package', name: 'Release', url: '' },
  ],
  exact: true,
  icon: 'Package',
  name: 'Release',
  segments: ['/release'],
  url: '/release',
};

export const admin: INavigationItem = {
  breadcrumb: [
    {
      icon: 'Home',
      name: 'Home',
      url: '/',
    },
    {
      icon: 'Settings',
      name: 'Admin',
      url: '/admin',
    },
  ],
  exact: true,
  icon: 'Settings',
  name: 'Admin',
  segments: ['/admin'],
  url: '/admin',
};

export const workflows: INavigationItem = {
  breadcrumb: [
    { icon: 'Home', name: 'Home', url: '/' },
    {
      icon: 'Settings',
      // Icon: Icons.Settings,
      name: 'Admin',
      url: '/admin',
    },
    {
      icon: 'Settings',
      name: 'Workflows',
      url: '/admin/workflows',
    },
  ],
  exact: true,
  icon: 'Settings',
  name: 'Workflows',
  segments: ['/admin', '/workflows'],
  url: '/admin/workflows',
};
export const adminNavigation: INavigationItem[] = [admin, workflows];

export const mainNavigation: INavigationItem[] = [Home, blogs, Release, admin];

export const footerNavigation: INavigationItem[] = [Home, blogs, Release];

export const navigationMap = {
  admin,
  blogs,
  Home,
  Release,
  workflows,
};
