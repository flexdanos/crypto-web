import React, { useState } from "react";
import gha from "../assets/ghana.png";
import ger from "../assets/germany.png";
import rwa from "../assets/rwanda.png";
import Down from "../assets/chevron.svg";

const Select = () => {
  const [selected, setSelected] = useState(gha);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="">
      <div className="  h-[10px] w-[65px] " onClick={handleToggle}>
        {
          <button type="button" className="flex justify-center items-center">
            <img src={selected} alt="" className="w-8" />
            <img src={Down} alt="" className="" />
          </button>
        }
        {toggle && (
          <div className="mt-1">
            <div className="w-8" onClick={() => setSelected(gha)}>
              <img src={gha} alt="" />
            </div>
            <div className="w-8" onClick={() => setSelected(ger)}>
              <img src={ger} alt="" />
            </div>
            <div className="w-8" onClick={() => setSelected(rwa)}>
              <img src={rwa} alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
