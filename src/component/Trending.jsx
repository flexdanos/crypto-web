import React, { useEffect } from "react";
import plus from "../assets/plus.png";
import down from "../assets/negative.png";
import { useSelector } from "react-redux";

const Trending = () => {
  const { socket } = useSelector((store) => store.websocket);
 
  const data = socket?.coins

  return (
    <div className="pl-[35px] pr-[67px] pt-[48px] pb-[10px] shadow overflow-y-auto h-[762px] scrollbar ">
      <div className="flex justify-between items-baseline mb-[22px]">
        <h1 className="text-[25px] mb-[10px]">Trending Market</h1>
      </div>
      <div className="flex justify-between mb-4">
        <h2 >Name</h2>
        <h2>Symbol</h2>
        <h2>Price</h2>
        <h2>24H Change</h2>
        <h2>Market Cap</h2>
      </div>
      <div className="border-b mb-4"></div>

      {data
        ? data.map((items) => {
            return (
              <div
                key={items.uuid}
                className="flex justify-between items-baseline mb-[30px] relative"
              >
                <div className="flex-[1.43] flex justify-between items-center">
                  <span className="font-normal text-[18.8799px] text-[#101828] flex gap-[15.34px]">
                    <img
                      src={items.iconUrl}
                      alt=""
                      className="w-[27.14px] h-[27.14px]"
                    />
                    <h1 className=" ">
                      {items.name.substring(0, 11)}
                    </h1>
                  </span>
                </div>
                <h2 className="flex-[1.23] text-left font-normal text-[18.8799px] text-[#101828 ">
                  {items.symbol}
                </h2>
                <h2 className="flex-[1.3] font-normal text-[18.8799px] text-[#101828]">
                  ${Number(items.price).toFixed(2)}
                </h2>
                <div className="flex-[1.63] font-normal text-[18.8799px]  flex   items-center ">
                  <img src={`${items.change > 0 ? plus : down}`} alt="" />
                  <h2
                    className={`ml-3 ${
                      items.change > 0 ? "text-[#32D583]" : "text-[red]"
                    }`}
                  >
                    {items.change}%
                  </h2>
                </div>
                <h2 className="flex-[0.223]">${items.marketCap.slice(0, 7)}M</h2>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default Trending;