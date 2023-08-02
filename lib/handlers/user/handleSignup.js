import { userSchema } from "@/validations/userValidation";

const handleSignup = async (
  firstName,
  email,
  password,
  confirmPassword,
  setError
) => {
  try {
    const apiUrl =
      process.env.NEXT_PUBLIC_ENV === "production"
        ? "https://outreacher.app/api"
        : "http://localhost:3000/api";

    if (password !== confirmPassword) {
      setError("The provided passwords do not match");
      return { success: false, error: "Passwords do not match" };
    }

    await userSchema.validate({ firstName, email, password });

    const response = await fetch(`${apiUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return { ok: true, data };
    } else {
      setError(data);
      return { ok: false, error: data };
    }
  } catch (error) {
    setError(error.message);
    return { ok: false, error: error.message };
  }
};

export default handleSignup;
