const handleDeleteApplication = async (applicationId) => {
  try {
    const response = await fetch(
      `https://outreacher.vercel.app/api/applications/${applicationId}`,
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
