import React from 'react';

interface TooltipProps {
  text: string;
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
      className={`h-[39px] px-3 py-1.5 bg-white rounded-lg justify-start items-start gap-2.5 inline-flex ${!background}`}
    >
      <div className={`text-[#40e2e8] text-lg font-black ${!textColor}`}>
        {text}
      </div>
    </div>
  );
};

export default TooltipBox;
