import React, { useState } from "react";
    import useWebSocket from "react-use-websocket";

const WebSocketCat = () => {
    
      const [messages, setMessages] = useState([]);
      const [connected, setConnected] = useState(false);
      const socket = useWebSocket("wss://ws.coinapi.io/v1/coins?apikey=17568AF1-17D0-427C-8716-9A68C861236F");
      socket.onopen = () => {
        setConnected(true);
      };
      socket.onmessage = (event) => {
        setMessages([...messages, event.data]);
      };
      console.log(messages);
      return (
        <div>
          <h1>WebSocket Demo</h1>
          {connected ? (
            <ul>
              {messages.map((message, index) => (
                <li key={index}>{message}</li>
              ))}
            </ul>
          ) : (
            <p>Not connected</p>
          )}
          <input
            type="text"
            placeholder="Enter message"
            onChange={(event) => {
              socket.send(event.target.value);
            }}
          />
        </div>
      );
    };
    

export default WebSocketCat;


// url="wss://ws.coinapi.io/v1/?apikey=17568AF1-17D0-427C-8716-9A68C861236F"