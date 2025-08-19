"use client"
import { useOutsideClick } from '@/lib/useOutsideClick';
import { useState } from 'react';
import { AnimatedDropdown } from '../../ui/AnimatedDropdown';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { menuItems } from '@/lib/menu';
import { useSidebar } from '@/contexts/SidebarContext';

export default function Community(){
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
                onClick={(e) => toggleDropdown('community', e)}
                className={clsx(`relative w-full flex items-center justify-start text-xl font-bold gap-2 capitalize `,
                {'text-sapphire': openDropdown === 'community'}
                )}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                        <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                    </svg>
                        community
                    <span className="absolute right-2 flex items-center justify-center w-8 h-8">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={clsx(`size-8 transition-all duration-300`,
                            {'rotate-[180deg]': openDropdown === 'community'}
                            )}>
                                <path fillRule="evenodd" d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clipRule="evenodd" />
                        </svg>
                    </span>
            </button>
            <AnimatedDropdown
                isOpen={openDropdown === 'community'}
                className='flex w-full flex-col pl-10 gap-2 mt-1'
                >
                    {menuItems.community.map(item => (
                        <Link 
                            onClick={closeSidebar}
                            className={clsx(`'w-full flex items-center justify-start text-xl font-bold gap-2 bg-gray-200 dark:bg-black p-2 pl-4 rounded-md`,
                            {'text-sapphire dark:text-sapphire bg-white dark:bg-dark800 rounded-md border border-electric shadow-[0_1px_2px_rgba(0,0,0,0.2),0_1px_3px_rgba(0,0,0,0.3)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_1px_3px_rgba(0,0,0,0.3)]':pathname === item.path}
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