"use client"
import Link from 'next/link';
import Logo from '@/components/landing/Logo';


import Background from '@/components/ui/auth/Background';

import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import MailIcon from '@mui/icons-material/Mail';

export default function PasswordReset(){
    return(
        <>
        <main className="w-full h-screen relative">
            <Background/>
            <div className="relative h-full z-50 w-[90%] mx-auto flex items-center justify-end">
                <div className="flex flex-col gap-2 w-[400px]">
                    <div className="w-full flex flex-col items-center justify-between">
                        <Logo/>
                        <h1 className="mt-2 text-sapphire font-plex-sans font-extrabold text-4xl">PASSWORD RESET</h1>
                    </div>  
                    <div className="mt-2 w-full backdrop-blur-lg bg-white/5 p-3 rounded-md flex flex-col gap-1">

                        <div className="w-full">
                            <p className="mt-2 text-center text-white font-plex-sans ">Enter your email address and we will send you alink to reset your password</p>
                        </div>

                        <form action="" className="mt-4 w-full">
                        {/* Email */}
                        <div className="input-continer w-full relative">
                            <input 
                            name="email"
                            id="email"
                            required
                            type="email" 
                            className='w-full bg-white/10 rounded-md p-3 backdrop-blur-lg border border-chrome text-white'/>
                            <label htmlFor="email" className='absolute translate-y-3 text-white font-bold font-fira-code left-4'>
                            Email
                            </label>
                            <span className='icon-div absolute translate-y-3 text-white font-bold font-fira-code right-4'>
                            <EmailRoundedIcon/>
                            </span>
                         </div>
                         <button className="w-full mt-2 flex items-center justify-center gap-1 p-3 rounded-md bg-sapphire text-white font-bold transition-all duration-300 hover:bg-cosmic">
                            Send Reset Link 
                            <MailIcon className='ml-3'/>   
                         </button>
                        </form>  
                          
                    </div> 
                    <div className="w-full flex items-center justify-center">
                        <div className="text-white">Remember your password? <Link href="/login" className="text-sapphire font-bold hover:underline hover:text-candy" >Back to login </Link></div> 
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}