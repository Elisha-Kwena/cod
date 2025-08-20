import React from 'react';
import Image from 'next/image';

interface MembersProps {
  profile: string;
  index:number;
}

const Members: React.FC<MembersProps> = ({ profile,index }) => {
  const leftPosition = index * 44;
  return (
        <>
                <div className={`w-16 top-2 h-16 rounded-full absolute flex items-center justify-center `}
                style={{
                  left:`${leftPosition}px`,
                  zIndex:10 - index
                }}
                >
                <Image
                src={profile}
                alt="User profile"
                width={48}
                height={48}
                className="w-full h-full rounded-full object-cover"
              />
                </div>
            {/* <div className={`w-10 h-10 md:w-12 md:h-12 flex items-center rounded-full absolute ${left} z-10 border-2 border-white`}>
              <Image
                src={profile}
                alt="User profile"
                width={48}
                height={48}
                className="w-full h-full rounded-full object-cover"
              />
            </div> */}
        </>
  );
};

export default Members;