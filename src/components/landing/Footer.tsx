"use client"

import React from "react";

import { useState } from "react";


import apple from '../../assets/icons/apple.png'
import playstore from '../../assets/icons/google-play.png'
import Logo from "./Logo";


import { socials,footerLinks } from "@/data/socials";

const Footer: React.FC = () => {
    const [year,setYear] = useState(new Date().getFullYear())



    return(
        <>
        <div className="w-full py-12 pt-20 bg-black">
            <div className="w-[95%] mx-auto flex flex-col items-start justify-center">
                <div className="w-full flex lg:flex-row flex-col items-center gap-10 justify-between">
                    {/* logo */}
                    <div className="flex flex-col items-start gap-1">
                        <Logo/>
                        <p className="mt-2 text-chrome font-fira-code text-md">The ultimate platform for developer collaboration and knowledge sharing.</p>

                        <div className="flex items-center justify-center gap-2 mt-4">
                            <a href="" className="flex items-center justify-start gap-1 p-2 px-3 rounded-md bg-white">
                                <img src={apple.src} alt="" className="w-10 h-10 object-contain" />
                                <div className="flex flex-col gap-0 items-start justify-center">
                                    <h2 className="text-black  text-sm lg:text-md">Download on the</h2>
                                    <h1 className=" font-extrabold text-xl -mt-2 text-black">App Store</h1>
                                </div>
                            </a>
                            <a href="" className="flex items-center justify-start gap-1 p-2 px-3 rounded-md bg-white">
                                <img src={playstore.src} alt="" className="w-10 h-10 object-contain" />
                                <div className="flex flex-col gap-0 items-start justify-center">
                                    <h2 className="text-black">GET IT ON</h2>
                                    <h1 className=" font-extrabold text-xl -mt-2 text-black">Google Play</h1>
                                </div>
                            </a>
                        </div>

                        <div className="w-full flex items-center justify-start gap-2 mt-4">
                            {socials.map(item =>(
                                <a key={item.id}
                                 href={item.href}
                                 target={item.target}
                                 className="social w-10 h-10 rounded-full p-1 flex items-center justify-center"
                                 >
                                    <img src={item.icon.src} alt="" className="w-full h-full object-contain "/>
                                 </a>
                            ))}
                        </div>
                    </div>

                    <div className="w-full grid grid-cols-2 lg:grid-cols-4 mt-6 lg:mt-0">
                        {footerLinks.map((section, index)=>(
                            <div key={index} className="footer-section">
                                <h3 className="text-lg font-bold mb-4 text-sapphire">{section.category}</h3>
                                <ul className="space-y-2">
                                  {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                      <a
                                        href={link.url}
                                        target={link.target}
                                        className="hover:text-blue-400 text-chrome transition flex  items-center gap-2"
                                        rel="noopener noreferrer"
                                      >
                                        {link.text}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className="h-1 w-full mt-10" />
                <div className="w-full p-4">
                    <p className="text-chrome text-center text-lg">© {year} Coduit. All rights reserved.

Powered by <span className="text-sapphire">Coduit</span></p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;