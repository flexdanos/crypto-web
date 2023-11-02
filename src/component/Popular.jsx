import React from "react";
import plus from "../assets/plus.png";
import down from "../assets/negative.png";
import { useSelector } from "react-redux";

const Popular = () => {
  const { socket } = useSelector((store) => store.websocket);
  const data = socket?.coins.slice(0, 10);

  return (
    <div className="p-[40px] pt-[32px] pb-[10px] shadow">
      <h1 className="text-[25px] mb-[41px]">Popular Assets</h1>
      {data &&
        data.map((item) => {
          return (
            <div
              key={item.uuid}
              className="flex justify-between items-center mb-[32px]"
            >
              <div className="font-normal flex-[2.93] text-[18.8799px] text-[#101828] flex   items-center">
                <img
                  src={item.iconUrl}
                  alt=""
                  className="object-fill w-[27.14px] h-[27.14px]"
                />
                <h1 className="text-[21.5px] ml-5">{item.name}</h1>
              </div>
              <div className="flex-[1.43] flex items-center text-[#32D583]">
                <img src={`${item.change > 0 ? plus : down}`} />
                <h2 
                  className={`text-[21.5px] ml-3 ${
                    item.change > 0 ? "text-[#32D583]" : "text-[red]"
                  }`}
                >
                  {item.change}%
                </h2>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Popular;
