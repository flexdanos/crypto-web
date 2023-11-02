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

  // const fetchdata = async () => {
  //   const response = await axios.get(
  //     "https://api.coinranking.com/v2/coins?limit=10"
  //   );

  //   const data = response.data.data.coins[0].sparkline.slice(0, 12);

  //   if (data) {
  //     setLoading(false);
  //   } else {
  //     setLoading(true);
  //   }
  // setRate(response.data.data.coins[0].change);
  // setPrice(response.data.data.coins[0].price);
  // setData(
  //   data.map((items, index) => {
  //     return { hr: index * 2, price: parseFloat(items) };
  //   })
  // );
  // };

  // useEffect(() => {
  //   fetchdata();

  //   setInterval(() => fetchdata(), 120000);

  // }, []);

  useEffect(() => {
    // Create WebSocket connection
    const ws = new WebSocket("ws://localhost:4000");

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
        // console.log(data);
        setCoins(data)
        // setCoins(
        //   data.map((items, index) => {
        //     return { hr: index * 2, price: parseFloat(items) };
        //   })
        // );
        setRate(JSON.parse(event.data).data.coins[0].change);
        setPrice(JSON.parse(event.data).data.coins[0].price);
      }
      // Process the message as needed
    };
console.log(coins);
    // Attach the event handler to the WebSocket connection
    if (socket) {
      socket.addEventListener("message", handleReceiveMessage);
    }

    // Clean up the event handler on unmount
    return () => {
      if (socket) {
        socket.removeEventListener("message", handleReceiveMessage);
      }
    };
  }, [socket]);

  const sendMessage = () => {
    if (socket) {
      // Send a message to the server
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
