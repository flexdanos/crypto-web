import * as yup from "yup";

export const userSchema = yup.object().shape({
  firstName:yup.string().required("firstName is required"),
  lastName:yup.string().required("lastName is required"),
  email: yup.string().email('Invalid email').matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'Invalid email address').required("Please enter email"),
  password: yup
    .string()
    .min(6, "Password must be at least 5 characters")
    .max(15, "Password must be 12 characters or less")
    .required("Password is required"),
    confirmPassword:yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Passwords must match")
});
