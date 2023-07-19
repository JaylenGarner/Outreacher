const handleSignup = async (
  firstName,
  email,
  password,
  confirmPassword,
  setError
) => {
  if (password !== confirmPassword) {
    setError("The provided passwords do not match");
    return;
  }

  try {
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        email,
        password: password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return response;
    } else {
      setError(data);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export default handleSignup;
