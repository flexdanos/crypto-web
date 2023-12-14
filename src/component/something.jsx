import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import AreaChartComponent from "./AreaCharrt";
import Loader from "./Loader";

const Statistics = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [rate, setRate] = useState();
  const [price, setPrice] = useState();
  const [socket, setSocket] = useState(null);

  const BASE_WSS = import.meta.env.VITE_WSS_ENV;

  useEffect(() => {
    // Create WebSocket connection
    const ws = new WebSocket(BASE_WSS);

    // Store the WebSocket connection in state
    setSocket(ws);

    // Clean up the WebSocket connection on unmount
    return () => {
      ws.close();
    };
  }, []);

  useEffect(() => {
    // Event handler for receiving messages
    const handleReceiveMessage = (event) => {
      const message = event.data;
      if (message !== "something") {
        const data = JSON.parse(event.data).data.coins[0].sparkline.slice(
          0,
          12
        );
        setCoins(data)
        setRate(JSON.parse(event.data).data.coins[0].change);
        setPrice(JSON.parse(event.data).data.coins[0].price);
      }
    };
console.log(coins);
    if (socket) {
      socket.addEventListener("message", handleReceiveMessage);
    }
    return () => {
      if (socket) {
        socket.removeEventListener("message", handleReceiveMessage);
      }
    };
  }, [socket]);

  const sendMessage = () => {
    if (socket) {
      socket.send("getCoin");
    }
  };

  if (loading) {
    return (
      <div className="text-[40px] font-bold text-center mb-[69px] text-[#0C3C4C]      ">
        <Loader />
        <button onClick={sendMessage}>Send Message</button>
      </div>
    );
  }

  return (
    <div className="pl-[36px] pr-[51px] pt-[13px] pb-[10px] mb-[69px] shadow">
      <h1 className="text-[25px] mb-[10px]">Statistics</h1>
      <div className="flex justify-between mb-4">
        <div className="flex w-[170px] justify-between items-baseline">
          <h2 className="text-[21px]">Bitcoin</h2>
          <p>BTC/USD</p>
        </div>
        <div className="flex  w-[220px] justify-between items-center">
          <h2 className="text-[21px]">US${Number(price).toFixed(2)}</h2>
          <p className={`${rate > 0 ? "text-[#32D583]" : "text-[red]"}`}>
            {rate}%
          </p>
        </div>
      </div>
      <div className="border-b mb-10"></div>
      <AreaChartComponent
      // data={data}
      />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default Statistics;
