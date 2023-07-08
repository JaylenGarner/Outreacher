const handleDeleteApplication = async (applicationId) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/applications/${applicationId}`,
      {
        method: "DELETE",
      }
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default handleDeleteApplication;
