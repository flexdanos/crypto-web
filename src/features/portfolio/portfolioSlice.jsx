import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    storePortfolio: (state, { payload }) => {
      const existingItem = state.data.find((item) => item.uuid === payload.uuid);
      if (!existingItem) {
        state.data.unshift(payload);
      }else{
        alert("Item already in Watchlist")
      }
    },
    deletePortfolio: (state, { payload }) => {
      state.data = state.data.filter((item) => item.uuid !== payload);
    },
  },
});

export const { storePortfolio, deletePortfolio } = portfolioSlice.actions;
export default portfolioSlice.reducer;
