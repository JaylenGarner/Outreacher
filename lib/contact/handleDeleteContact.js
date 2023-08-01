const handleDeleteContact = async (contactId) => {
  try {
    const response = await fetch(
      `https://outreacher.vercel.app/api/contacts/${contactId}`,
      {
        method: "DELETE",
      }
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default handleDeleteContact;
