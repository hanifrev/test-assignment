'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Buttons from '../atoms/Buttons';
import { Dropdown } from '../atoms/Dropdown';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('채용');

  const dropdownItems = [
    {
      label: '채용',
      value: '채용',
      onClick: () => (setDropdownValue('채용'), setOpenDropdown(false)),
    },
    {
      label: '해외 개발자 원격 채용',
      value: '해외 개발자 원격 채용',
      onClick: () => (
        setDropdownValue('해외 개발자 원격 채용'), setOpenDropdown(false)
      ),
    },
    {
      label: '외국인 원격 채용 (비개발 직군)',
      value: '외국인 원격 채용 (비개발 직군)',
      onClick: () => (
        setDropdownValue('외국인 원격 채용 (비개발 직군)'),
        setOpenDropdown(false)
      ),
    },
    {
      label: '한국어 가능 외국인 채용',
      value: '',
      onClick: () => (
        setDropdownValue('한국어 가능 외국인 채용'), setOpenDropdown(false)
      ),
    },
  ];

  return (
    <div className="side-container xl:mx-auto bg-transparent z-[9999]">
      {/* mobile */}
      <div className="flex xl:hidden py-[19px] justify-between w-full">
        <Image src="/logo.svg" alt="logo" width={114} height={21} />
        {/* <span>X</span> */}
      </div>
      {/* desktop */}
      <div className="hidden xl:flex flex-row w-[1200px] py-5 justify-between items-center">
        <Image src="/logo.svg" alt="logo" width={114} height={21} />
        <div className="text-white text-base font-black flex gap-[60px]">
          <span className="flex gap-2 items-center">
            <span>{dropdownValue}</span>
            <Image
              src="/chev-down.svg"
              alt="chdwn"
              className="cursor-pointer"
              width={16}
              height={16}
              onClick={() => setOpenDropdown(!openDropdown)}
            />
            {openDropdown && <Dropdown items={dropdownItems} />}
          </span>
          <span>해외 개발자 활용 서비스</span>
        </div>
        <Buttons text="문의하기" />
      </div>
    </div>
  );
};

export default Header;
