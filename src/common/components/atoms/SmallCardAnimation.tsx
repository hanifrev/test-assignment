import Image from 'next/image';
import React from 'react';

interface SmallCardProps {
  imageSrc: string;
  text: string;
}

const SmallCardAnimation: React.FC<SmallCardProps> = ({ imageSrc, text }) => {
  return (
    <div className="w-[332px] h-[88px] p-4 bg-white/20 rounded-xl justify-start items-center gap-6 inline-flex">
      <div className="p-3 bg-white/40 w-[68px] h-14 rounded-lg justify-start items-start gap-2.5 flex">
        <Image
          src={imageSrc}
          alt="card"
          width={32}
          height={32}
          className="w-8 h-8"
        />
      </div>

      <div className="w-full text-white text-2xl font-black leading-9">
        {text}
      </div>
    </div>
  );
};

export default SmallCardAnimation;
