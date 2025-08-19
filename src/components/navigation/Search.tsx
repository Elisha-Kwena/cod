"use client"

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

export default function Search(){
    return(
        <>
        <div className="hidden lg:block w-[500px]">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-chrome" />
              <input
                type="text"
                placeholder="Search developers, code, tutorials..."
                className="w-full pl-10 pr-4 py-2 bg-light_gray dark:bg-dark800 border border-gray-200 dark:border-dark700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-chrome focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent"
              />
            </div>
          </div>
        </>
    )
}