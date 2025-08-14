import type { Metadata } from 'next';

// import { ClientLayout } from '@/components/ClientLayout'
// import { AboutPage } from '@/components/pages/AboutPage'
import { Layout } from '@common';

export const metadata: Metadata = {
  description:
    "Welcome to Vimal Menon's portfolio - A passionate full-stack developer with 6+ years of experience.",
  title: 'Home',
};

export default function HomePage() {
  return (
    // <ClientLayout initialPage="about">
    //   <AboutPage />

    // {/* Theme testing debug panel */}
    <Layout>
      <div></div>
      {/* <div className="fixed top-4 left-4 z-50 bg-card/90 backdrop-blur-sm border rounded-lg p-3 text-xs shadow-lg max-w-xs">
        <div className="font-medium mb-2">🎨 Theme Test Panel</div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-primary rounded border"></div>
            <span>Primary Color</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-accent rounded border"></div>
            <span>Accent Color</span>
          </div>
        </div>
        <div className="text-muted-foreground mt-2 text-xs">
          Click palette icon in nav to change colors!
        </div>
      </div> */}
    </Layout>
    // </ClientLayout>
  );
}
