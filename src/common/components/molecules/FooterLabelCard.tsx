import React, { ReactNode } from 'react';
import Label from '../atoms/Label';

interface LabelCardProps {
  className?: string;
  text1: string | ReactNode;
  text2: string | ReactNode;
  text3: string | ReactNode;
}

const FooterLabelCard: React.FC<LabelCardProps> = ({
  className,
  text1,
  text2,
  text3,
}) => {
  return (
    <div className={`${className} flex flex-col text-[#5E626F]`}>
      <Label text={text1} className="text-xs pb-[10px]" />
      <Label text={text2} className="text-[13px]" />
      <Label text={text3} className="text-[13px] font-black pt-[5px]" />
    </div>
  );
};

export default FooterLabelCard;
