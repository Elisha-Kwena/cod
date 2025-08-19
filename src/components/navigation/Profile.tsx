"use client"
import { useState, useEffect } from 'react';

import { menuItems } from '@/lib/menu';
import { useOutsideClick } from '@/lib/useOutsideClick';
import { AnimatedDropdown } from '../ui/AnimatedDropdown';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import clsx from 'clsx';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import defaultuser from '../../../public/default-user.png'

export default function Profile(){
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

                <div className="hidden lg:block menu relative" ref={dropdownRef}>
                  <button 
                    onClick={(e) => toggleDropdown('profile', e)}
                    className="flex items-center gap-1 group"
                  >
                    <span className={clsx(
                      'font-bold capitalize transition-all duration-300',
                      {
                        'text-sapphire': openDropdown === 'profile', // Sapphire when open
                        'text-black dark:text-white dark:hover:text-sapphire hover:text-sapphire': openDropdown !== 'profile' // Normal/hover state
                      }
                    )}>
                  <Image
                    src={defaultuser}
                    alt="User profile"
                    width={48}  // Default (desktop) size
                    height={48}
                    sizes="(max-width: 1024px) 24px, 48px"
                    className="rounded-full object-cover w-[24px] h-[24px] lg:w-[48px] lg:h-[48px]"
                  />
                    </span>
                  </button>
              
                  {/* dropdown list */}
                  <AnimatedDropdown
                    isOpen={openDropdown === 'profile'}
                    className='absolute flex flex-col w-[170px] rounded-md  bg-white dark:bg-black z-50 top-10  right-0 shadow-[0_1px_2px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.1)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_1px_3px_rgba(0,0,0,0.3)]'
                  >
                    {menuItems.profile.map(item =>(
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