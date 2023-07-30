import * as yup from "yup";

const outreachStages = [
  "Initial Outreach",
  "Follow Up",
  "Final Follow Up",
  "Correspondence",
];

export const contactSchema = yup.object().shape({
  name: yup.string().max(30, "Name must be less than 30 characters").required(),
  title: yup
    .string()
    .max(50, "Title must be less than 50 characters")
    .required(),
  email: yup.string().max(50, "Email must be less than 50 characters"),
  linkedIn: yup
    .string()
    .max(2048, "LinkedIn URL must be less than 2048 characters"),
  notes: yup.string().max(2000, "Notes must be less than 2000 characters"),
  outreachStage: yup.string().oneOf(outreachStages),
  outreachDate: yup.date().required(),
  nextActionDate: yup.date(),
});
