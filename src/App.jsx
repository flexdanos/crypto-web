import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Error,
  ProfilePage,
  SignUp,
  Login,
  Landingpage,
  ProtectedRoute,
  Password,
  ActiveCrypto,
  Dashboard,
  Viewcrypto,
  Modal,
  WatchList,
  ViewStatistics,Developers
} from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import PrivateRoutes from "./utils/PrivateRoute"
import { getData } from "./features/crypto/cryptoSlice";
import { connectSocket, setSocket } from "./features/webSocketSlice";


const App = () => {
  
// const dispatch = useDispatch()
//   useEffect(()=>{
//   dispatch(getData())
//   },[dispatch])

 const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connectSocket());
  }, [dispatch]);


  return (
    <BrowserRouter>
       <Routes>

      <Route element={<PrivateRoutes />}>
        
        <Route element={<ProfilePage />} path="/" exact />
        <Route element={<Password />} path="/password" exact />
        <Route element={<Dashboard />} path="/dashboard" exact />
        <Route element={<ActiveCrypto />} path="/active-crypto" exact />
        <Route element={<Viewcrypto />} path="/view-crypto" exact />
        <Route element={<WatchList />} path="/watchlist/:id?" exact />
        <Route element={<ViewStatistics />} path="/view-stats/:id?" exact />
        <Route element={<Developers />} path="/developers" exact />
      </Route>
      <Route element={<Landingpage />} path="/landing" />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <ToastContainer position="top-center" />
    </BrowserRouter>
  );
};

export default App;
