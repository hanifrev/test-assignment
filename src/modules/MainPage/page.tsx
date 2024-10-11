'use client';

import Checkbox from '@/common/components/atoms/Checkbox';
import SmallCardAnimation from '@/common/components/atoms/SmallCardAnimation';
import CheckboxGroup from '@/common/components/molecules/CheckboxGroup';
import CardSlider from '@/common/components/molecules/SliderAnimation';
import Tooltips from '@/common/components/molecules/Tooltips';
import Image from 'next/image';
import React from 'react';

const MainPage = () => {
  return (
    <div className="z-50 mx-auto side-container pt-14 xl:pt-[100px] pb-[60px] xl:pb-[108px] xl:!px-0 xl:w-[1200px]">
      <div className="flex flex-col lg:flex-row gap-9 ">
        <div className="flex flex-col gap-4 lg:w-[581px]">
          <Tooltips
            position="left"
            text="풀타임, 파트타임"
            textColor="!text-white xl:!text-[#40E2E8]"
            background="bg-[#8BC4FF] xl:bg-white"
            // arrowColor="#8BC4FF"
            arrowColor="#FFF"
          />
          <div className="text-white font-black text-4xl leading-[130%]">
            최고의 실력을 가진 외국인 인재를 찾고 계신가요?
          </div>
          <div className="text-[#FFFFFFCC] font-black text-lg leading-[27px]">
            법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
          </div>
          <div className="text-[#FFFFFFCC] hidden xl:block pt-2 text-base font-black underline leading-normal">
            개발자가 필요하신가요?
          </div>
          <div className="hidden xl:flex flex-row gap-12 justify-between"></div>
        </div>
        <div className="flex flex-col gap-4">
          <Tooltips
            position="center"
            text={
              <span className="flex flex-row gap-[10px]">
                <Image src="/coin.svg" alt="coin" width={26} height={27} />월
                100만원
              </span>
            }
            textColor="!text-[#00c595]"
            background="!bg-[#e9f7ef]"
            arrowColor="#e9f7ef"
          />
          <div>animation</div>
          <CheckboxGroup />
          <div className="text-[#faff23] xl:hidden text-base font-black underline leading-normal">
            개발자가 필요하신가요?
          </div>
        </div>
      </div>
      <div className="hidden pt-[60px] xl:block w-[1200px] mx-auto">
        <CardSlider />
      </div>
    </div>
  );
};

export default MainPage;
