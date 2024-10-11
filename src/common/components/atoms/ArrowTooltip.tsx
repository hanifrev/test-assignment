import React from 'react';

interface ArrowProps {
  classNames?: string;
}

const ArrowTooltip: React.FC<ArrowProps> = ({ classNames }) => {
  return (
    <div
      className={`h-3.5 px-2.5 justify-start items-start gap-2.5 inline-flex ${classNames}`}
    />
  );
};

export default ArrowTooltip;
