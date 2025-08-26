import * as motion from 'motion/react-client';

import { DynamicBreadcrumb, Footer, Header } from '@components';

import { IMainLayoutProps } from './MainLayout';

export const MainLayout: React.FC<IMainLayoutProps> = ({ children, navigation }) => (
  <div className="min-h-screen flex flex-col">
    <Header url={navigation.url} />
    {navigation.breadcrumb.length ? (
      <DynamicBreadcrumb breadcrumbs={navigation.breadcrumb} />
    ) : null}
    <motion.main
      className="flex-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.main>
    <Footer />
  </div>
);
