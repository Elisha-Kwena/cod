"use client"
import { useOutsideClick } from '@/lib/useOutsideClick';
import { useState } from 'react';
import { AnimatedDropdown } from '../../ui/AnimatedDropdown';

import Link from 'next/link';
import { PlusCircleIcon,GlobeAltIcon} from '@heroicons/react/24/outline';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { programmingLanguages , getProgrammingLanguages} from '@/data/mockData';
import Image from 'next/image';
import { useSidebar } from '@/contexts/SidebarContext';
export default function Groups(){
    const { closeSidebar } = useSidebar();
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
        <div className="menu-item w-full mt-3 bg-white dark:bg-dark800 p-2 rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.4)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_1px_3px_rgba(0,0,0,0.3)]" ref={dropdownRef}>
            <button
            onClick={(e) => toggleDropdown('groups', e)}
            className={clsx(`relative w-full flex items-center justify-start text-xl font-bold gap-2 capitalize `,
            {'text-sapphire': openDropdown === 'groups'}
            )}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                    <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                    <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                </svg>
                    groups
                <span className="absolute right-2 flex items-center justify-center w-8 h-8">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={clsx(`size-8 transition-all duration-300`,
                    {'rotate-[180deg]': openDropdown === 'groups'}
                    )}>
                        <path fillRule="evenodd" d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clipRule="evenodd" />
                    </svg>
                </span>
            </button>
            <AnimatedDropdown
            isOpen={openDropdown === 'groups'}
            className='flex w-full flex-col pl-10 gap-2 mt-1'
            >
                <div className="top p-2 pl-3 border-b border-chrome/20">
                    <h1 className="text-dark800 dark:text-chrome font-times">YOUR GROUPS</h1>
                </div>
                <div className="w-full flex flex-col border-b border-chrome/20">
                     {getProgrammingLanguages.getTopLanguages(3).map(group =>(
                        <Link         
                        key={group.id} 
                        href="" 
                        className='w-full group flex items-center justify-start gap-2 p-2 pl-3 hover:bg-bg_white dark:hover:bg-dark800'
                        onClick={(e) => {
                            e.preventDefault(); 
                            setOpenDropdown(null);
                            closeSidebar()
                          }}
                        >
                        {typeof group.icon === 'string' ? (
                          <Image 
                            src={group.icon} 
                            alt={`${group.name} icon`} 
                            width={24} 
                            height={24} 
                            className="w-6 h-6 object-contain"
                          />
                        ) : (
                          <img 
                            src={group.icon.src} 
                            alt={`${group.name} icon`} 
                            className="w-6 h-6 object-contain"
                          />
                        )}
                          <span className="text-black dark:text-white font-times group-hover:text-sapphire">{group.name}</span>
                        </Link>
                     ))}
                </div>
                <div className="top p-2 pl-3 border-b border-chrome/20">
                    <h1 className="text-dark900 dark:text-chrome font-times">DISCOVER</h1>
                </div>
                    <Link 
                        href="" 
                        className='w-full group flex items-center justify-start gap-2 p-2 pl-3 hover:bg-bg_white dark:hover:bg-dark800'
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenDropdown(null); 
                            closeSidebar();
                    }}
                    >
                        <GlobeAltIcon className='text-black h-6 dark:text-white text-xl group-hover:text-sapphire'/>
                        <span className="text-black dark:text-white group-hover:text-sapphire font-times">Browse All Groups</span>
                    </Link>
                    <Link 
                        href="" 
                        className='w-full group flex items-center justify-start gap-2 rounded-b-md p-2 pl-3 hover:bg-bg_white dark:hover:bg-dark800'
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenDropdown(null);
                          closeSidebar(); 
                        }}
                    >
                        <PlusCircleIcon className='text-black h-6 dark:text-white text-xl group-hover:text-sapphire'/>
                        <span className="text-black dark:text-white group-hover:text-sapphire font-times">Create New Group</span>
                    </Link>
            </AnimatedDropdown>
        </div>
        </>
    )
}