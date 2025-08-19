"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import clsx from "clsx"

export default function Jobs(){
    const pathname = usePathname()
    return(
        <>
            <div className="menu flex items-center justify-center gap-2">
              <Link 
                href="/jobs" 
                className={clsx(
                  'font-bold capitalize transition-all duration-300',
                  {
                    // Active state (always sapphire)
                    '!text-sapphire': pathname === "/jobs",
                    
                    // Default state (dark mode aware)
                    'text-black dark:text-white': pathname !== "/jobs",
                    
                    // Hover state (only when not active)
                    'hover:!text-sapphire dark:hover:!text-sapphire': pathname !== "/jobs"
                  }
                )}
              >
                Jobs
              </Link>
            </div>
        </>
    )
}