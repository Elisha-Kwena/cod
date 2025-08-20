"use client"
import Link from "next/link"
import Logo from "./Logo"

export default function Navbar(){
    return(
        <header className="w-full fixed top-0 left-0 p-1 z-50">
            <nav className="flex items-center justify-between p-3 px-1 rounded-lg w-[97%] lg:w-[95%] mx-auto bg-white/2 backdrop-blur-md shadow-sm">
                <div className="left">
                    <Logo/>
                </div>
                <div className="right">
                    <Link 
                        href="/register" 
                        className="text-white bg-sapphire py-4 lg:py-5 px-4 rounded-md font-semibold text-sm lg:text-xl hover:bg-electric transition-all duration-300"
                    >
                        Get Started
                    </Link>
                </div>
            </nav>
        </header>
    )
}