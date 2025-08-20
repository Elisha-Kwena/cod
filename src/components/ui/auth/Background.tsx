import React from "react";
import Image from "next/image";
import banner from '../../../assets/images/signupbanner.jpg';

const Background: React.FC = () => {
  return (
    <>
      <div className="w-full h-full absolute z-1 top-0 left-0">
        <Image
          src={banner}
          alt="Signup background"
          fill
          className="object-cover"
          placeholder="blur"
          quality={75}
        />
      </div>
      <div className="w-full h-full absolute z-1 top-0 left-0 bg-black/5 backdrop-blur-sm"></div>
    </>
  );
};

export default Background;
