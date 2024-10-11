import React, { ReactNode } from 'react';
import TooltipBox from '../atoms/TooltipBox';
import ArrowTooltip from '../atoms/ArrowTooltip';

interface TooltipProps {
  position?: 'left' | 'center';
  text: string | ReactNode;
  background: string;
  textColor: string;
  arrowColor: string;
}

const Tooltips: React.FC<TooltipProps> = ({
  position,
  text,
  background,
  textColor,
  arrowColor,
}) => {
  return (
    <div className="flex flex-col w-max">
      <TooltipBox text={text} background={background} textColor={textColor} />
      <span
        className={`${position == 'left' && 'pl-[14px] -mt-0.5'} ${position == 'center' && 'mx-auto -mt-0.5'} `}
      >
        <ArrowTooltip color={arrowColor} />
      </span>
    </div>
  );
};

export default Tooltips;
