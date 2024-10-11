import React, { ReactNode } from 'react';

interface LabelProps {
  text: string | ReactNode;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

export default Label;
