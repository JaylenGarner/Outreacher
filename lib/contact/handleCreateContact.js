import { contactSchema } from "@/validations/contactValidation";

const handleCreateContact = async (formData, setError) => {
  const formDataObj = {
    userId: formData.userId,
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

  const response = await fetch("http://localhost:3000/api/contacts", {
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
