"use client"
import Link from 'next/link';
import Logo from '@/components/landing/Logo';
import Background from '@/components/ui/auth/Background';



export default function VerifyEmail () {
    // You'll implement these conditions:
    // const [isLoading, setIsLoading] = useState(true);
    // const [isError, setIsError] = useState(false);
    // const [isSuccess, setIsSuccess] = useState(false);

    return (
        <main className="w-full relative">
            <Background/>
            <div className="relative z-50 flex items-center justify-end w-full lg:w-[90%] py-6 md:py-12 px-2 sm:px-4 h-screen">
                <div className="w-full max-w-[450px] px-2 sm:px-4">
                    <div className="flex flex-col items-center justify-center gap-2 mb-6 lg:gap-1 lg:mb-8">
                        <Logo/>
                        <h1 className="font-bold text-sapphire sm:text-xl lg:text-4xl">EMAIL VERIFICATION</h1>
                    </div>
                    
                    <div className="w-full h-auto p-4 rounded-lg bg-white/5 backdrop-blur-sm sm:p-6">
                        {/* Success State - Entire Block */}
                        <div className="text-center">
                            <div className="mb-4 p-3 bg-green-500/10 border border-lime_green/20 rounded-md text-lime_green text-sm">
                                Your email has been successfully verified!
                            </div>
                            
                            <div className="mb-6 p-4 bg-white/5 rounded-md">
                                <h3 className="text-lg font-semibold text-white mb-2">Welcome, user@example.com!</h3>
                                <p className="text-white text-sm">
                                    You now have full access to all platform features.
                                </p>
                            </div>
                            
                            <div className="space-y-4">
                                <p className="text-white">
                                    You will be redirected to your dashboard shortly...
                                </p>
                                <div className="w-full bg-white/10 rounded-full h-2">
                                    <div className="bg-sapphire h-2 rounded-full animate-pulse" style={{ width: '100%' }}></div>
                                </div>
                                <div className="mt-4">
                                    <button className="bg-sapphire w-full rounded-sm text-white py-3 font-extrabold hover:underline text-sm">
                                        Go to your Profile
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Error State - Entire Block */}
                        <div className="text-center mt-3">
                            <div className="mb-4 p-3 bg-candy/10 border border-red-500/20 rounded-md text-candy text-sm">
                                Error verifying your email address
                            </div>
                            <div className="space-y-4">
                                <p className="text-white/70">
                                    If you have not received a verification email, you can request a new one.
                                </p>
                                <button
                                    className="inline-block px-6 py-3 font-medium text-white transition-all duration-300 rounded-md bg-sapphire w-full hover:bg-electric/80"
                                >
                                    Request New Verification Email
                                </button>
                                <div className="mt-4">
                                    <Link href="/login" className="text-cosmic hover:underline text-sm">
                                        Back to Login
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
