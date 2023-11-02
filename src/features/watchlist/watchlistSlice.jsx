import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const watchListSlice = createSlice({
  name: "watchList",
  initialState,
  reducers: {
    storeWatchList: (state, { payload }) => {
      state.data.unshift(payload);
    },
    deleteWatchList: (state, { payload }) => {
      state.data = state.data.filter((item) => item.uuid !== payload);
    },
  },
});

export const { storeWatchList, deleteWatchList } = watchListSlice.actions;
export default watchListSlice.reducer;
