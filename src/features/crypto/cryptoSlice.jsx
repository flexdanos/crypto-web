import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDataThunk } from "./cryptoThunk";

const initialState = {
  isLoading: false,
  data: [],
};

export const getData = createAsyncThunk("user/getData", async (thunkAPI) => {
  return await getDataThunk("/coins", thunkAPI);
});

const cryptoSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload;
      })
      .addCase(getData.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {} = cryptoSlice.actions;
export default cryptoSlice.reducer;
