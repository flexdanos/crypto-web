import React, { useEffect, useState } from "react";
import AreaChartComponent from "./AreaCharrt";
import axios from "axios";
import { ViewStatInfo } from ".";

const ViewStat = ({ id }) => {
  const coin = id?.toLowerCase();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [rate, setRate] = useState();
  const [price, setPrice] = useState();
  const [name, setName] = useState();
  const [img, setImg] = useState();
  const [symbol, setSymbol] = useState();

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get(
        `https://api.coinranking.com/v2/coins?search=${coin}`
      );
      const data = response.data.data.coins[0].sparkline.slice(0, 12);
      if (data) {
        setLoading(false);
      } else {
        setLoading(true);
      }
      setRate(response.data.data.coins[0].change);
      setPrice(response.data.data.coins[0].price);
      setName(response.data.data.coins[0].name);
      setImg(response.data.data.coins[0].iconUrl);
      setSymbol(response.data.data.coins[0].symbol);
      setData(
        data.map((items, index) => {
          return { hr: index * 2, price: parseFloat(items) };
        })
      );
    };
    fetchdata();
  }, [id]);

  if (loading) {
    return (
      <div className="text-[40px] font-bold text-center mb-[69px] text-[#0C3C4C]      ">
        Loading...
      </div>
    );
  }

  return (
    <div className=" flex flex-col">

    <div className="pl-[36px] pr-[51px] pt-[13px] pb-[10px] mb-[69px] shadow">
      <div className=" flex  items-center mb-[10px]">
        <img className="w-9" src={img} alt="" />
        <h1 className="text-[25px] ml-8">{name}</h1>
      </div>
      <div className="flex justify-between mb-4">
        <div className="flex items-baseline">
          <h2 className="text-[21px]">{name}</h2>
          <p className="ml-8">{symbol}/USD</p>
        </div>
        <div className="flex  w-[220px] justify-between items-center ">
          <h2 className="text-[21px]">US${Number(price).toFixed(2)}</h2>
          <p className="text-[red]">{rate}%</p>
        </div>
      </div>
      <div className="border-b mb-10"></div>
      <AreaChartComponent data={data} />
    </div>
<ViewStatInfo name={name} />
    </div>
  );
};

export default ViewStat;
