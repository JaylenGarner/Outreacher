import * as yup from "yup";

const statuses = [
  "Queue",
  "Applied",
  "Interview",
  "No Response",
  "Rejected",
  "Offer",
  "Hired",
];

export const applicationSchema = yup.object().shape({
  company: yup
    .string()
    .max(30, "Company name must be less than 30 characters")
    .required("Company name is required"),
  position: yup
    .string()
    .max(50, "Position must be less than 50 characters")
    .required("Position is required"),
  salary: yup.string().max(50, "Salary must be less than 50 characters"),
  location: yup.string().max(200, "Location must be less than 200 characters"),
  notes: yup.string().max(2000, "Notes must be less than 2000 characters"),
  status: yup.string().oneOf(statuses),
});
