const handleCreateApplication = async (formData, setError) => {
  const {
    userId,
    company,
    position,
    posting,
    salary,
    location,
    notes,
    status,
  } = formData;

  const response = await fetch("http://localhost:3000/api/applications/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      company,
      position,
      posting,
      salary,
      location,
      notes,
      status,
    }),
  });

  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    setError(data);
  }
};

export default handleCreateApplication;
