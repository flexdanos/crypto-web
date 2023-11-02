import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
Navigate;

const PrivateRoutes = () => {
  const { user } = useSelector((store) => store.user);

  return user ? <Outlet /> : <Navigate to="landing" />;
};

export default PrivateRoutes;
