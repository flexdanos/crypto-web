import React from 'react';
import Asc from "../assets/asc.png"
import Desc from "../assets/desc.png"



function FilterPercent({ visible, onClose, filter }) {
  if(!visible) return null

  const handleFilterPercent = () => {
    onClose();
    filter();
  }
  
  return (
    <button onClick={handleFilterPercent} className='bg-white w-[97px] h-[58px] rounded-[5.155px] shadow-[0px_0px_2.57px_1.28px_rgba(85,85,85,0.05)]
    absolute top-[230px] right-[540px]'>
      <div>
        <span className='font-medium text-[8.5px] text-[#101828] leading-[10px] flex justify-evenly items-center'>
          <img src={Asc} alt="" />
          Sort Ascending
        </span>
        <span className='font-medium text-[8.5px] text-[#101828] leading-[10px] flex justify-evenly items-center pt-2'>
        <img src={Desc} alt="" />
          Sort Descending
        </span>
      </div>
    </button>
  );
}

export default FilterPercent;
