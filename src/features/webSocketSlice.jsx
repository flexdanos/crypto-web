import { createSlice } from "@reduxjs/toolkit";

const webSocket = import.meta.env.VITE_WS_URL;

const websocketSlice = createSlice({
  name: "websocket",
  initialState: {
    url: webSocket,
    socket: null,
  },
  reducers: {
    setSocket: (state, { payload }) => {
      state.socket = payload;
    },
  },
});

export const { setSocket } = websocketSlice.actions;

export const connectSocket = () => async (dispatch, getState) => {
  const { url } = getState().websocket
  const socket = new WebSocket(url);

  socket.onopen = () => {
    console.log("WebSocket connection opened");
    // Send a message to the WebSocket server
    socket.send("");
  };
  socket.onerror = (error) => {
    console.error("WebSocket error:", error);
  };
  

  socket.onmessage = (event) => {
    const message = event.data;
    if (message !== "something") {
      const coinData = JSON.parse(message).data;
      dispatch(setSocket(coinData));
    }
  };

  socket.onclose = () => {
    console.log("WebSocket connection closed");
  };
};

export default websocketSlice.reducer;
