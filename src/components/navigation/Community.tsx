"use client"
import { useState, useEffect } from 'react';

import { menuItems } from '@/lib/menu';
import { useOutsideClick } from '@/lib/useOutsideClick';
import { AnimatedDropdown } from '../ui/AnimatedDropdown';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import clsx from 'clsx';

import { usePathname } from 'next/navigation';

export default function Community(){
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
        onClick={(e) => toggleDropdown('community', e)}
        className="flex items-center gap-1 group"
        >
        <span className={clsx(
            'font-bold capitalize transition-all duration-300',
            {
            'text-sapphire': openDropdown === 'community', // Sapphire when open
            'text-black dark:text-white dark:hover:text-sapphire hover:text-sapphire': openDropdown !== 'community' // Normal/hover state
             }
            )}>
                Community
            </span>
            <ChevronDownIcon className={clsx(
                  'h-5 w-5 transition-all duration-300 transform',
                  {
                    'rotate-180 text-sapphire': openDropdown === 'community', // Rotated up and sapphire when open
                    'text-black dark:text-white group-hover:text-sapphire': openDropdown !== 'community' // Normal/hover state
                  }
                )}/>
              </button>
              
              {/* dropdown list */}
              <AnimatedDropdown
                isOpen={openDropdown === 'community'}
                className='absolute flex flex-col w-[170px] rounded-md  bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.1)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_1px_3px_rgba(0,0,0,0.3)] dark:bg-black z-50 top-10'
              >
                {menuItems.explore.map(item =>(
                  <Link
                    key={item.id}
                    href={item.path}
                    className={clsx(
                      'font-times text-md px-4 py-2 transition-all duration-300',
                      {
                        'text-black dark:text-white': pathname !== item.path,
                        '!text-sapphire bg-gray-100 dark:bg-dark700': pathname === item.path,
                        'hover:text-sapphire hover:bg-gray-100 dark:hover:bg-dark800': pathname !== item.path
                      }
                    )}
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item.label}
                  </Link> 
                ))}
              </AnimatedDropdown>
            </div>
        
        </>
    )
}