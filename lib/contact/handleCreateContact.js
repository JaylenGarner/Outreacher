const handleCreateContact = async (formData, setError) => {
  const {
    userId,
    applicationId,
    name,
    title,
    email,
    linkedIn,
    notes,
    outreachStage,
    outreachDate,
  } = formData;

  const response = await fetch("http://localhost:3000/api/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      applicationId,
      name,
      title,
      email,
      linkedIn,
      notes,
      outreachStage,
      outreachDate,
    }),
  });

  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    setError(data);
  }
};

export default handleCreateContact;
