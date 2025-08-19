"use client"
import { useState, useEffect } from 'react';

import { menuItems } from '@/lib/menu';
import { useOutsideClick } from '@/lib/useOutsideClick';
import { AnimatedDropdown } from '../ui/AnimatedDropdown';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import clsx from 'clsx';

import { usePathname } from 'next/navigation';

export default function Create(){
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

<div className="menu hidden lg:block relative" ref={dropdownRef}>
    <button 
        onClick={(e) => toggleDropdown('add', e)}
        className="flex items-center gap-1 group"
        >
        <span className={clsx('font-bold capitalize transition-all duration-300',
            {
            'text-sapphire': openDropdown === 'add', // Sapphire when open
            'text-black dark:text-white dark:hover:text-sapphire hover:text-sapphire': openDropdown !== 'add' // Normal/hover state
            }
            )}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                    <path d="M6 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM15.75 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3H18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.25ZM6 12.75a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3v-2.25a3 3 0 0 0-3-3H6ZM17.625 13.5a.75.75 0 0 0-1.5 0v2.625H13.5a.75.75 0 0 0 0 1.5h2.625v2.625a.75.75 0 0 0 1.5 0v-2.625h2.625a.75.75 0 0 0 0-1.5h-2.625V13.5Z" />
                </svg>

                </span>
      
              </button>
              
              {/* dropdown list */}
              <AnimatedDropdown
                    isOpen={openDropdown === 'add'}
                    className='absolute flex flex-col w-[170px] rounded-md  bg-white dark:bg-black z-50 top-10  right-0 shadow-[0_1px_2px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.1)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_1px_3px_rgba(0,0,0,0.3)]'
                  >
                    {menuItems.add.map(item =>(
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