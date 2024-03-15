import * as yup from "yup";

const emailRegexp = /^[a-z0-9._-]+@[a-z0-9.-]+.[a-z]{2,4}$/;

export const logInSchema = yup.object().shape({
  email: yup
    .string()
    .required("Field is required")
    .matches(emailRegexp, "Enter a correct email"),
  password: yup
    .string()
    .required("Field is required")
    .min(8, "Minimum 8 characters")
    .max(64, "Maximum 64 characters"),
});

export const forgotPassSchema = yup.object().shape({
  email: yup
    .string()
    .required("Field is required")
    .matches(emailRegexp, "Enter a correct email"),
});

export const resetPassSchema = yup.object().shape({
  password: yup
    .string()
    .required("Field is required")
    .min(8, "Minimum 8 characters")
    .max(64, "Maximum 64 characters"),
  passwordReset: yup
    .string()
    .required("Confirm your password")
    .oneOf([yup.ref("newPassword"), null], "Passwords do not match"),
});
