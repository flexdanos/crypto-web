import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Watchlist = () => {
  const { data } = useSelector((store) => store.watchList);

  return (
    <>
      <div className="p-[40px] pt-[10px] mb-[67px]  shadow overflow-y-auto h-[560px] cursor-pointer scrollbar">
        <h1 className="text-[25px] mb-[24px]">Watchlist</h1>
        {data.map((item, index) => {
          return (
            <Link key={index} to={`/watchlist/${item.uuid}`}>
              <div className="flex justify-between items-center mb-[32px]">
                <div className="flex flex-wrap justify-between items-center">
                  <img src={item.iconUrl} alt="" className="w-9" />
                  <h1 className="pl-3">{item.name.substring(0, 15)}</h1>
                </div>
                <h1>${item.price}</h1>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Watchlist;
