import cryptoFecth from "../../utils/url";

export const getDataThunk = async (url, thunkAPI) => {
  try {
    const resp = await cryptoFecth.get(url);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
