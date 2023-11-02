import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storeWatchList } from '../features/watchlist/watchlistSlice';


function AddWatchlist({ visible, onClose, item }) {
  if(!visible) return null
  const watchList = useSelector(store => store.watchList.data)
  const dispatch = useDispatch()
  
  const handleClick = () => {
    const findWatchList = watchList.filter((ele) => ele.uuid === item.uuid);
    if(findWatchList.length > 0) {
      alert("Item already in Watchlist")
      onClose()
    } else {
      dispatch(storeWatchList(item))
      onClose()
    }
  }
  
  return (
    <button onClick={handleClick} className='bg-white w-[118px] h-[28.58px] rounded-[7.375px] shadow-[0px_0px_3.6785px_1.84375px_rgba(85,85,85,0.05)]
    absolute top-[38px] right-[30px] text-[12px] leading-[15px] 2xl:right-[30px]'>
      Add to watchlist
    </button>
  );
}

export default AddWatchlist;