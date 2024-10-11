import Image from 'next/image';
import React from 'react';

const HeroCard = () => {
  return (
    <div className="h-[360px] md:h-[408px] px-4 py-9 md:p-9 bg-white rounded-xl shadow flex flex-col items-center gap-4 md:gap-9">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-[120px] h-[120px]">
          <Image
            className="rounded-full"
            src="/card-img.png"
            alt="img"
            width={120}
            height={120}
          />
          <Image
            className="absolute left-[88px] top-[99px] rounded-sm"
            src="/flag.png"
            alt="flag"
            width={25}
            height={18}
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-center text-black text-lg md:text-2xl font-black leading-9">
            Abhishek Gupta
          </div>
          <div className="text-center text-[#4a77ff] text-sm md:text-base font-black">
            마케팅 · 2y+
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="flex flex-col items-center gap-1">
          <div className="px-3 py-1 rounded-md border border-[#c1c4cf]">
            <div className="text-[#5e626e] text-sm md:text-base font-black">
              마케팅 콘텐츠 제작
            </div>
          </div>
          <div className="px-3 py-1 rounded-md border border-[#c1c4cf]">
            <div className="text-[#5e626e] text-sm md:text-base font-black">
              인스타그램 관리
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="h-8 px-1 py-1 rounded-md border border-[#c1c4cf] flex items-center">
            <div className="text-[#5e626e] text-sm md:text-base font-black">
              트위터 관리
            </div>
          </div>
          <div className="h-8 px-3 py-1 rounded-md border border-[#c1c4cf] flex items-center">
            <div className="text-[#5e626e] text-sm md:text-base font-black">
              블로그 글 작성
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
