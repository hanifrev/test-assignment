'use client';

import BottomCardSlider from '@/common/components/molecules/BottomCardSlider';
import CheckboxGroup from '@/common/components/molecules/CheckboxGroup';
import Tooltips from '@/common/components/molecules/Tooltips';
import Image from 'next/image';
import React from 'react';
import { mainPageType } from './types/mainPage.models';
import InfoCard from '@/common/components/atoms/InfoCard';
import CardSwipeAnimation from '@/common/components/molecules/CardSwipeAnimation';
import { useMediaQuery } from 'react-responsive';

interface MainProps {
  data: mainPageType;
}

const MainPage: React.FC<MainProps> = ({ data }) => {
  console.log(data);
  const theData = data && data;
  const isWideViewport = useMediaQuery({ query: '(min-width: 1024px)' });

  return (
    <div className="z-50 mx-auto side-container pt-14 xl:pt-[100px] pb-[60px] xl:pb-[108px] xl:!px-0 xl:w-[1200px]">
      <div className="flex flex-col xl:flex-row gap-9 ">
        <div className="flex flex-col gap-4 lg:w-[581px]">
          {isWideViewport ? (
            <Tooltips
              position="left"
              text="풀타임, 파트타임"
              textColor="!text-[#40E2E8]"
              background="bg-white"
              arrowColor="#FFF"
            />
          ) : (
            <Tooltips
              position="left"
              text="풀타임, 파트타임"
              textColor="!text-white "
              background="bg-[#8BC4FF]"
              arrowColor="#8BC4FF"
            />
          )}

          {/* title */}
          <div className="text-white font-black text-4xl leading-[130%] animate-fadeInUp">
            {theData.title}
          </div>
          {/* description */}
          <div className="text-[#FFFFFFCC] font-black text-lg leading-[27px] animate-fadeInUp delay-[300ms]">
            {theData.description}
          </div>
          <div className="text-[#FFFFFFCC] hidden xl:block pt-2 text-base font-black underline leading-normal">
            {theData.question}
          </div>
          {/* 3 small info card desktop only*/}
          <div className="hidden xl:flex flex-row gap-12 justify-between pt-[60px] animate-fadeIn">
            {/* CHANGE THIS INTO INFO CARD COMPONENT LATER WHEN IMPLEMENTING API */}
            {theData.infoCard.map((item: mainPageType, index: number) => {
              return (
                <InfoCard
                  key={index}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4 mx-auto">
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
            className="mx-auto xl:transform xl:translate-y-[-44px]"
          />
          <div>
            <CardSwipeAnimation />
          </div>
          <CheckboxGroup />
          <div className="text-[#faff23] xl:hidden text-base font-black underline leading-normal sm:mx-auto">
            {theData.question}
          </div>
        </div>
      </div>
      <div className="hidden pt-[60px] xl:block w-[1200px] mx-auto">
        <BottomCardSlider />
      </div>
    </div>
  );
};

export default MainPage;
