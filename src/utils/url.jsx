import axios from "axios";

export const cryptoFecth = axios.create({
  baseURL: `https://api.coinranking.com/v2`,
});

export default cryptoFecth;
