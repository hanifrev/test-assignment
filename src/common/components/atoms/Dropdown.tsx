import React from 'react';

interface DropdownItem {
  label: string;
  value?: string | number;
  onClick?: () => void;
}

interface DropdownProps {
  items: DropdownItem[];
}

export const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  return (
    <div className="h-auto bg-white rounded-lg shadow border border-[#f2f3f6] flex-col justify-start items-start inline-flex absolute transform translate-y-28">
      {items.map((item, index) => (
        <div
          key={index}
          className="px-4 py-[10px] hover:bg-gray-100 cursor-pointer w-full font-medium text-sm text-black"
          onClick={item.onClick}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};
