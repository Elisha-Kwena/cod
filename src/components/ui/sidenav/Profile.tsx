// Make sure Home is a client component
"use client";

import Link from "next/link"
import clsx from "clsx"
import { useSidebar } from '@/contexts/SidebarContext';
import { usePathname } from 'next/navigation';

export default function Profile(){
  const { closeSidebar } = useSidebar();
  const pathname = usePathname();
  
  return (
    <>
        <div className="menu-item w-full">
            <Link 
                onClick={closeSidebar}
                href="/profile"
                className={clsx(`'w-full flex items-center justify-start text-xl font-bold gap-2 bg-white dark:bg-dark800 p-2 rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.4)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_1px_3px_rgba(0,0,0,0.3)]`,
                {'text-sapphire dark:text-sapphire bg-white dark:bg-dark800 p-1 rounded-md border border-electric shadow-[0_1px_2px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.1)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_1px_3px_rgba(0,0,0,0.3)]':pathname === '/profile'}
                    )}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                    </svg>
                    ViewProfile
            </Link>
        </div>
    </>
  );
}