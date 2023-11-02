import React from "react";
import del from "../assets/delete.png";
import Up from "../assets/uparrow.png";
import Down from "../assets/redarrow.png";
import { useDispatch, useSelector } from "react-redux";
import { deletePortfolio } from "../features/portfolio/portfolioSlice";

const Viewarea = () => {
  const portfolio = useSelector((store) => store.portfolio.data);

  const dispatch = useDispatch();

  const deleteCrypto = (id) => {
    dispatch(deletePortfolio(id));
  };
  return (
    <div className="">
      <div className="container mx-auto h-[231px] bg-[#e4e7ec] shadow  rounded overflow-y-auto scrollbar">
        {portfolio &&
          portfolio?.map((item) => {
            return (
              <div key={item.uuid} className="ml-4 relative">
                <div className="flex pt-4 items-center relative">
                  <div className="flex gap-[15.34px]">
                    <img
                      src={item.iconUrl}
                      alt=""
                      className="w-[27.14px] h-[27.14px] "
                    />
                    <span>{item.name}</span>
                  </div>
                  <div className="absolute left-[210px] 2xl:left-[260px]">
                    {item.symbol}
                  </div>
                  <div className=" absolute left-[390px] 2xl:left-[500px]">
                    ${Number(item.price).toFixed(2)}
                  </div>
                  <div>
                    <img
                      src={item.change > 0 ? Up : Down}
                      alt=""
                      className="absolute left-[610px] top-3 2xl:left-[760px] w-[16.52px] h-[16.52px]"
                    />
                    <span
                      className={`absolute left-[635px] top-2 2xl:left-[790px] font-normal text-[18.8799px] text-[#32D583] flex gap-[12.98px]
                ${item.change > 0 ? "text-[#32D583]" : "text-red-600"}`}
                    >
                      {item.change}%
                    </span>
                  </div>
                  <div className="absolute right-[275px] 2xl:right-[320px]">
                    {item.listedAt}
                  </div>
                  <div className="absolute right-[55px] ">
                    {item.marketCap.slice(0, 7)}M
                  </div>
                </div>
                <div className="" onClick={() => deleteCrypto(item.uuid)}>
                  <img
                    src={del}
                    alt=""
                    className="absolute right-0 top-5 cursor-pointer "
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Viewarea;
