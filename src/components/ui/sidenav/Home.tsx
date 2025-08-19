// Make sure Home is a client component
"use client";

import Link from "next/link"
import clsx from "clsx"
import { useSidebar } from '@/contexts/SidebarContext';
import { usePathname } from 'next/navigation';

export default function Home(){
  const { closeSidebar } = useSidebar();
  const pathname = usePathname();
  
  return (
    <>
      <div className="menu-item w-full mt-3">
        <Link 
          href="/dashboard"
          onClick={closeSidebar}
          className={clsx(`'w-full flex items-center justify-start text-xl font-bold gap-2 bg-white dark:bg-dark800 p-2 rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.4)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_1px_3px_rgba(0,0,0,0.3)]`,
            {'text-sapphire dark:text-sapphire bg-white dark:bg-dark800 p-2 rounded-md border border-electric shadow-[0_1px_2px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.1)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_1px_3px_rgba(0,0,0,0.3)]':pathname === '/dashboard'}
          )}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
            <path d="M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z" />
            <path fillRule="evenodd" d="M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z" clipRule="evenodd" />
          </svg>
          Home
        </Link>
      </div>
    </>
  );
}