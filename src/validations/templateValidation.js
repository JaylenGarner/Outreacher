import * as yup from "yup";

export const templateSchema = yup.object().shape({
  name: yup
    .string()
    .max(50, "Template name must be less than 50 characters")
    .required("Template name is required"),
  body: yup
    .string()
    .max(2000, "Body must be less than 2000 characters")
    .required("Template body is required"),
});
