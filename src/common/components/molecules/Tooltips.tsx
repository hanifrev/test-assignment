import React from 'react';
import TooltipBox from '../atoms/TooltipBox';
import ArrowTooltip from '../atoms/ArrowTooltip';

const Tooltips = () => {
  return (
    <div>
      <TooltipBox
        text="풀타임, 파트타임"
        background="bg-white"
        textColor="text-[#40E2E8]"
      />
      <ArrowTooltip classNames="bg-white" />
    </div>
  );
};

export default Tooltips;
