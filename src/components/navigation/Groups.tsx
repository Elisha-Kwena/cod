"use client"
import { useState, useEffect } from 'react';

import { menuItems } from '@/lib/menu';
import { useOutsideClick } from '@/lib/useOutsideClick';
import { AnimatedDropdown } from '../ui/AnimatedDropdown';

import { ChevronDownIcon,GlobeAltIcon,PlusCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import clsx from 'clsx';

import { usePathname } from 'next/navigation';
import { programmingLanguages , getProgrammingLanguages} from '@/data/mockData';

import Image from 'next/image';
export default function Groups(){
    const pathname = usePathname()

    const [isSearchOpen, setIsSearchOpen] = useState(false);
  
    const dropdownRef = useOutsideClick(() => {
      if (openDropdown) {
        setOpenDropdown(null);
      }
    });
  
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  
    const toggleDropdown = (menu: string, e?: React.MouseEvent) => {
      e?.stopPropagation(); 
      setOpenDropdown(openDropdown === menu ? null : menu);
    };
    return(
        <>

<div className="menu relative" ref={dropdownRef}>
    <button 
        onClick={(e) => toggleDropdown('groups', e)}
        className="flex items-center gap-1 group"
        >
        <span className={clsx(
            'font-bold capitalize transition-all duration-300',
            {
            'text-sapphire': openDropdown === 'groups', // Sapphire when open
            'text-black dark:text-white dark:hover:text-sapphire hover:text-sapphire': openDropdown !== 'groups' // Normal/hover state
             }
            )}>
                groups
            </span>
            <ChevronDownIcon className={clsx(
                  'h-5 w-5 transition-all duration-300 transform',
                  {
                    'rotate-180 text-sapphire': openDropdown === 'groups', // Rotated up and sapphire when open
                    'text-black dark:text-white group-hover:text-sapphire': openDropdown !== 'groups' // Normal/hover state
                  }
                )}/>
              </button>
              
              {/* dropdown list */}
              <AnimatedDropdown
                isOpen={openDropdown === 'groups'}
                className='absolute flex flex-col w-[240px] rounded-md bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.1)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_1px_3px_rgba(0,0,0,0.3)] dark:bg-black z-50 top-10'
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
                        onClick={() => setOpenDropdown(null)}
                        >
                          <div className="w-6 h-6 relative">
                            <Image
                              src={group.icon}
                              alt={`${group.name} icon`}
                              fill
                              className="object-contain"
                            />
                          </div>
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
                  onClick={() => setOpenDropdown(null)}
                  >
                        <GlobeAltIcon className='text-black h-6 dark:text-white text-xl group-hover:text-sapphire'/>
                        <span className="text-black dark:text-white group-hover:text-sapphire font-times">Browse All Groups</span>
                    </Link>
                    <Link 
                    href="" 
                    className='w-full group flex items-center justify-start gap-2 rounded-b-md p-2 pl-3 hover:bg-bg_white dark:hover:bg-dark800'
                    onClick={() => setOpenDropdown(null)}
                    >
                        <PlusCircleIcon className='text-black h-6 dark:text-white text-xl group-hover:text-sapphire'/>
                        <span className="text-black dark:text-white group-hover:text-sapphire font-times">Create New Group</span>
                    </Link>
              </AnimatedDropdown>
            </div>
        
        </>
    )
}