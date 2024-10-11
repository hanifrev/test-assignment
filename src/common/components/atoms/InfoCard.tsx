import React from 'react';

interface InfoCardProps {
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-2 w-[161px]">
      <div className="w-[129px] h-[0px] border border-white" />
      <div className="text-white text-lg font-black">{title}</div>
      <div className="text-white/80 text-base font-black leading-normal">
        {description}
      </div>
    </div>
  );
};

export default InfoCard;
