import { applicationSchema } from "@/validations/applicationValidation";

const handleEditApplication = async (formData, applicationId, setError) => {
  const formDataObj = {
    company: formData.company,
    position: formData.position,
    posting: formData.posting,
    salary: formData.salary,
    location: formData.location,
    notes: formData.notes,
    status: formData.status,
  };

  try {
    await applicationSchema.validate(formDataObj);
  } catch (error) {
    setError(error.message);
    return;
  }

  const apiUrl =
    process.env.NEXT_PUBLIC_ENV === "production"
      ? "https://outreacher.app/api"
      : "http://localhost:3000/api";

  const response = await fetch(`${apiUrl}/applications/${applicationId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formDataObj),
  });

  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    setError(data);
  }
};

export default handleEditApplication;
