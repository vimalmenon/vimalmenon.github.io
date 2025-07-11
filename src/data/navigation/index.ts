import { env, Icons } from '@data';
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
  children: [],
  description: "This is Vimal Menon's personal website",
  link: '/release-notes/',
  name: 'Release Notes',
  show: true,
  title: 'Release Notes | Vimal Menon',
};

const Home: INavigation = {
  breadcrumbs: [
    {
      link: '/',
      name: 'Home',
    },
  ],
  children: [],
  description: "This is Vimal Menon's personal website",
  link: '/',
  name: 'Home',
  show: true,
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
  children: [],
  description: 'This is Vimal Menon personal website',
  link: '/*',
  name: 'Not Found',
  show: true,
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
  children: [],
  description: 'This is Vimal Menon personal website',
  link: '/blogs/',
  name: 'Blogs',
  show: true,
  title: 'Blogs | Vimal Menon',
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
  children: [],
  description: 'This is Vimal Menon personal website',
  link: '/about/',
  name: 'About',
  show: true,
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
  children: [
    {
      link: '/admin/config/',
      name: 'Config',
    },
    {
      link: '/admin/links/',
      name: 'Links',
    },
    {
      link: '/admin/workflows/',
      name: 'Workflows',
    },
  ],
  description: 'This is Vimal Menon personal website',
  link: '/admin/',
  name: 'Admin',
  show: env.IS_LOCAL,
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
  children: [],
  description: 'This is Vimal Menon personal website',
  link: '/contact/',
  name: 'Contact',
  show: true,
  title: 'contact | Vimal Menon',
};

const AdminConfig: INavigation = {
  breadcrumbs: [
    {
      link: '/',
      name: 'Home',
    },
    {
      link: '/admin/',
      name: 'Admin',
    },
    {
      link: '',
      name: 'Config',
    },
  ],
  children: [],
  description: 'This is Vimal Menon personal website',
  link: '/admin/config/',
  name: 'Config',
  show: env.IS_LOCAL,
  title: 'Config | Admin | Vimal Menon',
};

const AdminLinks: INavigation = {
  breadcrumbs: [
    {
      link: '/',
      name: 'Home',
    },
    {
      link: '/admin/',
      name: 'Admin',
    },
    {
      link: '',
      name: 'Links',
    },
  ],
  children: [],
  description: 'This is Vimal Menon personal website',
  link: '/admin/links/',
  name: 'Links',
  show: env.IS_LOCAL,
  title: 'Links | Admin | Vimal Menon',
};

const AdminWorkflow: INavigation = {
  breadcrumbs: [
    {
      link: '/',
      name: 'Home',
    },
    {
      link: '/admin/',
      name: 'Admin',
    },
    {
      link: '',
      name: 'Workflows',
    },
  ],
  children: [],
  description: 'This is Vimal Menon personal website',
  link: '/admin/workflows/',
  name: 'Workflows',
  show: env.IS_LOCAL,
  title: 'Workflows | Admin | Vimal Menon',
};

const AdminOthers: INavigation = {
  breadcrumbs: [
    {
      link: '/',
      name: 'Home',
    },
    {
      link: '/admin/',
      name: 'Admin',
    },
    {
      link: '',
      name: 'Others',
    },
  ],
  children: [],
  description: 'This is Vimal Menon personal website',
  link: '/admin/others/',
  name: 'Others',
  show: env.IS_LOCAL,
  title: 'Others | Admin | Vimal Menon',
};

export const FooterNavigation = [About, ReleaseNote];

export const HeaderNavigation = [Home, Blogs, Admin];

export const AdminNavigation = [AdminConfig, AdminLinks, AdminWorkflow, AdminOthers];

export const GenerateWorkflow = (id: string): INavigation => ({
  breadcrumbs: [
    {
      link: '/',
      name: 'Home',
    },
    {
      link: '/admin/',
      name: 'Admin',
    },
    {
      link: '/admin/workflows/',
      name: 'Workflows',
    },
    {
      link: '',
      name: `${id.slice(0, 5)}...`,
    },
  ],
  children: [],
  description: 'This is Vimal Menon personal website',
  link: `/admin/workflows/${id}`,
  name: id,
  show: env.IS_LOCAL,
  title: `${id} | Workflows | Admin | Vimal Menon`,
});

export const GenerateWorkflowExecuteId = (id: string, executeId: string): INavigation => ({
  breadcrumbs: [
    {
      link: '/',
      name: 'Home',
    },
    {
      link: '/admin/',
      name: 'Admin',
    },
    {
      link: '/admin/workflows/',
      name: 'Workflows',
    },
    {
      link: `/admin/workflows/${id}/`,
      name: `${id.slice(0, 5)}...`,
    },
    {
      link: `/admin/workflows/${id}/execute/`,
      name: 'Execute',
    },
    {
      link: '',
      name: `${executeId.slice(0, 5)}...`,
    },
  ],
  children: [],
  description: 'This is Vimal Menon personal website',
  link: `/admin/workflows/${id}/execute/${executeId}`,
  name: id,
  show: env.IS_LOCAL,
  title: `${id} | Workflows | Admin | Vimal Menon`,
});
export const GenerateExecuteWorkflow = (id: string): INavigation => ({
  breadcrumbs: [
    {
      link: '/',
      name: 'Home',
    },
    {
      link: '/admin/',
      name: 'Admin',
    },
    {
      link: '/admin/workflows/',
      name: 'Workflows',
    },
    {
      link: `/admin/workflows/${id}`,
      name: `${id.slice(0, 5)}...`,
    },
    {
      link: ``,
      name: 'Execute',
    },
  ],
  children: [],
  description: 'This is Vimal Menon personal website',
  link: `/admin/workflows/${id}/execute`,
  name: id,
  show: env.IS_LOCAL,
  title: `${id} | Workflows | Admin | Vimal Menon`,
});

export const Navigation = {
  About,
  Admin,
  AdminConfig,
  AdminLinks,
  AdminOthers,
  AdminWorkflow,
  Blogs,
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
  {
    Icon: Icons.DownloadFile,
    link: 'https://vimalmenon.com/vimal-menon.pdf',
    name: 'Resume',
  },
];
