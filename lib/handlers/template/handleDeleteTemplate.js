const handleDeleteTemplate = async (templateId) => {
  try {
    const apiUrl =
      process.env.NEXT_PUBLIC_ENV === "production"
        ? "https://outreacher.app/api"
        : "http://localhost:3000/api";

    const response = await fetch(`${apiUrl}/templates/${templateId}`, {
      method: "DELETE",
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default handleDeleteTemplate;
