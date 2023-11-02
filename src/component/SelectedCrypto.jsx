import React, { useState } from "react";
import graph from "../assets/graph.png";
import redgraph from "../assets/redgraph.png";
import yahoo from "../assets/logos_yahoo.svg";
import del from "../assets/del.png";
import { useSelector } from "react-redux";
import { CryptoGraphs, CryptoInfo } from ".";
import { useDispatch } from "react-redux";
import { deleteWatchList } from "../features/watchlist/watchlistSlice";


const SelectedCrypto = ({ id }) => {
  const [toggle, setToggle] = useState(false);
  const { data } = useSelector((store) => store.watchList);
  const [selectedItem, setSelecteditem] = useState({});
  const dispatch = useDispatch();
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSelectedCoin = (coin) => {
    setSelecteditem(coin);
  };

  const handleDelete = (id) => {
    dispatch(deleteWatchList(id));
  };

  return (
    <div className="height w-[100%] pt-[16px]  pr-[59px] font-normal border-r-2 flex justify-between">
      <div className="  w-[25%] flex flex-col justify-between">
        <div className="pl-[44px]">
          <h1 className="mb-[18px] text-[22px] ">Business News</h1>
          <p className="text-[#7C7D7D] mb-[80px] ">From Yahoo Finance</p>
          <button
            className="bg-[#E4E7EC] w-[67px] h-[34px] rounded-xl mb-[34px]"
            onClick={handleToggle}
          >
            Edit
          </button>
          <div className="h-[320px] overflow-y-auto scrollbar">
            {data.map((item, index) => {
              return (
                <div key={index}>
                  <div className="flex justify-center items-center ">
                    <div
                      className="cursor-pointer "
                      onClick={() => {
                        handleDelete(item.uuid);
                      }}
                    >
                      <img
                        className={`mr-5 mb-6  ${
                          toggle ? "visible" : "hidden"
                        }`}
                        src={del}
                        alt=""
                      />
                    </div>
                    <div
                      className="flex justify-between items-center w-full mb-3 cursor-pointer"
                      onClick={() => {
                        handleSelectedCoin(item);
                      }}
                    >
                      <div className="h-[35px] ">
                        <h1>{item.name}</h1>
                        <p className="text-[#7C7D7D] text-[12px]">
                          {item.symbol}
                        </p>
                      </div>
                      <img
                        src={`${item.change > 0 ? graph : redgraph}`}
                        alt=""
                      />
                      <div className="">
                        <h1>${item.price}</h1>
                        <p
                          className={` w-[67px] h-[34px] rounded-xl  text-[12px] flex justify-center items-center ${
                            item.change > 0 ? "bg-[#32D583]" : "bg-[#F04438]"
                          }`}
                        >
                          {item.change}%
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="border mb-3"> </div>
                </div>
              );
            })}
          </div>
        <div className="bg-[#E4E7EC] fixed bottom-0 left-0 w-[23.5%]   h-[59px] flex justify-evenly items-center ">
          <div className="flex">
            <img src={yahoo} alt="" />
            <span className="font-bold">finance</span>
          </div>
          <h1>Real Time Price</h1>
        </div>
        </div>
      </div>
      <div className="w-[70%]  pr-5">
        <CryptoGraphs item={selectedItem} uuid={id} />
        <CryptoInfo />
      </div>
    </div>
  );
};

export default SelectedCrypto;
