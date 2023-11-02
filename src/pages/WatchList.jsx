import React from "react";
import {NaviBar, SelectedCrypto } from "../component";
import { useLocation, useParams } from 'react-router-dom'

const WatchList = () => {
 
  const {id} =useParams()
  return (
    <div>
      <NaviBar />
      <div className="">
        <SelectedCrypto id={id} />
       
      </div>
    </div>
  );
};

export default WatchList;
