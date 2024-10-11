import React, { useState } from 'react';

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked = false, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <div
      onClick={handleCheckboxChange}
      className={`w-5 h-5 flex items-center justify-center cursor-pointer border border-[#7F56D9] rounded-md ${
        isChecked ? 'bg-[#7F56D9]' : 'bg-[#F9F5FF]'
      }`}
      style={{
        width: '20px',
        height: '20px',
        borderRadius: '6px',
        borderWidth: '1px',
      }}
    >
      {isChecked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="9"
          viewBox="0 0 12 9"
          fill="none"
        >
          <path
            d="M10.6667 1L4.00001 8L1.33334 5.27273"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

export default Checkbox;
