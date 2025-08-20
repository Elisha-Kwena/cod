import { ReactNode } from 'react';
import { Fira_Code, IBM_Plex_Sans } from 'next/font/google';

// Configure fonts for landing page
const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-plex-sans',
});

interface LandingLayoutProps {
  children: ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className={`${firaCode.variable} ${ibmPlexSans.variable}`}>
      <div className="min-h-screen">
        <main className="relative pt-16">
          {children}
        </main>
      </div>
    </div>
  );
}