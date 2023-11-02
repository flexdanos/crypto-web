import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const developers = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center text-center text-[22px]  h-[400px] shadow w-[600px]">
        <h1>
          Hello <span className="font-bold uppercase">{user.firstName}</span>
        </h1>
        <p className="mb-6">This page is currently unvailable</p>
        <Link to={"/dashboard"}>
          <button className="h-[40px] w-[180px] p rounded-lg bg-[#0C3C4C] hover:opacity-90 text-white">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default developers;
