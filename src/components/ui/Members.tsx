import React from 'react';
import Image from 'next/image';

interface MembersProps {
  profile: string;
  left: string;
}

const Members: React.FC<MembersProps> = ({ profile, left }) => {
  return (
        <>
                <div className={`w-16 top-2 h-16 rounded-full absolute flex items-center justify-center ${left}`}>
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