import Buttons from '@/common/components/atoms/Buttons';
import CardFooter from '@/common/components/atoms/CardFooter';
import Header from '@/common/components/organisms/Header';
import React from 'react';

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

const ExamplePage = () => {
  return (
    <div className="flex flex-col w-full">
      {/* <Header /> */}
      {/* <Buttons text="문의하기" /> */}
      {/* <div className="flex flex-wrap gap-2 ">
        {footerCard.map((x) => {
          return (
            <CardFooter logoImg={x.logoImg} text={x.text} text2="바로가기" />
          );
        })}
      </div> */}
    </div>
  );
};

export default ExamplePage;
