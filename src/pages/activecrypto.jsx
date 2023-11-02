import React, { useState, useEffect } from "react";
import {
  NaviBar,
  Assetmodal,
  Filter,
  Cryptolist,
  FilterPercent,
} from "../component";

import Name from "../assets/name.png";
import { useSelector } from "react-redux";

function ActiveCrypto() {
  const [showModal, setShowModal] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showFilterPercent, setShowFilterPercent] = useState(false);
  const [addCrypto, setAddCrypto] = useState(false);
  const [filterOrder, setFilterOrder] = useState("ASC");
  const [filterPercent, setFilterPercent] = useState("ASC");

  const [allData, setAllData] = useState([]);

  const { socket } = useSelector((store) => store.websocket);
  const all = socket?.coins;

  const sortAlphabetically = () => {
    const modall = [...all];
    const sortAll = modall?.sort((a, b) => {
      if (a.name > b.name) return filterOrder === "ASC" ? 1 : -1;
      else if (a.name < b.name) return filterOrder === "ASC" ? -1 : 1;
      return 0;
    });

    setFilterOrder(filterOrder === "ASC" ? "DESC" : "ASC");
    setAllData(sortAll);
  };

  const sortPercent = () => {
    const perall = [...(all || [])];
    const sortedAll = perall?.sort((a, b) => {
      if (a.change > b.change) return filterPercent === "ASC" ? 1 : -1;
      else if (a.change < b.change) return filterPercent === "ASC" ? -1 : 1;
      return 0;
    });

    setFilterPercent(filterPercent === "ASC" ? "DESC" : "ASC");
    setAllData(sortedAll);
  };

  useEffect(() => {
    setAllData(all);
  }, [all]);

  const closeModal = () => setShowModal(false);
  const closeFilter = () => setShowFilter(false);
  const closeFilterPercent = () => setShowFilterPercent(false);

  return (
    <div>
      <NaviBar />
      <div className="container mx-auto mt-[30px] mb-[36.56px] shadow-sm">
        <div className="h-[76.2px] pl-[41.3px] pr-[46.55px] flex justify-between items-center">
          <span className="font-normal text-[29.4999px] text-[#101828] leading-9 ">
            Market
          </span>
          <button
            onClick={() => setShowModal(true)}
            className="w-[118.77px] h-[44.54px] bg-[rgba(12,76,49,0.81)] rounded-[4.68106px] text-white font-sans font-normal hover:opacity-90"
          >
            Add Assets
          </button>
        </div>
        <div className="h-[45px] mt-[10px] pl-[24.8px] pr-[46.55px] pt-[11.8px] border-b-[0.235999px]">
          <ul className="flex justify-between font-normal text-[18.8799px] text-[#101828] leading-[23px]">
            <li className="flex items-center gap-1">
              Name
              <span onClick={() => setShowFilter(true)}>
                <img
                  src={Name}
                  alt=""
                  className="w-3 h-2.5 hover:cursor-pointer"
                />
              </span>
            </li>
            <li>Symbol</li>
            <li>Price</li>
            <li className="flex items-center gap-1">
              24H Change
              <span onClick={() => setShowFilterPercent(true)}>
                <img
                  src={Name}
                  alt=""
                  className="w-3 h-2.5 hover:cursor-pointer"
                />
              </span>
            </li>
            <li>Listed At</li>
            <li>Market Cap</li>
          </ul>
        </div>
        <Cryptolist
          visible={addCrypto}
          allData={allData}
          setAllData={setAllData}
        />
      </div>
      <Filter
        visible={showFilter}
        onClose={closeFilter}
        filter={sortAlphabetically}
      />
      <FilterPercent
        visible={showFilterPercent}
        onClose={closeFilterPercent}
        filter={sortPercent}
      />
      <Assetmodal visible={showModal} onClose={closeModal} />
    </div>
  );
}

export default ActiveCrypto;
