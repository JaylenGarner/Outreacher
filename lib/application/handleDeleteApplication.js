const handleDeleteApplication = async (applicationId) => {
  try {
    console.log("initiated delete");

    const response = await fetch(
      `http://localhost:3000/api/applications/${applicationId}`,
      {
        method: "DELETE",
      }
    );

    console.log("after delete, no response yet");

    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default handleDeleteApplication;
