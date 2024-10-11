import React, { useState } from 'react';
import Checkbox from '../atoms/Checkbox';

const CheckboxGroup: React.FC = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);

  return (
    <div className="flex xl:hidden flex-row gap-3 flex-wrap w-[300px]">
      <div className="flex gap-3">
        <Checkbox
          checked={checked1}
          onChange={(checked) => setChecked1(!checked)}
        />
        <span className="">한국어 능력</span>
      </div>

      <div className="flex gap-3">
        <Checkbox
          checked={checked2}
          onChange={(checked) => setChecked2(!checked)}
        />
        <span className="">업무 수행 능력</span>
      </div>

      <div className="flex gap-3">
        <Checkbox
          checked={checked3}
          onChange={(checked) => setChecked3(!checked)}
        />
        <span className="">겸업 여부</span>
      </div>

      <div className="flex gap-3">
        <Checkbox
          checked={checked4}
          onChange={(checked) => setChecked4(!checked)}
        />
        <span className="">평판 조회</span>
      </div>
    </div>
  );
};

export default CheckboxGroup;
