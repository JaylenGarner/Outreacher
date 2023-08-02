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

  const apiUrl =
    process.env.NEXT_PUBLIC_ENV === "production"
      ? "https://outreacher.vercel.app/api"
      : "http://localhost:3000/api";

  const response = await fetch(`${apiUrl}/applications`, {
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
