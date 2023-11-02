import React from 'react'
import { NaviBar, ViewStat, Watchlist,ViewPopular } from "../component";
import { useParams,  } from "react-router-dom";

const viewStatistics = () => {
  const { id } = useParams();
  return (
    <>
    <NaviBar/>
    <div className="flex justify-between p-[45px]">
      <div className="w-[70%]  " >
<ViewStat id={id}/>
      </div>
      <div className="w-[26%]  flex flex-col">
        <Watchlist />
        <ViewPopular />
      </div>
    </div>
    </>
  )
}

export default viewStatistics