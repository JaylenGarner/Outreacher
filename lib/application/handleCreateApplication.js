import { applicationSchema } from "@/validations/applicationValidation";

const handleCreateApplication = async (formData, setError) => {
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

  const response = await fetch("https://outreacher.vercel.app/api/applications", {
    method: "POST",
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

export default handleCreateApplication;
