"use client"
import { useOutsideClick } from '@/lib/useOutsideClick';
import { useState } from 'react';
import { AnimatedDropdown } from '../../ui/AnimatedDropdown';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { menuItems } from '@/lib/menu';
import { useSidebar } from '@/contexts/SidebarContext';
export default function Explore(){
    const { closeSidebar } = useSidebar();
    const pathname = usePathname();
    const dropdownRef = useOutsideClick(() => {
        if (openDropdown) {
          setOpenDropdown(null);
        }
      });
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
    const toggleDropdown = (menu: string, e?: React.MouseEvent) => {
        e?.stopPropagation(); // Stop event propagation
        setOpenDropdown(openDropdown === menu ? null : menu);
      };
    return(
        <>
          <div className="menu-item w-full mt-3 bg:white dark:bg-dark800 p-2 rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.4)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_1px_3px_rgba(0,0,0,0.3)]" ref={dropdownRef}>
                <button
                    onClick={(e) => toggleDropdown('explore', e)}
                    className={clsx(`relative w-full flex items-center justify-start text-xl font-bold gap-2 `,
                    {'text-sapphire': openDropdown === 'explore'}
                    )}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                        <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clipRule="evenodd" />
                        <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
                    </svg>

                    Explore
                    <span className="absolute right-2 flex items-center justify-center w-8 h-8">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={clsx(`size-8 transition-all duration-300`,
                            {'rotate-[180deg]': openDropdown === 'explore'}
                        )}>
                            <path fillRule="evenodd" d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clipRule="evenodd" />
                        </svg>
                    </span>
                </button>
                <AnimatedDropdown
                    isOpen={openDropdown === 'explore'}
                    className='flex w-full flex-col pl-10 gap-2 mt-1'
                    >
                    {menuItems.explore.map(item => (
                        <Link 
                            onClick={closeSidebar}
                            className={clsx(`'w-full flex items-center justify-start text-xl font-bold gap-2 bg-gray-200 dark:bg-black p-2 pl-4 rounded-md`,
                            {'text-sapphire dark:text-sapphire bg-white dark:bg-dark800 rounded-md border border-electric shadow-[0_1px_2px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.1)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_1px_3px_rgba(0,0,0,0.3)]':pathname === item.path}
                            )}
                                key={item.id} 
                                href={item.path}>{item.label}
                        </Link>
                    ))}

                </AnimatedDropdown>
            </div>
        </>
    )
}