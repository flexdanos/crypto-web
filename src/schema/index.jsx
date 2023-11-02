import * as yup from "yup";

export const basicSchema = yup.object().shape({
  firstName: yup.string().required("Please enter first name"),
  lastName: yup.string().required("Please enter last name"),
  email: yup.string().email().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'Invalid email address').required("Please enter email"),
  phoneNumber: yup.number(),
  gender: yup.string().required("Please select your gender"),
  image: yup.string(),
});

export const passswordSchema = yup.object().shape({
  currentPassword: yup
    .string()
    .min(6, "Password must match current password")
    .required("Incorrect password. Try again !"),
  newPassword: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Enter new password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "Passwords must match")
    .required("Passwords must match"),
});

export const assetSchema = yup.object().shape({
  assetName: yup.string().required("This field is required"),
  symbol: yup.string().required("This field is required"),
  quantity: yup
    .number()
    .positive()
    .integer()
    .required("This field is required"),
  purchasePrice: yup
    .number()
    .positive()
    .integer()
    .required("This field is required"),
});
