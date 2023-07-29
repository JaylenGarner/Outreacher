import * as yup from "yup";

export const userSchema = yup.object().shape({
  firstName: yup
    .string()
    .max(20, "First name must be less than 20 characters")
    .required("First name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(4, "Password must be at least 4 characters")
    .max(20, "Password must be less than 20 characters")
    .required(),
});
