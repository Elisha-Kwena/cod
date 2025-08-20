"use client"
import Link from "next/link"
import Image from "next/image"
import logo from '../../../public/coduit.png'

export default function Logo(){
    return(
        <Link href="/" className='flex items-center justify-center gap-1 md:gap-2'>
            <Image
                src={logo}
                alt="Coduit Logo"
                width={40}
                height={40}
                className="w-10 h-10 md:w-40 md:h-10 lg:w-12 lg:h-12"
                priority
            />
            <h1 className="text-3xl lg:text-5xl text-sapphire font-extrabold font-['impact'] tracking-tight">
                Coduit
            </h1>
        </Link>
    )
}