import React, { useState } from "react";
import { NaviBar, Select } from "../component";
import Epi from "../assets/edit picture.svg";
import Home from "../assets/home vector.svg";
import Che from "../assets/chevron 1.svg";
import Psi from "../assets/Vector.svg";
import avat from "../assets/avat.png";
import Plok from "../assets/lock vector.svg";
import { useFormik } from "formik";
import { basicSchema } from "../schema";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { storeUser, updateUserProfile } from "../features/user/userSlice";
import axios from "axios";

const profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const onSubmit = (values, actions) => {
    dispatch(updateUserProfile(values));
    dispatch(storeUser(values));
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    setFieldValue,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      gender: user.gender,
      email: user.email,
      image: user.image,
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  const [imageSelected, setImageSelected] = useState("");
  const [images, setImages] = useState("");

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "x3pud7wu");

    axios
      .post("https://api.cloudinary.com/v1_1/dwhufzqgk/image/upload", formData)
      .then((response) => {
        setFieldValue("image", response.data?.secure_url);
        setImages(response.data?.secure_url);
      });
  };

  const handleImageChange = (e) => {
    setImageSelected(e.target.files[0]);
    uploadImage(e.target.files[0]);
  };

  return (
    <div className="w-full ">
      <NaviBar />
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="ml-[43px] ">
          <div className="mt-2 flex items-center justify-center w-[261px] h-[30px]">
            <Link to={"/dashboard"} className="mr-[25px]">
              <img src={Home} alt="" className="w-[16px] h-[18px] " />
            </Link>
            <div className="mr-[12px]">
              <img src={Che} alt="" className="w-[7px] h-[12px]" />
            </div>
            <h6 className=" w-[200px] h-[30px] text-[25px] font-normal flex justify-center items-center">
              Account settings
            </h6>
          </div>

          <div className="flex mt-[36px] ">
            <div className="w-[268px] h-[153px] bg-[rgba(255,255,255,0.05)] shadow   ">
              <div className="flex flex-col">
                <NavLink
                  id="settings"
                  to="/"
                  className="py-[0.5rem] mt-[20px] "
                >
                  <div className="flex items-center w-[268px] pl-8">
                    <span className=" flex justify-center items-center w-[17px] h-[17px] border border-[#000000] rounded-full mr-8">
                      <img src={Psi} alt="" />
                    </span>
                    Profile Settings
                  </div>
                </NavLink>
                <NavLink
                  id="settings"
                  to="/password"
                  className="mt-[20px] py-[0.5rem]"
                >
                  <div className=" flex items-center pl-8">
                    <span className=" flex justify-center items-center w-[17px] h-[17px]  mr-8">
                      <img src={Plok} alt="" />
                    </span>
                    Password
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="ml-[71px] w-[969px] h-fit  bg-[rgba(255,255,255,0.05)] shadow">
              <div className="ml-[49px] mt-[32px]">
                <div className="w-[525px] h-[127px] flex justify-between items-center">
                  <div className=" w-[127px] h-[127px] rounded-full relative">
                    <div className=" w-[127px] h-[127px] rounded-full relative overflow-hidden  bg-no-repeat bg-cover">
                      <img
                        src={`${user.image ? user.image : images || avat}`}
                        alt=""
                        className="w-[127px] h-[127px]"
                      />
                    </div>
                    <label
                      htmlFor="image"
                      className="absolute flex justify-center align-middle right-[8px] bottom-[10px] w-6 h-6 bg-white rounded-full cursor-pointer"
                    >
                      <img src={Epi} alt="" className="w-4" />
                    </label>
                    <input
                      className="w-[95px] h-[39px] bg-transparent mt-2 border border-none hidden"
                      type="file"
                      name="image"
                      id="image"
                      onBlur={handleBlur}
                      onChange={handleImageChange}
                    />
                  </div>
                  <div className="flex flex-row items-start  gap-10">
                    <div className="w-[141px] h-[39px] bg-[#0C3C4C] ml-[90px] flex justify-center rounded">
                      <button
                        type="button"
                        className="text-[#FFFFFF] text-base font-normal text-center"
                        onClick={uploadImage}
                      >
                        Upload New
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-row items-start  gap-10">
                    <div className="w-[149px] h-[39px] bg-[#E4E7EC] flex justify-center rounded">
                      <button className="text-[#101828] text-base font-normal text-center">
                        Delete avatar
                      </button>
                    </div>
                  </div>
                </div>
                <input
                  className="w-[95px] h-[39px] bg-red-600 mt-16 hidden "
                  type="text"
                  value={values.image}
                  name="image"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {/* fields */}
                <div className="mt-[54px]">
                  <div className="flex ">
                    <div className="flex flex-col ">
                      <label className=" text-[#000000] font-normal text-base ml-[10px]">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        className={`border w-[360px] h-[44px] mt-[18px] mb-[5px] mr-[37px] pl-[15px] rounded ${
                          errors.firstName && touched.firstName
                            ? "border-[red]"
                            : "border-[#53352d80]"
                        }`}
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.firstName && touched.firstName && (
                        <p className="text-[red] mb-4">{errors.firstName}</p>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label className="ml-[10px]">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        className={`border w-[360px] h-[44px] mt-[18px] mb-[5px] mr-[37px] pl-[15px] rounded ${
                          errors.lastName && touched.lastName
                            ? "border-[red]"
                            : "border-[#53352d80]"
                        }`}
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.lastName && touched.lastName && (
                        <p className="text-[red] mb-4">{errors.lastName}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* secondinputfields */}

                <div className="">
                  <div className="flex ">
                    <div className="flex flex-col">
                      <label className="ml-[10px] mt-[49px]">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="examples@gmail.com"
                        className={`border w-[360px] h-[44px] mt-[18px] mb-[5px] mr-[37px] pl-[15px] rounded ${
                          errors.email && touched.email
                            ? "border-[red]"
                            : "border-[#53352d80]"
                        }`}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.email && touched.email && (
                        <p className="text-[red]">{errors.email}</p>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <div className="mt-[49px] ">
                        <label className="ml-[10px] ">Mobile Number</label>
                        <div
                          className={` flex  rounded pl-[10px] ${
                            errors.phoneNumber && touched.phoneNumber
                              ? "border-[red]"
                              : "border-[#53352d80]"
                          }`}
                        >
                          <div className="flex justify-center items-center">
                            <Select />

                            <input
                              type="number"
                              name="phoneNumber"
                              placeholder="5987569870"
                              className={` flex w-[285px] h-[46px] border mt-[18px] rounded pl-[10px] ${
                                errors.phoneNumber && touched.phoneNumber
                                  ? "border-[red]"
                                  : "border-[#53352d80]"
                              }`}
                              value={values.phoneNumber}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </div>
                        </div>
                        {errors.phoneNumber && touched.phoneNumber && (
                          <p className="text-[red] ml-[70px]">
                            {errors.phoneNumber}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-[43px]">
                  <label className="pb-[26px]">Gender</label>
                  <div className="flex pt-[26px]">
                    <div className="flex flex-row ">
                      <div className="flex justify-between items-center pl-[16px] pr-[60px] w-[154px] h-[64px] border rounded mr-[19px]">
                        <input
                          type="radio"
                          className={`w-[22px] h-[22px] ${
                            errors.gender && touched.gender
                              ? "border-[red]"
                              : "border-[#53352d80]"
                          }`}
                          name="gender"
                          value="male"
                          checked={values.gender === "male"}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <div className="">Male</div>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-row ">
                        <div className="flex justify-between items-center pl-[16px] pr-[51px] w-[154px] h-[64px] border rounded">
                          <input
                            type="radio"
                            className={`w-[22px] h-[22px] ${
                              errors.gender && touched.gender
                                ? "border-[red]"
                                : "border-[#53352d80]"
                            }`}
                            name="gender"
                            value="female"
                            checked={values.gender === "female"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <div className="">Female</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {errors.gender && touched.gender && (
                    <p className="text-[red] mr-10">{errors.gender}</p>
                  )}
                </div>

                <div className="mt-[63px] ">
                  <button
                    // disabled={isSubmitting}
                    type="submit"
                    className="bg-[#0C3C4C] w-[252px] h-[67px] rounded mb-[25px] text-white text-[16px]"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default profile;
