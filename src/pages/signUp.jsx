import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import icon from "../assets/CryptoMart.svg";
import { Input } from "../component";
import { registerUser } from "../features/user/userSlice";
import { userSchema } from "../Validations/UserValidation";
import { useNavigate } from "react-router-dom";

const signUp = () => {
  const navigate = useNavigate();
  const { done } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const onSubmit = (values, actions) => {
    dispatch(registerUser(values));
  };

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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: userSchema,
    onSubmit,
  });
  

  useEffect(() => {
    if (done) {
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  }, [done]);

  return (
    <div className="w-full flex justify-center items-center ">
      <div className="">
        <img src={icon} alt="" className="ml-[200px]" />
        <div className="shadow w-[626px] flex flex-col justify-center items-center pt-[4px] pb-[55px] text-[#101828]">
          <div className="">
            <h2 className="text-[34px] font-normal mb-[15px] text-center">
              Create Your Account{" "}
            </h2>
            <p className="mb-[20px] text-[21.52px] text-center">
              Get Started For Free By Signing Up Now.
            </p>
            <div className=" flex flex-col justify-center items-center">
              <h1 className="font-bold text-[rgba(12,60,76,0.81)] text-[22px] mb-[35.22px] text-center">
                SIGN UP
              </h1>

              <form onSubmit={handleSubmit} autoComplete="off">
                <Input
                  label="First Name*"
                  type="firstName"
                  name="firstName"
                  value={values.firstName}
                  handleChange={handleChange}
                  placeholder="Enter your firstName "
                  onBlur={handleBlur}
                  error={errors.firstName}
                  touch={touched.firstName}
                />
                <Input
                  label="Last Name*"
                  type="lastName"
                  name="lastName"
                  value={values.lastName}
                  handleChange={handleChange}
                  placeholder="Enter your lastName "
                  onBlur={handleBlur}
                  error={errors.lastName}
                  touch={touched.lastName}
                />
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
                <Input
                  label="Confirm Password*"
                  type="Password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  handleChange={handleChange}
                  placeholder="Repeat password "
                  onBlur={handleBlur}
                  error={errors.confirmPassword}
                  touch={touched.confirmPassword}
                />

                <div className="mt-[46px]  h-[42px] text-center  ">
                  <button
                    type="submit"
                    className=" h-[42px] w-[268px] rounded-lg bg-[#0c3c4cce] font-normal text-white text-[17px] mb-[16px]"
                    disabled={done}
                  >
                    {done ? "Submitting..." : "Sign Up"}
                  </button>
                  <p>
                    Already have an account?
                    <Link to="/login" className="text-[#0000ffb3]">
                      LogIn
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

export default signUp;
