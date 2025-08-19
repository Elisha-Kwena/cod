import { ReactNode } from 'react';

interface LandingLayoutProps {
  children: ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* This layout can be used for other landing-related pages if needed */}
      <main className="relative">
        {children}
      </main>
    </div>
  );
}
