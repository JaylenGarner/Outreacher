const handleEditSettings = async (formData, userId) => {
  const { tooltipsEnabled } = formData;

  const response = await fetch(`http://localhost:3000/api/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tooltipsEnabled,
    }),
  });

  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    setError(data);
  }
};

export default handleEditSettings;
