import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
  };


  const assetSlice = createSlice({
    name: "asset",
    initialState,
    reducers: {
      storeAsset: (state,{payload})=>{
        state.data.unshift(payload);
      }
    },
})


export const { storeAsset } = assetSlice.actions;
export default assetSlice.reducer;