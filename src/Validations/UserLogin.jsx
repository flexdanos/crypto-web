import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'Invalid email address').required("Please enter email"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(15, "Password must be 15 characters or less")
    .required("Password is required")
});
