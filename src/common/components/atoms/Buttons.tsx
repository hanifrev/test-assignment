import React from 'react';

interface btn {
  text: string;
}

const Buttons: React.FC<btn> = ({ text }) => {
  return (
    <div className="w-[107px] h-9 bg-white px-6 py-[6px] text-[#4A77FF] text-base text-center font-bold rounded-lg cursor-pointer hover:bg-slate-200 focus:bg-slate-500">
      {text}
    </div>
  );
};

export default Buttons;
