'use client';

import { useOutsideClick } from '@/lib/useOutsideClick';
import { useState } from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation'
import clsx from 'clsx'
import Image from 'next/image';
import { menuItems } from '@/lib/menu';
import { AnimatedDropdown } from '../ui/AnimatedDropdown';

import defaultuser from '../../../public/default-user.png'
import { 
  PlusCircleIcon,
  GlobeAltIcon,
  ChevronDownIcon,
  HomeIcon, 
  VideoCameraIcon, 
  UserGroupIcon, 
  CodeBracketIcon,
  BellIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { programmingLanguages , getProgrammingLanguages} from '@/data/mockData';

import ToggleSidebar from './ToggleSidebar';

import Explore from './Explore';
import Community from './Community';
import Groups from './Groups';
import Home from './Home';
import Jobs from './Jobs';
import Search from './Search';
import Notification from './Notification';
import Chats from './Chats';
import Create from './Create';
import Profile from './Profile';

export default function MainNavbar() {
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-black backdrop-blur-sm border-b border-gray-200 dark:border-dark700">
      <div className="w-full mx-auto px-2 sm:px-6 lg:px-4 py-1">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/dashboard" className="flex items-center justify-start gap-2">
              <img 
                src="/coduit.png" 
                alt="Coduit Logo" 
                className="h-10 w-auto"
              />
              <h1 className="text-sapphire font-extrabold font-['impact'] text-4xl">Coduit</h1>
            </Link>
          </div>


          {/* Navigation items */}
          <div className="hidden lg:flex items-center justify-start gap-4 ">

            <Home/>
            <Explore/>    
            <Community/>
            <Groups/>
            <Jobs/>
          </div>
          
          {/* searchbar */}
          <Search/>


          {/* Navigation Links */}
          <div className="flex items-center justify-end gap-4 lg:gap-8">
                <button className="flex lg:hidden items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                    <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z" clipRule="evenodd" />
                  </svg>
                </button>

                <Notification/>
                <Chats/>
                <Create/>
                <Profile/>

                {/* togglesidebar */}
                <ToggleSidebar/>
          </div>
        </div>
      </div>
    </nav>
  );
}
