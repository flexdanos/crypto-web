import React from 'react';
import SortA from "../assets/sort_a-z.png"
import SortZ from "../assets/sort_z-a.png"



function Filter({ visible, onClose, filter }) {
  if(!visible) return null

  const handleFilter = () => {
    onClose();
    filter();
  }
  
  return (
    <button onClick={handleFilter} className='bg-white w-[97px] h-[22px] rounded-[5.155px] shadow-[0px_0px_2.57px_1.28px_rgba(85,85,85,0.05)]
    absolute top-[230px] left-[90px]'>
      <div className='flex items-center justify-around'>
        <img src={SortA} alt="" />
        <img src={SortZ} alt="" />
      </div>
    </button>
  );
}

export default Filter;
