const handleEditContact = async (formData, contactId) => {
  const {
    userId,
    name,
    title,
    email,
    linkedIn,
    outreachStage,
    outreachDate,
    notes,
  } = formData;

  const response = await fetch(
    `http://localhost:3000/api/contacts/${contactId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        title,
        email,
        linkedIn,
        outreachStage,
        outreachDate,
        notes,
      }),
    }
  );

  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    setError(data);
  }
};

export default handleEditContact;
