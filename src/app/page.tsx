import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Trusted from '@/components/landing/Trusted';
import Features from '@/components/landing/Features';
import Feedback from '@/components/landing/Feedback';
import Stats from '@/components/landing/Stats';
import Footer from '@/components/landing/Footer';
import waves from '../../public/waves.svg'
import banner from '../../public/banner.png'


export default function LandingPage() {
  return (
    <>
      <Navbar/>
      <main className="w-full">
        <section className="w-full hero-section">
          <div className="herosection w-[90%] mx-auto pt-[70px]">
            <Hero/>
          </div>
        </section>
        <section className="trustes w-full bg-dark800 py-10">
            <div className="w-full lg:w-[90%] mx-auto">
                <Trusted/>
            </div>
        </section>
        <section className="features w-full bg-black p-4 lg:p-0 ">
            <div className="w-full lg:w-[90%] mx-auto">
                <Features/>
            </div>
        </section>
        <section className="feedback w-full bg-dark800 py-12">
            <div className="w-full lg:w-[90%] mx-auto">
                <Feedback/>
            </div>
        </section>
        <section className="w-full bg-black lg:p-0 px-2 flex flex-col items-center justify-center gap-4">
                <div className="cta rounded-lg border border-chrome p-3 lg:p-6 mt-16 w-full lg:w-[60%] mx-auto">
                    <h1 className="text-2xl lg:text-5xl font-plex-sans font-extrabold text-center text-white">Ready to join the Community?</h1>
                    <p className="text-chrome mt-6 text-md lg:text-xl font-fira-code text-center">Join a community of developers who are passionate about coding and building amazing things.</p>

                    <div className="w-full flex items-center justify-center gap-2 mt-6">
                        <Link href="/register" className='bg-sapphire p-2 lg:p-3 text-white font-fira-code font-extrabold border-[2px] border-sapphire text-center text-sm lg:text-xl rounded-sm transition-all duration-300 hover:bg-transparent hover:text-sapphire hover:-translate-y-2'>Get Started Now</Link>
                        <Link href="" className='bg-transparent p-2 lg:p-3 text-white font-fira-code font-extrabold border-[2px] border-white text-center text-sm lg:text-xl rounded-sm transition-all duration-300 hover:border-sapphire hover:text-sapphire hover:-translate-y-2'>Explore communities</Link>
                    </div>
                </div>
                <div className="w-full mt-12 bg-dark800 pb-16">
                  <div className="w-full relative" style={{ height: '200px' }}>
                      <Image
                        src={waves.src}
                        alt="Decorative waves pattern"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <div className="w-full flex gap-10 px-4 lg:px-12 flex-col-reverse lg:flex-row items-center justify-between">
                            <div className="left w-full lg:w-1/2">
                              <div className="w-full relative" style={{ paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
                                <Image
                                  src={banner.src}
                                  alt="Banner image"
                                  fill
                                  className="rounded-t-lg object-cover"
                                />
                              </div>
                            </div>
                            <div className="right w-full lg:w-1/2">
                                <Stats/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
      </main>
    </>
  );
}