const handleDeleteContact = async (contactId) => {
  try {
    const apiUrl =
      process.env.NEXT_PUBLIC_ENV === "production"
        ? "https://outreacher.vercel.app/api"
        : "http://localhost:3000/api";

    const response = await fetch(`${apiUrl}/contacts/${contactId}`, {
      method: "DELETE",
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default handleDeleteContact;
