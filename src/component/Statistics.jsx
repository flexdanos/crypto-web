// Statistics.js

import React, { useEffect, useRef, useState } from "react";
import AreaChartComponent from "./AreaCharrt";
import Loader from "./Loader";

const Statistics = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [rate, setRate] = useState();
  const [price, setPrice] = useState();
  const socketRef = useRef(null); // Use a ref to store the WebSocket connection

  useEffect(() => {
    // Create WebSocket connection
    const ws = new WebSocket("ws://localhost:4000");
    // Store the WebSocket connection in ref
    socketRef.current = ws;
    // Clean up the WebSocket connection on unmount
    // return () => {
    //   ws.close();
    // };
  }, []);

  useEffect(() => {
    // Event handler for receiving messages
    const handleReceiveMessage = (event) => {
      const message = event.data;
      if (message !== "something") {
        const coinData = JSON.parse(message).data.coins[0];
        const data = coinData.sparkline.slice(0, 12).map((value, index) => ({
          hr: index, // Or any appropriate value for the x-axis
          price: value,
        }));
        setCoins(data);
        setRate(coinData.change);
        setPrice(coinData.price);
        setLoading(false);
      }
    };

    if (socketRef.current) {
      // Attach the event handler to the WebSocket connection
      socketRef.current.addEventListener("message", handleReceiveMessage);
    }

    // Clean up the event handler on unmount
    return () => {
      if (socketRef.current) {
        socketRef.current.removeEventListener("message", handleReceiveMessage);
      }
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      sendMessage();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const sendMessage = () => {
    if (socketRef.current) {
      // Send a message to the server
      socketRef.current.send("getCoin");
    }
  };

  useEffect(() => {
    if (!loading) {
      sendMessage();
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="text-[40px] font-bold text-center mb-[69px] text-[#0C3C4C]">
        <Loader />
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
      <AreaChartComponent data={coins} />
    </div>
  );
};

export default Statistics;
