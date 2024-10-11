import Image from 'next/image';
import React from 'react';
import CardFooter from '../atoms/CardFooter';
import FooterLabelCard from '../molecules/FooterLabelCard';

const footerCard = [
  {
    logoImg: '/foot-card-1.svg',
    text: '해외 개발자 원격 채용',
    text2: '바로가기',
  },
  {
    logoImg: '/foot-card-2.svg',
    text: '외국인 원격 채용 (비개발)',
    text2: '바로가기',
  },
  {
    logoImg: '/foot-card-3.svg',
    text: '한국어 가능 외국인 채용',
    text2: '바로가기',
  },
  {
    logoImg: '/foot-card-4.svg',
    text: '해외 개발자 활용 서비스',
    text2: '바로가기',
  },
];

const Footer = () => {
  return (
    <div className="bg-[#FBFBFB] side-container z-[9999]">
      <div className=" py-16 w-full xl:w-[1200px] xl:mx-auto flex flex-col  text-[#343741]">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="pb-[18px]">
            <Image src="/logo-color.svg" alt="logo" width={187} height={34} />
            <div className="text-sm font-black pt-4 pb-[18px]">
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
            </div>
            <div className="text-[13px] font-black pb-2">010-0000-0000</div>
            <div className="text-[13px] font-black pb-2">aaaaa@naver.com</div>
          </div>
          <div>
            <div className="flex flex-wrap gap-2 justify-between">
              {footerCard.map((x) => {
                return (
                  <CardFooter
                    logoImg={x.logoImg}
                    text={x.text}
                    text2="바로가기"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="pt-[60px] flex flex-col lg:flex-row gap-5">
          <div className="flex flex-row gap-5">
            <FooterLabelCard
              text1="상호명"
              text2="하이퍼하이어"
              text3="Hyperhire India Private Limited"
              className="w-[180px] lg:w-[250px] "
            />
            <FooterLabelCard
              text1={
                <span>
                  대표 <b>CEO</b>
                </span>
              }
              text2="김주현"
              text3="Juhyun Kim"
              className="lg:w-[160px]"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-9 pt-9 lg:pt-0">
            <FooterLabelCard
              text1={
                <span>
                  사업자등록번호 <b>CIN</b>
                </span>
              }
              text2={
                <span>
                  <b>427-86-01187</b>
                </span>
              }
              text3={
                <span>
                  <b>U74110DL2016PTC290812</b>
                </span>
              }
              className=""
            />
            <FooterLabelCard
              text1={
                <span>
                  주소 <b>ADDRESS</b>
                </span>
              }
              text2={
                <span>
                  서울특별시 강남대로 <b>479</b>, 지하 <b>1</b>층 <b>238</b>호
                </span>
              }
              text3={
                <span>
                  <b>
                    D-138, Street number 11, Jagjeet Nagar, North East Delhi,
                    New Delhi, <br />
                    110053 India
                  </b>
                </span>
              }
              className=""
            />
          </div>
        </div>
        <div className="pt-9 lg:pt-12 font-black text-[13px]">
          ⓒ 2023 Hyperhire
        </div>
      </div>
    </div>
  );
};

export default Footer;
