import React from "react";

import banner from '../../../assets/images/signupbanner.jpg'

const Background:React.FC = () =>{
    return(
        <>
        <div className="w-full h-full absolute z-1 top-0 left-0">
            <img src={banner.src} alt=""  className="w-full h-full object-cover"/>
        </div>
        <div className="w-full h-full absolute z-1 top-0 left-0 bg-black/5 backdrop-blur-sm"></div>
        </>
    )
}
export default Background;