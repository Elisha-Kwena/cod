import { ReactNode } from 'react';
import MainNavbar from '@/components/navigation/MainNavbar';
import Sidenav from '@/components/ui/Sidenav';

import { SidebarProvider } from '@/contexts/SidebarContext';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-dark900">
          <MainNavbar />
            <main className="pt-16 relative"> {/* pt-16 to account for fixed navbar */}
            <Sidenav/>
            {children}
          </main>
        </div>
    </SidebarProvider>
  );
}
