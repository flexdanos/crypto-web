import React, { useState,useRef,useEffect } from "react";
import Img1 from "../assets/logo crypto.svg";
import avat from "../assets/avat.png";
import Down from '../assets/downn.png';
import Up from '../assets/uppp.png';
import { NavLink,Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { logoutUser } from "../features/user/userSlice";
import Loader from "./Loader";


function NaviBar() {
  const { user } = useSelector((state) => state.user);

  const [toggleMenu, setToggleMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const toggleFunc = () => {
    setToggleMenu(!toggleMenu);
  };

  let menuRef = useRef()
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setToggleMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () =>{
      document.removeEventListener("mousedown", handler)
    }
  })

  const clearUser = () =>{
    setLoading(true)
    setTimeout(() => {
      dispatch(logoutUser())
    }, 2500);
  }


  return (
    <>
      <nav className="w-full h-[77px]  flex items-center justify-between border-b pr-[100px] pl-[47px]">
        <div className=" h-[46px] flex justify-center items-center">
          <Link to={"/dashboard"} >
          <img src={Img1} alt="" />
          </Link>
        </div>
        <ul className="flex justify-between  w-[353px] items-center text-[14.8px] font-normal text-[#101828]">
          <NavLink to={"/dashboard"} id="nav-links">
            Home
          </NavLink>
          <NavLink to={"/view-crypto"} id="nav-links">
            Portfolio
          </NavLink>
          <NavLink to={"/active-crypto"} id="nav-links">
            Markets
          </NavLink>
          <NavLink to={"/watchlist"} id="nav-links">
            Watchlist
          </NavLink>
          <NavLink to={"/developers"} id="nav-links">
            Developers
          </NavLink>
        </ul>
        <div className=" h-[36px] flex   ">
          <div className="flex justify-between w-[12rem] px-[10px] items-center " ref={menuRef}>
            {<img src={`${user.image ? user.image: avat}`} alt="" className=" h-[40px] w-[40px] rounded-full" />}
            <div className=" text-[11px] font-semibold ">{user.firstName} {user.lastName}</div>
            <img
              src={` ${toggleMenu ? Up : Down}`}
              alt=""
              className="ursor-pointer "
              onClick={toggleFunc}
            />
           
            {toggleMenu && <div>


        <div className='absolute right-[19%] top-[16%] z-50'>
    {loading && <Loader/>}
        </div>
    </div>
    }
          </div>
        <div className='w-[240px]  h-[80px] border border-[1px solid #F2F4F7] bg-transparent shadow absolute right-[2%] top-[10%] z-50'>
           <NavLink to="/" id="settings">

           <div className='border-b h-[40px] py-[10px] px-[12px] hover:bg-[#F2F4F7]'>Account Settings</div>
           </NavLink>
           <div className='border-b h-[40px] py-[10px] px-[12px] hover:bg-[#F2F4F7] cursor-pointer' onClick={clearUser} >Logout</div>
        </div>
        </div>
      </nav>
    </>
  );
}

export default NaviBar;
