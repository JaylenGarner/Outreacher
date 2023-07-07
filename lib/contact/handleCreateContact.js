const handleCreateContact = async (formData, setError) => {
  const {
    applicationId,
    name,
    title,
    email,
    number,
    linkedIn,
    notes,
    outreachStage,
    outreachDate,
  } = formData;

  console.log("Application ID in thunk", applicationId);
  console.log(formData);

  const response = await fetch("http://localhost:3000/api/contacts/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      applicationId,
      name,
      title,
      email,
      number,
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
