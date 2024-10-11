import Buttons from '@/common/components/atoms/Buttons';
import CardFooter from '@/common/components/atoms/CardFooter';
import Tooltips from '@/common/components/molecules/Tooltips';
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
    <div className="flex flex-col z-50 mx-auto side-container pt-14 xl:pt-[100px] pb-[60px] xl:pb-[108px] xl:!px-0 xl:w-[1200px]">
      {/* <div className="w-full h-[200px] bg-gradient-to-br from-[#26c2b9] to-[#288be6]"></div> */}
      {/* <Header /> */}
      <Buttons text="문의하기" />
      <Tooltips />
      <div className="flex flex-wrap gap-2 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        euismod, felis ac bibendum convallis, elit eros tempor urna, vitae
        varius justo velit vel orci. Ut lacinia eros ut orci interdum, et
        fermentum mauris viverra. Quisque eget metus in purus faucibus
        tincidunt. Vestibulum vehicula eros ac quam aliquam volutpat. Nulla
        facilisi. Suspendisse potenti. Fusce eu eros nec libero tincidunt
        venenatis ac non ligula. Donec mollis odio non nisl dapibus, in pulvinar
        purus tempor. Morbi convallis lacinia gravida
      </div>
    </div>
  );
};

export default ExamplePage;
