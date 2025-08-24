import { INavigationItem } from '@types';

export const Home: INavigationItem = {
  breadcrumb: [{ name: 'Home', url: '' }],
  exact: true,
  name: 'Home',
  segments: ['/'],
  url: '/',
};

export const blogs: INavigationItem = {
  breadcrumb: [
    { name: 'Home', url: '/' },
    { name: 'Blogs', url: '' },
  ],
  exact: false,
  // Icon: Icons.BookOpen,
  name: 'Blogs',
  segments: ['/blogs'],
  url: '/blogs',
};

export const Release: INavigationItem = {
  breadcrumb: [
    { name: 'Home', url: '/' },
    { name: 'Release', url: '' },
  ],
  exact: true,
  // Icon: Icons.Package,
  name: 'Release',
  segments: ['/release'],
  url: '/release',
};

export const admin: INavigationItem = {
  breadcrumb: [
    { name: 'Home', url: '/' },
    {
      // Icon: Icons.Settings,
      name: 'Admin',
      url: '/admin',
    },
  ],
  exact: true,
  name: 'Admin',
  segments: ['/admin'],
  url: '/admin',
};

export const adminNavigation: INavigationItem[] = [admin];

export const mainNavigation: INavigationItem[] = [Home, blogs, Release, admin];

export const navigationMap = {
  admin,
  blogs,
  Home,
  Release,
};
