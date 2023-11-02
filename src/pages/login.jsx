import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import icon from "../assets/CryptoMart.svg";
import { Input } from "../component";
import { loginUser,  } from "../features/user/userSlice";
import { loginSchema } from "../Validations/UserLogin";

const login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user,isLoading } = useSelector((store) => store.user);
  const onSubmit = (values, actions) => {
    dispatch(loginUser(values));
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    }
  }, [user]);

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <div className="w-full flex justify-center items-center ">
      <div className="">
        <img src={icon} alt="" className="ml-[200px]" />
        <div className="shadow w-[626px] flex flex-col justify-center items-center pt-[48px] pb-[55px] text-[#101828]">
          <div className="">
            <div className=" flex flex-col justify-center items-center ">
              <h1 className="font-bold text-[rgba(12,60,76,0.81)] text-[26px] mb-[35.22px] text-center">
                Login
              </h1>
              <form onSubmit={handleSubmit} autoComplete="off">
                <Input
                  label="Email Address*"
                  type="email"
                  name="email"
                  value={values.email}
                  handleChange={handleChange}
                  placeholder="Enter your email "
                  onBlur={handleBlur}
                  error={errors.email}
                  touch={touched.email}
                />
                <Input
                  label="Password*"
                  type="password"
                  name="password"
                  value={values.password}
                  handleChange={handleChange}
                  placeholder="Enter your password "
                  onBlur={handleBlur}
                  error={errors.password}
                  touch={touched.password}
                />

                <Link to="" className="text-[#0000ffb3] ml-[210px] ">
                  Forgot password?
                </Link>
                <div className="mt-[46px]  h-[42px] text-center  ">
                  <button
                    type="submit"
                    className=" h-[42px] w-[268px] rounded-lg bg-[#0c3c4cce] font-normal text-white text-[17px] mb-[16px] "
                    disabled={isLoading}
                  >
                    {isLoading ? "Submitting..." : "Login"}
                  </button>
                  <p>
                    Don’t have an account?
                    <Link to="/signUp" className="text-[#0000ffb3]">
                      SignUp
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
