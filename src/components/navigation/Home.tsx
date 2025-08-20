"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import clsx from "clsx"

export default function Home(){
    const pathname = usePathname()
    return(
        <>
            <div className="menu flex items-center justify-center gap-2">
              <Link 
                href="/dashboard" 
                className={clsx(
                  'font-bold capitalize text-xl transition-all duration-300',
                  {
                    // Active state (always sapphire)
                    '!text-sapphire': pathname === "/dashboard",

                    // Default state (dark mode aware)
                    'text-black dark:text-white': pathname !== "/dashboard",

                    // Hover state (only when not active)
                    'hover:!text-sapphire dark:hover:!text-sapphire': pathname !== "/dashboard"
                  }
                )}
              >
                Home
              </Link>
            </div>
        </>
    )
}