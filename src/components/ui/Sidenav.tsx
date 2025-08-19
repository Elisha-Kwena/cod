"use client"
import { useEffect } from 'react';



import defaultuser from '../../../public/default-user.png'

import Image from 'next/image';

import { useSidebar } from '@/contexts/SidebarContext';
import Home from './sidenav/Home';
import Explore from './sidenav/Explore';
import Community from './sidenav/Community';
import Groups from './sidenav/Groups';
import Jobs from './sidenav/Jobs';
import Create from './sidenav/Create';
import Search from './sidenav/Search';
import Profile from './sidenav/Profile';
import Monetization from './sidenav/Monetization';
import Settings from './sidenav/Settings';
import Signout from './sidenav/Signout';
export default function Sidenav(){

    const {isSidebarOpen, closeSidebar} = useSidebar();
    useEffect(() => {
        if (isSidebarOpen) {
          document.body.classList.add('overflow-hidden');
        } else {
          document.body.classList.remove('overflow-hidden');
        }
    
        return () => {
          document.body.classList.remove('overflow-hidden');
        };
      }, [isSidebarOpen]);

    //   if (!isSidebarOpen) return null;
    return(
        <>
            <div className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out top-[70px] ${isSidebarOpen ? 'opacity-100 visible right-0' : 'opacity-0 invisible right-[-100%]'}`}>
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm transition-opacity duration-300" onClick={closeSidebar}/>
                <div className={`fixed top-[70px] right-0 h-[calc(100%-53px)] w-[80%] bg-white dark:bg-black shadow-lg transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div 
                        onClick={e => e.stopPropagation()}
                        className="fixed w-full h-full flex bg-white dark:bg-black shadow-[0_1px_2px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.1)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_1px_3px_rgba(0,0,0,0.3)] z-50 p-4 right-0">
                        <div className="w-full flex flex-col gap-1">
                        
                            {/* search */}
                            <Search/>
                            {/* navigation */}
                            <div className="w-full flex flex-col items-center justify-between gap-2 h-full">
                                <div className="w-full top flex-col overflow-y-auto h-[60%] px-1 pb-2">
                                    <Home/>
                                    <Explore/>
                                    <Community/>
                                    <Groups/>
                                    <Create/>
                                    <Jobs/>
                                </div> 
                                <div className="bottom-0 p-4 pb-6 fixed flex flex-col gap-3 w-full">
                                    <div className="flex items-center justify-start gap-3">
                                <div className="banner">
                                <Image
                                    src={defaultuser}
                                    alt="User profile"
                                    width={50}  
                                    height={50}
                                    className="rounded-full object-cover"
                                />
                                </div>
                                <div className="flex flex-col items-start justify-start">
                                    <h1 className="text-black text-lg dark:text-white font-extrabold">John Doe</h1>
                                    <p className='text-black dark:text-white text-sm'>@jonDoe Developer</p>
                                </div>
                                    </div>
                                    <Profile/>
                                    <Monetization/>
                                    <Settings/>
                                    <Signout/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}