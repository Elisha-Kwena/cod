"use client"
import { useOutsideClick } from '@/lib/useOutsideClick';
import { useState } from 'react';
import { AnimatedDropdown } from '../../ui/AnimatedDropdown';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { menuItems } from '@/lib/menu';
import { useSidebar } from '@/contexts/SidebarContext';

export default function Create(){
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
            onClick={(e) => toggleDropdown('add', e)}
            className={clsx(`relative w-full flex items-center justify-start text-xl font-bold gap-2 `,
                {'text-sapphire': openDropdown === 'add'}
            )}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path d="M6 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM15.75 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3H18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.25ZM6 12.75a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3v-2.25a3 3 0 0 0-3-3H6ZM17.625 13.5a.75.75 0 0 0-1.5 0v2.625H13.5a.75.75 0 0 0 0 1.5h2.625v2.625a.75.75 0 0 0 1.5 0v-2.625h2.625a.75.75 0 0 0 0-1.5h-2.625V13.5Z" />
                </svg>
                Create
                <span className="absolute right-2 flex items-center justify-center w-8 h-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={clsx(`size-8 transition-all duration-300`,
                    {'rotate-[180deg]': openDropdown === 'add'}
                )}>
                    <path fillRule="evenodd" d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clipRule="evenodd" />
                </svg>
                </span>
            </button>
            <AnimatedDropdown
                isOpen={openDropdown === 'add'}
                className='flex w-full flex-col pl-10 gap-2 mt-1'
                >
                {menuItems.add.map(item => (
                    <Link 
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenDropdown(null); 
                        closeSidebar();
                      }}
                    className={clsx(`'w-full flex items-center justify-start text-xl font-bold gap-2 bg-gray-200 dark:bg-black p-2 pl-4 rounded-md`,
                    {'text-sapphire dark:text-sapphire bg-white dark:bg-dark800 rounded-md border border-electric shadow-[0_1px_2px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.1)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_1px_3px_rgba(0,0,0,0.3)]':pathname === item.path}
                        )}
                        key={item.id} 
                        href={item.path}>{item.label}</Link>
                     ))}
            </AnimatedDropdown>
        </div>
        </>
    )
}