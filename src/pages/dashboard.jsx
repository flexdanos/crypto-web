import React from "react";
import {
  NaviBar,
  Popular,
  Statistics,
  Trending,
  Watchlist,
} from "../component";

const dashboard = () => {
  return (
    <>
      <NaviBar />
      <div className="flex justify-between p-[45px]">
        <div className="w-[70%]  flex flex-col">
          <Statistics />
          <Trending />
        </div>
        <div className="w-[26%]  flex flex-col">
          <Watchlist />
          <Popular />
        </div>
      </div>
    </>
  );
};

export default dashboard;
