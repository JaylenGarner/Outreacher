// import { applicationSchema } from "@/validations/applicationValidation";

const handleEditTemplate = async (formData, templateId, setError) => {
  const formDataObj = {
    name: formData.name,
    body: formData.body,
  };

  try {
    // await applicationSchema.validate(formDataObj);
  } catch (error) {
    setError(error.message);
    return;
  }

  const apiUrl =
    process.env.NEXT_PUBLIC_ENV === "production"
      ? "https://outreacher.app/api"
      : "http://localhost:3000/api";

  const response = await fetch(`${apiUrl}/templates/${templateId}`, {
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

export default handleEditTemplate;
