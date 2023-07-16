const handleSignup = async (
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  setError,
  router
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
        lastName,
        email,
        password: password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      router.push("/auth/login");
    } else {
      setError(data);
    }
  } catch (error) {
    console.log(error);
  }
};

export default handleSignup;
