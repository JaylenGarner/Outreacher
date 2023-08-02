import { contactSchema } from "@/validations/contactValidation";

const handleCreateContact = async (formData, setError) => {
  const formDataObj = {
    applicationId: formData.applicationId,
    name: formData.name,
    title: formData.title,
    email: formData.email,
    linkedIn: formData.linkedIn,
    notes: formData.notes,
    outreachStage: formData.outreachStage,
    outreachDate: formData.outreachDate,
  };

  try {
    await contactSchema.validate(formDataObj);
  } catch (error) {
    setError(error.message);
    return;
  }

  const apiUrl =
    process.env.NEXT_PUBLIC_ENV === "production"
      ? "https://outreacher.app/api"
      : "http://localhost:3000/api";

  const response = await fetch(`${apiUrl}/contacts`, {
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

export default handleCreateContact;
