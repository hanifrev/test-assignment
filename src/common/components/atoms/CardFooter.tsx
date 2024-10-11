import Image from 'next/image';
import React from 'react';

interface CardProps {
  logoImg: string;
  text: string;
  text2: string;
}

const CardFooter: React.FC<CardProps> = ({ logoImg, text, text2 }) => {
  return (
    <div className="w-40 xl:w-[187px] h-[163px] xl:h-[142px] p-4 bg-white text-black rounded-xl flex-col justify-between items-start inline-flex hover:bg-slate-100 cursor-pointer">
      <div className="pb-3 ">
        <div className="h-10 p-2 bg-[#eff0f6] rounded-lg flex-col justify-start items-start gap-2.5 inline-flex">
          <Image src={logoImg} alt="logo" width={24} height={24} />
        </div>
      </div>
      <div className="pb-4 text-[#343741] text-sm font-black h-[42px]">
        {text}
      </div>
      <div className="flex items-center gap-1 bottom-0">
        <span className="text-[#5E626F] text-sm font-black">{text2}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.59663 1.91666C3.36079 1.91666 1.91663 3.27916 1.91663 5.38749V12.6117C1.91663 14.72 3.36079 16.0833 5.59663 16.0833H12.4033C14.6391 16.0833 16.0833 14.72 16.0833 12.6117V5.38749C16.0833 3.27916 14.6391 1.91666 12.4033 1.91666H5.59663ZM12.4033 17.3333H5.59663C2.64829 17.3333 0.666626 15.4358 0.666626 12.6117V5.38749C0.666626 2.56332 2.64829 0.666656 5.59663 0.666656H12.4033C15.3516 0.666656 17.3333 2.56332 17.3333 5.38749V12.6117C17.3333 15.4358 15.3516 17.3333 12.4033 17.3333Z"
            fill="#5E626F"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.4048 9.625H5.59485C5.24985 9.625 4.96985 9.345 4.96985 9C4.96985 8.655 5.24985 8.375 5.59485 8.375H12.4048C12.7498 8.375 13.0298 8.655 13.0298 9C13.0298 9.345 12.7498 9.625 12.4048 9.625Z"
            fill="#5E626F"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.26852 12.7483C9.10852 12.7483 8.94769 12.6875 8.82602 12.5642C8.58269 12.3192 8.58352 11.9242 8.82769 11.6808L11.5194 8.99999L8.82769 6.31915C8.58352 6.07582 8.58269 5.68082 8.82602 5.43582C9.06936 5.19082 9.46436 5.19082 9.70936 5.43415L12.846 8.55749C12.9644 8.67415 13.0302 8.83415 13.0302 8.99999C13.0302 9.16582 12.9644 9.32582 12.846 9.44249L9.70936 12.5658C9.58769 12.6875 9.42769 12.7483 9.26852 12.7483Z"
            fill="#5E626F"
          />
        </svg>
      </div>
    </div>
  );
};

export default CardFooter;
