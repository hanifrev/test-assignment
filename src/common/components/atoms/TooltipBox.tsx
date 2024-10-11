import React, { ReactNode } from 'react';

interface TooltipProps {
  text: string | ReactNode;
  background?: string;
  textColor?: string;
}

const TooltipBox: React.FC<TooltipProps> = ({
  text,
  background,
  textColor,
}) => {
  return (
    <div
      className={`h-[39px] px-3 py-1.5 w-max rounded-lg justify-start items-start gap-2.5 inline-flex ${background}`}
    >
      <div className={` ${textColor} text-[#40e2e8] text-lg font-black`}>
        {text}
      </div>
    </div>
  );
};

export default TooltipBox;
