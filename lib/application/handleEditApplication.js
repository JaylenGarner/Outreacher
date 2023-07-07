const handleEditApplication = async (formData, applicationId) => {
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

  console.log("form data in route", formData);

  const response = await fetch(
    `http://localhost:3000/api/applications/${applicationId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company,
        position,
        posting,
        salary,
        location,
        notes,
        status,
        // updatedAt: new Date(),
      }),
    }
  );

  console.log("response", response);

  const data = await response.json();

  console.log("data", data);

  if (response.ok) {
    return data;
  } else {
    setError(data);
  }
};

export default handleEditApplication;
